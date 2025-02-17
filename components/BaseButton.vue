<template>
  <button
    :class="[
      'base-button',
      `variant-${variant}`,
      `color-${color}`,
      size,
      { 'is-loading': loading, 'is-disabled': disabled },
      customClass,
    ]"
    :style="customStyle"
    :disabled="disabled || loading"
    @click="$emit('click')"
  >
    <span v-if="loading" class="loader"></span>
    <template v-else>
      <slot name="prefix"></slot>
      <slot></slot>
      <slot name="suffix"></slot>
    </template>
  </button>
</template>

<script setup>
defineProps({
  variant: {
    type: String,
    default: "contained",
    validator: (value) => ["text", "contained", "outlined"].includes(value),
  },
  color: {
    type: String,
    default: "primary",
    validator: (value) =>
      ["primary", "secondary", "error", "success"].includes(value),
  },
  size: {
    type: String,
    default: "medium",
    validator: (value) => ["small", "medium", "large"].includes(value),
  },
  loading: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  customClass: {
    type: [String, Object, Array],
    default: "",
  },
  customStyle: {
    type: [String, Object],
    default: "",
  },
});

defineEmits(["click"]);
</script>

<style scoped>
.base-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  outline: none;
  gap: 6px;
}

/* Variants */
.variant-contained {
  border: 1px solid transparent;
}

.variant-outlined {
  background-color: transparent;
  border: 1px solid currentColor;
}

.variant-text {
  background-color: transparent;
  border: none;
}

/* Colors */
.color-primary {
  --color: #0d6efd;
  --hover: #0b5ed7;
}

.color-secondary {
  --color: #6c757d;
  --hover: #5c636a;
}

.color-error {
  --color: #dc3545;
  --hover: #bb2d3b;
}

.color-success {
  --color: #198754;
  --hover: #157347;
}

/* Variant + Color combinations */
.variant-contained {
  background-color: var(--color);
  color: white;
}

.variant-contained:hover {
  background-color: var(--hover);
}

.variant-outlined {
  color: var(--color);
}

.variant-outlined:hover {
  background-color: rgba(var(--color), 0.04);
}

.variant-text {
  color: var(--color);
}

.variant-text:hover {
  background-color: rgba(var(--color), 0.04);
}

/* Sizes */
.small {
  padding: 4px 8px;
  font-size: 12px;
}

.medium {
  padding: 6px 12px;
  font-size: 14px;
}

.large {
  padding: 8px 16px;
  font-size: 16px;
}

.is-loading {
  cursor: wait;
  opacity: 0.7;
}

.is-disabled {
  cursor: not-allowed;
  opacity: 0.6;
}

.loader {
  width: 16px;
  height: 16px;
  border: 2px solid #f3f3f3;
  border-top: 2px solid currentColor;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
