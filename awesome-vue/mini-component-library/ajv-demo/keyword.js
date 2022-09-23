const Ajv = require("ajv");
const ajvKeywordsPlugin = require("ajv-keywords");

const ajv = new Ajv();

ajvKeywordsPlugin(ajv, ["typeof", "instanceof"]);
console.log(ajv.validate({ instanceof: "Array" }, []));
