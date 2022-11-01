<template>
  <kinesis-container class="main-card__wrapper">
    <kinesis-element :strength="2" type="depth">
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
import { computed } from "vue";
import { useDisplay } from "vuetify";
import { KinesisContainer, KinesisElement } from "vue-kinesis";
import CardHeader from "@/components/CardHeader/CardHeader.vue";
import { TabValues } from "@/components/CardHeader/CardHeader.model";

interface HeaderEmits {
  (event: "tab", value: TabValues): void;
}

const emit = defineEmits<HeaderEmits>();
const { name } = useDisplay();

const setSelectedTab = (payload: TabValues): void => emit("tab", payload);

const generateResponsiveStyle = computed((): { size: number } => {
  switch (name.value) {
    case "xs":
      return {
        size: 95,
      };
    case "sm":
      return {
        size: 90,
      };
    case "md":
      return {
        size: 85,
      };
    case "lg":
      return {
        size: 80,
      };
    case "xl":
      return {
        size: 70,
      };
    case "xxl":
      return {
        size: 70,
      };
  }
});

const generateWidth = computed(
  (): string => `${generateResponsiveStyle.value.size}vw`
);
</script>
<style lang="scss" scoped>
.main-card {
  width: v-bind(generateWidth);
  min-height: 800px;

  background: #ffffff33;
  border-radius: 16px;
  box-shadow: var(--base-shadow);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
}
</style>
