<template>
  <v-app-bar elevation="0" color="transparent" absolute class="card-header">
    <v-tabs v-model="tab" elevation="0" color="transparent">
      <v-tab :value="TabValues.ABOUT"
        >About
        <img
          v-show="tab !== TabValues.ABOUT"
          :src="explorer"
          alt="explorer"
          class="card-header__icon"
        />
      </v-tab>
      <v-tab :value="TabValues.CONTACT"
        >Contact
        <img
          v-show="tab !== TabValues.CONTACT"
          :src="chat"
          alt="chat"
          class="card-header__icon"
        />
      </v-tab>
    </v-tabs>

    <v-spacer />

    <toggle-theme-button />
  </v-app-bar>
</template>
<script setup lang="ts">
import { ref, watch } from "vue";

import ToggleThemeButton from "./ToggleThemeButton";

import { TabValues } from "./CardHeader.model";

import chat from "@/assets/images/chat.png";
import explorer from "@/assets/images/explorer.png";

interface HeaderEmits {
  (event: "tab", value: TabValues): void;
}

const emit = defineEmits<HeaderEmits>();

const tab = ref<TabValues>(TabValues.ABOUT);

watch(
  (): TabValues => tab.value,

  (value): void => emit("tab", value)
);
</script>
<style lang="scss" scoped>
.card-header {
  &__icon {
    width: 40px;
    filter: drop-shadow(2px 2px 8px black);
  }
}
</style>
