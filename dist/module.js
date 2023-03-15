import {validate as $5OpyM$validate, latest as $5OpyM$latest, ValidationError as $5OpyM$ValidationError} from "@mapbox/mapbox-gl-style-spec";

var $parcel$global =
typeof globalThis !== 'undefined'
  ? globalThis
  : typeof self !== 'undefined'
  ? self
  : typeof window !== 'undefined'
  ? window
  : typeof global !== 'undefined'
  ? global
  : {};
var $parcel$modules = {};
var $parcel$inits = {};

var parcelRequire = $parcel$global["parcelRequire91f9"];
if (parcelRequire == null) {
  parcelRequire = function(id) {
    if (id in $parcel$modules) {
      return $parcel$modules[id].exports;
    }
    if (id in $parcel$inits) {
      var init = $parcel$inits[id];
      delete $parcel$inits[id];
      var module = {id: id, exports: {}};
      $parcel$modules[id] = module;
      init.call(module.exports, module, module.exports);
      return module.exports;
    }
    var err = new Error("Cannot find module '" + id + "'");
    err.code = 'MODULE_NOT_FOUND';
    throw err;
  };

  parcelRequire.register = function register(id, init) {
    $parcel$inits[id] = init;
  };

  $parcel$global["parcelRequire91f9"] = parcelRequire;
}
parcelRequire.register("5OAEr", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports["default"] = void 0;

var $480Cv = parcelRequire("480Cv");

var $5pJKI = parcelRequire("5pJKI");
function $43be0d73ed34991b$var$_toConsumableArray(arr) {
    return $43be0d73ed34991b$var$_arrayWithoutHoles(arr) || $43be0d73ed34991b$var$_iterableToArray(arr) || $43be0d73ed34991b$var$_unsupportedIterableToArray(arr) || $43be0d73ed34991b$var$_nonIterableSpread();
}
function $43be0d73ed34991b$var$_nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function $43be0d73ed34991b$var$_unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return $43be0d73ed34991b$var$_arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return $43be0d73ed34991b$var$_arrayLikeToArray(o, minLen);
}
function $43be0d73ed34991b$var$_iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function $43be0d73ed34991b$var$_arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return $43be0d73ed34991b$var$_arrayLikeToArray(arr);
}
function $43be0d73ed34991b$var$_arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
var $43be0d73ed34991b$var$_default = function _default(style) {
    return [].concat($43be0d73ed34991b$var$_toConsumableArray((0, $480Cv.formattedStyleSpecValidate)(style)), $43be0d73ed34991b$var$_toConsumableArray((0, $5pJKI.validateLayers)(style)));
};
module.exports["default"] = $43be0d73ed34991b$var$_default;

});
parcelRequire.register("480Cv", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.formattedStyleSpecValidate = void 0;

function $301863eb3379caee$var$_typeof(obj1) {
    "@babel/helpers - typeof";
    return $301863eb3379caee$var$_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
        return typeof obj;
    } : function(obj) {
        return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, $301863eb3379caee$var$_typeof(obj1);
}
function $301863eb3379caee$var$ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        enumerableOnly && (symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })), keys.push.apply(keys, symbols);
    }
    return keys;
}
function $301863eb3379caee$var$_objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = null != arguments[i] ? arguments[i] : {};
        i % 2 ? $301863eb3379caee$var$ownKeys(Object(source), !0).forEach(function(key) {
            $301863eb3379caee$var$_defineProperty(target, key, source[key]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : $301863eb3379caee$var$ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function $301863eb3379caee$var$_defineProperty(obj, key, value) {
    key = $301863eb3379caee$var$_toPropertyKey(key);
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
function $301863eb3379caee$var$_toPropertyKey(arg) {
    var key = $301863eb3379caee$var$_toPrimitive(arg, "string");
    return $301863eb3379caee$var$_typeof(key) === "symbol" ? key : String(key);
}
function $301863eb3379caee$var$_toPrimitive(input, hint) {
    if ($301863eb3379caee$var$_typeof(input) !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
        var res = prim.call(input, hint || "default");
        if ($301863eb3379caee$var$_typeof(res) !== "object") return res;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
}
var $301863eb3379caee$var$formattedStyleSpecValidate = function formattedStyleSpecValidate(style) {
    var layers = style.layers;
    var validationErrors = (0, $5OpyM$validate)(style);
    var formattedErrors = validationErrors.map(function(e) {
        var message = e.message;
        var matches = message.match(/layers\[\d+\]/g);
        if (!matches) return e;
        var nextMessage = message;
        matches.forEach(function(match) {
            var layerIndex = JSON.parse(match.replace("layers", ""));
            var layer = layers[layerIndex];
            nextMessage = nextMessage.split(match).join(layer.id);
        });
        return $301863eb3379caee$var$_objectSpread($301863eb3379caee$var$_objectSpread({}, e), {}, {
            message: nextMessage
        });
    });
    return formattedErrors;
};
module.exports.formattedStyleSpecValidate = $301863eb3379caee$var$formattedStyleSpecValidate;

});

parcelRequire.register("5pJKI", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.validateLayers = module.exports.validateLayer = void 0;

function $3f12c7039f6a20e0$var$_toConsumableArray(arr) {
    return $3f12c7039f6a20e0$var$_arrayWithoutHoles(arr) || $3f12c7039f6a20e0$var$_iterableToArray(arr) || $3f12c7039f6a20e0$var$_unsupportedIterableToArray(arr) || $3f12c7039f6a20e0$var$_nonIterableSpread();
}
function $3f12c7039f6a20e0$var$_nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function $3f12c7039f6a20e0$var$_unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return $3f12c7039f6a20e0$var$_arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return $3f12c7039f6a20e0$var$_arrayLikeToArray(o, minLen);
}
function $3f12c7039f6a20e0$var$_iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function $3f12c7039f6a20e0$var$_arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return $3f12c7039f6a20e0$var$_arrayLikeToArray(arr);
}
function $3f12c7039f6a20e0$var$_arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/**
 * getPropertyIds
 * Get property ids for either `paint` or `layout` properties
 * @param {string} type - `paint` or `layout`
 * @returns {string[]} - property ids for the given type
 */ var $3f12c7039f6a20e0$var$getPropertyIds = function getPropertyIds(type) {
    var propertyIds = $5OpyM$latest[type].map(function(layerType) {
        return Object.keys($5OpyM$latest[layerType]);
    }).flat(1);
    return Array.from(new Set(propertyIds));
};
var $3f12c7039f6a20e0$var$paintProperties = $3f12c7039f6a20e0$var$getPropertyIds("paint");
var $3f12c7039f6a20e0$var$layoutProperties = $3f12c7039f6a20e0$var$getPropertyIds("layout");
/**
 * validateMisplacedProperties
 * Find property ids at the top level of a layer that should not be there
 * @param {Object} layer - a layer object from a style
 * @param {string[]} ids - property ids to look for
 * @param {string} type - `paint` or `layout`
 * @returns {ValidationError[]} - an error for each id found, if any
 */ var $3f12c7039f6a20e0$var$validateMisplacedProperties = function validateMisplacedProperties(layer, ids, type) {
    return Object.keys(layer).filter(function(key) {
        return ids.includes(key);
    }).map(function(key) {
        return new $5OpyM$ValidationError(layer.id, layer[key], "contains '".concat(key, "' at the top level, but it should be in ").concat(type));
    });
};
var $3f12c7039f6a20e0$var$validateMisplacedPaintProperties = function validateMisplacedPaintProperties(layer) {
    return $3f12c7039f6a20e0$var$validateMisplacedProperties(layer, $3f12c7039f6a20e0$var$paintProperties, "paint");
};
var $3f12c7039f6a20e0$var$validateMisplacedLayoutProperties = function validateMisplacedLayoutProperties(layer) {
    return $3f12c7039f6a20e0$var$validateMisplacedProperties(layer, $3f12c7039f6a20e0$var$layoutProperties, "layout");
};
var $3f12c7039f6a20e0$var$validateLayer = function validateLayer(layer) {
    return [].concat($3f12c7039f6a20e0$var$_toConsumableArray($3f12c7039f6a20e0$var$validateMisplacedLayoutProperties(layer)), $3f12c7039f6a20e0$var$_toConsumableArray($3f12c7039f6a20e0$var$validateMisplacedPaintProperties(layer)));
};
module.exports.validateLayer = $3f12c7039f6a20e0$var$validateLayer;
var $3f12c7039f6a20e0$var$validateLayers = function validateLayers(style) {
    if (!style.layers) return [];
    return style.layers.map($3f12c7039f6a20e0$var$validateLayer).flat(Infinity);
};
module.exports.validateLayers = $3f12c7039f6a20e0$var$validateLayers;

});


var $cf838c15c8b009ba$exports = {};
"use strict";
Object.defineProperty($cf838c15c8b009ba$exports, "__esModule", {
    value: true
});
Object.defineProperty($cf838c15c8b009ba$exports, "lint", {
    enumerable: true,
    get: function get() {
        return $cf838c15c8b009ba$var$_lint["default"];
    }
});

var $cf838c15c8b009ba$var$_lint = $cf838c15c8b009ba$var$_interopRequireDefault((parcelRequire("5OAEr")));
function $cf838c15c8b009ba$var$_interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}


export {$cf838c15c8b009ba$exports as default};
//# sourceMappingURL=module.js.map
