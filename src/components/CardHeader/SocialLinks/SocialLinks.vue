<template>
  <div class="text-center">
    <v-menu>
      <template v-slot:activator="{ props }">
        <v-btn color="primary" v-bind="props">
          <img :src="chat" alt="chat" class="links-icon" />
          <p v-if="hideTitle">Let's be friend</p>
        </v-btn>
      </template>
      <v-list class="menu">
        <v-list-item
          class="social-links-item"
          v-for="(item, index) in preparedSocialData"
          :key="index"
        >
          <div class="social-links-wrapper">
            <v-btn
              class="d-flex flex-column align-center"
              color="primary"
              icon="mdi-linkedin"
              variant="outlined"
              :href="item.link"
              target="_blank"
            >
              <v-icon>{{ item.icon }}</v-icon>
            </v-btn>
            <p>{{ item.text }}</p>
          </div>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>
<script setup lang="ts">
import { computed } from "vue";
import { useDisplay } from "vuetify";
import type { PreparedLinkData } from "@/model";
import chat from "@/assets/chat.png";

const { mdAndUp } = useDisplay();

const hideTitle = computed((): boolean => mdAndUp.value);

const preparedSocialData = computed((): PreparedLinkData[] => [
  {
    icon: "mdi-instagram",
    text: "Instagram",
    link: "https://www.instagram.com/runway_fm",
  },
  {
    icon: "mdi-facebook",
    text: "Facebook",
    link: "https://www.facebook.com/dmitrykostenkofb",
  },
  {
    icon: "mdi-telegram",
    text: "Telegram",
    link: "https://telegram.me/kostenkodev",
  },
]);
</script>
<style scoped lang="scss">
.social-links-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--base-space);
}

.menu {
  background: #ffffff33 !important;
  border-radius: 16px;
  box-shadow: var(--base-shadow);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
}

.links-icon {
  width: 35px;
  filter: drop-shadow(2px 2px 8px black);
}
</style>
