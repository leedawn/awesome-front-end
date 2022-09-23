const Ajv = require("ajv"); // version >= 8.0.0
const localize = require("ajv-i18n");
// or for JSON Type Definition
// const localize = require("ajv-i18n/localize/jtd")

const ajv = new Ajv({ allErrors: true, messages: false });
const schema = {
  type: "object",
  properties: {
    foo: { type: "integer" },
  },
  required: ["foo"],
  additionalProperties: false,
};
const data = {
  foo: '2',
};
const validate = ajv.compile(schema);
const valid = validate(data);

if (!valid) {
  // ru for Russian
  localize.zh(validate.errors);
  // string with all errors and data paths
  console.log(ajv.errorsText(validate.errors, { separator: "\n" }));
}
