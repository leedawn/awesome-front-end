import { isObject } from "../utils";
import { defineComponent } from "vue";
import { useSFContext } from "../context";
import { fieldPropsDefine } from "../types";

export default defineComponent({
  name: "objectField",
  props: fieldPropsDefine,
  setup(props, ctx) {
    const context = useSFContext();

    const changeValue = (key: string, v: unknown) => {
      const value: Record<string, unknown> | unknown = isObject(props.value)
        ? props.value
        : {};
      if (Object.is(v, undefined)) {
        delete (value as Record<string, unknown>)[key];
      } else {
        (value as Record<string, unknown>)[key] = v;
      }
      props.onChange(value);
    };

    return () => {
      const { schema, rootSchema, value } = props;
      const properties = schema.properties || {};
      const { SchemaItems } = context;
      const currentValue = isObject(value) ? value : {};
      return Object.keys(properties).map((k, i) => {
        return (
          <SchemaItems
            schema={properties[k]}
            value={currentValue[k]}
            rootSchema={rootSchema}
            key={i}
            onChange={(v: string) => changeValue(k, v)}
          />
        );
      });
    };
  },
});
