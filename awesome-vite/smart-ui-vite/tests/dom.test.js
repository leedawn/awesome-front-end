const { generateDiv } = require("./dom");
require("./jsdom-config");

describe("dom test", () => {
  test("test", () => {
    generateDiv();
    expect(document.getElementsByClassName("c1").length).toBe(1);
  });
});
