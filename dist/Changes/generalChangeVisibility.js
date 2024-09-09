"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generalChangeVisibility = void 0;
var _helpers = require("../helpers");
var generalChangeVisibility = exports.generalChangeVisibility = function generalChangeVisibility(_ref) {
  var options = _ref.options,
    validation = _ref.validation,
    setDefault = _ref.setDefault,
    setValue = _ref.setValue;
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