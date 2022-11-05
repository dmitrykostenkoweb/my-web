<template>
  <v-card-text class="tabs">
    <v-window v-model="props.currentTab">
      <v-window-item :value="TabValues.ABOUT">
        <slot name="ABOUT" />
      </v-window-item>

      <v-window-item :value="TabValues.CONTACT">
        <slot name="CONTACT" />
      </v-window-item>
    </v-window>
  </v-card-text>
</template>
<script setup lang="ts">
import { TabValues } from "@/components/CardHeader/CardHeader.model";

interface TabsProps {
  currentTab: TabValues;
}

const props = defineProps<TabsProps>();
</script>
<style scoped lang="scss">
.tabs {
  margin-top: 70px;
}
</style>
