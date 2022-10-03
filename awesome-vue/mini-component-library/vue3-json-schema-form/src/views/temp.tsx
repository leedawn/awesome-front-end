import { ref, type Ref } from "vue";
import MonacoEditor from "../components/MonacoEditor";
import { createUseStyles } from "vue-jss";

function toJson(data: unknown) {
  return JSON.stringify(data, null, 2);
}
const schema = {
  type: "string",
};

const useStyles = createUseStyles({
  editor: {
    minHeight: 400,
  },
});

export default {
  setup() {
    const schemaRef: Ref<unknown> = ref(schema);
    const handleCodeChange = (code: string) => {
      let schema: unknown;
      try {
        schema = JSON.parse(code);
        // eslint-disable-next-line no-empty
      } catch (err) {}
      schemaRef.value = schema;
    };
    const classesRef = useStyles();
    return () => {
      return (
        <MonacoEditor
          code={toJson(schemaRef.value)}
          onChange={handleCodeChange}
          title="Schema"
          class={classesRef.value.editor}
        ></MonacoEditor>
      );
    };
  },
};
