"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generalChangeQtyPack = void 0;
var _helpers = require("../helpers");
var generalChangeQtyPack = exports.generalChangeQtyPack = function generalChangeQtyPack(_ref) {
  var value = _ref.value,
    validation = _ref.validation,
    setValue = _ref.setValue;
  var defaultValidation = function defaultValidation() {
    return true;
  };
  (0, _helpers.changeInputNumers)(value, validation || defaultValidation, setValue);
};