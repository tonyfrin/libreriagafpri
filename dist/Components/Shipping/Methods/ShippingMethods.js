"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ShippingMethods = void 0;
var _react = _interopRequireDefault(require("react"));
var _Loading = require("../../Loading");
var _Abstract = require("../../../Abstract");
var ShippingMethods = exports.ShippingMethods = function ShippingMethods(_ref) {
  var use = _ref.use,
    useRoles = _ref.useRoles;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, use.pages.states.isFetching && /*#__PURE__*/_react["default"].createElement(_Loading.Loading, null), use.pages.states.isAdd && /*#__PURE__*/_react["default"].createElement(_Abstract.FadeIn, {
    keyName: "add",
    isVisible: use.pages.states.isAdd
  }, /*#__PURE__*/_react["default"].createElement(_Abstract.ShippingMethodsForm, {
    use: use,
    useRoles: useRoles,
    formType: "add"
  })), use.pages.states.isUpdate && /*#__PURE__*/_react["default"].createElement(_Abstract.FadeIn, {
    keyName: "update",
    isVisible: use.pages.states.isUpdate
  }, /*#__PURE__*/_react["default"].createElement(_Abstract.ShippingMethodsForm, {
    use: use,
    useRoles: useRoles,
    formType: "update"
  })));
};