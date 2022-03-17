import { latest, ValidationError } from '@mapbox/mapbox-gl-style-spec';

/**
 * getPropertyIds
 * Get property ids for either `paint` or `layout` properties
 * @param {string} type - `paint` or `layout`
 * @returns {string[]} - property ids for the given type
 */
const getPropertyIds = type => {
  let propertyIds = latest[type]
    .map(layerType => Object.keys(latest[layerType]))
    .flat(1);
  return Array.from(new Set(propertyIds));
};

const paintProperties = getPropertyIds('paint');
const layoutProperties = getPropertyIds('layout');

/**
 * validateMisplacedProperties
 * Find property ids at the top level of a layer that should not be there
 * @param {Object} layer - a layer object from a style
 * @param {string[]} ids - property ids to look for
 * @param {string} type - `paint` or `layout`
 * @returns {ValidationError[]} - an error for each id found, if any
 */
const validateMisplacedProperties = (layer, ids, type) => {
  return Object.keys(layer)
    .filter(key => ids.includes(key))
    .map(key => new ValidationError(key, layer[key], `layer '${layer.id}' contains '${key}' at the top level, but it should be in ${type}`));
}

const validateMisplacedPaintProperties = layer => {
  return validateMisplacedProperties(layer, paintProperties, 'paint');
};

const validateMisplacedLayoutProperties = layer => {
  return validateMisplacedProperties(layer, layoutProperties, 'layout');
};

export const validateLayer = layer => {
  return [
    ...validateMisplacedLayoutProperties(layer),
    ...validateMisplacedPaintProperties(layer),
  ];
};

export const validateLayers = style => {
  if (!style.layers) return [];
  return style.layers.map(validateLayer).flat(Infinity);
};
