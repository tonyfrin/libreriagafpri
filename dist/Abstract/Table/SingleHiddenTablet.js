"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SingleHiddenTablet = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _react = _interopRequireDefault(require("react"));
var _styled = _interopRequireDefault(require("@emotion/styled"));
var _css = require("@emotion/css");
var _templateObject, _templateObject2, _templateObject3, _templateObject4;
var singleTableContainer = function singleTableContainer() {
  return (0, _css.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  width: 100%;\n  min-height: 150px;\n  overflow: auto;\n"])));
};
var TableContainer = _styled["default"].table(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  width: 100%;\n  overflow: auto;\n  border-collapse: collapse;\n  font-size: 10px;\n"])));
var TableHeader = _styled["default"].th(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n  border: 1px solid #ddd;\n  padding: 10px;\n  text-align: center;\n"])));
var TableRow = _styled["default"].tr(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2["default"])([""])));
var SingleHiddenTablet = exports.SingleHiddenTablet = function SingleHiddenTablet(_ref) {
  var headers = _ref.headers,
    data = _ref.data;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _css.cx)(singleTableContainer())
  }, /*#__PURE__*/_react["default"].createElement(TableContainer, null, /*#__PURE__*/_react["default"].createElement("thead", null, /*#__PURE__*/_react["default"].createElement("tr", null, headers.map(function (header, index) {
    return /*#__PURE__*/_react["default"].createElement(TableHeader, {
      key: index
    }, header);
  }))), /*#__PURE__*/_react["default"].createElement("tbody", null, data.map(function (rowData, rowIndex) {
    return /*#__PURE__*/_react["default"].createElement(TableRow, {
      key: rowIndex
    }, rowData.map(function (cellData) {
      return cellData;
    }));
  }))));
};