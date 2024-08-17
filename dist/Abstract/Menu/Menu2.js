"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Menu2 = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _react = _interopRequireDefault(require("react"));
var _css = require("@emotion/css");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6;
var defaultMainContainerStyle = (0, _css.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  flex: 1 1 0%;\n  display: flex;\n  justify-content: flex-end;\n  font-weight: 700;\n  font-size: 1rem;\n  color: rgb(38, 35, 33);\n  line-height: 1.25rem;\n"])));
var defaultItemContainerStyle = (0, _css.css)(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  margin-left: 1rem;\n  background: transparent;\n  font-size: 100%;\n  margin: 0;\n  padding: 0;\n  border: 0;\n  vertical-align: top;\n  border-spacing: 0;\n  border-collapse: collapse;\n"])));
var defaultButtonStyle = (0, _css.css)(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n  font-family: 'Poppins', sans-serif;\n  font-size: inherit;\n  font-weight: inherit;\n  font-style: normal;\n  text-align: center;\n  box-sizing: border-box;\n  min-width: 0px;\n  max-width: 396px;\n  min-height: 0px;\n  line-height: 20px;\n  height: auto;\n  width: auto;\n  position: relative;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  border-radius: 0.5rem;\n  border-width: 0px;\n  border-color: transparent;\n  border-style: solid;\n  background-color: transparent;\n  background-image: none;\n  color: rgb(50, 79, 165);\n  transition: all 0.2s ease 0s;\n  display: inline;\n  margin: 0px 0px 0px 10px;\n  text-transform: none;\n  padding: 0px;\n  box-shadow: none;\n  cursor: pointer;\n"])));
var defaultButtonContentContainerStyle = (0, _css.css)(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  align-items: baseline;\n  justify-content: center;\n  background: transparent;\n  border: 0 none;\n  font-size: 100%;\n  margin: 0;\n  padding: 0;\n  border: 0;\n  vertical-align: top;\n  border-spacing: 0;\n  border-collapse: collapse;\n"])));
var defaultIconStyle = (0, _css.css)(_templateObject5 || (_templateObject5 = (0, _taggedTemplateLiteral2["default"])(["\n  font-size: 1rem;\n  vertical-align: middle;\n  display: flex;\n  font-style: normal;\n  font-variant: normal;\n  font-weight: normal;\n  padding-right: 0.2rem;\n  height: 20px;\n  width: 20px;\n  line-height: 0.9;\n  align-items: center;\n  justify-content: center;\n  align-self: end;\n  order: 0;\n"])));
var defaultTextStyle = (0, _css.css)(_templateObject6 || (_templateObject6 = (0, _taggedTemplateLiteral2["default"])([""])));
var Menu2 = exports.Menu2 = function Menu2(_ref) {
  var items = _ref.items,
    _ref$mainContainerSty = _ref.mainContainerStyle,
    mainContainerStyle = _ref$mainContainerSty === void 0 ? defaultMainContainerStyle : _ref$mainContainerSty,
    _ref$itemContainerSty = _ref.itemContainerStyle,
    itemContainerStyle = _ref$itemContainerSty === void 0 ? defaultItemContainerStyle : _ref$itemContainerSty,
    _ref$buttonStyle = _ref.buttonStyle,
    buttonStyle = _ref$buttonStyle === void 0 ? defaultButtonStyle : _ref$buttonStyle,
    _ref$buttonContentCon = _ref.buttonContentContainerStyle,
    buttonContentContainerStyle = _ref$buttonContentCon === void 0 ? defaultButtonContentContainerStyle : _ref$buttonContentCon,
    _ref$iconStyle = _ref.iconStyle,
    iconStyle = _ref$iconStyle === void 0 ? defaultIconStyle : _ref$iconStyle,
    _ref$textStyle = _ref.textStyle,
    textStyle = _ref$textStyle === void 0 ? defaultTextStyle : _ref$textStyle;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _css.css)(mainContainerStyle)
  }, items.map(function (item) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      key: item.id,
      className: (0, _css.css)(itemContainerStyle)
    }, /*#__PURE__*/_react["default"].createElement("button", {
      className: (0, _css.css)(buttonStyle),
      onClick: item.onClick
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: (0, _css.css)(buttonContentContainerStyle)
    }, /*#__PURE__*/_react["default"].createElement("span", {
      className: (0, _css.css)(iconStyle)
    }, /*#__PURE__*/_react["default"].createElement(item.icon, null)), /*#__PURE__*/_react["default"].createElement("span", {
      className: (0, _css.css)(textStyle)
    }, item.label))));
  })));
};