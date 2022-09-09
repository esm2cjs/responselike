var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var esm_exports = {};
__export(esm_exports, {
  default: () => Response
});
module.exports = __toCommonJS(esm_exports);
var import_node_stream = require("node:stream");
var import_lowercase_keys = __toESM(require("@esm2cjs/lowercase-keys"));
class Response extends import_node_stream.Readable {
  statusCode;
  headers;
  body;
  url;
  constructor({ statusCode, headers, body, url }) {
    if (typeof statusCode !== "number") {
      throw new TypeError("Argument `statusCode` should be a number");
    }
    if (typeof headers !== "object") {
      throw new TypeError("Argument `headers` should be an object");
    }
    if (!(body instanceof Uint8Array)) {
      throw new TypeError("Argument `body` should be a buffer");
    }
    if (typeof url !== "string") {
      throw new TypeError("Argument `url` should be a string");
    }
    super({
      read() {
        this.push(body);
        this.push(null);
      }
    });
    this.statusCode = statusCode;
    this.headers = (0, import_lowercase_keys.default)(headers);
    this.body = body;
    this.url = url;
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
//# sourceMappingURL=index.js.map
