"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MainMenu = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _react = _interopRequireDefault(require("react"));
var _Button = require("../Button");
var _css = require("@emotion/css");
var _excluded = ["className"],
  _excluded2 = ["className"];
var _templateObject, _templateObject2;
var mainMenuStylesContainer = function mainMenuStylesContainer(styles) {
  return (0, _css.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  display: ", ";\n  justify-content: ", ";\n  margin: ", ";\n  ", "\n"])), styles.display || 'flex', styles.justifyContent || 'space-evenly', styles.margin || '10% 0', styles.custom ? styles.custom : '');
};
var mainMenuStylesContent = function mainMenuStylesContent(styles) {
  return (0, _css.css)(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  text-align: ", ";\n  list-style: ", ";\n  ", "\n"])), styles.textAling || 'center', styles.listStyle || 'none', styles.custom ? styles.custom : '');
};
var MainMenu = exports.MainMenu = function MainMenu(_ref) {
  var items = _ref.items,
    _ref$stylesContainer = _ref.stylesContainer,
    stylesContainer = _ref$stylesContainer === void 0 ? {} : _ref$stylesContainer,
    _ref$containerProps = _ref.containerProps,
    containerProps = _ref$containerProps === void 0 ? {} : _ref$containerProps,
    _ref$stylesContent = _ref.stylesContent,
    stylesContent = _ref$stylesContent === void 0 ? {} : _ref$stylesContent,
    _ref$contentProps = _ref.contentProps,
    contentProps = _ref$contentProps === void 0 ? {} : _ref$contentProps;
  var containerClassName = containerProps.className,
    restContainerProps = (0, _objectWithoutProperties2["default"])(containerProps, _excluded);
  var contentClassName = contentProps.className,
    restContentProps = (0, _objectWithoutProperties2["default"])(contentProps, _excluded2);
  var itemsMenu = items.map(function (item, index) {
    return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("ul", (0, _extends2["default"])({
      key: item[index].key,
      className: (0, _css.cx)(mainMenuStylesContainer(stylesContainer), containerClassName)
    }, restContainerProps), item.map(function (button, i) {
      return /*#__PURE__*/_react["default"].createElement("li", (0, _extends2["default"])({
        key: "".concat(button.title, "-").concat(i),
        className: (0, _css.cx)(mainMenuStylesContent(stylesContent), contentClassName)
      }, restContentProps), /*#__PURE__*/_react["default"].createElement(_Button.CircleButton, {
        title: button.title,
        image: button.image,
        contentProps: {
          onClick: button.onClick
        }
      }));
    })));
  });
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, itemsMenu);
};