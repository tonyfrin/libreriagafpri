"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FloatingButtons = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _react = _interopRequireDefault(require("react"));
var _css = require("@emotion/css");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;
var floatingButtonsItemStyles = (0, _css.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  position: relative;\n  display: flex;\n  align-items: center;\n  margin-bottom: 8px;\n"])));
var floatingButtonsContainerStyles = (0, _css.css)(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  position: relative;\n  display: flex;\n  align-items: center;\n  margin-right: 5px;\n  margin-bottom: 5px;\n"])));
var floatingButtonsButtonStyles = (0, _css.css)(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n  margin-right: 8px;\n  padding: 8px;\n  color: #8d8d8d;\n  border-radius: 4px;\n  border: 1px solid #dfdbdb;\n"])));
var floatingCloseButtonStyles = (0, _css.css)(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2["default"])(["\n  position: absolute;\n  top: 0px;\n  transform: translateY(-50%);\n  right: 0px;\n  cursor: pointer;\n  color: #fff;\n  background-color: #f44336;\n  border-radius: 100%;\n  padding: 2px 5px 4px 5px;\n  font-size: 8px;\n"])));
var floatingButtonsStyles = (0, _css.css)(_templateObject5 || (_templateObject5 = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  margin: 20px 10px;\n  padding: 15px 0px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  width: 91%;\n"])));
var FloatingButtons = exports.FloatingButtons = function FloatingButtons(_ref) {
  var items = _ref.items,
    remove = _ref.remove;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _css.cx)(floatingButtonsStyles)
  }, items.map(function (label) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      key: label,
      className: (0, _css.cx)(floatingButtonsItemStyles)
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: (0, _css.cx)(floatingButtonsContainerStyles)
    }, /*#__PURE__*/_react["default"].createElement("span", {
      className: (0, _css.cx)(floatingCloseButtonStyles),
      onClick: function onClick() {
        return remove(label);
      }
    }, "x"), /*#__PURE__*/_react["default"].createElement("button", {
      className: (0, _css.cx)(floatingButtonsButtonStyles)
    }, label)));
  }));
};