import { defineComponent, provide, type PropType } from "vue";
import type { Schema } from "./types";
import SchemaItems from "./SchemaItems";
import { SchemaFormContextKey } from "./context";

export default defineComponent({
  name: "schemaForm",
  props: {
    schema: {
      type: Object as PropType<Schema>,
      required: true,
    },
    value: { required: true },
    onChange: {
      type: Function as PropType<(v: unknown) => void>,
      required: true,
    },
  },
  setup(props, ctx) {
    const handleChange = (val: unknown) => {
      props.onChange(val);
    };
    const context = {
      SchemaItems,
    };
    provide(SchemaFormContextKey, context);
    return () => (
      <SchemaItems
        schema={props.schema}
        rootSchema={props.schema}
        value={props.value}
        onChange={handleChange}
      />
    );
  },
});
