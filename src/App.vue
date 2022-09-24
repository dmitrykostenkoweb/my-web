<template>
  <v-app>
    <v-main class="d-flex align-center justify-center h-100 w-100 main">
      <main-background class="background" />
      <parallax class="parallax" />
      <!--      <main-card>Some text</main-card>-->
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import MainBackground from "@/components/MainBackground";
import MainCard from "@/components/MainCard";
import Parallax from "@/components/Parallax/Parallax.vue";
</script>
<style lang="scss" scoped>
.main {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.parallax {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  margin: auto;
}
</style>
