# babel-plugin-implication-operator

A babel plugin that enables a short circuiting inline boolean implication operator

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