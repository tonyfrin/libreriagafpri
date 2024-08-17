"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.List = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _react = _interopRequireDefault(require("react"));
var _css = require("@emotion/css");
var _Bar = require("../Bar");
var _ColumnList = require("./ColumnList");
var _Pagination = require("../Pagination");
var _templateObject, _templateObject2, _templateObject3, _templateObject4;
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var defaultMainContainerStyle = (0, _css.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  transition: all 1s ease 0s;\n  display: grid;\n  transition: all 1s ease 0s;\n  grid-template: 'main' 1fr / 1fr;\n  box-sizing: border-box;\n  height: 100%;\n  background-color: rgb(247, 246, 244);\n  font-size: 100%;\n  margin: 0;\n  padding: 0;\n  border: 0;\n  vertical-align: top;\n  border-spacing: 0;\n  border-collapse: collapse;\n"])));
var defaultGridContainerStyle = (0, _css.css)(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n    transition: all 1s ease 0s;\n    display: grid\n    transition: all 1s ease 0s;\n    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;\n    justify-self: center;\n    padding: 0px 1rem 8rem;\n    width: 100%;\n    max-width: calc(1272px + 2rem);\n    grid-area: 2 / 1 / auto / auto;\n    align-content: start;\n    box-sizing: border-box;\n    background: transparent;\n    font-size: 100%;\n    margin: 0;\n    border: 0;\n    vertical-align: top;\n    border-spacing: 0;\n    border-collapse: collapse;\n"])));
var defaultInfoContainerStyle = (0, _css.css)(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n  transition: all 1s ease 0s;\n  display: inline-block;\n  box-sizing: border-box;\n  align-self: stretch;\n  grid-area: 2 / 1 / span 1 / span 12;\n  padding-top: 3rem;\n  background: transparent;\n  font-size: 100%;\n  margin: 0;\n  border: 0;\n  vertical-align: top;\n  border-spacing: 0;\n  border-collapse: collapse;\n  width: 100%;\n"])));
var defaultBreakContainerStyle = (0, _css.css)(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2["default"])(["\n  transition: all 1s ease 0s;\n  background: transparent;\n  font-size: 100%;\n  margin: 0;\n  padding: 0;\n  border: 0;\n  vertical-align: top;\n  border-spacing: 0;\n  border-collapse: collapse;\n"])));
var List = exports.List = function List(_ref) {
  var items = _ref.items,
    headers = _ref.headers,
    columns = _ref.columns,
    selectProps = _ref.selectProps,
    selectByProps = _ref.selectByProps,
    inputProps = _ref.inputProps,
    propsPagination = _ref.propsPagination,
    _ref$title = _ref.title,
    title = _ref$title === void 0 ? '' : _ref$title,
    actionButton = _ref.actionButton,
    _ref$mainContainerSty = _ref.mainContainerStyle,
    mainContainerStyle = _ref$mainContainerSty === void 0 ? defaultMainContainerStyle : _ref$mainContainerSty,
    _ref$gridContainerSty = _ref.gridContainerStyle,
    gridContainerStyle = _ref$gridContainerSty === void 0 ? defaultGridContainerStyle : _ref$gridContainerSty,
    _ref$infoContainerSty = _ref.infoContainerStyle,
    infoContainerStyle = _ref$infoContainerSty === void 0 ? defaultInfoContainerStyle : _ref$infoContainerSty,
    _ref$breakContainerSt = _ref.breakContainerStyle,
    breakContainerStyle = _ref$breakContainerSt === void 0 ? defaultBreakContainerStyle : _ref$breakContainerSt,
    propsColumnList = _ref.propsColumnList;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _css.css)(mainContainerStyle)
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _css.css)(gridContainerStyle)
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _css.css)(infoContainerStyle)
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _css.css)(breakContainerStyle)
  }, /*#__PURE__*/_react["default"].createElement(_Bar.SearchBar, {
    label: title,
    selectProps: selectProps,
    inputProps: _objectSpread({}, inputProps),
    selectByProps: selectByProps,
    actionButton: actionButton
  }), /*#__PURE__*/_react["default"].createElement(_ColumnList.ColumnList, (0, _extends2["default"])({
    items: items,
    columns: columns,
    headers: headers
  }, propsColumnList)), /*#__PURE__*/_react["default"].createElement(_Pagination.Pagination, propsPagination)))));
};