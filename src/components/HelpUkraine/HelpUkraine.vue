<template>
  <v-snackbar
    outlined
    location="left bottom"
    color="#CA4FB67F"
    v-model="snackbar"
  >
    <template #default>
      <div class="help-ukraine__header">
        <h2 class="text-subtitle-1 pb-2">Help 🇺🇦 Ukraine win!</h2>
        <p>#StandWithUkraine</p>
      </div>
      <div class="help-ukraine__footer">
        <img :src="handsUkraine" alt="hands-ukraine" />

        <v-btn
          variant="outlined"
          color="success"
          href="https://war.ukraine.ua/"
          target="_blank"
          @click="snackbar = false"
        >
          Support Ukraine
        </v-btn>
      </div>
    </template>
  </v-snackbar>
</template>
<script setup lang="ts">
import { ref, watch } from "vue";
import handsUkraine from "@/assets/hands-ukraine.png";

interface TabsProps {
  isOpen: boolean;
}

const props = defineProps<TabsProps>();
const snackbar = ref<boolean>(false);

watch(
  (): boolean => props.isOpen,

  (isOpen): void => {
    snackbar.value = isOpen;
  }
);
</script>
<style scoped lang="scss">
.help-ukraine {
  &__header {
    color: white;
  }

  &__footer {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    gap: 16px;

    img {
      width: 100px;
    }
  }
}
</style>
<style></style>
