"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generalChangeCityStateCountry = void 0;
var _helpers = require("../helpers");
var generalChangeCityStateCountry = exports.generalChangeCityStateCountry = function generalChangeCityStateCountry(_ref) {
  var options = _ref.options,
    validation = _ref.validation,
    setDefault = _ref.setDefault,
    setValue = _ref.setValue,
    setIsReset = _ref.setIsReset;
  setIsReset(false);
  var defaultValidation = function defaultValidation() {
    return true;
  };
  (0, _helpers.changeSelect)({
    newValue: options,
    validation: validation || defaultValidation,
    setDefault: setDefault,
    setValue: setValue
  });
};