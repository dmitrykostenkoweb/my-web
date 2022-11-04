<template>
  <div class="bg">
    <div class="bg__gradient"></div>
    <img class="bg__img" :src="donatBig" alt="donat" />
  </div>
</template>
<script setup lang="ts">
import donatBig from "@/assets/donatBig.png";
import { computed } from "vue";
import { useTheme } from "vuetify";

const theme = useTheme();
const darkBackground = "#000";
const lightBackground = "#fff";

const generateBackgroundThemeColor = computed((): string =>
  theme.global.current.value.dark ? darkBackground : lightBackground
);
</script>
<style lang="scss" scoped>
.bg {
  width: 100%;
  height: 100%;
  background-color: v-bind(generateBackgroundThemeColor);

  &__gradient {
    width: 70%;
    height: 70%;
    background: linear-gradient(180deg, var(--violet) 0%, var(--pink) 100%);
    opacity: 0.8;
    filter: blur(100px);
    transform: rotate(-17.38deg);
  }

  &__img {
    position: absolute;
    right: -5%;
    bottom: -5%;
    filter: blur(2px);
    width: 250px;
  }
}
</style>
