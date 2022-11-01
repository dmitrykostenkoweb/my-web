<template>
  <v-app-bar elevation="0" color="transparent" absolute>
    <v-tabs v-model="tab" elevation="0" color="transparent">
      <v-tab
        :style="{
          fontSize: changeFontSize ? '16px' : '12px',
          padding: changeFontSize ? '' : '0',
        }"
        :value="TabValues.ABOUT"
        >About
      </v-tab>
      <v-tab
        :value="TabValues.CONTACT"
        :style="{
          fontSize: changeFontSize ? '16px' : '12px',
          padding: changeFontSize ? '' : '0',
        }"
        >Contact
      </v-tab>
    </v-tabs>

    <v-spacer />

    <social-links />
    <toggle-theme-button />
  </v-app-bar>
</template>
<script setup lang="ts">
import { computed, ref, watch } from "vue";
import { useDisplay } from "vuetify";
import SocialLinks from "./SocialLinks";
import ToggleThemeButton from "./ToggleThemeButton";
import { TabValues } from "./CardHeader.model";

interface HeaderEmits {
  (event: "tab", value: TabValues): void;
}

const { xs } = useDisplay();

const changeFontSize = computed((): boolean => !xs.value);

const emit = defineEmits<HeaderEmits>();

const tab = ref<TabValues>(TabValues.ABOUT);

watch(
  (): TabValues => tab.value,

  (value): void => emit("tab", value)
);
</script>
