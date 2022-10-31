<template>
  <div ref="wrapper" class="developer-wrapper">
    <kinesis-container class="flying-wrapper">
      <animation-item
        class="flying-item"
        v-for="(item, idx) in prepareParallaxData"
        :strength="item.strength"
        type="depth_inv"
        :key="idx"
        :style="{
          top: item.positionTop,
          left: item.positionLeft,
          right: item.positionRight,
          bottom: item.positionBottom,
        }"
      >
        <img
          alt="angleBrackets"
          :src="item.src"
          :alt="item.src"
          :style="{ width: item.width }"
        />
      </animation-item>

      <animation-item class="flying-dev" :strength="10" type="depth">
        <img :src="developer" alt="developer" />
      </animation-item>
    </kinesis-container>
  </div>
</template>
<script setup lang="ts">
import { computed, ref } from "vue";
import AnimationItem from "@/components/common/AnimationItem.vue";

import developer from "@/assets/developer.png";
import angleBrackets from "@/assets/images/angleBrackets.png";
import basketball from "@/assets/images/basketball.png";
import camera from "@/assets/images/camera.png";
import colour from "@/assets/images/colour.png";
import css3 from "@/assets/images/css3.png";
import cube from "@/assets/images/cube.png";
import donat from "@/assets/images/donat.png";
import figma from "@/assets/images/figma.png";
import gitlab from "@/assets/images/gitlab-1.png";
import gym from "@/assets/images/gym.png";
import headphone2 from "@/assets/images/headphone2.png";
import heart from "@/assets/images/heart.png";
import money from "@/assets/images/money.png";
import pill from "@/assets/images/pill.png";
import react from "@/assets/images/react.png";
import vue from "@/assets/images/vue.png";
import vscode from "@/assets/images/vscode.png";
import laptop from "@/assets/images/laptop.png";

import type { RandomPosition, ParallaxData } from "./developerImg.model";

const wrapper = ref<HTMLDivElement>();

const createdGallery = computed((): string[] => {
  const arr = [];
  arr.push(angleBrackets);
  arr.push(basketball);
  arr.push(camera);
  arr.push(colour);
  arr.push(css3);
  arr.push(cube);
  arr.push(donat);
  arr.push(figma);
  arr.push(gym);
  arr.push(headphone2);
  arr.push(heart);
  arr.push(money);
  arr.push(pill);
  arr.push(gitlab);
  arr.push(react);
  arr.push(vue);
  arr.push(vscode);
  arr.push(laptop);
  return arr;
});

const prepareParallaxData = computed((): ParallaxData[] =>
  createdGallery.value.map((item: string) => {
    return {
      src: item,
      width: generateRandomImageWidth(),
      strength: generateRandomStrength(),
      ...generateRandomPosition(),
    };
  })
);

const generateRandomPosition = (): RandomPosition => {
  type Position = number | "auto";
  const initPosition: number = Math.floor(Math.random() * (3 - 1 + 1) + 1);

  const wrapperWidth: number = wrapper.value ? wrapper.value.offsetWidth : 500;
  const wrapperHeight =
    (wrapper.value ? wrapper.value.offsetHeight : 500) * 0.6;

  const minOffset: number = 20;
  const maxOffset: number = 100;

  let positionTop: Position = "auto";
  let positionBottom: Position = "auto";
  let positionLeft: Position = "auto";
  let positionRight: Position = "auto";
  /*
  1 - top position
  2 - left position
  3 - right position
   */

  switch (initPosition) {
    case 1:
      positionTop = Math.floor(
        Math.random() * (maxOffset - minOffset + 1) + minOffset
      );
      positionLeft = Math.floor(
        Math.random() * (wrapperWidth - minOffset + 1) + minOffset
      );
      positionRight = "auto";
      positionBottom = "auto";
      break;
    case 2:
      positionTop = Math.floor(
        Math.random() * (wrapperHeight - minOffset + 1) + minOffset
      );
      positionLeft = Math.floor(
        Math.random() * (maxOffset - minOffset + 1) + minOffset
      );
      positionRight = "auto";
      positionBottom = "auto";
      break;
    case 3:
      positionTop = Math.floor(
        Math.random() * (wrapperHeight - minOffset + 1) + minOffset
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

const generateRandomImageWidth = (): string => {
  const minWidth = 2; //vw
  const maxWidth = 3; //vw
  return `${Math.floor(
    Math.random() * (maxWidth - minWidth + 1) + minWidth
  )}vw`;
};
const generateRandomStrength = (): number => {
  const minValue = 2;
  const maxValue = 10;
  return Math.floor(Math.random() * (maxValue - minValue + 1) + minValue);
};
</script>
<style lang="scss" scoped>
.developer-wrapper {
  max-width: 500px;
  min-width: 200px;

  height: 500px;
}

.flying-wrapper {
  position: relative;
  border: 1px solid red;

  border-radius: 50%;

  width: 100%;
  height: 100%;

  display: flex;
  align-items: flex-end;
  justify-content: center;
}

.flying-item {
  position: absolute;
  filter: drop-shadow(3px 0px 9px rgba(0, 0, 0, 0.6));
}

.flying-dev {
  filter: drop-shadow(3px 0px 9px rgba(0, 0, 0, 0.6));

  img {
    width: 300px;
  }
}
</style>
