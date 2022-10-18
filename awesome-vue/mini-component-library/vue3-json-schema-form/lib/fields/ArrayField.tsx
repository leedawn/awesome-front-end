import { defineComponent, type PropType } from "vue";
import {
  fieldPropsDefine,
  type CommonPropsType,
  type ItemsObject,
  type Schema,
} from "../types";
import { useSFContext } from "../context";
import { Button as AButton } from "ant-design-vue";
import Selection from "../widgets/Selection";

const ArrayItemWrap = defineComponent({
  name: "arrayItemWrap",
  props: {
    index: {
      type: Number,
      require: true,
    },
    onUp: {
      type: Function as PropType<(index: number) => void>,
      required: true,
    },
    onDown: {
      type: Function as PropType<(index: number) => void>,
      required: true,
    },
    onAdd: {
      type: Function as PropType<(index: number) => void>,
      required: true,
    },
    onDelete: {
      type: Function as PropType<(index: number) => void>,
      required: true,
    },
  },
  setup(props, { slots }) {
    return () => {
      return (
        <div class="container">
          <div class="action">
            <AButton
              type="primary"
              onClick={() => props.onAdd(props.index as number)}
            >
              新增
            </AButton>
            <AButton
              type="primary"
              onClick={() => props.onDelete(props.index as number)}
            >
              删除
            </AButton>
            <AButton
              type="primary"
              onClick={() => props.onUp(props.index as number)}
            >
              上移
            </AButton>
            <AButton
              type="primary"
              onClick={() => props.onDown(props.index as number)}
            >
              下移
            </AButton>
          </div>
          <div>{slots.default && slots.default()}</div>
        </div>
      );
    };
  },
});

export default defineComponent({
  name: "arrayField",
  props: fieldPropsDefine,
  setup(props, ctx) {
    const context = useSFContext() as { SchemaItems: CommonPropsType };
    const handleSchemaFormChange = (v: unknown, index: number) => {
      const { value } = props;
      const arr = Array.isArray(value) ? value : [];
      arr[index] = v;
      props.onChange(value);
    };

    const handleItemUp = (index: number) => {
      const { value } = props;
      const arr = Array.isArray(value) ? value : [];
      const item = arr.splice(index, 1);
      arr.splice(index - 1, 0, item[0]);
      props.onChange(arr);
    };

    const handleItemDown = (index: number) => {
      const { value } = props;
      const arr = Array.isArray(value) ? value : [];
      const item = arr.splice(index, 1);
      arr.splice(index + 1, 0, item[0]);
      props.onChange(arr);
    };

    const handleItemAdd = (index: number) => {
      const { value } = props;
      const arr = Array.isArray(value) ? value : [];
      arr.splice(index + 1, 0, undefined);
      props.onChange(arr);
    };

    const handleItemDelete = (index: number) => {
      const { value } = props;
      const arr = Array.isArray(value) ? value : [];
      arr.splice(index, 1);
      props.onChange(arr);
    };

    return () => {
      const { schema, rootSchema, value } = props;
      const isMultiType = Array.isArray(schema.items);
      const { SchemaItems } = context;
      const arr: unknown[] = Array.isArray(value) ? value : [];
      const isSelected = schema.items && (schema.items as ItemsObject).enum;

      if (isMultiType) {
        return (schema.items as []).map((item, index) => {
          return (
            <SchemaItems
              schema={item}
              value={arr[index]}
              rootSchema={rootSchema}
              key={index}
              onChange={(v: unknown) => handleSchemaFormChange(v, index)}
            ></SchemaItems>
          );
        });
      } else if (!isSelected) {
        // debugger;
        return arr.map((item, index) => (
          <ArrayItemWrap
            index={index}
            onUp={handleItemUp}
            onDown={handleItemDown}
            onAdd={handleItemAdd}
            onDelete={handleItemDelete}
          >
            <SchemaItems
              schema={schema.items as unknown as Schema}
              value={item}
              rootSchema={rootSchema}
              key={index}
              onChange={(v: unknown) => handleSchemaFormChange(v, index)}
            ></SchemaItems>
          </ArrayItemWrap>
        ));
      } else {
        const selection = (schema.items as ItemsObject).enum;
        return (
          <Selection
            value={value}
            onChange={(v: unknown) => props.onChange(v)}
            options={selection.map((item: string) => ({
              value: item,
              label: item,
            }))}
          ></Selection>
        );
      }
    };
  },
});
