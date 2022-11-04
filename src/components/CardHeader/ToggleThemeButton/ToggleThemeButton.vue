<template>
  <v-btn @click="toggleTheme">
    <img class="toggle-theme__icon" :src="generateButtonIcon" alt="theme" />
    <v-tooltip activator="parent" location="bottom">Toggle theme</v-tooltip>
  </v-btn>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useTheme } from "vuetify";
import sun from "@/assets/sun.png";
import moon from "@/assets/moon.png";

const theme = useTheme();

const generateButtonIcon = computed((): string =>
  theme.global.current.value.dark ? sun : moon
);
const toggleTheme = (): void => {
  theme.global.name.value = theme.global.current.value.dark ? "light" : "dark";
};
</script>
<style scoped lang="scss">
.toggle-theme {
  &__icon {
    width: 35px;
    filter: drop-shadow(2px 2px 8px black);
  }
}
</style>
