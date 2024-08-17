"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generalChangeAttributes = void 0;
var _helpers = require("../helpers");
var generalChangeAttributes = exports.generalChangeAttributes = function generalChangeAttributes(_ref) {
  var newValue = _ref.newValue,
    selectedOptions = _ref.selectedOptions,
    validation = _ref.validation,
    setValue = _ref.setValue;
  var defaultValidation = function defaultValidation() {
    return true;
  };
  (0, _helpers.changeMultipleObjectAttributesInput)({
    newValue: newValue,
    selectedOptions: selectedOptions,
    validation: validation || defaultValidation,
    setValue: setValue
  });
};