<template>
  <div class="bg">
    <div class="bg__gradient"></div>
    <img class="bg__img" :src="donatBig" alt="donat" />
  </div>
</template>
<script setup lang="ts">
import donatBig from "@/assets/images/donatBig.png";
</script>
<style lang="scss" scoped>
.bg {
  width: 100%;
  height: 100%;
  background-color: black;

  &__gradient {
    width: 60%;
    height: 60%;
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
  }
}
</style>
