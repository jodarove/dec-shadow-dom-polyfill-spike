# Declarative Shadow DOM polyfill analysis

This repository contains examples to illustrate different comparison points when polyfilling declarative shadow dom.

It also has performance tests using tachometer that compares the three polyfills approaches in the examples. Based on https://github.com/mfreed7/declarative-shadow-dom/tree/master/perf_tests/explainer_example.

## Installation

Clone the repo and `npm install` the dependencies.

## Examples

Clone the repo and `node index.js` from the terminal. open [localhost:3000](http://localhost:3000) in your browsers. Compare the behaviors of the examples for Firefox/Safari (polyfilled) to Chrome (native).

## Performance tests

First, we need to build or perf tests.

```sh
npm run build-perf
```

To run in chrome:

```shell
npm run perf-chrome
```

To run in safari:

```shell
npm run perf-safari
```

To run in firefox:

```shell
npm run perf-firefox
```

Note: you will need to modify the `tachometer.firefox.json` to point to the proper path to binary.