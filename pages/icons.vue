<template>
  <div class="grid grid-cols-4 gap-4">
    <div v-for="value in values" :key="value" class="flex items-center">
      <font-awesome-icon
        :icon="parseIcon(value)"
        class="h-4 w-4 text-gray-500"
        style="color: green"
      />
      <span class="ml-2">{{ value }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

definePageMeta({
  layout: "default",
});

export default defineComponent({
  name: "Icons",

  methods: {
    parseIcon(iconString: string): [string, string] {
      // Remove the quotes and array brackets, then split by comma
      const cleaned = iconString.replace(/[\[\]']/g, "").split(",");
      return [cleaned[0].trim(), cleaned[1].trim()];
    },
  },

  data() {
    return {
      values: [
        `['fa', 'exclamation-triangle']`,
        `['fa', 'info-circle']`,
        `['fa', 'question-circle']`,
        `['fa', 'trash-alt']`,
        `['fab', 'whatsapp']`,
        `['far', 'calendar-check']`,
        `['far', 'file-pdf']`,
        `['fas', 'arrow-left']`,
        `['fas', 'arrow-right']`,
        `['fas', 'check-circle']`,
        `['fas', 'chevron-right']`,
        `['fas', 'download']`,
        `['fas', 'file-excel']`,
        `['fas', 'h-square']`,
        `['fas', 'info-circle']`,
        `['fas', 'lightbulb']`,
        `['fas', 'rectangle-xmark']`,
        `['fas', 'shipping-fast']`,
        `['fa', 'check']`,
        `['fa', 'check']`,
        `['fa', 'download']`,
        `['fa', 'edit']`,
        `['fa', 'times']`,
        `['fab', 'windows']`,
        `['far', 'bell']`,
        `['far', 'eye']`,
        `['fas', 'bars']`,
        `['fas', 'bars']`,
        `['fas', 'check']`,
        `['fas', 'chevron-left']`,
        `['fas', 'clock']`,
        `['fas', 'delete']`,
        `['fas', 'eye']`,
        `['fas', 'file']`,
        `['fas', 'gift']`,
        `['fas', 'pen']`,
        `['fas', 'percent']`,
        `['fas', 'plus']`,
        `['fas', 'print']`,
        `['fas', 'redo']`,
        `['fas', 'sync']`,
        `['fas', 'trash']`,
        `['fas', 'truck']`,
        `['fas', 'upload']`,
      ],
    };
  },
});
</script>
