"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OPTIONS_SHIPPING_SERVICES_DEFAULT = exports.OPTIONS_SHIPPING_SERVICES = exports.OPTIONS_SHIPPING_METHODS_TYPE_DEFAULT = exports.OPTIONS_SHIPPING_METHODS_TYPE = exports.OPTIONS_SHIPPING_METHODS_STATUS_DEFAULT = exports.OPTIONS_SHIPPING_METHODS_STATUS = exports.OPTIONS_REGION = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _StatesCountries = require("./StatesCountries");
var _Cities = require("./Cities");
var OPTIONS_REGION = exports.OPTIONS_REGION = function OPTIONS_REGION() {
  var optionsRegion = [{
    value: 'VE',
    label: 'Venezuela'
  }];
  var venezuelaData = _StatesCountries.StatesCountries.find(function (country) {
    return Object.prototype.hasOwnProperty.call(country, 'VE');
  });
  if (venezuelaData) {
    /* eslint-disable no-restricted-syntax */
    for (var _i = 0, _Object$entries = Object.entries(venezuelaData.VE[0]); _i < _Object$entries.length; _i++) {
      var _Object$entries$_i = (0, _slicedToArray2["default"])(_Object$entries[_i], 2),
        key = _Object$entries$_i[0],
        value = _Object$entries$_i[1];
      optionsRegion.push({
        value: key,
        label: value
      });
    }
    /* eslint-enable no-restricted-syntax */
  }
  var optionsCity = [];
  optionsRegion.map(function (state) {
    var stateKey = state === null || state === void 0 ? void 0 : state.value;
    if (stateKey !== 'VE' && stateKey !== undefined) {
      var cities = _Cities.Cities[0].VE[0][stateKey][0];

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      Object.entries(cities).forEach(function (_ref) {
        var _ref2 = (0, _slicedToArray2["default"])(_ref, 2),
          _ = _ref2[0],
          value = _ref2[1];
        return optionsCity.push({
          value: value,
          label: value
        });
      });
    }
    return null;
  });
  var mergedArray = [].concat(optionsRegion, optionsCity);
  return mergedArray;
};
var OPTIONS_SHIPPING_METHODS_TYPE = exports.OPTIONS_SHIPPING_METHODS_TYPE = [{
  value: 'percent',
  label: 'Porcentaje'
}, {
  value: 'flat_rate',
  label: 'Costo fijo'
}, {
  value: 'free_shipping',
  label: 'Grátis'
}, {
  value: 'volume',
  label: 'Volumen'
}];
var OPTIONS_SHIPPING_METHODS_TYPE_DEFAULT = exports.OPTIONS_SHIPPING_METHODS_TYPE_DEFAULT = {
  value: '',
  label: 'Elija el tipo de método de envío'
};
var OPTIONS_SHIPPING_SERVICES = exports.OPTIONS_SHIPPING_SERVICES = [{
  value: 'express',
  label: 'Express'
}, {
  value: 'delivery',
  label: 'Delivery'
}, {
  value: 'standar',
  label: 'Standar'
}];
var OPTIONS_SHIPPING_SERVICES_DEFAULT = exports.OPTIONS_SHIPPING_SERVICES_DEFAULT = {
  value: '',
  label: 'Elija el tipo de servicio de envío'
};
var OPTIONS_SHIPPING_METHODS_STATUS = exports.OPTIONS_SHIPPING_METHODS_STATUS = [{
  value: 'enabled',
  label: 'Habilitado'
}, {
  value: 'disabled',
  label: 'Deshabilitado'
}];
var OPTIONS_SHIPPING_METHODS_STATUS_DEFAULT = exports.OPTIONS_SHIPPING_METHODS_STATUS_DEFAULT = {
  value: 'enabled',
  label: 'Habilitado'
};