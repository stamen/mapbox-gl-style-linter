import { formattedStyleSpecValidate } from './formatted-style-spec-validate';
import { validateLayers } from './lint-layer.js';

export default style => {
  return [...formattedStyleSpecValidate(style), ...validateLayers(style)];
};
