<template>
  <v-app>
    <v-main class="d-flex align-center justify-center h-100 w-100 main">
      <background class="background" />
      <loader v-if="isLoading" />
      <card v-show="!isLoading" @tab="setSelectedTab">
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
    <!--    <help-ukraine v-if="!isLoading" :is-open="isHelpUkraine" />-->
  </v-app>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import Loader from "@/components/Loader";
import Contact from "@/components/Contact";
import About from "@/components/About";
import Tabs from "@/components/Tabs";
import Card from "@/components/Card";
import Background from "@/components/Background";
// import HelpUkraine from "@/components/HelpUkraine/HelpUkraine.vue";

import { TabValues } from "@/components/CardHeader/CardHeader.model";

const router = useRouter();
const route = useRoute();

const currentTab = ref<TabValues>(TabValues.ABOUT);
const isLoading = ref<boolean>(false);
const isHelpUkraine = ref<boolean>(false);

const setSelectedTab = (payload: TabValues): void => {
  currentTab.value = payload;
};

const showSpinner = (): void => {
  isLoading.value = true;

  setTimeout(async (): Promise<void> => {
    isLoading.value = false;

    await routerProvider();
    showHelpUkraine();
  }, 1000);
};

const showHelpUkraine = (): void => {
  setTimeout(() => (isHelpUkraine.value = true), 2000);
};

const routerProvider = async (): Promise<void> => {
  if (route.path === "/") await router.push("/about");
};

onMounted((): void => showSpinner());
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
