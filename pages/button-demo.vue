<template>
  <div class="demo-container">
    <h1 class="demo-title">Button Component</h1>

    <section class="demo-section">
      <h2 class="demo-section-title"><span>🎨</span> Button Variants</h2>
      <p class="demo-description">
        Different button variants to suit your needs
      </p>
      <div class="demo-group">
        <BaseButton variant="contained" color="primary" @click="handleClick"
          >Contained Button</BaseButton
        >
        <BaseButton variant="outlined" color="primary"
          >Outlined Button</BaseButton
        >
        <BaseButton variant="text" color="primary">Text Button</BaseButton>
      </div>
    </section>

    <section class="demo-section">
      <h2 class="demo-section-title"><span>🎨</span> Button Colors</h2>
      <p class="demo-description">Different button colors to suit your needs</p>
      <div class="demo-group">
        <BaseButton variant="contained" color="primary">Primary</BaseButton>
        <BaseButton variant="contained" color="secondary">Secondary</BaseButton>
        <BaseButton variant="contained" color="error">Error</BaseButton>
        <BaseButton variant="contained" color="success">Success</BaseButton>
      </div>
    </section>

    <section class="demo-section">
      <h2 class="demo-section-title"><span>🎨</span> Button Variants</h2>
      <p class="demo-description">
        Different button variants to suit your needs
      </p>
      <div class="demo-group">
        <BaseButton variant="primary" @click="handleClick"
          >Primary Button</BaseButton
        >
        <BaseButton variant="secondary" @click="handleClick"
          >Secondary Button</BaseButton
        >
        <BaseButton variant="danger" @click="handleClick"
          >Danger Button</BaseButton
        >
        <BaseButton variant="success" @click="handleClick"
          >Success Button</BaseButton
        >
      </div>
    </section>

    <section class="demo-section">
      <h2 class="demo-section-title"><span>🎨</span> Button Sizes</h2>
      <p class="demo-description">Different button sizes to suit your needs</p>
      <div class="demo-group">
        <BaseButton size="small">Small Button</BaseButton>
        <BaseButton size="medium">Medium Button</BaseButton>
        <BaseButton size="large">Large Button</BaseButton>
      </div>
    </section>

    <section class="demo-section">
      <h2 class="demo-section-title"><span>🎨</span> Button States</h2>
      <p class="demo-description">Different button states to suit your needs</p>
      <div class="demo-group">
        <BaseButton :loading="isLoading" @click="toggleLoading">
          {{ isLoading ? "Loading..." : "Click to Load" }}
        </BaseButton>
        <BaseButton disabled>Disabled Button</BaseButton>
      </div>
    </section>

    <section class="demo-section">
      <h2 class="demo-section-title">
        <span>🎨</span> Buttons with Prefix and Suffix
      </h2>
      <p class="demo-description">Buttons with prefix and suffix icons</p>
      <div class="demo-group">
        <BaseButton>
          <template #prefix>👋</template>
          Welcome
        </BaseButton>

        <BaseButton variant="success">
          Save
          <template #suffix>💾</template>
        </BaseButton>

        <BaseButton variant="primary">
          <template #prefix>⬅️</template>
          Back
        </BaseButton>

        <BaseButton variant="secondary">
          <template #prefix>🔍</template>
          Search
          <template #suffix>...</template>
        </BaseButton>
      </div>
    </section>

    <section class="demo-section">
      <h2 class="demo-section-title"><span>🎨</span> PDF Download Button</h2>
      <p class="demo-description">Button to download PDF files</p>
      <div class="demo-group">
        <BaseButton variant="secondary">
          <template #prefix>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"
              />
              <path
                d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"
              />
            </svg>
          </template>
          PDF
        </BaseButton>
      </div>
    </section>

    <section class="demo-section">
      <h2 class="demo-section-title">
        <span>🎨</span> Buttons with Custom Classes and Styles
      </h2>
      <p class="demo-description">Buttons with custom classes and styles</p>
      <div class="demo-group">
        <BaseButton
          custom-class="shadow-lg hover:shadow-xl"
          variant="contained"
          color="primary"
        >
          Custom Class Button
        </BaseButton>

        <BaseButton
          :custom-style="{
            borderRadius: '25px',
            backgroundColor: '#FF6B6B',
            color: 'white',
          }"
        >
          Custom Style Button
        </BaseButton>

        <BaseButton
          custom-class="rounded-full border-2"
          :custom-style="{ borderColor: '#4CAF50' }"
          variant="outlined"
        >
          Combined Custom
        </BaseButton>
      </div>
    </section>
  </div>
</template>

<script setup>
const isLoading = ref(false);

const handleClick = () => {
  alert("Button clicked!");
};

const toggleLoading = () => {
  isLoading.value = true;
  setTimeout(() => {
    isLoading.value = false;
  }, 2000);
};
</script>

<style>
@import "@/assets/demo.css";
</style>
