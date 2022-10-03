import { ref } from "vue";
import { createUseStyles } from "vue-jss";
import MonacoEditor from "./components/MonacoEditor";

const defaultSchema = {
  type: "string",
};
const toJson = (data: unknown) => JSON.stringify(data, null, 2);
const useStyles = createUseStyles({
  editor: {
    minHeight: "400px",
  },
});
export default {
  setup() {
    const schemaRef = ref(defaultSchema);
    const handleCodeChange = (data: string) => {
      try {
        schemaRef.value = JSON.parse(data);
      } catch (e) {
        console.log(e);
      }
    };
    const styles = useStyles();
    return () => (
      <MonacoEditor
        code={toJson(schemaRef.value)}
        onChange={handleCodeChange}
        title="schema"
        class={styles.value.editor}
      ></MonacoEditor>
    );
  },
};
