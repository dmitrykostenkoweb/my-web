<template>
  <div class="contact">
    <contact-form />
    <contact-links />
  </div>
</template>
<script setup lang="ts">
import ContactForm from "@/components/Contact/ContactForm.vue";
import ContactLinks from "@/components/Contact/ContactLinks.vue";
</script>
<style scoped lang="scss">
.contact {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: var(--base-space);
}
</style>
