import { defineComponent, type PropType } from "vue";

export enum SchemaTypes {
  "NUMBER" = "number",
  "STRING" = "string",
  "OBJECT" = "object",
  "ARRAY" = "array",
}

export interface ItemsObject {
  enum: string[];
}

export interface Schema {
  type: SchemaTypes;
  properties: unknown;
  items: [] | ItemsObject;
}

export interface Data {
  firstName: string;
  lastName: string;
  age: number;
  bio: string;
  password: string;
  staticArray: (string | number)[];
  singleTypeArray: { name: string; age: number }[];
  multiSelectArray: string[];
}

export const fieldPropsDefine = {
  schema: {
    type: Object as PropType<Schema>,
    required: true,
  },
  value: { required: true },
  onChange: {
    type: Function as PropType<(v: unknown) => void>,
    required: true,
  },
  rootSchema: {
    type: Object as PropType<Schema>,
    required: true,
  },
} as const;

const fieldHelperComponent = defineComponent({
  props: fieldPropsDefine,
});

export type CommonPropsType = typeof fieldHelperComponent;
