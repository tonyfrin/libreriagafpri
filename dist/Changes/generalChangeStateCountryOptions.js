"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generalChangeStateCountryOptions = void 0;
var _constants = require("../constants");
var generalChangeStateCountryOptions = exports.generalChangeStateCountryOptions = function generalChangeStateCountryOptions(_ref) {
  var _StatesCountries$0$co;
  var country = _ref.country,
    setStateCountryDefault = _ref.setStateCountryDefault,
    setStateCountry = _ref.setStateCountry,
    setStateCountryOptions = _ref.setStateCountryOptions,
    isReset = _ref.isReset;
  var newValueState = [];
  if (country && ((_StatesCountries$0$co = _constants.StatesCountries[0][country]) === null || _StatesCountries$0$co === void 0 ? void 0 : _StatesCountries$0$co.length) > 0) {
    _constants.StatesCountries[0][country].forEach(function (item) {
      Object.keys(item).forEach(function (key) {
        newValueState.push({
          value: key,
          label: item[key]
        });
      });
    });
  }
  if (isReset) {
    setStateCountryDefault(_constants.STATE_COUNTRY_DEFAULT);
    setStateCountry(_constants.STATE_COUNTRY_DEFAULT.value);
  } else {
    setStateCountryDefault({
      label: 'Elija el Estado',
      value: ''
    });
    setStateCountry('');
  }
  setStateCountryOptions(newValueState);
};