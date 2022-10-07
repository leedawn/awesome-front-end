import { computed, defineComponent } from "vue";
import { fieldPropsDefine, SchemaTypes } from "./types";
import NumberField from "./fields/NumberField.vue";
import StringField from "./fields/StringField.vue";
import ObjectField from "./fields/ObjectField";
import ArrayField from "./fields/ArrayField";
import { retrieveSchema } from "./utils";

export default defineComponent({
  name: "schemaItems",
  props: fieldPropsDefine,
  setup(props, ctx) {
    const retrievedSchemaRef = computed(() => {
      const { schema, rootSchema, value } = props;
      return retrieveSchema(schema, rootSchema, value);
    });
    return () => {
      let Component: any;
      if (props.schema.type === SchemaTypes.STRING) {
        Component = StringField;
      } else if (props.schema.type === SchemaTypes.NUMBER) {
        Component = NumberField;
      } else if (props.schema.type === SchemaTypes.OBJECT) {
        Component = ObjectField;
      } else if (props.schema.type === SchemaTypes.ARRAY) {
        Component = ArrayField;
      } else {
        console.error(`${props.schema.type} is not supported`);
      }
      return <Component {...props} schema={retrievedSchemaRef.value} />;
    };
  },
});
