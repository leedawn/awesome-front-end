import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import SchemaForm, { NumberField } from "../lib";

describe("NumberField Test", () => {
  it("is SchemaForm include NumberField", () => {
    let value = "";
    const wrapper = mount(SchemaForm, {
      props: {
        schema: {
          type: "number",
        },
        value: value,
        onChange: (v) => (value = v),
      },
    });
    const numberField = wrapper.findComponent(NumberField);
    expect(numberField.exists()).toBeTruthy();

    // const input = numberField.find("input");
    // input.element.value = "23";
    // input.trigger("input");
    // expect(value).toBe(23);
  });
});
