<template>
  <div class="demo-container">
    <h1 class="demo-title">Toggle Component</h1>

    <section class="demo-section">
      <h2 class="demo-section-title"><span>💡</span> Basic Toggle</h2>
      <p class="demo-description">Simple toggle switch with label</p>
      <div class="demo-group">
        <BaseToggle v-model="isToggled" label="Basic Toggle" />
      </div>
    </section>

    <section class="demo-section">
      <h2 class="demo-section-title"><span>🎨</span> Toggle Colors</h2>
      <p class="demo-description">
        Different color variants for the toggle switch
      </p>
      <div class="demo-group">
        <BaseToggle
          v-model="toggleStates.primary"
          color="primary"
          label="Primary"
        />
        <BaseToggle v-model="toggleStates.error" color="error" label="Error" />
        <BaseToggle
          v-model="toggleStates.success"
          color="success"
          label="Success"
        />
        <BaseToggle
          v-model="toggleStates.secondary"
          color="secondary"
          label="Secondary"
        />
      </div>
    </section>

    <section class="demo-section">
      <h2 class="demo-section-title"><span>📏</span> Toggle Sizes</h2>
      <p class="demo-description">
        Different size variants for the toggle switch
      </p>
      <div class="demo-group">
        <BaseToggle v-model="toggleStates.small" size="small" label="Small" />
        <BaseToggle
          v-model="toggleStates.medium"
          size="medium"
          label="Medium"
        />
        <BaseToggle v-model="toggleStates.large" size="large" label="Large" />
      </div>
    </section>

    <section class="demo-section">
      <h2 class="demo-section-title"><span>🚫</span> Disabled State</h2>
      <p class="demo-description">Toggle switch in disabled state</p>
      <div class="demo-group">
        <BaseToggle
          v-model="toggleStates.disabled"
          disabled
          label="Disabled Toggle"
        />
      </div>
    </section>

    <section class="demo-section">
      <h2 class="demo-section-title"><span>🎨</span> Custom Styling</h2>
      <p class="demo-description">Toggle switch with custom styling</p>
      <div class="demo-group">
        <BaseToggle
          v-model="toggleStates.custom"
          custom-class="shadow-lg"
          :custom-style="{ borderRadius: '4px' }"
          label="Custom Styled Toggle"
        />
      </div>
    </section>
  </div>
</template>

<script setup>
const isToggled = ref(false);
const toggleStates = reactive({
  primary: true,
  secondary: false,
  error: true,
  success: false,
  small: true,
  medium: true,
  large: false,
  disabled: true,
  custom: false,
});
</script>

<style>
@import "@/assets/demo.css";
</style>
