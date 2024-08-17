"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AttributeTable = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _react = _interopRequireDefault(require("react"));
var _styled = _interopRequireDefault(require("@emotion/styled"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6;
var TableContainer = _styled["default"].table(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  width: 100%;\n  border-collapse: collapse;\n  margin-top: 20px;\n  margin-bottom: 100px;\n  margin-left: 38px;\n"])));
var TableHeader = _styled["default"].th(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  border: 1px solid #ddd;\n  padding: 8px;\n  text-align: left;\n  background-color: #f2f2f2;\n"])));
var TableRow = _styled["default"].tr(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n  &:nth-child(even) {\n    background-color: #f9f9f9;\n  }\n"])));
var TableCell = _styled["default"].td(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2["default"])(["\n  border: 1px solid #ddd;\n  padding: 8px;\n"])));
var TableCellActions = _styled["default"].td(_templateObject5 || (_templateObject5 = (0, _taggedTemplateLiteral2["default"])(["\n  border: 1px solid #ddd;\n  padding: 8px;\n  display: flex;\n  justify-content: center;\n"])));
var RemoveButton = _styled["default"].button(_templateObject6 || (_templateObject6 = (0, _taggedTemplateLiteral2["default"])(["\n  background-color: #c12429;\n  color: #fff;\n  border: none;\n  padding: 5px 10px;\n  cursor: pointer;\n"])));
var AttributeTable = exports.AttributeTable = function AttributeTable(_ref) {
  var data = _ref.data,
    onRemove = _ref.onRemove;
  return /*#__PURE__*/_react["default"].createElement(TableContainer, null, /*#__PURE__*/_react["default"].createElement("thead", null, /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement(TableHeader, null, "Nombre"), /*#__PURE__*/_react["default"].createElement(TableHeader, null, "Valor"), /*#__PURE__*/_react["default"].createElement(TableHeader, null, "Acciones"))), /*#__PURE__*/_react["default"].createElement("tbody", null, data.map(function (attribute, index) {
    return /*#__PURE__*/_react["default"].createElement(TableRow, {
      key: index
    }, /*#__PURE__*/_react["default"].createElement(TableCell, null, attribute.name), /*#__PURE__*/_react["default"].createElement(TableCell, null, attribute.value), /*#__PURE__*/_react["default"].createElement(TableCellActions, null, /*#__PURE__*/_react["default"].createElement(RemoveButton, {
      onClick: function onClick() {
        return onRemove(attribute.name);
      }
    }, "X")));
  })));
};