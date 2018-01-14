# babel-plugin-implication-operator

A babel plugin that enables a short circuiting inline boolean implication operator.

Kinda silly, but it compiles `1 >> 2` to `!1 || 2`.
Had to override the `>>` operator because bablyon doesn't really have a pluggable way to add tokens as far as I could tell.

# Installation

```javascript
npm install babel-plugin-implication-operator
```

## Usage

### Via `.babelrc` (Recommended)

**.babelrc**

```json
{
  "plugins": ["implication-operator"]
}
```

### Via CLI

```sh
$ babel --plugins implication-operator script.js
```

### Via Node API

```javascript
require("babel-core").transform("code", {
  plugins: ["implication-operator"]
});
```
