<template>
  <div class="description">
    <h2 class="description__hey-txt">Hey! I am Dmitry Kostenko</h2>
    <h1 class="description__position-wrapper">
      <span class="description__frontend-txt">Frontend</span>
      <span class="description__developer-txt">Developer</span>
    </h1>
    <p class="description__description-txt">
      I am very passionate about interface development while taking into
      consideration the latest trends and technologies.
    </p>
    <p>
      Currently, I work at
      <a target="_blank" href="https://pixeltechnology.com/"
        >Pixel Technology</a
      >
    </p>
  </div>
</template>
<style scoped lang="scss">
.description {
  &__hey-txt {
    font-size: 36px;
    font-weight: 800;
    line-height: 48px;
  }

  &__position-wrapper {
    display: flex;
    gap: 4px;
    flex-wrap: wrap;

    font-size: 36px;
    font-weight: 800;
    line-height: 48px;
  }

  &__frontend-txt {
    background: linear-gradient(90deg, #f59e0b 39.95%, #ef4444 77.15%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  &__developer-txt {
    background: linear-gradient(90deg, #8b5cf6 0%, #ec4899 43.9%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  &__description-txt {
    font-size: 1rem;
    line-height: 24px;
  }
}
</style>
