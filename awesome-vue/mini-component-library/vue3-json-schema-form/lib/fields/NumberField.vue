<template>
  <AInputNumber :value="value" @change="changeValue" />
</template>

<script lang="ts" setup>
import type { Schema } from "../types";
const props = defineProps<{
  value: unknown;
  schema: Schema;
  onChange: (v: string) => void;
}>();

const changeValue = (value) => {
  props.onChange(value);
};
</script>
