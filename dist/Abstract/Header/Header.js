"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Header = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _react = _interopRequireDefault(require("react"));
var _css = require("@emotion/css");
var _Button = require("../Button");
var _Menu = require("../Menu");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6;
var defaultMainContainerStyle = (0, _css.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  transition: all 1s ease 0s;\n  display: grid;\n  grid-template: 'main' 1fr / 1fr;\n  box-sizing: border-box;\n  height: auto;\n  background-color: rgb(255, 255, 255);\n  padding-bottom: 1rem;\n  border: 0 none;\n  font-size: 100%;\n  margin: 0;\n  padding: 0;\n  border: 0;\n  vertical-align: top;\n  border-spacing: 0;\n  border-collapse: collapse;\n"])));
var defaultGridContainerStyle = (0, _css.css)(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  transition: all 1s ease 0s;\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;\n  justify-self: center;\n  padding: 1rem;\n  width: 100%;\n  max-width: calc(792px + 2rem);\n  align-content: start;\n  box-sizing: border-box;\n"])));
var defaultHeadContainerStyle = (0, _css.css)(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n  transition: all 1s ease 0s;\n  display: inline-block;\n  box-sizing: border-box;\n  align-self: stretch;\n  grid-area: 1 / 1 / span 1 / span 12;\n  background: transparent;\n  border: 0 none;\n  font-size: 100%;\n  margin: 0;\n  padding: 0;\n  border: 0;\n  vertical-align: top;\n  border-spacing: 0;\n  border-collapse: collapse;\n"])));
var defaultTitleContainerStyle = (0, _css.css)(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2["default"])(["\n  transition: all 1s ease 0s;\n  display: flex;\n  align-items: center;\n  margin: 2rem 0px;\n  min-height: 3rem;\n  background: transparent;\n  border: 0 none;\n  font-size: 100%;\n  padding: 0;\n  border: 0;\n  vertical-align: top;\n  border-spacing: 0;\n  border-collapse: collapse;\n"])));
var defaultTitleStyle = (0, _css.css)(_templateObject5 || (_templateObject5 = (0, _taggedTemplateLiteral2["default"])(["\n  transition: all 1s ease 0s;\n  font-weight: 800;\n  font-size: 1.75rem;\n  color: rgb(38, 35, 33);\n  line-height: 2.5rem;\n"])));
var defaultHiddenContainerStyle = (0, _css.css)(_templateObject6 || (_templateObject6 = (0, _taggedTemplateLiteral2["default"])(["\n  transition: all 1s ease 0s;\n"])));
var Header = exports.Header = function Header(_ref) {
  var title = _ref.title,
    menuTitleProps = _ref.menuTitleProps,
    menuButtonProps = _ref.menuButtonProps,
    buttonLargeProps = _ref.buttonLargeProps,
    _ref$mainContainerSty = _ref.mainContainerStyle,
    mainContainerStyle = _ref$mainContainerSty === void 0 ? defaultMainContainerStyle : _ref$mainContainerSty,
    _ref$gridContainerSty = _ref.gridContainerStyle,
    gridContainerStyle = _ref$gridContainerSty === void 0 ? defaultGridContainerStyle : _ref$gridContainerSty,
    _ref$headContainerSty = _ref.headContainerStyle,
    headContainerStyle = _ref$headContainerSty === void 0 ? defaultHeadContainerStyle : _ref$headContainerSty,
    _ref$titleContainerSt = _ref.titleContainerStyle,
    titleContainerStyle = _ref$titleContainerSt === void 0 ? defaultTitleContainerStyle : _ref$titleContainerSt,
    _ref$hiddenContainerS = _ref.hiddenContainerStyle,
    hiddenContainerStyle = _ref$hiddenContainerS === void 0 ? defaultHiddenContainerStyle : _ref$hiddenContainerS,
    _ref$titleStyle = _ref.titleStyle,
    titleStyle = _ref$titleStyle === void 0 ? defaultTitleStyle : _ref$titleStyle;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _css.css)(mainContainerStyle)
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _css.css)(gridContainerStyle)
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _css.css)(headContainerStyle)
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _css.css)(titleContainerStyle, {
      justifyContent: menuTitleProps !== null && menuTitleProps !== void 0 && menuTitleProps.items ? '' : 'center'
    })
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _css.css)(hiddenContainerStyle, {
      flex: menuTitleProps !== null && menuTitleProps !== void 0 && menuTitleProps.items ? '1 1 0%' : 'none'
    })
  }), /*#__PURE__*/_react["default"].createElement("span", {
    className: (0, _css.css)(titleStyle)
  }, title), (menuTitleProps === null || menuTitleProps === void 0 ? void 0 : menuTitleProps.items) && /*#__PURE__*/_react["default"].createElement(_Menu.Menu2, menuTitleProps)), (menuButtonProps === null || menuButtonProps === void 0 ? void 0 : menuButtonProps.items) && /*#__PURE__*/_react["default"].createElement(_Menu.MenuButton, menuButtonProps), buttonLargeProps && /*#__PURE__*/_react["default"].createElement(_Button.ButtonLarge, buttonLargeProps)))));
};