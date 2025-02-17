<template>
  <div class="toggle-wrapper">
    <label
      class="toggle-container"
      :class="[size, { 'is-disabled': disabled }]"
    >
      <input
        type="checkbox"
        :checked="modelValue"
        :disabled="disabled"
        @change="$emit('update:modelValue', $event.target.checked)"
      />
      <span
        class="toggle-switch"
        :class="[`color-${color}`, customClass]"
        :style="customStyle"
      ></span>
      <span v-if="label" class="toggle-label">{{ label }}</span>
    </label>
  </div>
</template>

<script setup>
defineProps({
  modelValue: {
    type: Boolean,
    required: true,
  },
  label: {
    type: String,
    default: "",
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

defineEmits(["update:modelValue"]);
</script>

<style scoped>
.toggle-wrapper {
  display: inline-block;
}

.toggle-container {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
}

.toggle-container input {
  display: none;
}

.toggle-switch {
  position: relative;
  display: inline-block;
  width: 48px; /* increased from 40px */
  height: 24px;
  background-color: #ccc;
  border-radius: 12px;
  transition: all 0.3s;
}

.toggle-switch::after {
  content: "";
  position: absolute;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background-color: white;
  top: 3px;
  left: 3px;
  transition: all 0.3s;
}

input:checked + .toggle-switch::after {
  transform: translateX(24px); /* increased from 16px */
}

/* Colors - Update these color styles */
.toggle-container input:checked + .toggle-switch.color-primary {
  background-color: #0d6efd;
}

.toggle-container input:checked + .toggle-switch.color-secondary {
  background-color: #6c757d;
}

.toggle-container input:checked + .toggle-switch.color-error {
  background-color: #dc3545;
}

.toggle-container input:checked + .toggle-switch.color-success {
  background-color: #198754;
}

/* Remove or comment out the old color styles */
/* .color-primary:where(input:checked + *) {
  background-color: #0d6efd;
}

.color-secondary:where(input:checked + *) {
  background-color: #6c757d;
}

.color-error:where(input:checked + *) {
  background-color: #dc3545;
}

.color-success:where(input:checked + *) {
  background-color: #198754;
} */

/* Sizes */
.small .toggle-switch {
  width: 40px; /* increased from 32px */
  height: 18px;
}

.small .toggle-switch::after {
  width: 14px;
  height: 14px;
  top: 2px;
}

.small input:checked + .toggle-switch::after {
  transform: translateX(22px); /* increased from 14px */
}

.large .toggle-switch {
  width: 56px; /* increased from 48px */
  height: 28px;
}

.large .toggle-switch::after {
  width: 22px;
  height: 22px;
  top: 3px;
}

.large input:checked + .toggle-switch::after {
  transform: translateX(28px); /* increased from 20px */
}

/* Disabled state */
.is-disabled {
  cursor: not-allowed;
  opacity: 0.6;
}

.toggle-label {
  font-size: 14px;
  color: #374151;
}
</style>
