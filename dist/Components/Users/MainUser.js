"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MainUser = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _react = _interopRequireDefault(require("react"));
var _Loading = require("../Loading");
var _Abstract = require("../../Abstract");
var MainUser = exports.MainUser = function MainUser(_ref) {
  var use = _ref.use,
    initProps = _ref.initProps,
    addFormProps = _ref.addFormProps,
    updateFormProps = _ref.updateFormProps,
    viewFormProps = _ref.viewFormProps;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, use.states.isFetching && /*#__PURE__*/_react["default"].createElement(_Loading.Loading, null), use.states.isInit && /*#__PURE__*/_react["default"].createElement(_Abstract.FadeIn, {
    keyName: "init",
    isVisible: use.states.isInit
  }, /*#__PURE__*/_react["default"].createElement(_Abstract.InitUser, (0, _extends2["default"])({
    use: use
  }, initProps))), use.states.isAdd && /*#__PURE__*/_react["default"].createElement(_Abstract.FadeIn, {
    keyName: "add",
    isVisible: use.states.isAdd
  }, /*#__PURE__*/_react["default"].createElement(_Abstract.UserForm, (0, _extends2["default"])({
    use: use,
    formType: "add"
  }, addFormProps))), use.states.isUpdate && /*#__PURE__*/_react["default"].createElement(_Abstract.FadeIn, {
    keyName: "update",
    isVisible: use.states.isUpdate
  }, /*#__PURE__*/_react["default"].createElement(_Abstract.UserFormUpdate, (0, _extends2["default"])({
    use: use
  }, updateFormProps))), use.states.isView && /*#__PURE__*/_react["default"].createElement(_Abstract.FadeIn, {
    keyName: "view",
    isVisible: use.states.isView
  }, /*#__PURE__*/_react["default"].createElement(_Abstract.UserView, (0, _extends2["default"])({
    use: use
  }, viewFormProps))));
};