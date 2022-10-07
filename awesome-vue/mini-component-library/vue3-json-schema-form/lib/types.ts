import type { PropType } from "vue";

export enum SchemaTypes {
  "NUMBER" = "number",
  "STRING" = "string",
  "OBJECT" = "object",
  "ARRAY" = "array",
}

export interface Schema {
  type: SchemaTypes | string;
  properties: unknown;
  items: [];
}

export interface Data {
  firstName: string;
  lastName: string;
  age: number;
  bio: string;
  password: string;
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
