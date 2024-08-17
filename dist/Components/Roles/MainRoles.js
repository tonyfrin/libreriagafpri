"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MainRoles = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _react = _interopRequireDefault(require("react"));
var _Loading = require("../Loading");
var _Abstract = require("../../Abstract");
var MainRoles = exports.MainRoles = function MainRoles(_ref) {
  var use = _ref.use,
    initProps = _ref.initProps,
    addFormProps = _ref.addFormProps,
    updateFormProps = _ref.updateFormProps;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, use.states.isFetching && /*#__PURE__*/_react["default"].createElement(_Loading.Loading, null), use.states.isInit && /*#__PURE__*/_react["default"].createElement(_Abstract.FadeIn, {
    keyName: "init",
    isVisible: use.states.isInit
  }, /*#__PURE__*/_react["default"].createElement(_Abstract.InitRoles, (0, _extends2["default"])({
    use: use
  }, initProps))), use.states.isAdd && /*#__PURE__*/_react["default"].createElement(_Abstract.FadeIn, {
    keyName: "add",
    isVisible: use.states.isAdd
  }, /*#__PURE__*/_react["default"].createElement(_Abstract.RolesForm, (0, _extends2["default"])({
    use: use,
    formType: "add"
  }, addFormProps))), use.states.isUpdate && /*#__PURE__*/_react["default"].createElement(_Abstract.FadeIn, {
    keyName: "update",
    isVisible: use.states.isUpdate
  }, /*#__PURE__*/_react["default"].createElement(_Abstract.RolesForm, (0, _extends2["default"])({
    formType: "update",
    use: use
  }, updateFormProps))));
};