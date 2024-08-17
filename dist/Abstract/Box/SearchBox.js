"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SearchBox = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _react = _interopRequireDefault(require("react"));
var _Title = require("../Title");
var _css = require("@emotion/css");
var _excluded = ["className"],
  _excluded2 = ["className"];
var _templateObject, _templateObject2;
var SearchBoxStylesContainer = function SearchBoxStylesContainer(styles) {
  return (0, _css.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  padding: ", ";\n  width: ", ";\n  border-radius: ", ";\n  background-color: ", ";\n  margin: ", ";\n  ", "\n"])), styles.padding || '40px', styles.width || '60%', styles.borderRadius || '10px', styles.backgroundColor || '#fff', styles.margin || '30px auto', styles.custom || '');
};
var SearchBoxStylesContent = function SearchBoxStylesContent(styles) {
  return (0, _css.css)(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  ", "\n"])), styles.custom || '');
};
var SearchBox = exports.SearchBox = function SearchBox(_ref) {
  var _ref$containerStyles = _ref.containerStyles,
    containerStyles = _ref$containerStyles === void 0 ? {} : _ref$containerStyles,
    _ref$containerProps = _ref.containerProps,
    containerProps = _ref$containerProps === void 0 ? {} : _ref$containerProps,
    _ref$contentStyles = _ref.contentStyles,
    contentStyles = _ref$contentStyles === void 0 ? {} : _ref$contentStyles,
    _ref$contentProps = _ref.contentProps,
    contentProps = _ref$contentProps === void 0 ? {} : _ref$contentProps,
    title1Props = _ref.title1Props,
    title2Props = _ref.title2Props,
    children = _ref.children;
  var containerClassName = containerProps.className,
    restContainerProps = (0, _objectWithoutProperties2["default"])(containerProps, _excluded);
  var contentClassName = contentProps.className,
    restContentProps = (0, _objectWithoutProperties2["default"])(contentProps, _excluded2);
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("form", (0, _extends2["default"])({
    className: (0, _css.cx)(SearchBoxStylesContainer(containerStyles), containerClassName)
  }, restContainerProps), /*#__PURE__*/_react["default"].createElement("div", (0, _extends2["default"])({
    className: (0, _css.cx)(SearchBoxStylesContent(contentStyles), contentClassName)
  }, restContentProps), /*#__PURE__*/_react["default"].createElement(_Title.Title1, title1Props), /*#__PURE__*/_react["default"].createElement(_Title.Title2, title2Props)), children));
};