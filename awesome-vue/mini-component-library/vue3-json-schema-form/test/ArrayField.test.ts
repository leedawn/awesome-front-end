import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import SchemaForm, {
  NumberField,
  StringField,
  ArrayField,
  WidgetSelection,
} from "../lib";

describe("ArrayField Test", () => {
  it("multi type arrayField", () => {
    const wrapper = mount(SchemaForm, {
      props: {
        schema: {
          type: "array",
          items: [{ type: "string" }, { type: "number" }],
        },
        value: {},
        onChange: () => {},
      },
    });
    const arrayField = wrapper.findComponent(ArrayField);
    const numberField = arrayField.findComponent(NumberField);
    const stringField = arrayField.findComponent(StringField);
    expect(numberField.exists()).toBeTruthy();
    expect(stringField.exists()).toBeTruthy();
  });

  it("single type arrayField", () => {
    const wrapper = mount(SchemaForm, {
      props: {
        schema: {
          type: "array",
          items: { type: "string" },
        },
        value: ["1", "2"],
        onChange: () => {},
      },
    });
    const arrayField = wrapper.findComponent(ArrayField);
    const stringField = arrayField.findAllComponents(StringField);
    expect(stringField.length).toBe(2);
    expect(stringField[0].props("value")).toBe("1");
  });

  it("single type arrayField", () => {
    const wrapper = mount(SchemaForm, {
      props: {
        schema: {
          type: "array",
          enums: ["11", "22", "33"],
        },
        value: {},
        onChange: () => {},
      },
    });
    const arrayField = wrapper.findComponent(ArrayField);
    const widgetSelection = arrayField.findComponent(WidgetSelection);
    expect(widgetSelection.exists()).toBeTruthy;
  });
});
