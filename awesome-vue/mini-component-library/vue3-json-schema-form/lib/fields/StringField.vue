<template>
  <AInput :value="value" @change="changeValue"></AInput>
</template>

<script lang="ts" setup>
import type { Schema } from "../types";
const props = defineProps<{
  value: unknown;
  schema: Schema;
  onChange: (v: string) => void;
}>();

const changeValue = (e) => {
  props.onChange(e.target.value);
};
</script>
