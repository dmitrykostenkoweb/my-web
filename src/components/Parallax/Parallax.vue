<template>
  <kinesis-container>
    <kinesis-element class="parallax__container" :strength="3" type="rotate">
      <kinesis-container
        class="parallax__item-container"
        v-for="(item, idx) in prepareParallaxData"
        :key="idx"
        :style="{
          top: item.positionTop,
          left: item.positionLeft,
          right: item.positionRight,
          bottom: item.positionBottom,
        }"
      >
        <kinesis-element tag="div" easing :strength="100" type="translate">
          <img
            :src="item.src"
            :alt="item.src"
            class="parallax__item"
            :style="{ width: item.width }"
          />
        </kinesis-element>
      </kinesis-container>
    </kinesis-element>
  </kinesis-container>
</template>

<script setup lang="ts">
import { computed, onBeforeMount, ref } from "vue";

type RandomPosition = {
  positionTop: string;
  positionLeft: string;
  positionRight: string;
  positionBottom: string;
};

interface ParallaxData extends RandomPosition {
  src: string;
  width: string;
}

const imagePaths = ref<any[]>([{}]);

const importAllImages = async (): Promise<void> => {
  const modules = await import.meta.glob("@/assets/images/*");
  for (const path in modules) {
    modules[path]().then(() => {
      const p = new URL(path, import.meta.url);
      imagePaths.value.push(p);
    });
  }
};

const prepareParallaxData = computed((): ParallaxData[] =>
  imagePaths.value.map((item: string) => {
    return {
      src: item,
      width: generateRandomImageWidth(),
      ...generateRandomPosition(),
    };
  })
);

const generateRandomImageWidth = (): string => {
  const minWidth = 5; //vw
  const maxWidth = 6; //vw
  return `${Math.floor(
    Math.random() * (maxWidth - minWidth + 1) + minWidth
  )}vw`;
};

const generateRandomPosition = (): RandomPosition => {
  type Position = number | "auto";
  const initPosition: number = Math.floor(Math.random() * (4 - 1 + 1) + 1);
  const currentPageWidth = window.innerWidth - 100;
  const currentPageHeight = window.innerHeight - 100;
  const maxOffset: number = 50;
  const minOffset: number = 25;
  let positionTop: Position = "auto";
  let positionBottom: Position = "auto";
  let positionLeft: Position = "auto";
  let positionRight: Position = "auto";
  /*
  1 - top position
  2 - bottom position
  3 - left position
  4 - right position
   */
  switch (initPosition) {
    case 1:
      positionTop = Math.floor(
        Math.random() * (maxOffset - minOffset + 1) + minOffset
      );
      positionLeft = Math.floor(
        Math.random() * (currentPageWidth - minOffset + 1) + minOffset
      );
      positionRight = "auto";
      positionBottom = "auto";
      break;
    case 2:
      positionTop = "auto";
      positionLeft = Math.floor(
        Math.random() * (currentPageWidth - minOffset + 1) + minOffset
      );
      positionRight = "auto";
      positionBottom = Math.floor(
        Math.random() * (maxOffset - minOffset + 1) + minOffset
      );
      break;
    case 3:
      positionTop = Math.floor(
        Math.random() * (currentPageHeight - minOffset + 1) + minOffset
      );
      positionLeft = Math.floor(
        Math.random() * (maxOffset - minOffset + 1) + minOffset
      );
      positionRight = "auto";
      positionBottom = "auto";
      break;
    case 4:
      positionTop = Math.floor(
        Math.random() * (currentPageHeight - minOffset + 1) + minOffset
      );
      positionLeft = "auto";
      positionRight = Math.floor(
        Math.random() * (maxOffset - minOffset + 1) + minOffset
      );
      positionBottom = "auto";
      break;
  }

  const generateStyles = (position: Position): string =>
    position === "auto" ? position : `${position}px`;

  return {
    positionTop: generateStyles(positionTop),
    positionLeft: generateStyles(positionLeft),
    positionRight: generateStyles(positionRight),
    positionBottom: generateStyles(positionBottom),
  };
};
onBeforeMount(async (): Promise<void> => await importAllImages());
</script>
<style lang="scss" scoped>
.parallax {
  &__container {
    height: 100%;
    width: 100%;
  }

  &__item-container {
    position: absolute;
  }

  &__item {
    filter: drop-shadow(16px 16px 20px black);
  }
}
</style>
