import {
  expect,
  it,
  test,
  describe,
  beforeEach,
  afterEach,
  afterAll,
  beforeAll,
} from "vitest";
import { mount, shallowMount } from "@vue/test-utils";
import Hello from "./Hello";

const Component = {
  template: "<div>Hello world</div>",
};

test("mounts a component", () => {
  const wrapper = mount(Component, {});

  expect(wrapper.html()).toContain("Hello world");
});

describe("Hello.tsx", () => {
  beforeEach(() => {
    console.log("before each");
  });
  afterEach(() => {
    console.log("after each");
  });
  beforeAll(() => {
    console.log("before all");
  });
  afterAll(() => {
    console.log("after all");
  });
  it("test hello component", () => {
    const msg = "hello world";
    const wrapper = shallowMount(Hello, {
      props: { msg },
    });

    expect(wrapper.text()).toMatch(msg);
  });
});
