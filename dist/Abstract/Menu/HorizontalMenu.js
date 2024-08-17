"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HorizontalMenu = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _css = require("@emotion/css");
var _react = _interopRequireDefault(require("react"));
var _templateObject, _templateObject2;
// Estilos Emotion para el componente MenuItem
var menuItemStyles = (0, _css.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  align-items: center;\n  padding: 10px;\n  margin-right: 10px;\n  cursor: pointer;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n\n  &:hover {\n    background-color: #f0f0f0;\n  }\n\n  svg {\n    margin-right: 5px;\n  }\n"])));

// Componente para un ítem del menú
var MenuItem = function MenuItem(_ref) {
  var label = _ref.label,
    onClick = _ref.onClick,
    Icon = _ref.icon;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _css.cx)(menuItemStyles),
    onClick: onClick
  }, Icon && /*#__PURE__*/_react["default"].createElement(Icon, {
    size: 20
  }), " ", label);
};
// Estilos Emotion para el componente Menu
var menuStyles = (0, _css.css)(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  padding-left: 38px;\n"])));

// Componente para el menú
var HorizontalMenu = exports.HorizontalMenu = function HorizontalMenu(_ref2) {
  var items = _ref2.items;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _css.cx)(menuStyles)
  }, items.map(function (item) {
    return /*#__PURE__*/_react["default"].createElement(MenuItem, (0, _extends2["default"])({
      key: item.label
    }, item));
  }));
};