"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Menu1 = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _react = _interopRequireDefault(require("react"));
var _css = require("@emotion/css");
var _gi = require("react-icons/gi");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6;
var defaultMainContainerStyle = (0, _css.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  position: fixed;\n  left: 0px;\n  height: 100vh;\n  top: 60px;\n  max-width: 31.25rem;\n  z-index: 10;\n  transition: all 0.5s ease 0s;\n  background: linear-gradient(to bottom, #324375, #30679e);\n  overflow-y: auto;\n"])));
var defaultListContainerStyle = (0, _css.css)(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  padding: 0.5rem;\n  margin-top: 40px;\n  max-height: calc(100vh - 150px);\n  overflow-y: auto;\n"])));
var defaultItemContainerStyle = (0, _css.css)(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n  font-weight: 700;\n  font-style: normal;\n  text-align: center;\n  box-sizing: border-box;\n  min-width: 2.5rem;\n  max-width: 396px;\n  min-height: 2.5rem;\n  line-height: 20px;\n  height: 2.5rem;\n  width: 100%;\n  position: relative;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  border-radius: 0.5rem;\n  border-width: 0px;\n  border-color: rgb(140, 191, 204);\n  border-style: solid;\n  background-image: none;\n  color: rgb(186, 209, 245);\n  display: inline-flex;\n  margin: 0.25rem 0px;\n  text-transform: none;\n  padding: 0.5rem;\n  cursor: pointer;\n  &:hover {\n    background-color: rgb(32, 51, 125);\n    color: #ffff;\n  }\n"])));
var defaultTextStyle = (0, _css.css)(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2["default"])(["\n  margin: 0px 0px 0px 5px;\n  transition: all 0.5s ease 0s;\n  flexgrow: 1;\n  flexshrink: 1;\n  order: 0;\n"])));
var defaultHamburgerButtonStyle = (0, _css.css)(_templateObject5 || (_templateObject5 = (0, _taggedTemplateLiteral2["default"])(["\n  position: absolute;\n  top: 10px;\n  background: transparent;\n  border: none;\n  border-radius: 0.5rem;\n  cursor: pointer;\n  font-size: 24px;\n  color: rgb(186, 209, 245);\n  padding: 5px 5px 0px 5px;\n  &:hover {\n    background-color: rgb(32, 51, 125);\n    color: #ffff;\n  }\n"])));
var defaultIconStyle = (0, _css.css)(_templateObject6 || (_templateObject6 = (0, _taggedTemplateLiteral2["default"])(["\n  flexgrow: 0;\n  flexshrink: 0;\n  marginright: '8px';\n  order: 1;\n"])));
var Menu1 = exports.Menu1 = function Menu1(_ref) {
  var items = _ref.items,
    isOpen = _ref.isOpen,
    setIsOpen = _ref.setIsOpen,
    _ref$mainContainerSty = _ref.mainContainerStyle,
    mainContainerStyle = _ref$mainContainerSty === void 0 ? defaultMainContainerStyle : _ref$mainContainerSty,
    _ref$listContainerSty = _ref.listContainerStyle,
    listContainerStyle = _ref$listContainerSty === void 0 ? defaultListContainerStyle : _ref$listContainerSty,
    _ref$itemContainerSty = _ref.itemContainerStyle,
    itemContainerStyle = _ref$itemContainerSty === void 0 ? defaultItemContainerStyle : _ref$itemContainerSty,
    _ref$iconStyle = _ref.iconStyle,
    iconStyle = _ref$iconStyle === void 0 ? defaultIconStyle : _ref$iconStyle,
    _ref$textStyle = _ref.textStyle,
    textStyle = _ref$textStyle === void 0 ? defaultTextStyle : _ref$textStyle,
    _ref$hamburgerButtonS = _ref.hamburgerButtonStyle,
    hamburgerButtonStyle = _ref$hamburgerButtonS === void 0 ? defaultHamburgerButtonStyle : _ref$hamburgerButtonS;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _css.css)(mainContainerStyle, {
      width: isOpen ? '250px' : '50px'
    })
  }, isOpen ? /*#__PURE__*/_react["default"].createElement("ul", {
    className: (0, _css.css)(listContainerStyle)
  }, items.map(function (item) {
    return /*#__PURE__*/_react["default"].createElement("li", {
      key: item.id,
      className: (0, _css.css)(itemContainerStyle),
      onClick: item.onClick
    }, /*#__PURE__*/_react["default"].createElement("span", {
      className: (0, _css.css)(iconStyle, {
        order: 0
      })
    }, /*#__PURE__*/_react["default"].createElement(item.icon, null)), /*#__PURE__*/_react["default"].createElement("span", {
      className: (0, _css.css)(textStyle, {
        order: 1,
        opacity: isOpen ? 1 : 0
      })
    }, item.label));
  })) : /*#__PURE__*/_react["default"].createElement("ul", {
    className: (0, _css.css)(listContainerStyle)
  }, items.map(function (item) {
    return /*#__PURE__*/_react["default"].createElement("li", {
      key: item.id,
      className: (0, _css.css)(itemContainerStyle, {
        justifyContent: 'center',
        paddingLeft: 0
      }),
      onClick: item.onClick
    }, /*#__PURE__*/_react["default"].createElement(item.icon, null));
  })), /*#__PURE__*/_react["default"].createElement("button", {
    className: (0, _css.css)(hamburgerButtonStyle, {
      right: isOpen ? '10px' : '5px'
    }),
    onClick: function onClick() {
      return setIsOpen(!isOpen);
    }
  }, /*#__PURE__*/_react["default"].createElement(_gi.GiHamburgerMenu, null)));
};