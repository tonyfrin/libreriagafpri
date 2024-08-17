"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LineInfoThree = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _react = _interopRequireDefault(require("react"));
var _css = require("@emotion/css");
var _Button = require("../Button");
var _excluded = ["className"],
  _excluded2 = ["className"],
  _excluded3 = ["className"],
  _excluded4 = ["className"],
  _excluded5 = ["className"],
  _excluded6 = ["className"];
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6;
var lineInfoThreeStylesContainer = function lineInfoThreeStylesContainer(styles) {
  return (0, _css.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  display: ", ";\n  width: ", ";\n  ", "\n"])), styles.display || 'flex', styles.width || '100%', styles.custom || '');
};
var lineInfoThreeStylesContentTitle = function lineInfoThreeStylesContentTitle(styles) {
  return (0, _css.css)(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  margin: ", ";\n  width: ", ";\n  font-weight: ", ";\n  ", "\n"])), styles.margin || '8px auto', styles.width || '33.3333333%', styles.fontWeight || '700', styles.custom || '');
};
var lineInfoThreeStylesSpanTitle = function lineInfoThreeStylesSpanTitle(styles) {
  return (0, _css.css)(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n  font-size: ", ";\n  margin: ", ";\n  ", "\n"])), styles.fontSize || '15px', styles.margin || '0.5em', styles.custom || '');
};
var lineInfoThreeStylesContentInfo = function lineInfoThreeStylesContentInfo(styles) {
  return (0, _css.css)(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2["default"])(["\n  width: ", ";\n  margin: ", ";\n  ", "\n"])), styles.width || '50%', styles.margin || 'auto', styles.custom || '');
};
var lineInfoThreeStylesSpanInfo = function lineInfoThreeStylesSpanInfo(styles) {
  return (0, _css.css)(_templateObject5 || (_templateObject5 = (0, _taggedTemplateLiteral2["default"])(["\n  font-size: ", ";\n  margin: ", ";\n  ", "\n"])), styles.fontSize || '15px', styles.margin || 'auto', styles.custom || '');
};
var lineInfoThreeStylesContentButton = function lineInfoThreeStylesContentButton(styles) {
  return (0, _css.css)(_templateObject6 || (_templateObject6 = (0, _taggedTemplateLiteral2["default"])(["\n  width: ", ";\n  margin: ", ";\n  ", "\n"])), styles.width || '16.6666667%', styles.margin || 'auto', styles.custom || '');
};
var LineInfoThree = exports.LineInfoThree = function LineInfoThree(_ref) {
  var _ref$containerStyles = _ref.containerStyles,
    containerStyles = _ref$containerStyles === void 0 ? {} : _ref$containerStyles,
    _ref$containerProps = _ref.containerProps,
    containerProps = _ref$containerProps === void 0 ? {} : _ref$containerProps,
    _ref$contentTitleStyl = _ref.contentTitleStyles,
    contentTitleStyles = _ref$contentTitleStyl === void 0 ? {} : _ref$contentTitleStyl,
    _ref$contentTitleProp = _ref.contentTitleProps,
    contentTitleProps = _ref$contentTitleProp === void 0 ? {} : _ref$contentTitleProp,
    _ref$spanTitleStyles = _ref.spanTitleStyles,
    spanTitleStyles = _ref$spanTitleStyles === void 0 ? {} : _ref$spanTitleStyles,
    _ref$spanTitleProps = _ref.spanTitleProps,
    spanTitleProps = _ref$spanTitleProps === void 0 ? {} : _ref$spanTitleProps,
    title = _ref.title,
    _ref$contentInfoStyle = _ref.contentInfoStyles,
    contentInfoStyles = _ref$contentInfoStyle === void 0 ? {} : _ref$contentInfoStyle,
    _ref$contentInfoProps = _ref.contentInfoProps,
    contentInfoProps = _ref$contentInfoProps === void 0 ? {} : _ref$contentInfoProps,
    _ref$spanInfoStyles = _ref.spanInfoStyles,
    spanInfoStyles = _ref$spanInfoStyles === void 0 ? {} : _ref$spanInfoStyles,
    _ref$spanInfoProps = _ref.spanInfoProps,
    spanInfoProps = _ref$spanInfoProps === void 0 ? {} : _ref$spanInfoProps,
    info = _ref.info,
    _ref$contentButtonSty = _ref.contentButtonStyles,
    contentButtonStyles = _ref$contentButtonSty === void 0 ? {} : _ref$contentButtonSty,
    _ref$contentButtonPro = _ref.contentButtonProps,
    contentButtonProps = _ref$contentButtonPro === void 0 ? {} : _ref$contentButtonPro,
    buttonProps = _ref.buttonProps;
  var containerClassName = containerProps.className,
    restContainerProps = (0, _objectWithoutProperties2["default"])(containerProps, _excluded);
  var contentTitleClassName = contentTitleProps.className,
    restContentTitleProps = (0, _objectWithoutProperties2["default"])(contentTitleProps, _excluded2);
  var spanTitleClassName = spanTitleProps.className,
    restSpanTitleProps = (0, _objectWithoutProperties2["default"])(spanTitleProps, _excluded3);
  var contentInfoClassName = contentInfoProps.className,
    restContentInfoProps = (0, _objectWithoutProperties2["default"])(contentInfoProps, _excluded4);
  var spanInfoClassName = spanInfoProps.className,
    restSpanInfoProps = (0, _objectWithoutProperties2["default"])(spanInfoProps, _excluded5);
  var contentButtonClassName = contentButtonProps.className,
    restContentButtonProps = (0, _objectWithoutProperties2["default"])(contentButtonProps, _excluded6);
  return /*#__PURE__*/_react["default"].createElement("div", (0, _extends2["default"])({
    className: (0, _css.cx)(lineInfoThreeStylesContainer(containerStyles), containerClassName)
  }, restContainerProps), /*#__PURE__*/_react["default"].createElement("div", (0, _extends2["default"])({
    className: (0, _css.cx)(lineInfoThreeStylesContentTitle(contentTitleStyles), contentTitleClassName)
  }, restContentTitleProps), /*#__PURE__*/_react["default"].createElement("span", (0, _extends2["default"])({
    className: (0, _css.cx)(lineInfoThreeStylesSpanTitle(spanTitleStyles), spanTitleClassName)
  }, restSpanTitleProps), title)), /*#__PURE__*/_react["default"].createElement("div", (0, _extends2["default"])({
    className: (0, _css.cx)(lineInfoThreeStylesContentInfo(contentInfoStyles), contentInfoClassName)
  }, restContentInfoProps), /*#__PURE__*/_react["default"].createElement("span", (0, _extends2["default"])({
    className: (0, _css.cx)(lineInfoThreeStylesSpanInfo(spanInfoStyles), spanInfoClassName)
  }, restSpanInfoProps), info)), /*#__PURE__*/_react["default"].createElement("div", (0, _extends2["default"])({
    className: (0, _css.cx)(lineInfoThreeStylesContentButton(contentButtonStyles), contentButtonClassName)
  }, restContentButtonProps), /*#__PURE__*/_react["default"].createElement(_Button.Button, buttonProps)));
};