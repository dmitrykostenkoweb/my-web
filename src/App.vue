<template>
  <v-app>
    <v-main class="d-flex align-center justify-center h-100 w-100 main">
      <background class="background" />
      <card @tab="setSelectedTab">
        <tabs :current-tab="currentTab">
          <template #ABOUT>
            <about />
          </template>
          <template #CONTACT>
            <contact />
          </template>
        </tabs>
      </card>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Contact from "@/components/Contact";
import About from "@/components/About";
import Tabs from "@/components/Tabs";
import Card from "@/components/Card";
import Background from "@/components/Background";

import { TabValues } from "@/components/CardHeader/CardHeader.model";

const currentTab = ref<TabValues>(TabValues.ABOUT);

const setSelectedTab = (payload: TabValues): void => {
  currentTab.value = payload;
};
</script>
<style lang="scss" scoped>
.main {
  position: relative;
  width: 100%;
  height: 100%;

  padding-top: 0;
}

.background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>
