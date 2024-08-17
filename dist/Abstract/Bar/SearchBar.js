"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SearchBar = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _react = _interopRequireDefault(require("react"));
var _css = require("@emotion/css");
var _Button = require("../Button");
var _Input = require("../Input");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10;
var defaultMainContainerStyle = (0, _css.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background: transparent;\n  font-size: 100%;\n  margin: 0;\n  padding: 0;\n  border: 0;\n  vertical-align: top;\n  border-spacing: 0;\n  border-collapse: collapse;\n"])));
var defaultInfoContainerStyle = (0, _css.css)(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  width: 100%;\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  background: transparent;\n  font-size: 100%;\n  margin: 0;\n  padding: 0;\n  border: 0;\n  vertical-align: top;\n  border-spacing: 0;\n  border-collapse: collapse;\n"])));
var defaultTitleContainerStyle = (0, _css.css)(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n  font-family: 'Poppins', sans-serif;\n  font-weight: 700;\n  font-size: 1.25rem;\n  color: rgb(38, 35, 33);\n  line-height: 1.5;\n  padding: 1rem 0px;\n  background: transparent;\n  margin: 0;\n  border: 0;\n  vertical-align: top;\n  border-spacing: 0;\n  border-collapse: collapse;\n"])));
var defaultBreakContainerStyle = (0, _css.css)(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2["default"])(["\n  margin: 0px 1rem;\n  border-left: 2px solid rgb(178, 171, 165);\n  height: 1.5rem;\n  background: transparent;\n  vertical-align: top;\n  border-spacing: 0;\n  border-collapse: collapse;\n"])));
var defaultBreakStyle = (0, _css.css)(_templateObject5 || (_templateObject5 = (0, _taggedTemplateLiteral2["default"])(["\n  font-family: 'Poppins', sans-serif;\n  font-weight: 300;\n  font-size: 0.875rem;\n  color: rgb(38, 35, 33);\n  line-height: 1.25rem;\n  flex-shrink: 0;\n"])));
var defaultInputMainContainerStyle = (0, _css.css)(_templateObject6 || (_templateObject6 = (0, _taggedTemplateLiteral2["default"])(["\n  width: 50%;\n  max-width: 50%;\n  margin-right: 0px;\n  margin-left: auto;\n  background: transparent;\n  font-size: 100%;\n  padding: 0;\n  border: 0;\n  vertical-align: top;\n  border-spacing: 0;\n  border-collapse: collapse;\n  display: flex;\n  justify-content: space-around;\n"])));
var defaultHiddenInputContainerStyle = (0, _css.css)(_templateObject7 || (_templateObject7 = (0, _taggedTemplateLiteral2["default"])(["\n  background: transparent;\n  font-size: 100%;\n  margin: 0;\n  padding: 0;\n  border: 0;\n  vertical-align: top;\n  border-spacing: 0;\n  border-collapse: collapse;\n  margin: auto;\n"])));
var defaultInputMiddleContainerStyle = (0, _css.css)(_templateObject8 || (_templateObject8 = (0, _taggedTemplateLiteral2["default"])(["\n  background: transparent;\n  font-family: 'Poppins', sans-serif;\n  font-weight: 400;\n  font-size: 0.875rem;\n  color: rgb(38, 35, 33);\n  line-height: 1.25rem;\n  border-radius: 0.5rem;\n  background-color: rgb(255, 255, 255);\n  box-sizing: border-box;\n  border-color: rgb(178, 171, 165);\n  border-width: 2px;\n  border-style: solid;\n  cursor: text;\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin: 0;\n  padding: 0;\n  vertical-align: top;\n"])));
var defaultInputContainerStyle = (0, _css.css)(_templateObject9 || (_templateObject9 = (0, _taggedTemplateLiteral2["default"])(["\n  position: relative;\n  flex-grow: 1;\n  max-width: 100%;\n  overflow: hidden;\n  margin: 0px;\n  padding: 0;\n  border: 0;\n  vertical-align: top;\n  border-spacing: 0;\n  border-collapse: collapse;\n  background: transparent;\n"])));
var defaultInputStyle = (0, _css.css)(_templateObject10 || (_templateObject10 = (0, _taggedTemplateLiteral2["default"])(["\n  font-family: 'Poppins', sans-serif;\n  font-weight: 300;\n  font-size: 1rem;\n  color: rgb(114, 108, 102);\n  line-height: 1.25rem;\n  outline: none;\n  border: none;\n  box-sizing: border-box;\n  box-shadow: none;\n  background-color: transparent;\n  margin: 0px;\n  padding: 0.5rem;\n  height: 100%;\n  width: 100%;\n  border-radius: 0.5rem;\n"])));
var SearchBar = exports.SearchBar = function SearchBar(_ref) {
  var _selectProps$options, _selectByProps$option;
  var label = _ref.label,
    inputProps = _ref.inputProps,
    selectProps = _ref.selectProps,
    selectByProps = _ref.selectByProps,
    actionButton = _ref.actionButton,
    _ref$mainContainerSty = _ref.mainContainerStyle,
    mainContainerStyle = _ref$mainContainerSty === void 0 ? defaultMainContainerStyle : _ref$mainContainerSty,
    _ref$infoContainerSty = _ref.infoContainerStyle,
    infoContainerStyle = _ref$infoContainerSty === void 0 ? defaultInfoContainerStyle : _ref$infoContainerSty,
    _ref$titleContainerSt = _ref.titleContainerStyle,
    titleContainerStyle = _ref$titleContainerSt === void 0 ? defaultTitleContainerStyle : _ref$titleContainerSt,
    _ref$breakContainerSt = _ref.breakContainerStyle,
    breakContainerStyle = _ref$breakContainerSt === void 0 ? defaultBreakContainerStyle : _ref$breakContainerSt,
    _ref$breakStyle = _ref.breakStyle,
    breakStyle = _ref$breakStyle === void 0 ? defaultBreakStyle : _ref$breakStyle,
    _ref$inputMainContain = _ref.inputMainContainerStyle,
    inputMainContainerStyle = _ref$inputMainContain === void 0 ? defaultInputMainContainerStyle : _ref$inputMainContain,
    _ref$hiddenInputConta = _ref.hiddenInputContainerStyle,
    hiddenInputContainerStyle = _ref$hiddenInputConta === void 0 ? defaultHiddenInputContainerStyle : _ref$hiddenInputConta,
    _ref$inputMiddleConta = _ref.inputMiddleContainerStyle,
    inputMiddleContainerStyle = _ref$inputMiddleConta === void 0 ? defaultInputMiddleContainerStyle : _ref$inputMiddleConta,
    _ref$inputContainerSt = _ref.inputContainerStyle,
    inputContainerStyle = _ref$inputContainerSt === void 0 ? defaultInputContainerStyle : _ref$inputContainerSt,
    _ref$inputStyle = _ref.inputStyle,
    inputStyle = _ref$inputStyle === void 0 ? defaultInputStyle : _ref$inputStyle;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _css.css)(mainContainerStyle)
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _css.css)(infoContainerStyle)
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _css.css)(titleContainerStyle)
  }, label), /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _css.css)(breakContainerStyle)
  }), actionButton && /*#__PURE__*/_react["default"].createElement(_Button.Button, actionButton), selectProps && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("span", {
    className: (0, _css.css)(breakStyle)
  }, "Ordenar por"), /*#__PURE__*/_react["default"].createElement(_Input.GsSelect, (0, _extends2["default"])({}, selectProps, {
    options: (_selectProps$options = selectProps === null || selectProps === void 0 ? void 0 : selectProps.options) !== null && _selectProps$options !== void 0 ? _selectProps$options : [],
    containerStyles: {
      width: '50%'
    }
  }))), /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _css.css)(inputMainContainerStyle)
  }, selectByProps && /*#__PURE__*/_react["default"].createElement(_Input.GsSelect, (0, _extends2["default"])({}, selectByProps, {
    options: (_selectByProps$option = selectByProps === null || selectByProps === void 0 ? void 0 : selectByProps.options) !== null && _selectByProps$option !== void 0 ? _selectByProps$option : [],
    containerStyles: {
      width: '50%'
    }
  })), (inputProps === null || inputProps === void 0 ? void 0 : inputProps.placeholder) && /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _css.css)(hiddenInputContainerStyle)
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _css.css)(inputMiddleContainerStyle)
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _css.css)(inputContainerStyle)
  }, /*#__PURE__*/_react["default"].createElement("input", (0, _extends2["default"])({
    className: (0, _css.css)(inputStyle)
  }, inputProps))))))));
};