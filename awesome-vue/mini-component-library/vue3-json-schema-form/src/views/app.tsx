import { reactive, ref, watch } from "vue";
import { createUseStyles } from "vue-jss";
import MonacoEditor from "../components/MonacoEditor";
import demos from "../demos";
import { Button as AButton } from "ant-design-vue";
import CustomForm from "../../lib";
import type { Data } from "lib/types";

const toJson = (data: unknown) => JSON.stringify(data, null, 2);
const useStyles = createUseStyles({
  container: {},
  wrap: {
    display: "flex",
  },
  left: {
    flex: 2,
  },
  leftBottom: {
    display: "flex",
  },
  halfPosition: {
    flex: 1,
  },
  right: {
    flex: 1,
  },
  editor: {
    minHeight: "400px",
  },
});

export default {
  name: "app",
  setup() {
    const selectedOption = ref(demos[0]);
    const demo = reactive({
      schema: selectedOption.value.schema,
      schemaCode: toJson(selectedOption.value.schema),
      data: selectedOption.value.default,
      dataCode: toJson(selectedOption.value.default),
      uiSchema: selectedOption.value.uiSchema,
      uiSchemaCode: toJson(selectedOption.value.uiSchema),
    });
    const styles = useStyles();

    watch(selectedOption, () => {
      Object.assign(demo, {
        schema: selectedOption.value.schema,
        schemaCode: toJson(selectedOption.value.schema),
        data: selectedOption.value.default,
        dataCode: toJson(selectedOption.value.default),
        uiSchema: selectedOption.value.uiSchema,
        uiSchemaCode: toJson(selectedOption.value.uiSchema),
      });
    });

    const handleCodeChange = (
      field: "schema" | "uiSchema" | "data",
      data: string
    ) => {
      try {
        demo[field] = JSON.parse(data);
        demo[(field + "Code") as "schemaCode" | "uiSchemaCode" | "dataCode"] =
          data;
      } catch (e) {
        console.log(e);
      }
    };
    const handleSchemaChange = (v: string) => handleCodeChange("schema", v);
    const handleUiSchemaChange = (v: string) => handleCodeChange("uiSchema", v);
    const handleDataSchemaChange = (v: string) => handleCodeChange("data", v);
    const formChange = (v: unknown) => {
      console.log(v);

      demo.data = v as Data;
      demo.dataCode = toJson(v);
    };

    return () => {
      const stylesValue = styles.value;
      return (
        <div class={stylesValue.container}>
          <h1>Vue3 JsonSchema Form</h1>
          {demos.map((item) => {
            return (
              <AButton
                type="primary"
                onClick={() => (selectedOption.value = item)}
              >
                {item.name}
              </AButton>
            );
          })}

          <div class={stylesValue.wrap}>
            <div class={stylesValue.left}>
              <MonacoEditor
                code={demo.schemaCode}
                onChange={handleSchemaChange}
                title="schema"
                class={stylesValue.editor}
              />
              <div class={stylesValue.leftBottom}>
                <MonacoEditor
                  code={demo.uiSchemaCode}
                  onChange={handleUiSchemaChange}
                  title="uiSchema"
                  class={[stylesValue.editor, stylesValue.halfPosition]}
                />
                <MonacoEditor
                  code={demo.dataCode}
                  onChange={handleDataSchemaChange}
                  title="default"
                  class={[stylesValue.editor, stylesValue.halfPosition]}
                />
              </div>
            </div>
            <div class={stylesValue.right}>
              <CustomForm
                schema={demo.schema}
                value={demo.data}
                onChange={formChange}
              />
            </div>
          </div>
        </div>
      );
    };
  },
};
