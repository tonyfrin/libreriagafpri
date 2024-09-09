"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generalChangeParentId = void 0;
var _helpers = require("../helpers");
var generalChangeParentId = exports.generalChangeParentId = function generalChangeParentId(_ref) {
  var options = _ref.options,
    validation = _ref.validation,
    setDefault = _ref.setDefault,
    setValue = _ref.setValue;
  var value = (options === null || options === void 0 ? void 0 : options.value) || '';
  var label = (options === null || options === void 0 ? void 0 : options.label) || 'Sin categoría padre';
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