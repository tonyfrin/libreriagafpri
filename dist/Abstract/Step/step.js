"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Step = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _react = _interopRequireDefault(require("react"));
var _css = require("@emotion/css");
var _Icons = require("../Icons");
var _Title = require("../Title");
var _Containers = require("../Containers");
var _Button = require("../Button");
var _templateObject;
var StepStyles = function StepStyles(styles) {
  return (0, _css.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  display: ", ";\n  padding: ", ";\n  margin: ", ";\n"])), styles.display || 'flex', styles.padding || '15px 0px', styles.margin || '10px 0px');
};
var Step = exports.Step = function Step(_ref) {
  var _ref$containerStyles = _ref.containerStyles,
    containerStyles = _ref$containerStyles === void 0 ? {} : _ref$containerStyles,
    _ref$containerClass = _ref.containerClass,
    containerClass = _ref$containerClass === void 0 ? '' : _ref$containerClass,
    _ref$globoStyles = _ref.globoStyles,
    globoStyles = _ref$globoStyles === void 0 ? {} : _ref$globoStyles,
    step = _ref.step,
    _ref$globoClass = _ref.globoClass,
    globoClass = _ref$globoClass === void 0 ? '' : _ref$globoClass,
    _ref$titleStyles = _ref.titleStyles,
    titleStyles = _ref$titleStyles === void 0 ? {} : _ref$titleStyles,
    title = _ref.title,
    _ref$globoTitleClass = _ref.globoTitleClass,
    globoTitleClass = _ref$globoTitleClass === void 0 ? '' : _ref$globoTitleClass,
    _ref$styles = _ref.styles,
    styles = _ref$styles === void 0 ? {} : _ref$styles,
    _ref$Class = _ref.Class,
    Class = _ref$Class === void 0 ? '' : _ref$Class,
    _ref$buttonReturnStyl = _ref.buttonReturnStyles,
    buttonReturnStyles = _ref$buttonReturnStyl === void 0 ? {} : _ref$buttonReturnStyl,
    _ref$buttonReturnProp = _ref.buttonReturnProps,
    buttonReturnProps = _ref$buttonReturnProp === void 0 ? {} : _ref$buttonReturnProp,
    _ref$buttonReturnClas = _ref.buttonReturnClass,
    buttonReturnClass = _ref$buttonReturnClas === void 0 ? '' : _ref$buttonReturnClas,
    buttonReturnTitle = _ref.buttonReturnTitle,
    _ref$buttonNextStyles = _ref.buttonNextStyles,
    buttonNextStyles = _ref$buttonNextStyles === void 0 ? {} : _ref$buttonNextStyles,
    _ref$buttonNextProps = _ref.buttonNextProps,
    buttonNextProps = _ref$buttonNextProps === void 0 ? {} : _ref$buttonNextProps,
    _ref$buttonNextClass = _ref.buttonNextClass,
    buttonNextClass = _ref$buttonNextClass === void 0 ? '' : _ref$buttonNextClass,
    buttonNextTitle = _ref.buttonNextTitle,
    _ref$containerButtonS = _ref.containerButtonStyles,
    containerButtonStyles = _ref$containerButtonS === void 0 ? {} : _ref$containerButtonS,
    _ref$containerButtonC = _ref.containerButtonClass,
    containerButtonClass = _ref$containerButtonC === void 0 ? '' : _ref$containerButtonC;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _css.cx)(StepStyles(styles), Class)
  }, /*#__PURE__*/_react["default"].createElement(_Containers.ContainerGlobo, {
    styles: containerStyles,
    containerClass: containerClass
  }, /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Icons.Globo, {
    styles: globoStyles,
    step: step,
    globoClass: globoClass
  }), /*#__PURE__*/_react["default"].createElement(_Title.GloboTitle, {
    styles: titleStyles,
    title: title,
    globoTitleClass: globoTitleClass
  }))), /*#__PURE__*/_react["default"].createElement(_Containers.ContainerButton, {
    styles: containerButtonStyles,
    Class: containerButtonClass
  }, /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, buttonReturnTitle ? /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    styles: buttonReturnStyles,
    buttonProps: buttonReturnProps,
    Class: buttonReturnClass,
    title: buttonReturnTitle
  }) : '', buttonNextTitle ? /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    styles: buttonNextStyles,
    buttonProps: buttonNextProps,
    Class: buttonNextClass,
    title: buttonNextTitle
  }) : '')));
};