import {validate as $9ijuO$validate, latest as $9ijuO$latest, ValidationError as $9ijuO$ValidationError} from "@mapbox/mapbox-gl-style-spec";



/**
 * getPropertyIds
 * Get property ids for either `paint` or `layout` properties
 * @param {string} type - `paint` or `layout`
 * @returns {string[]} - property ids for the given type
 */ const $31a349932d4401a4$var$getPropertyIds = (type)=>{
    let propertyIds = $9ijuO$latest[type].map((layerType)=>Object.keys($9ijuO$latest[layerType])
    ).flat(1);
    return Array.from(new Set(propertyIds));
};
const $31a349932d4401a4$var$paintProperties = $31a349932d4401a4$var$getPropertyIds('paint');
const $31a349932d4401a4$var$layoutProperties = $31a349932d4401a4$var$getPropertyIds('layout');
/**
 * validateMisplacedProperties
 * Find property ids at the top level of a layer that should not be there
 * @param {Object} layer - a layer object from a style
 * @param {string[]} ids - property ids to look for
 * @param {string} type - `paint` or `layout`
 * @returns {ValidationError[]} - an error for each id found, if any
 */ const $31a349932d4401a4$var$validateMisplacedProperties = (layer, ids, type)=>{
    return Object.keys(layer).filter((key)=>ids.includes(key)
    ).map((key)=>new $9ijuO$ValidationError(key, layer[key], `layer '${layer.id}' contains '${key}' at the top level, but it should be in ${type}`)
    );
};
const $31a349932d4401a4$var$validateMisplacedPaintProperties = (layer)=>{
    return $31a349932d4401a4$var$validateMisplacedProperties(layer, $31a349932d4401a4$var$paintProperties, 'paint');
};
const $31a349932d4401a4$var$validateMisplacedLayoutProperties = (layer)=>{
    return $31a349932d4401a4$var$validateMisplacedProperties(layer, $31a349932d4401a4$var$layoutProperties, 'layout');
};
const $31a349932d4401a4$export$a592d240053aaf40 = (layer)=>{
    return [
        ...$31a349932d4401a4$var$validateMisplacedLayoutProperties(layer),
        ...$31a349932d4401a4$var$validateMisplacedPaintProperties(layer), 
    ];
};
const $31a349932d4401a4$export$e28e65fc416331cf = (style)=>{
    if (!style.layers) return [];
    return style.layers.map($31a349932d4401a4$export$a592d240053aaf40).flat(Infinity);
};


var $31c22f01ea92cd95$export$2e2bcd8739ae039 = (style)=>{
    return [
        ...$9ijuO$validate(style),
        ...$31a349932d4401a4$export$e28e65fc416331cf(style), 
    ];
};




export {$31c22f01ea92cd95$export$2e2bcd8739ae039 as lint};
//# sourceMappingURL=module.js.map
