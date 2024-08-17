"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MainStorage = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _react = _interopRequireDefault(require("react"));
var _Loading = require("../Loading");
var _Abstract = require("../../Abstract");
var MainStorage = exports.MainStorage = function MainStorage(_ref) {
  var use = _ref.use,
    useSites = _ref.useSites,
    initStorageProps = _ref.initStorageProps,
    addFormProps = _ref.addFormProps,
    updateFormProps = _ref.updateFormProps;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, use.pages.states.isFetching && /*#__PURE__*/_react["default"].createElement(_Loading.Loading, null), use.pages.states.isInit && /*#__PURE__*/_react["default"].createElement(_Abstract.FadeIn, {
    keyName: "init",
    isVisible: use.pages.states.isInit
  }, /*#__PURE__*/_react["default"].createElement(_Abstract.InitStorage, (0, _extends2["default"])({
    use: use
  }, initStorageProps))), use.pages.states.isAdd && /*#__PURE__*/_react["default"].createElement(_Abstract.FadeIn, {
    keyName: "add",
    isVisible: use.pages.states.isAdd
  }, /*#__PURE__*/_react["default"].createElement(_Abstract.StorageForm, (0, _extends2["default"])({
    use: use,
    formType: "add"
  }, addFormProps, {
    useSites: useSites
  }))), use.pages.states.isUpdate && /*#__PURE__*/_react["default"].createElement(_Abstract.FadeIn, {
    keyName: "update",
    isVisible: use.pages.states.isUpdate
  }, /*#__PURE__*/_react["default"].createElement(_Abstract.StorageForm, (0, _extends2["default"])({
    formType: "update",
    use: use,
    useSites: useSites
  }, updateFormProps))));
};