"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ShippingAreas = void 0;
var _react = _interopRequireDefault(require("react"));
var _Loading = require("../../Loading");
var _Abstract = require("../../../Abstract");
var ShippingAreas = exports.ShippingAreas = function ShippingAreas(_ref) {
  var use = _ref.use,
    useLogin = _ref.useLogin;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, use.pages.states.isFetching && /*#__PURE__*/_react["default"].createElement(_Loading.Loading, null), use.pages.states.isInit && /*#__PURE__*/_react["default"].createElement(_Abstract.FadeIn, {
    keyName: "init",
    isVisible: use.pages.states.isInit
  }, /*#__PURE__*/_react["default"].createElement(_Abstract.InitShippingAreas, {
    use: use,
    useLogin: useLogin
  })), use.pages.states.isAdd && /*#__PURE__*/_react["default"].createElement(_Abstract.FadeIn, {
    keyName: "add",
    isVisible: use.pages.states.isAdd
  }, /*#__PURE__*/_react["default"].createElement(_Abstract.ShippingAreasForm, {
    use: use,
    formType: "add"
  })), use.pages.states.isUpdate && /*#__PURE__*/_react["default"].createElement(_Abstract.FadeIn, {
    keyName: "update",
    isVisible: use.pages.states.isUpdate
  }, /*#__PURE__*/_react["default"].createElement(_Abstract.ShippingAreasForm, {
    use: use,
    formType: "update"
  })));
};