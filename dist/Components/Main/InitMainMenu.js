"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InitMainMenu = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _react = _interopRequireDefault(require("react"));
var _css = require("@emotion/css");
var _Abstract = require("../../Abstract");
var _excluded = ["className"];
var _templateObject;
var initMainMenuStylesContainer = function initMainMenuStylesContainer(styles) {
  return (0, _css.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  padding: ", ";\n  background-image: ", ";\n  background-repeat: ", ";\n  height: ", ";\n  background-size: ", ";\n  ", "\n"])), styles.padding || '28px 0', styles.backgroundImage || 'url(https://tiendasgafpri.com/wp-content/themes/gafpristore/assets/img/fondo-admin.png)', styles.backgroundRepeat || 'no-repeat', styles.height || '100vh', styles.backgroundSize || '177vh', styles.custom ? styles.custom : '');
};
var InitMainMenu = exports.InitMainMenu = function InitMainMenu(_ref) {
  var _ref$stylesContainer = _ref.stylesContainer,
    stylesContainer = _ref$stylesContainer === void 0 ? {} : _ref$stylesContainer,
    _ref$containerProps = _ref.containerProps,
    containerProps = _ref$containerProps === void 0 ? {} : _ref$containerProps,
    contentProps = _ref.contentProps,
    useError = _ref.useError;
  var containerClassName = containerProps.className,
    restContainerProps = (0, _objectWithoutProperties2["default"])(containerProps, _excluded);
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", (0, _extends2["default"])({
    className: (0, _css.cx)(initMainMenuStylesContainer(stylesContainer), containerClassName)
  }, restContainerProps), /*#__PURE__*/_react["default"].createElement(_Abstract.MainMenu, contentProps), useError && useError.states.error && /*#__PURE__*/_react["default"].createElement(_Abstract.Error, {
    error: useError.states.error
  })));
};