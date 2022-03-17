import { validate } from '@mapbox/mapbox-gl-style-spec';
import { validateLayers } from './lint-layer.js';

export default (style) => {
  return [
    ...validate(style),
    ...validateLayers(style),
  ];
};
