"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generalChangeCurrenciesDecimalNumbers = void 0;
var _helpers = require("../helpers");
var generalChangeCurrenciesDecimalNumbers = exports.generalChangeCurrenciesDecimalNumbers = function generalChangeCurrenciesDecimalNumbers(_ref) {
  var options = _ref.options,
    validation = _ref.validation,
    setDefault = _ref.setDefault,
    setValue = _ref.setValue;
  var value = options ? parseInt(options.value, 10) : 0;
  var label = (options === null || options === void 0 ? void 0 : options.label) || '';
  var newOptions = {
    value: value,
    label: label
  };
  var defaultValidation = function defaultValidation() {
    return true;
  };
  (0, _helpers.changeSelect)({
    newValue: newOptions,
    validation: validation || defaultValidation,
    setDefault: setDefault,
    setValue: setValue
  });
};