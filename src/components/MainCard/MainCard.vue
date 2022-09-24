<template>
  <kinesis-container class="main-card__wrapper">
    <kinesis-element :strength="5" type="depth">
      <v-card elevation="6" class="main-card">
        <card-header />
        <slot></slot>
      </v-card>
    </kinesis-element>
  </kinesis-container>
</template>
<script setup lang="ts">
import CardHeader from "@/components/CardHeader/CardHeader.vue";
import { KinesisContainer, KinesisElement } from "vue-kinesis";
</script>
<style lang="scss" scoped>
.main-card {
  margin: auto;

  width: 80vw;
  height: 80vh;

  background: rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);

  &__wrapper {
    z-index: var(--main-card-z-index);
  }
}
</style>
