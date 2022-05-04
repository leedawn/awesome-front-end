import type { PropType } from "vue";

export enum SchemaTypes {
  "NUMBER" = "number",
  "STRING" = "string",
}

export interface Schema {
  type: SchemaTypes | string;
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
} as const;
