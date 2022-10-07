import { inject } from "vue";

export const SchemaFormContextKey = Symbol();

export const useSFContext = () => {
  const context = inject(SchemaFormContextKey);
  if (!context) console.log("SchemaForm should set");
  return context;
};
