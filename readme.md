# @esm2cjs/responselike

This is a fork of https://github.com/sindresorhus/responselike, but automatically patched to support ESM **and** CommonJS, unlike the original repository.

## Install

You can use an npm alias to install this package under the original name:

```
npm i responselike@npm:@esm2cjs/responselike
```

```jsonc
// package.json
"dependencies": {
    "responselike": "npm:@esm2cjs/responselike"
}
```

but `npm` might dedupe this incorrectly when other packages depend on the replaced package. If you can, prefer using the scoped package directly:

```
npm i @esm2cjs/responselike
```

```jsonc
// package.json
"dependencies": {
    "@esm2cjs/responselike": "^ver.si.on"
}
```

## Usage

```js
// Using ESM import syntax
import Response from "@esm2cjs/responselike";

// Using CommonJS require()
const Response = require("@esm2cjs/responselike").default;
```

> **Note:**
> Because the original module uses `export default`, you need to append `.default` to the `require()` call.

For more details, please see the original [repository](https://github.com/sindresorhus/responselike).

## Sponsoring

To support my efforts in maintaining the ESM/CommonJS hybrid, please sponsor [here](https://github.com/sponsors/AlCalzone).

To support the original author of the module, please sponsor [here](https://github.com/sindresorhus/responselike).
