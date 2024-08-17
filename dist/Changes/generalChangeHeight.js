"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generalChangeHeight = void 0;
var _helpers = require("../helpers");
var generalChangeHeight = exports.generalChangeHeight = function generalChangeHeight(_ref) {
  var value = _ref.value,
    validation = _ref.validation,
    setValue = _ref.setValue;
  var defaultValidation = function defaultValidation() {
    return true;
  };
  (0, _helpers.changeInputNumers)(value, validation || defaultValidation, setValue);
};