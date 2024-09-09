"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generalChangeCreditTimeToPay = void 0;
var _helpers = require("../helpers");
var generalChangeCreditTimeToPay = exports.generalChangeCreditTimeToPay = function generalChangeCreditTimeToPay(_ref) {
  var value = _ref.value,
    validation = _ref.validation,
    setValue = _ref.setValue;
  (0, _helpers.changeInputNumers)(value, validation || function () {
    return true;
  }, setValue);
};