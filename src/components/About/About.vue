<template>
  <div class="about">
    <description />
    <parallax />
  </div>
</template>
<script setup lang="ts">
import Description from "./Description";
import Parallax from "./Parallax";
</script>
<style scoped lang="scss">
.about {
  width: 100%;

  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
</style>
