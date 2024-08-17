"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SingleBodyTable = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _react = _interopRequireDefault(require("react"));
var _styled = _interopRequireDefault(require("@emotion/styled"));
var _css = require("@emotion/css");
var _templateObject, _templateObject2, _templateObject3;
var singleTableContainer = function singleTableContainer(style) {
  return (0, _css.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  width: ", ";\n  min-height: ", ";\n  overflow: ", ";\n  ", "\n"])), style.width || '100%', style.minHeight || '150px', style.overflow || 'auto', style.custom || '');
};
var TableContainer = _styled["default"].table(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  width: 100%;\n  overflow: auto;\n  border-collapse: collapse;\n  font-size: 10px;\n"])));
var TableRow = _styled["default"].tr(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n  &:nth-child(even) {\n    background-color: #f9f9f9;\n  }\n"])));
var SingleBodyTable = exports.SingleBodyTable = function SingleBodyTable(_ref) {
  var data = _ref.data,
    _ref$containerStyles = _ref.containerStyles,
    containerStyles = _ref$containerStyles === void 0 ? {} : _ref$containerStyles;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _css.cx)(singleTableContainer(containerStyles))
  }, /*#__PURE__*/_react["default"].createElement(TableContainer, null, data.map(function (rowData, rowIndex) {
    return /*#__PURE__*/_react["default"].createElement(TableRow, {
      key: rowIndex
    }, rowData.map(function (cellData) {
      return cellData;
    }));
  })));
};