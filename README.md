# mapbox-gl-style-linter

Lint Mapbox GL styles.

## Why? Doesn't the style spec do this?

Yes, the style spec has [gl-style-validate](https://github.com/mapbox/mapbox-gl-js/blob/83b8d8fb690a9fd1a9eef558d425725679287887/src/style-spec/bin/gl-style-validate), but this module solves two issues:

 1. The style spec tool uses an older version of Node, so it can be difficult to execute in projects that use newer versions.
 2. The style spec tool does not find every error you might want to find. For example, the style spec tool does not raise errors for `paint` or `layout` property ids at the top level of a layer.

This tool takes the same inputs and creates compatible outputs to the style spec's `gl-style-validate` tool.

## Usage

 1. Install.
 2. Execute on one or more styles:
    ```bash
    mapbox-gl-style-lint styles/*.json
    ``` 

## Development

 1. Clone this repo.
 2. Install dependencies (`yarn install`).
 3. Start build tool (`yarn watch`).
 4. Start the test suite (`yarn test`).
 5. Make changes in `src`.

