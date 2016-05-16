babel-preset-metal-jsx
===================================

A babel preset for building Metal.js projects using JSX.

## Usage

This is a [babel preset](http://babeljs.io/docs/plugins/) that provides a
default configuration for building Metal.js projects that use JSX with babel.
Besides including [babel-preset-metal](http://npmjs.com/package/babel-preset-metal),
this preset also configures [babel-plugin-incremental-dom](https://www.npmjs.com/package/babel-plugin-incremental-dom)
for you, which is the one that compiles the JSX code.

```javascript
{
  "preset": ["metal-jsx"]
}
```
