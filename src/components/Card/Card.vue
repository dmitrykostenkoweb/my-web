<template>
  <kinesis-container class="main-card__wrapper">
    <kinesis-element :strength="3" type="depth">
      <v-card elevation="6" class="main-card">
        <card-header @tab="setSelectedTab" />
        <div class="main-card__slot">
          <slot />
        </div>
      </v-card>
    </kinesis-element>
  </kinesis-container>
</template>
<script setup lang="ts">
import { KinesisContainer, KinesisElement } from "vue-kinesis";
import CardHeader from "@/components/CardHeader/CardHeader.vue";
import { TabValues } from "@/components/CardHeader/CardHeader.model";

interface HeaderEmits {
  (event: "tab", value: TabValues): void;
}

const emit = defineEmits<HeaderEmits>();

const setSelectedTab = (payload: TabValues): void => emit("tab", payload);
</script>
<style lang="scss" scoped>
.main-card {
  width: 90vw;
  height: 90vh;

  background: #ffffff33;
  border-radius: 16px;
  box-shadow: var(--base-shadow);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
}
</style>
