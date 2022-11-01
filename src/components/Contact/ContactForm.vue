<template>
  <div class="contact-form">
    <p class="contact-form__title">
      Here you can send me an email and I will answer as soon as possible.
    </p>

    <v-form outlined ref="form" v-model="valid" lazy-validation>
      <v-text-field
        outlined
        v-model="name"
        :counter="10"
        label="Name"
        required
      />

      <v-text-field outlined v-model="email" label="E-mail" required />
      <v-textarea outlined name="input-7-4" v-model="message" label="Message" />

      <v-btn color="success" class="mr-4" @click="sendButtonHandle">Send</v-btn>
    </v-form>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";

const valid = ref<boolean>(false);
const name = ref<string>("");
const email = ref<string>("");
const message = ref<string>("");

const sendButtonHandle = (): void => {
  alert("email was send");
};
</script>
<style scoped lang="scss">
.contact-form {
  max-width: 400px;

  &__title {
    font-size: 36px;
    font-weight: 800;
    line-height: 48px;
  }
}
</style>
