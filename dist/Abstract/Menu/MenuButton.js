"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MenuButton = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _react = _interopRequireDefault(require("react"));
var _css = require("@emotion/css");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7;
var defaultMainContainerStyle = (0, _css.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  box-sizing: border-box;\n  align-self: stretch;\n  grid-area: 2 / 1 / span 1 / span 12;\n  justify-content: space-between;\n  gap: 1rem;\n  background: transparent;\n  font-size: 100%;\n  margin: 0;\n  padding: 0;\n  border: 0;\n  vertical-align: top;\n  border-spacing: 0;\n  border-collapse: collapse;\n"])));
var defaultItemContainerStyle = (0, _css.css)(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  box-sizing: border-box;\n  position: relative;\n  transition: all 200ms ease 0s;\n  cursor: pointer;\n  background-color: rgb(255, 255, 255);\n  border-radius: 0.5rem;\n  border-width: 1px;\n  border-color: rgb(227, 223, 218);\n  border-style: solid;\n  padding: 1rem;\n  margin: 0px;\n  flex: 1 1 0%;\n  background: transparent;\n  font-size: 100%;\n  vertical-align: top;\n  border-spacing: 0;\n  border-collapse: collapse;\n  &:hover {\n    background-color: #06b0e433;\n    color: #ffff;\n  }\n"])));
var defaultIconGeneralContainerStyle = (0, _css.css)(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n  font-family: 'Poppins', sans-serif;\n  font-weight: 100;\n  color: rgb(50, 79, 165);\n  text-transform: uppercase;\n  background-color: rgb(232, 239, 250);\n  overflow: hidden;\n  text-align: center;\n  width: 3rem;\n  height: 3rem;\n  border-radius: 70% 52% 72%;\n  font-size: 1.5rem;\n  display: inline-block;\n  vertical-align: middle;\n  margin: 0.5rem;\n  padding: 0;\n  border: 0;\n  border-spacing: 0;\n  border-collapse: collapse;\n"])));
var defaultIconContainerStyle = (0, _css.css)(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  width: 100%;\n  background: transparent;\n  font-size: 100%;\n  margin: 0;\n  padding: 0;\n  border: 0;\n  vertical-align: top;\n  border-spacing: 0;\n  border-collapse: collapse;\n"])));
var defaultIconStyle = (0, _css.css)(_templateObject5 || (_templateObject5 = (0, _taggedTemplateLiteral2["default"])(["\n  vertical-align: middle;\n  display: inline-block;\n  font-style: normal;\n  font-variant: normal;\n  font-weight: normal;\n"])));
var defaultTitleContainer = (0, _css.css)(_templateObject6 || (_templateObject6 = (0, _taggedTemplateLiteral2["default"])(["\n  vertical-align: middle;\n  margin-left: 0.5rem;\n  margin-right: 0.5rem;\n  display: block;\n  background: transparent;\n  font-size: 100%;\n  margin: 0;\n  padding: 0;\n  border: 0;\n  border-spacing: 0;\n  border-collapse: collapse;\n"])));
var defaultTitleStyle = (0, _css.css)(_templateObject7 || (_templateObject7 = (0, _taggedTemplateLiteral2["default"])(["\n  font-family: 'Poppins', sans-serif;\n  font-weight: 800;\n  font-size: 1rem;\n  color: rgb(38, 35, 33);\n  margin: 0;\n  padding: 0;\n  border: 0;\n  vertical-align: top;\n  border-spacing: 0;\n  border-collapse: collapse;\n  background: transparent;\n"])));
var MenuButton = exports.MenuButton = function MenuButton(_ref) {
  var items = _ref.items,
    _ref$mainContainerSty = _ref.mainContainerStyle,
    mainContainerStyle = _ref$mainContainerSty === void 0 ? defaultMainContainerStyle : _ref$mainContainerSty,
    _ref$itemContainerSty = _ref.itemContainerStyle,
    itemContainerStyle = _ref$itemContainerSty === void 0 ? defaultItemContainerStyle : _ref$itemContainerSty,
    _ref$iconGeneralConta = _ref.iconGeneralContainerStyle,
    iconGeneralContainerStyle = _ref$iconGeneralConta === void 0 ? defaultIconGeneralContainerStyle : _ref$iconGeneralConta,
    _ref$iconContainerSty = _ref.iconContainerStyle,
    iconContainerStyle = _ref$iconContainerSty === void 0 ? defaultIconContainerStyle : _ref$iconContainerSty,
    _ref$iconStyle = _ref.iconStyle,
    iconStyle = _ref$iconStyle === void 0 ? defaultIconStyle : _ref$iconStyle,
    _ref$titleContainer = _ref.titleContainer,
    titleContainer = _ref$titleContainer === void 0 ? defaultTitleContainer : _ref$titleContainer,
    _ref$titleStyle = _ref.titleStyle,
    titleStyle = _ref$titleStyle === void 0 ? defaultTitleStyle : _ref$titleStyle;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _css.css)(mainContainerStyle)
  }, items.map(function (item) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      key: item.id,
      className: (0, _css.css)(itemContainerStyle),
      onClick: item.onClick
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: (0, _css.css)(iconGeneralContainerStyle)
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: (0, _css.css)(iconContainerStyle)
    }, /*#__PURE__*/_react["default"].createElement("span", {
      className: (0, _css.css)(iconStyle)
    }, /*#__PURE__*/_react["default"].createElement(item.icon, null)))), /*#__PURE__*/_react["default"].createElement("div", {
      className: (0, _css.css)(titleContainer)
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: (0, _css.css)(titleStyle)
    }, item.label)));
  })));
};