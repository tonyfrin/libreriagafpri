"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ButtonLarge = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _react = _interopRequireDefault(require("react"));
var _css = require("@emotion/css");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11;
var defaultMainContainerStyle = (0, _css.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  padding: 0px;\n  display: inline-block;\n  box-sizing: border-box;\n  align-self: stretch;\n  grid-area: 3 / 1 / span 1 / span 12;\n  margin-top: 1rem;\n  background: transparent;\n  font-size: 100%;\n  border: 0;\n  vertical-align: top;\n  border-spacing: 0;\n  border-collapse: collapse;\n  width: 100%;\n"])));
var defaultInfoContainerStyle = (0, _css.css)(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  background-color: rgb(255, 255, 255);\n  border-radius: 0.5rem;\n  box-shadow: rgba(0, 0, 0, 0.1) 1px 1px 3px 1px,\n    rgba(0, 0, 0, 0.06) 1px 1px 2px 1px;\n  padding: 0.75rem;\n  box-sizing: border-box;\n  height: 100%;\n  background: transparent;\n  font-size: 100%;\n  margin: 0;\n  border: 0;\n  vertical-align: top;\n  border-spacing: 0;\n  border-collapse: collapse;\n"])));
var defaultGridContainerStyle = (0, _css.css)(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n  box-sizing: border-box;\n  position: relative;\n  display: flex;\n  transition: all 200ms ease 0s;\n  min-height: 3.75rem;\n  background-color: rgb(255, 255, 255);\n  padding: 0.5rem;\n  border-radius: 0.5rem;\n  background: transparent;\n  font-size: 100%;\n  margin: 0;\n  border: 0;\n  vertical-align: top;\n  border-spacing: 0;\n  border-collapse: collapse;\n"])));
var defaultIconContainerStyle = (0, _css.css)(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2["default"])(["\n  min-width: 2rem;\n  align-self: center;\n  height: 100%;\n  text-align: center;\n  flex: 0 0 auto;\n  background: transparent;\n  font-size: 100%;\n  margin-right: 5px;\n  padding: 0;\n  border: 0;\n  vertical-align: top;\n  border-spacing: 0;\n  border-collapse: collapse;\n"])));
var defaultIconStyle = (0, _css.css)(_templateObject5 || (_templateObject5 = (0, _taggedTemplateLiteral2["default"])(["\n  font-size: 1.5rem;\n  vertical-align: middle;\n  display: inline-block;\n  font-style: normal;\n  font-variant: normal;\n  font-weight: normal;\n  color: rgb(50, 79, 165);\n"])));
var defaultTextContainerStyle = (0, _css.css)(_templateObject6 || (_templateObject6 = (0, _taggedTemplateLiteral2["default"])(["\n  flex-grow: 1;\n  align-self: center;\n  margin-left: 0.5rem;\n  background: transparent;\n  font-size: 100%;\n  margin: 0;\n  padding: 0;\n  border: 0;\n  vertical-align: top;\n  border-spacing: 0;\n  border-collapse: collapse;\n"])));
var defaultTitleStyle = (0, _css.css)(_templateObject7 || (_templateObject7 = (0, _taggedTemplateLiteral2["default"])(["\n  font-family: 'Poppins', sans-serif;\n  font-weight: 700;\n  font-size: 1rem;\n  color: rgb(38, 35, 33);\n  line-height: 1.25rem;\n  margin: 0;\n  padding: 0;\n  border: 0;\n  vertical-align: top;\n  border-spacing: 0;\n  border-collapse: collapse;\n  background: transparent;\n"])));
var defaultDescriptionStyle = (0, _css.css)(_templateObject8 || (_templateObject8 = (0, _taggedTemplateLiteral2["default"])(["\n  font-family: 'Poppins', sans-serif;\n  font-weight: 400;\n  font-size: 0.875rem;\n  color: rgb(38, 35, 33);\n  line-height: 1.25rem;\n  margin: 0;\n  padding: 0;\n  border: 0;\n  vertical-align: top;\n  border-spacing: 0;\n  border-collapse: collapse;\n  background: transparent;\n"])));
var defaultButtonContainerStyle = (0, _css.css)(_templateObject9 || (_templateObject9 = (0, _taggedTemplateLiteral2["default"])(["\n  align-self: center;\n  background: transparent;\n  font-size: 100%;\n  margin: 0;\n  padding: 0;\n  border: 0;\n  vertical-align: top;\n  border-spacing: 0;\n  border-collapse: collapse;\n"])));
var defaultButtonStyle = (0, _css.css)(_templateObject10 || (_templateObject10 = (0, _taggedTemplateLiteral2["default"])(["\n  font-family: 'Poppins', sans-serif;\n  font-size: 16px;\n  font-weight: 700;\n  font-style: normal;\n  text-align: center;\n  box-sizing: border-box;\n  min-width: 130px;\n  max-width: 396px;\n  min-height: 3rem;\n  line-height: 20px;\n  height: auto;\n  width: auto;\n  position: relative;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  border-radius: 0.5rem;\n  border-width: 2px;\n  border-color: rgb(124, 161, 230);\n  border-style: solid;\n  background-color: rgb(255, 255, 255);\n  background-image: none;\n  color: rgb(50, 79, 165);\n  transition: all 0.2s ease 0s;\n  display: inline-block;\n  margin: 0.25rem;\n  text-transform: none;\n  padding: 0px 1rem;\n  cursor: pointer;\n  &:hover {\n    background-color: #06b0e433;\n  }\n"])));
var defaultButtonTitleStyle = (0, _css.css)(_templateObject11 || (_templateObject11 = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  align-items: baseline;\n  justify-content: center;\n  font-size: 100%;\n  margin: 0;\n  padding: 0;\n  border: 0;\n  vertical-align: top;\n  border-spacing: 0;\n  border-collapse: collapse;\n  background: transparent;\n"])));
var ButtonLarge = exports.ButtonLarge = function ButtonLarge(_ref) {
  var label = _ref.label,
    onClick = _ref.onClick,
    Icon = _ref.Icon,
    description = _ref.description,
    titleButton = _ref.titleButton,
    _ref$mainContainerSty = _ref.mainContainerStyle,
    mainContainerStyle = _ref$mainContainerSty === void 0 ? defaultMainContainerStyle : _ref$mainContainerSty,
    _ref$infoContainerSty = _ref.infoContainerStyle,
    infoContainerStyle = _ref$infoContainerSty === void 0 ? defaultInfoContainerStyle : _ref$infoContainerSty,
    _ref$gridContainerSty = _ref.gridContainerStyle,
    gridContainerStyle = _ref$gridContainerSty === void 0 ? defaultGridContainerStyle : _ref$gridContainerSty,
    _ref$iconContainerSty = _ref.iconContainerStyle,
    iconContainerStyle = _ref$iconContainerSty === void 0 ? defaultIconContainerStyle : _ref$iconContainerSty,
    _ref$iconStyle = _ref.iconStyle,
    iconStyle = _ref$iconStyle === void 0 ? defaultIconStyle : _ref$iconStyle,
    _ref$textContainerSty = _ref.textContainerStyle,
    textContainerStyle = _ref$textContainerSty === void 0 ? defaultTextContainerStyle : _ref$textContainerSty,
    _ref$titleStyle = _ref.titleStyle,
    titleStyle = _ref$titleStyle === void 0 ? defaultTitleStyle : _ref$titleStyle,
    _ref$descriptionStyle = _ref.descriptionStyle,
    descriptionStyle = _ref$descriptionStyle === void 0 ? defaultDescriptionStyle : _ref$descriptionStyle,
    _ref$buttonContainerS = _ref.buttonContainerStyle,
    buttonContainerStyle = _ref$buttonContainerS === void 0 ? defaultButtonContainerStyle : _ref$buttonContainerS,
    _ref$buttonStyle = _ref.buttonStyle,
    buttonStyle = _ref$buttonStyle === void 0 ? defaultButtonStyle : _ref$buttonStyle,
    _ref$buttonTitleStyle = _ref.buttonTitleStyle,
    buttonTitleStyle = _ref$buttonTitleStyle === void 0 ? defaultButtonTitleStyle : _ref$buttonTitleStyle;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _css.css)(mainContainerStyle)
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _css.css)(infoContainerStyle)
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _css.css)(gridContainerStyle)
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _css.css)(iconContainerStyle)
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: (0, _css.css)(iconStyle)
  }, /*#__PURE__*/_react["default"].createElement(Icon, null))), /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _css.css)(textContainerStyle)
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _css.css)(titleStyle)
  }, label), /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _css.css)(descriptionStyle)
  }, description)), /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _css.css)(buttonContainerStyle)
  }, /*#__PURE__*/_react["default"].createElement("button", {
    className: (0, _css.css)(buttonStyle),
    onClick: onClick
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _css.css)(buttonTitleStyle)
  }, titleButton)))))));
};