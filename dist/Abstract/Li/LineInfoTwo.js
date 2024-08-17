"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LineInfoTwo = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _react = _interopRequireDefault(require("react"));
var _css = require("@emotion/css");
var _excluded = ["className"],
  _excluded2 = ["className"],
  _excluded3 = ["className"],
  _excluded4 = ["className"],
  _excluded5 = ["className"];
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;
var lineInfoTwoStylesContainer = function lineInfoTwoStylesContainer(styles) {
  return (0, _css.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  display: ", ";\n  width: ", ";\n  ", "\n"])), styles.display || 'flex', styles.width || '100%', styles.custom || '');
};
var lineInfoTwoStylesContentTitle = function lineInfoTwoStylesContentTitle(styles) {
  return (0, _css.css)(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  width: ", ";\n  margin: ", ";\n  font-weight: ", ";\n  ", "\n"])), styles.width || '33.3333333%', styles.margin || '8px auto', styles.fontWeight || '700', styles.custom || '');
};
var lineInfoTwoStylesSpanTitle = function lineInfoTwoStylesSpanTitle(styles) {
  return (0, _css.css)(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n  font-size: ", ";\n  margin: ", ";\n  ", "\n"])), styles.fontSize || '15px', styles.margin || '0.5em', styles.custom || '');
};
var lineInfoTwoStylesContentInfo = function lineInfoTwoStylesContentInfo(styles) {
  return (0, _css.css)(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2["default"])(["\n  width: ", ";\n  margin: ", ";\n  ", "\n"])), styles.width || '66.6666667%', styles.margin || 'auto', styles.custom || '');
};
var lineInfoTwoStylesSpanInfo = function lineInfoTwoStylesSpanInfo(styles) {
  return (0, _css.css)(_templateObject5 || (_templateObject5 = (0, _taggedTemplateLiteral2["default"])(["\n  font-size: ", ";\n  margin: ", ";\n  ", "\n"])), styles.fontSize || '15px', styles.margin || 'auto', styles.custom || '');
};
var LineInfoTwo = exports.LineInfoTwo = function LineInfoTwo(_ref) {
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
    info = _ref.info;
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
  return /*#__PURE__*/_react["default"].createElement("div", (0, _extends2["default"])({
    className: (0, _css.cx)(lineInfoTwoStylesContainer(containerStyles), containerClassName)
  }, restContainerProps), /*#__PURE__*/_react["default"].createElement("div", (0, _extends2["default"])({
    className: (0, _css.cx)(lineInfoTwoStylesContentTitle(contentTitleStyles), contentTitleClassName)
  }, restContentTitleProps), /*#__PURE__*/_react["default"].createElement("span", (0, _extends2["default"])({
    className: (0, _css.cx)(lineInfoTwoStylesSpanTitle(spanTitleStyles), spanTitleClassName)
  }, restSpanTitleProps), title)), /*#__PURE__*/_react["default"].createElement("div", (0, _extends2["default"])({
    className: (0, _css.cx)(lineInfoTwoStylesContentInfo(contentInfoStyles), contentInfoClassName)
  }, restContentInfoProps), /*#__PURE__*/_react["default"].createElement("span", (0, _extends2["default"])({
    className: (0, _css.cx)(lineInfoTwoStylesSpanInfo(spanInfoStyles), spanInfoClassName)
  }, restSpanInfoProps), info)));
};