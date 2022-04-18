var $foOuJ$mapboxmapboxglstylespec = require("@mapbox/mapbox-gl-style-spec");

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "lint", () => $19675af8dbf20766$export$2e2bcd8739ae039);

const $f8241f23fbffd88a$export$6f34350ec0390498 = (style)=>{
    const { layers: layers  } = style;
    const validationErrors = $foOuJ$mapboxmapboxglstylespec.validate(style);
    const formattedErrors = validationErrors.map((e)=>{
        const { message: message  } = e;
        const matches = message.match(/layers\[\d+\]/g);
        if (!matches) return e;
        let nextMessage = message;
        matches.forEach((match)=>{
            const layerIndex = JSON.parse(match.replace('layers', ''));
            const layer = layers[layerIndex];
            nextMessage = nextMessage.split(match).join(`layer '${layer.id}'`);
        });
        return {
            ...e,
            message: nextMessage
        };
    });
    return formattedErrors;
};



/**
 * getPropertyIds
 * Get property ids for either `paint` or `layout` properties
 * @param {string} type - `paint` or `layout`
 * @returns {string[]} - property ids for the given type
 */ const $b7524ab39d5127e7$var$getPropertyIds = (type)=>{
    let propertyIds = $foOuJ$mapboxmapboxglstylespec.latest[type].map((layerType)=>Object.keys($foOuJ$mapboxmapboxglstylespec.latest[layerType])
    ).flat(1);
    return Array.from(new Set(propertyIds));
};
const $b7524ab39d5127e7$var$paintProperties = $b7524ab39d5127e7$var$getPropertyIds('paint');
const $b7524ab39d5127e7$var$layoutProperties = $b7524ab39d5127e7$var$getPropertyIds('layout');
/**
 * validateMisplacedProperties
 * Find property ids at the top level of a layer that should not be there
 * @param {Object} layer - a layer object from a style
 * @param {string[]} ids - property ids to look for
 * @param {string} type - `paint` or `layout`
 * @returns {ValidationError[]} - an error for each id found, if any
 */ const $b7524ab39d5127e7$var$validateMisplacedProperties = (layer, ids, type)=>{
    return Object.keys(layer).filter((key)=>ids.includes(key)
    ).map((key)=>new $foOuJ$mapboxmapboxglstylespec.ValidationError(key, layer[key], `layer '${layer.id}' contains '${key}' at the top level, but it should be in ${type}`)
    );
};
const $b7524ab39d5127e7$var$validateMisplacedPaintProperties = (layer)=>{
    return $b7524ab39d5127e7$var$validateMisplacedProperties(layer, $b7524ab39d5127e7$var$paintProperties, 'paint');
};
const $b7524ab39d5127e7$var$validateMisplacedLayoutProperties = (layer)=>{
    return $b7524ab39d5127e7$var$validateMisplacedProperties(layer, $b7524ab39d5127e7$var$layoutProperties, 'layout');
};
const $b7524ab39d5127e7$export$a592d240053aaf40 = (layer)=>{
    return [
        ...$b7524ab39d5127e7$var$validateMisplacedLayoutProperties(layer),
        ...$b7524ab39d5127e7$var$validateMisplacedPaintProperties(layer), 
    ];
};
const $b7524ab39d5127e7$export$e28e65fc416331cf = (style)=>{
    if (!style.layers) return [];
    return style.layers.map($b7524ab39d5127e7$export$a592d240053aaf40).flat(Infinity);
};


var $19675af8dbf20766$export$2e2bcd8739ae039 = (style)=>{
    return [
        ...$f8241f23fbffd88a$export$6f34350ec0390498(style),
        ...$b7524ab39d5127e7$export$e28e65fc416331cf(style)
    ];
};




//# sourceMappingURL=main.js.map
