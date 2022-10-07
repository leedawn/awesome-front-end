import { defineComponent, ref, watch, type PropType } from "vue";
import { Select as ASelect } from "ant-design-vue";
import type { DefaultOptionType } from "ant-design-vue/lib/select";

export default defineComponent({
  name: "widget-selection",
  props: {
    value: {},
    onChange: {
      type: Function as PropType<(v: unknown) => void>,
      required: true,
    },
    options: {
      type: Array as PropType<DefaultOptionType[]>,
      required: true,
    },
  },
  setup(props, ctx) {
    const currentValueRef = ref(props.value);
    watch(
      () => props.value,
      (newVal) => (currentValueRef.value = newVal)
    );
    watch(currentValueRef, (newVal) => props.onChange(newVal));

    return () => (
      <ASelect
        mode="multiple"
        v-model:value={currentValueRef.value}
        options={props.options}
      ></ASelect>
    );
  },
});
