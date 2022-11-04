<template>
  <div class="contact-links">
    <animation-item v-if="hideMailImg" :strength="10" type="depth">
      <img class="contact-links__img" :src="mail" alt="mail" />
    </animation-item>
    <div
      class="contact-links__links-wrapper"
      :style="{
        flexDirection: transformLinks ? 'column' : 'row',
      }"
    >
      <div
        class="contact-links__links-item"
        v-for="item in preparedLinkData"
        :key="item.text"
      >
        <v-btn
          color="primary"
          icon="mdi-linkedin"
          class="mr-4"
          :href="item.link"
          variant="outlined"
          target="_blank"
        >
          <v-icon>{{ item.icon }}</v-icon>
        </v-btn>
        <p v-if="transformLinks">{{ item.text }}</p>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed } from "vue";
import { useDisplay } from "vuetify";
import AnimationItem from "@/components/common/AnimationItem.vue";
import type { PreparedLinkData } from "@/model";
import mail from "@/assets/mail.png";

const { smAndUp, mdAndUp } = useDisplay();

const hideMailImg = computed((): boolean => smAndUp.value);
const transformLinks = computed((): boolean => mdAndUp.value);

const preparedLinkData = computed((): PreparedLinkData[] => [
  {
    icon: "mdi-email",
    text: "Contact me by email!",
    link: "mailto:dmitrykostenkoweb@gmail.com",
  },
  {
    icon: "mdi-linkedin",
    text: "Message me on LinkedIn!",
    link: "https://www.linkedin.com/in/dmitry-kostenkoweb/",
  },
  {
    icon: "mdi-github",
    text: "Look at my code!",
    link: "https://github.com/dmitrykostenkoweb",
  },
]);
</script>
<style scoped lang="scss">
.contact-links {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: var(--base-space);

  &__img {
    max-width: 300px;
  }

  &__links-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: baseline;
    gap: var(--base-space);
  }

  &__links-item {
    display: flex;
    align-items: baseline;
    font-size: 1rem;
  }
}
</style>
