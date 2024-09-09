"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generalChangeCatalogOrder = void 0;
var _helpers = require("../helpers");
var generalChangeCatalogOrder = exports.generalChangeCatalogOrder = function generalChangeCatalogOrder(_ref) {
  var value = _ref.value,
    validation = _ref.validation,
    setValue = _ref.setValue;
  (0, _helpers.changeInputNumers)(value, validation || function () {
    return true;
  }, setValue);
};