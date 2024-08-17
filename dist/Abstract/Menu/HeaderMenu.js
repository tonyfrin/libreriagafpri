"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HeaderMenu = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _react = _interopRequireDefault(require("react"));
var _Button = require("../Button");
var _css = require("@emotion/css");
var _excluded = ["className"],
  _excluded2 = ["className"],
  _excluded3 = ["className"],
  _excluded4 = ["className"];
var _templateObject, _templateObject2, _templateObject3, _templateObject4;
var headerMenuStylesContainer = function headerMenuStylesContainer(styles) {
  return (0, _css.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  padding-bottom: ", ";\n  margin-top: ", ";\n  max-width: ", ";\n  margin: ", ";\n  ", "\n"])), styles.paddingBottom || '20px', styles.marginTop || '20px', styles.maxWidth || '900px', styles.margin || 'auto', styles.custom ? styles.custom : '');
};
var headerMenuStylesContent = function headerMenuStylesContent(styles) {
  return (0, _css.css)(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  width: ", ";\n  margin: ", ";\n  ", "\n"])), styles.width || '83.33%', styles.margin || 'auto', styles.custom ? styles.custom : '');
};
var headerMenuStylesContentUl = function headerMenuStylesContentUl(styles) {
  return (0, _css.css)(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n  display: ", ";\n  padding: ", ";\n  justify-content: ", ";\n  ", "\n"])), styles.display || 'flex', styles.padding || '0', styles.justifyContent || 'space-between', styles.custom ? styles.custom : '');
};
var headerMenuStylesContentLi = function headerMenuStylesContentLi(styles) {
  return (0, _css.css)(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2["default"])(["\n  list-style: ", ";\n  ", "\n"])), styles.listStyle || 'none', styles.custom ? styles.custom : '');
};
var HeaderMenu = exports.HeaderMenu = function HeaderMenu(_ref) {
  var items = _ref.items,
    _ref$stylesContainer = _ref.stylesContainer,
    stylesContainer = _ref$stylesContainer === void 0 ? {} : _ref$stylesContainer,
    _ref$containerProps = _ref.containerProps,
    containerProps = _ref$containerProps === void 0 ? {} : _ref$containerProps,
    _ref$stylesContent = _ref.stylesContent,
    stylesContent = _ref$stylesContent === void 0 ? {} : _ref$stylesContent,
    _ref$contentProps = _ref.contentProps,
    contentProps = _ref$contentProps === void 0 ? {} : _ref$contentProps,
    _ref$contentUlProps = _ref.contentUlProps,
    contentUlProps = _ref$contentUlProps === void 0 ? {} : _ref$contentUlProps,
    _ref$stylesContentUl = _ref.stylesContentUl,
    stylesContentUl = _ref$stylesContentUl === void 0 ? {} : _ref$stylesContentUl,
    _ref$stylesContentLi = _ref.stylesContentLi,
    stylesContentLi = _ref$stylesContentLi === void 0 ? {} : _ref$stylesContentLi,
    _ref$contentLiProps = _ref.contentLiProps,
    contentLiProps = _ref$contentLiProps === void 0 ? {} : _ref$contentLiProps,
    contentButtonProps = _ref.contentButtonProps;
  var containerClassName = containerProps.className,
    restContainerProps = (0, _objectWithoutProperties2["default"])(containerProps, _excluded);
  var contentClassName = contentProps.className,
    restContentProps = (0, _objectWithoutProperties2["default"])(contentProps, _excluded2);
  var contentUlClassName = contentUlProps.className,
    restContentUlProps = (0, _objectWithoutProperties2["default"])(contentUlProps, _excluded3);
  var contentLiClassName = contentLiProps.className,
    restContentLiProps = (0, _objectWithoutProperties2["default"])(contentLiProps, _excluded4);
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", (0, _extends2["default"])({
    className: (0, _css.cx)(headerMenuStylesContainer(stylesContainer), containerClassName)
  }, restContainerProps), /*#__PURE__*/_react["default"].createElement("div", (0, _extends2["default"])({
    className: (0, _css.cx)(headerMenuStylesContent(stylesContent), contentClassName)
  }, restContentProps), /*#__PURE__*/_react["default"].createElement("ul", (0, _extends2["default"])({
    className: (0, _css.cx)(headerMenuStylesContentUl(stylesContentUl), contentUlClassName)
  }, restContentUlProps), items.map(function (item, index) {
    return /*#__PURE__*/_react["default"].createElement("li", (0, _extends2["default"])({
      key: "".concat(item.key),
      className: (0, _css.cx)(headerMenuStylesContentLi(stylesContentLi), contentLiClassName)
    }, restContentLiProps), /*#__PURE__*/_react["default"].createElement(_Button.CircleButton, (0, _extends2["default"])({
      title: item.title,
      image: item.image,
      contentProps: {
        onClick: item.onClick
      },
      titleStyles: {
        fontSize: '8px',
        fontWeight: '500',
        textTransform: 'capitalize'
      },
      imageStyles: {
        width: '50px'
      }
    }, contentButtonProps)));
  })))));
};