import { defineComponent, PropType } from "vue";
import "uno.css";

export type IColor = "black" | "gray" | "red";
export const props = {
  color: {
    type: String as PropType<IColor>,
    default: "blue",
  },
  icon: {
    type: String,
    default: "",
  },
};
export default defineComponent({
  name: "SButton",
  props,
  setup(props, { slots }) {
    return () => (
      <button class={`py-2 px-4 font-semibold text-white cursor-pointer bg-${props.color}-500 border-none`}>
        {props.icon !== "" ? <i class={`i-ic-baseline-${props.icon} p-3`}></i> : ""}
        {slots.default ? slots.default() : ""}
      </button>
    );
  },
});
