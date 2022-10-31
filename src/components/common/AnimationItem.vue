<template>
  <kinesis-element
    tag="div"
    easing
    :strength="props.strength"
    :type="props.type"
  >
    <slot />
  </kinesis-element>
</template>
<script setup lang="ts">
interface TabsProps {
  strength: number;
  type: string;
}

const props = defineProps<TabsProps>();
</script>
