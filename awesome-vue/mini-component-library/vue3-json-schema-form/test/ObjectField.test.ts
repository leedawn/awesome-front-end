import { beforeAll, describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import SchemaForm, { NumberField, StringField } from "../lib";

describe("ObjectField Test", () => {
  let schema: any;
  beforeAll(() => {
    schema = {
      type: "object",
      properties: {
        name: {
          type: "string",
        },
        age: {
          type: "number",
        },
      },
    };
  });
  it("is SchemaForm include NumberField", () => {
    const wrapper = mount(SchemaForm, {
      props: {
        schema: schema,
        value: {},
        onChange: () => {},
      },
    });
    const numberField = wrapper.findComponent(NumberField);
    const stringField = wrapper.findComponent(StringField);
    expect(numberField.exists()).toBeTruthy();
    expect(stringField.exists()).toBeTruthy();
  });

  it("it should trigger changing after sub field have changed", () => {
    let value: any;
    const wrapper = mount(SchemaForm, {
      props: {
        schema,
        value,
        onChange: (v) => {
          value = v;
        },
      },
    });
    const numberField = wrapper.findComponent(NumberField);
    const stringField = wrapper.findComponent(StringField);
    numberField.props("onChange")(1);
    expect(value.age).equals(1);
    stringField.props("onChange")("2");
    expect(value.name).equals("2");
  });

  it("test change value", () => {
    let value = { name: "leon" };
    const wrapper = mount(SchemaForm, {
      props: {
        schema,
        value,
        onChange: (v) => {
          value = v;
        },
      },
    });
    const stringField = wrapper.findComponent(StringField);
    stringField.props("onChange")(undefined);
    expect(value.name).toBeUndefined;
  });
});
