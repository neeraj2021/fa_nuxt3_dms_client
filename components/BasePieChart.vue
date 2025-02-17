<template>
  <div class="pie-chart-wrapper" :style="wrapperStyle">
    <div class="chart-container" :class="{ 'is-loading': loading }">
      <svg :width="size" :height="size" viewBox="0 0 100 100">
        <!-- Background circle -->
        <circle
          cx="50"
          cy="50"
          :r="radius"
          fill="none"
          :stroke="loading ? 'none' : bgColor"
          :stroke-width="thickness"
          class="base-circle"
        />

        <!-- Shimmer circle (only visible when loading) -->
        <circle
          v-if="loading"
          cx="50"
          cy="50"
          :r="radius"
          fill="none"
          stroke="url(#shimmer)"
          :stroke-width="thickness"
          class="shimmer-circle"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 50 50"
            to="360 50 50"
            dur="10s"
            repeatCount="indefinite"
          />
        </circle>

        <!-- Data segments (hidden during loading) -->
        <circle
          v-if="!loading"
          v-for="(segment, index) in segments"
          :key="index"
          cx="50"
          cy="50"
          :r="radius"
          fill="none"
          :stroke="segment.color"
          :stroke-width="thickness"
          :stroke-dasharray="`${segment.length} ${totalLength}`"
          :stroke-dashoffset="segment.offset"
          class="segment"
        />

        <!-- Updated shimmer gradient -->
        <defs>
          <linearGradient id="shimmer">
            <stop offset="0%" stop-color="#f3f4f6">
              <animate
                attributeName="offset"
                values="-2; 1"
                dur="2s"
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="50%" stop-color="#e5e7eb">
              <animate
                attributeName="offset"
                values="-1.5; 1.5"
                dur="2s"
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="100%" stop-color="#f3f4f6">
              <animate
                attributeName="offset"
                values="-1; 2"
                dur="2s"
                repeatCount="indefinite"
              />
            </stop>
          </linearGradient>
        </defs>
      </svg>
    </div>
    <div v-if="showLegend && !loading" class="legend">
      <div v-for="(item, index) in data" :key="index" class="legend-item">
        <span class="color-dot" :style="{ backgroundColor: item.color }"></span>
        <span class="label">{{ item.label }}: {{ item.value }}%</span>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  data: {
    type: Array,
    required: true,
    validator: (value) =>
      value.every(
        (item) =>
          item.value !== undefined &&
          item.color !== undefined &&
          item.label !== undefined
      ),
  },
  size: {
    type: Number,
    default: 200,
  },
  thickness: {
    type: Number,
    default: 20,
  },
  bgColor: {
    type: String,
    default: "#f1f5f9",
  },
  showLegend: {
    type: Boolean,
    default: true,
  },
  loading: {
    type: Boolean,
    default: false,
  },
});

const radius = computed(() => 50 - props.thickness / 2);
const totalLength = computed(() => 2 * Math.PI * radius.value);

const segments = computed(() => {
  let currentOffset = 25; // Start from 12 o'clock position
  const total = props.data.reduce((sum, item) => sum + item.value, 0);

  return props.data.map((item) => {
    const length = (item.value / total) * totalLength.value;
    const segment = {
      color: item.color,
      length,
      offset: -currentOffset,
    };
    currentOffset += length;
    return segment;
  });
});

const wrapperStyle = computed(() => ({
  width: `${props.size}px`,
  height: props.showLegend ? "auto" : `${props.size}px`,
}));
</script>

<style scoped>
.pie-chart-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.segment {
  transition: stroke-dashoffset 0.5s ease-out;
}

.legend {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
}

.legend-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.color-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

.label {
  font-size: 0.875rem;
  color: #4b5563;
}

.chart-container {
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
}

.is-loading .segment {
  opacity: 0;
  transition: opacity 0.3s ease;
}

.base-circle {
  transition: stroke 0.3s ease;
}

/* Remove the old rotation animation */
@keyframes rotate {
  from {
    transform-origin: center;
    transform: rotate(0deg);
  }
  to {
    transform-origin: center;
    transform: rotate(360deg);
  }
}

/* Remove this class as we're using SVG animation now */
/* .shimmer-circle {
  animation: rotate 10s linear infinite;
} */
</style>
