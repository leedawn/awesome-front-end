import { defineComponent } from "vue";
import { fieldPropsDefine, SchemaTypes } from "./types";
import NumberField from "./fields/NumberField.vue";
import StringField from "./fields/StringField.vue";

export default defineComponent({
  name: "schemaItems",
  props: fieldPropsDefine,
  setup(props, ctx) {
    return () => {
      let Component: unknown;
      if (props.schema.type === SchemaTypes.STRING) {
        Component = StringField;
      } else if (props.schema.type === SchemaTypes.NUMBER) {
        Component = NumberField;
      } else {
        console.error(`${props.schema.type} is not supported`);
      }
      return <Component {...props} />;
    };
  },
});
