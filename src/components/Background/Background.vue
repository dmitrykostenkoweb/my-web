<template>
  <div class="bg">
    <div class="bg__gradient"></div>
    <img class="bg__donat" :src="donatBig" alt="donat" />
    <img class="bg__sphere" :src="sphere" alt="sphere" />
    <img class="bg__cube" :src="cube" alt="cube" />
    <img class="bg__circle" :src="circle" alt="circle" />
  </div>
</template>
<script setup lang="ts">
import { computed } from "vue";
import { useTheme } from "vuetify";
import donatBig from "@/assets/donatBig.png";
import sphere from "@/assets/sphere.png";
import cube from "@/assets/cube.png";
import circle from "@/assets/circle.png";

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

  &__donat {
    position: absolute;
    right: 0;
    bottom: 0;
    filter: blur(1px);
    width: 250px;
    opacity: 0.7;
  }

  &__sphere {
    position: absolute;
    left: 0;
    top: 0;
    filter: blur(1px);
    width: 200px;
    opacity: 0.7;
  }

  &__cube {
    position: absolute;
    left: 100px;
    bottom: 50px;
    width: 100px;
  }

  &__circle {
    position: absolute;
    left: 75px;
    top: 150px;
    width: 50px;
  }
}
</style>
