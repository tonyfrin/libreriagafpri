"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SingleList = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _react = _interopRequireDefault(require("react"));
var _css = require("@emotion/css");
var _Pagination = require("../Pagination");
var _Table = require("../Table");
var _excluded = ["className"];
var _templateObject;
var singleListContainerStyle = function singleListContainerStyle(styles) {
  return (0, _css.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  transition: ", ";\n  background: ", ";\n  font-size: ", ";\n  margin: ", ";\n  padding: ", ";\n  border: ", ";\n  vertical-align: ", ";\n  border-spacing: ", ";\n  border-collapse: ", ";\n  ", "\n"])), styles.transition || 'all 1s ease 0s', styles.background || 'transparent', styles.fontSize || '100%', styles.margin || '0', styles.padding || '0', styles.border || '0', styles.verticalAlign || 'top', styles.borderSpacing || '0', styles.borderCollapse || 'collapse', styles.custom);
};
var SingleList = exports.SingleList = function SingleList(_ref) {
  var items = _ref.items,
    headers = _ref.headers,
    propsPagination = _ref.propsPagination,
    _ref$containerStyle = _ref.containerStyle,
    containerStyle = _ref$containerStyle === void 0 ? {} : _ref$containerStyle,
    _ref$containerProps = _ref.containerProps,
    containerProps = _ref$containerProps === void 0 ? {} : _ref$containerProps;
  var containerClassName = containerProps.className,
    restContainerProps = (0, _objectWithoutProperties2["default"])(containerProps, _excluded);
  return /*#__PURE__*/_react["default"].createElement("div", (0, _extends2["default"])({
    className: (0, _css.css)(singleListContainerStyle(containerStyle), containerClassName)
  }, restContainerProps), /*#__PURE__*/_react["default"].createElement(_Table.SingleTable, {
    headers: headers,
    data: items
  }), /*#__PURE__*/_react["default"].createElement(_Pagination.Pagination, propsPagination));
};