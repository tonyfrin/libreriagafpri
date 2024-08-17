"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ColumnList = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _react = _interopRequireDefault(require("react"));
var _css = require("@emotion/css");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;
var defaultMainContainerStyle = (0, _css.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  transition: all 1s ease 0s;\n  display: table;\n  border-collapse: separate;\n  border-spacing: 0px;\n  background-color: rgb(255, 255, 255);\n  width: 100%;\n  border-radius: 0.5rem;\n  border: 1px solid rgb(227, 223, 218);\n  overflow: auto;\n  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,\n    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;\n  table-layout: fixed;\n"])));
var defaultHeaderContainerStyle = function defaultHeaderContainerStyle(columns) {
  return (0, _css.css)(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  display: grid;\n  grid-template-columns: repeat(", ", 1fr);\n  gap: 16px;\n"])), columns);
};
var defaultItemsContainerStyle = function defaultItemsContainerStyle(columns) {
  return (0, _css.css)(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n  transition: all 1s ease 0s;\n  display: grid;\n  grid-template-columns: repeat(", ", 1fr);\n  gap: 16px;\n  list-style-type: none;\n  padding: 0;\n  margin: 0;\n"])), columns);
};
var defaultItemStyle = (0, _css.css)(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2["default"])(["\n  transition: all 1s ease 0s;\n  font-family: 'Poppins', sans-serif;\n  font-weight: 400;\n  font-size: 1rem;\n  color: rgb(38, 35, 33);\n  width: auto;\n  padding: 1rem;\n  vertical-align: middle;\n  border-top: 1px solid rgb(227, 223, 218);\n  line-height: 1.25rem;\n  display: inline-block;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  width: 75%;\n"])));
var defaultHeaderStyle = (0, _css.css)(_templateObject5 || (_templateObject5 = (0, _taggedTemplateLiteral2["default"])(["\n  transition: all 1s ease 0s;\n  font-family: 'Poppins', sans-serif;\n  font-weight: 300;\n  font-size: 0.875rem;\n  color: rgb(38, 35, 33);\n  display: table-cell;\n  width: auto;\n  padding: 1rem;\n  vertical-align: middle;\n  border-top: none;\n"])));
var ColumnList = exports.ColumnList = function ColumnList(_ref) {
  var items = _ref.items,
    columns = _ref.columns,
    headers = _ref.headers,
    _ref$mainContainerSty = _ref.mainContainerStyle,
    mainContainerStyle = _ref$mainContainerSty === void 0 ? defaultMainContainerStyle : _ref$mainContainerSty,
    _ref$headerContainerS = _ref.headerContainerStyle,
    headerContainerStyle = _ref$headerContainerS === void 0 ? defaultHeaderContainerStyle(columns) : _ref$headerContainerS,
    _ref$headerStyle = _ref.headerStyle,
    headerStyle = _ref$headerStyle === void 0 ? defaultHeaderStyle : _ref$headerStyle,
    _ref$itemsContainerSt = _ref.itemsContainerStyle,
    itemsContainerStyle = _ref$itemsContainerSt === void 0 ? defaultItemsContainerStyle(columns) : _ref$itemsContainerSt,
    _ref$itemStyle = _ref.itemStyle,
    itemStyle = _ref$itemStyle === void 0 ? defaultItemStyle : _ref$itemStyle;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _css.css)(mainContainerStyle)
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _css.css)(headerContainerStyle)
  }, headers.map(function (header, index) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      key: index,
      className: headerStyle
    }, header);
  })), /*#__PURE__*/_react["default"].createElement("ul", {
    className: (0, _css.css)(itemsContainerStyle)
  }, items.map(function (row, rowIndex) {
    return row.map(function (item, columnIndex) {
      return /*#__PURE__*/_react["default"].createElement("li", {
        key: "".concat(rowIndex, "-").concat(columnIndex),
        className: itemStyle
      }, item);
    });
  })));
};