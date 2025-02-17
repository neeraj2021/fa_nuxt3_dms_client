<template>
  <div class="demo-container">
    <h1 class="demo-title">Pie Chart Component</h1>

    <section class="demo-section">
      <h2 class="demo-section-title"><span>📊</span> Basic Pie Chart</h2>
      <p class="demo-description">Simple donut chart with percentage values</p>
      <div class="demo-group">
        <BasePieChart :data="basicData" />
      </div>
    </section>

    <section class="demo-section">
      <h2 class="demo-section-title"><span>🎨</span> Custom Styled Chart</h2>
      <p class="demo-description">Pie chart with custom size and thickness</p>
      <div class="demo-group">
        <BasePieChart
          :data="customData"
          :size="300"
          :thickness="30"
          bg-color="#e2e8f0"
        />
      </div>
    </section>

    <section class="demo-section">
      <h2 class="demo-section-title"><span>📈</span> Multiple Segments</h2>
      <p class="demo-description">Pie chart with multiple data segments</p>
      <div class="demo-group">
        <BasePieChart :data="multiData" :size="250" />
      </div>
    </section>

    <section class="demo-section">
      <h2 class="demo-section-title"><span>⌛</span> Loading State</h2>
      <p class="demo-description">Pie chart with shimmer loading effect</p>
      <div class="demo-group">
        <BasePieChart 
          :data="loadingData" 
          :loading="isLoading"
          :size="250"
        />
        <BaseButton @click="toggleLoading">
          {{ isLoading ? 'Stop Loading' : 'Start Loading' }}
        </BaseButton>
      </div>
    </section>
  </div>
</template>

<script setup>
const basicData = ref([
  { label: "Complete", value: 65, color: "#22c55e" },
  { label: "Pending", value: 35, color: "#f97316" },
]);

const customData = ref([
  { label: "Product A", value: 40, color: "#3b82f6" },
  { label: "Product B", value: 30, color: "#ec4899" },
  { label: "Product C", value: 30, color: "#8b5cf6" },
]);

const multiData = ref([
  { label: "Category 1", value: 25, color: "#06b6d4" },
  { label: "Category 2", value: 15, color: "#8b5cf6" },
  { label: "Category 3", value: 20, color: "#22c55e" },
  { label: "Category 4", value: 30, color: "#ef4444" },
  { label: "Category 5", value: 10, color: "#f59e0b" },
]);

const isLoading = ref(false);
const loadingData = ref([
  { label: "Data A", value: 40, color: "#3b82f6" },
  { label: "Data B", value: 60, color: "#22c55e" }
]);

const toggleLoading = () => {
  isLoading.value = !isLoading.value;
};
</script>

<style>
@import "@/assets/demo.css";

.demo-group {
  justify-content: center;
  padding: 2rem;
}
</style>
