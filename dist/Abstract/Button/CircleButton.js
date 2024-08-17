"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CircleButton = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _react = _interopRequireDefault(require("react"));
var _css = require("@emotion/css");
var _excluded = ["className"],
  _excluded2 = ["className"],
  _excluded3 = ["className"],
  _excluded4 = ["className"];
var _templateObject, _templateObject2, _templateObject3, _templateObject4;
var circleButtonStylesContainer = function circleButtonStylesContainer(styles) {
  return (0, _css.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  ", "\n"])), styles.custom ? styles.custom : '');
};
var circleButtonStylesContent = function circleButtonStylesContent(styles) {
  return (0, _css.css)(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  cursor: ", ";\n  ", "\n"])), styles.cursor || 'pointer', styles.custom ? styles.custom : '');
};
var circleButtonStylesImage = function circleButtonStylesImage(styles) {
  return (0, _css.css)(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n  width: ", ";\n  padding: ", ";\n  display: ", ";\n  align-content: ", ";\n  flex-wrap: ", ";\n  justify-content: ", ";\n  background-color: ", ";\n  border-radius: ", ";\n  font-size: ", ";\n  color: ", ";\n  ", "\n"])), styles.width || '100px', styles.padding || '5px', styles.display || 'flex', styles.alignContent || 'center', styles.flexWrap || 'wrap', styles.justifyContent || 'center', styles.backgroundColor || '#324375', styles.borderRadius || '100%', styles.fontSize || '30px', styles.color || '#ffffff', styles.custom ? styles.custom : '');
};
var circleButtonStylesTitle = function circleButtonStylesTitle(styles) {
  return (0, _css.css)(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2["default"])(["\n  text-transform: ", ";\n  font-size: ", ";\n  color: ", ";\n  font-weight: ", ";\n  ", "\n"])), styles.textTransform || 'uppercase', styles.fontSize || '18px', styles.color || '#666666', styles.fontWeight || '700', styles.custom ? styles.custom : '');
};
var CircleButton = exports.CircleButton = function CircleButton(_ref) {
  var _ref$containerStyles = _ref.containerStyles,
    containerStyles = _ref$containerStyles === void 0 ? {} : _ref$containerStyles,
    _ref$containerProps = _ref.containerProps,
    containerProps = _ref$containerProps === void 0 ? {} : _ref$containerProps,
    _ref$contentStyles = _ref.contentStyles,
    contentStyles = _ref$contentStyles === void 0 ? {} : _ref$contentStyles,
    _ref$contentProps = _ref.contentProps,
    contentProps = _ref$contentProps === void 0 ? {} : _ref$contentProps,
    _ref$imageProps = _ref.imageProps,
    imageProps = _ref$imageProps === void 0 ? {} : _ref$imageProps,
    _ref$imageStyles = _ref.imageStyles,
    imageStyles = _ref$imageStyles === void 0 ? {} : _ref$imageStyles,
    image = _ref.image,
    title = _ref.title,
    _ref$titleStyles = _ref.titleStyles,
    titleStyles = _ref$titleStyles === void 0 ? {} : _ref$titleStyles,
    _ref$titleProps = _ref.titleProps,
    titleProps = _ref$titleProps === void 0 ? {} : _ref$titleProps;
  var containerClassName = containerProps.className,
    restContainerProps = (0, _objectWithoutProperties2["default"])(containerProps, _excluded);
  var contentClassName = contentProps.className,
    restContentProps = (0, _objectWithoutProperties2["default"])(contentProps, _excluded2);
  var imageClassName = imageProps.className,
    restImageProps = (0, _objectWithoutProperties2["default"])(imageProps, _excluded3);
  var titleClassName = titleProps.className,
    restTitleProps = (0, _objectWithoutProperties2["default"])(titleProps, _excluded4);
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", (0, _extends2["default"])({
    className: (0, _css.cx)(circleButtonStylesContainer(containerStyles), containerClassName)
  }, restContainerProps), /*#__PURE__*/_react["default"].createElement("button", (0, _extends2["default"])({
    className: (0, _css.cx)(circleButtonStylesContent(contentStyles), contentClassName)
  }, restContentProps), /*#__PURE__*/_react["default"].createElement("img", (0, _extends2["default"])({
    src: image,
    className: (0, _css.cx)(circleButtonStylesImage(imageStyles), imageClassName),
    alt: title
  }, restImageProps)), title && /*#__PURE__*/_react["default"].createElement("span", (0, _extends2["default"])({
    className: (0, _css.cx)(circleButtonStylesTitle(titleStyles), titleClassName)
  }, restTitleProps), title))));
};