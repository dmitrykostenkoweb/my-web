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
        :rules="[
          (v) => !!v || 'Name is required',
          (v) =>
            (v && v.length <= 10) || 'Name must be less than 10 characters',
        ]"
      />

      <v-text-field
        outlined
        v-model="email"
        label="E-mail"
        type="email"
        required
        :rules="[
          (v) => !!v || 'E-mail is required',
          (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
        ]"
      />
      <v-textarea
        outlined
        name="input-7-4"
        v-model="message"
        label="Message"
        :rules="[
          (v) => !!v || 'Message is required',
          (v) =>
            (v && v.length >= 5) ||
            'Message must be at least 5 characters long',
        ]"
      />

      <v-btn
        :disabled="!valid"
        color="success"
        class="mr-16 mr-"
        @click="sendButtonHandle"
        >Send
      </v-btn>
    </v-form>

    <v-snackbar
      v-model="snackbar"
      :timeout="snackbarData.timeout"
      :color="snackbarData.type"
      outlined
      right
    >
      {{ snackbarData.text }}

      <template v-slot:action="{ attrs }">
        <v-btn color="blue" text v-bind="attrs" @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>
<script setup lang="ts">
import { computed, ref, watch } from "vue";
import emailjs from "@emailjs/browser";

enum EmailStatus {
  SUCCESS = "SUCCESS",
  FAILED = "FAILED",
}

type SnackbarData = {
  text: string;
  timeout: number;
  type: string;
};

const serviceId = "service_qgt3esr";
const templateId = "template_gb8va3c";
const publicKey = "user_Rz7a2KDLB1PzB3FzMnGmy";

const valid = ref<boolean>(false);
const name = ref<string>("");
const email = ref<string>("");
const message = ref<string>("");
const emailStatus = ref<EmailStatus>(EmailStatus.FAILED);
const snackbar = ref<boolean>(false);

const snackbarData = computed((): SnackbarData => {
  if ((emailStatus.value = EmailStatus.SUCCESS))
    return {
      text: "The email was poisoned. I will contact you shortly",
      timeout: 2000,
      type: "success",
    };
  else
    return {
      text: "Oops, something went wrong. try again later or sit down with me another way",
      timeout: 2000,
      type: "#ffcc66",
    };
});

const sendButtonHandle = async (): Promise<void> => {
  const templateParams = {
    user_name: name.value,
    user_email: email.value,
    message: message.value,
  };

  await emailjs.send(serviceId, templateId, templateParams, publicKey).then(
    (response) => {
      console.log("SUCCESS!", response.status, response.text);
      emailStatus.value = EmailStatus.SUCCESS;
      snackbar.value = true;
      clearData();
    },
    (err) => {
      console.log("FAILED...", err);
      emailStatus.value = EmailStatus.FAILED;
      snackbar.value = true;
      clearData();
    }
  );
};

const clearData = (): void => {
  valid.value = false;
  name.value = "";
  email.value = "";
  message.value = "";
  emailStatus.value = EmailStatus.FAILED;
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
