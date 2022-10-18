import { inject, type InjectionKey } from "vue";
import type { CommonPropsType } from "./types";

export const SchemaFormContextKey = Symbol() as InjectionKey<{
  SchemaItems: CommonPropsType;
}>;

export const useSFContext = () => {
  const context = inject(SchemaFormContextKey);
  if (!context) console.log("SchemaForm should set");
  return context;
};
