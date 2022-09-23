const Ajv = require("ajv");
const addFormats = require("ajv-formats");

const ajv = new Ajv({ strictTypes: false });
addFormats(ajv, ["date", "time"]);
const validateDate = ajv.compile({ format: "date" });
console.log(validateDate("2020-09-17"));
