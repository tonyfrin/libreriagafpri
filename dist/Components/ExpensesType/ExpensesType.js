"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ExpensesType = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _react = _interopRequireDefault(require("react"));
var _Loading = require("../Loading");
var _Abstract = require("../../Abstract");
var ExpensesType = exports.ExpensesType = function ExpensesType(_ref) {
  var use = _ref.use,
    initProps = _ref.initProps,
    addFormProps = _ref.addFormProps,
    updateFromProps = _ref.updateFromProps;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, use.pages.states.isFetching && /*#__PURE__*/_react["default"].createElement(_Loading.Loading, null), use.pages.states.isInit && /*#__PURE__*/_react["default"].createElement(_Abstract.FadeIn, {
    keyName: "init",
    isVisible: use.pages.states.isInit
  }, /*#__PURE__*/_react["default"].createElement(_Abstract.InitExpensesType, (0, _extends2["default"])({
    use: use
  }, initProps))), use.pages.states.isAdd && /*#__PURE__*/_react["default"].createElement(_Abstract.FadeIn, {
    keyName: "add",
    isVisible: use.pages.states.isAdd
  }, /*#__PURE__*/_react["default"].createElement(_Abstract.ExpensesTypeForm, (0, _extends2["default"])({
    use: use,
    formType: "add"
  }, addFormProps))), use.pages.states.isUpdate && /*#__PURE__*/_react["default"].createElement(_Abstract.FadeIn, {
    keyName: "update",
    isVisible: use.pages.states.isUpdate
  }, /*#__PURE__*/_react["default"].createElement(_Abstract.ExpensesTypeForm, (0, _extends2["default"])({
    formType: "update",
    use: use
  }, updateFromProps))));
};