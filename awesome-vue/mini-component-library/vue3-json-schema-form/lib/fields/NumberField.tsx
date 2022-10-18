import { defineComponent } from "vue";
import { InputNumber as AInputNumber } from "ant-design-vue";
import { fieldPropsDefine } from "../types";

export default defineComponent({
  name: "numberField",
  props: fieldPropsDefine,
  setup(props, ctx) {
    return () => (
      <AInputNumber
        value={props.value as string | number}
        onChange={(v) => props.onChange(v)}
      ></AInputNumber>
    );
  },
});
