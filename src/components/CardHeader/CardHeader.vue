<template>
  <v-app-bar elevation="0" color="transparent" absolute>
    <v-tabs v-model="currentTab" elevation="0" color="transparent">
      <v-tab
        v-for="tab in tabs"
        :key="tab.id"
        :to="tab.route"
        :value="tab.value"
        :style="{
          fontSize: changeFontSize ? '16px' : '12px',
          padding: changeFontSize ? '' : '0',
        }"
        exact
        >{{ tab.name }}
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

const currentTab = ref<TabValues>(TabValues.UNKNOWN);

const tabs = computed(() => [
  { id: 1, name: "About", route: "/about", value: TabValues.ABOUT },
  { id: 2, name: "Contact", route: "/contact", value: TabValues.CONTACT },
]);

const changeFontSize = computed((): boolean => !xs.value);

const emit = defineEmits<HeaderEmits>();

watch(
  (): TabValues => currentTab.value,

  (value): void => emit("tab", value)
);
</script>
