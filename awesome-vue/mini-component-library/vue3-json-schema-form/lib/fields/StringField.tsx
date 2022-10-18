import { defineComponent } from "vue";
import { fieldPropsDefine } from "../types";
import { Input as AInput } from "ant-design-vue";

export default defineComponent({
  name: "stringField",
  props: fieldPropsDefine,
  setup(props, ctx) {
    return () => (
      <AInput
        value={props.value as string}
        onChange={(v) => props.onChange(v)}
      ></AInput>
    );
  },
});
