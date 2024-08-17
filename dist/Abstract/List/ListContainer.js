"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListContainer = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _react = _interopRequireDefault(require("react"));
var _css = require("@emotion/css");
var _List = require("./List");
var _templateObject;
var divListContainerStyleDefault = function divListContainerStyleDefault(styles) {
  return (0, _css.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  border-top: ", ";\n  padding-top: ", ";\n  width: ", ";\n  margin-top: ", ";\n  ", "\n"])), (styles === null || styles === void 0 ? void 0 : styles.borderTop) || '0.1rem solid rgb(227, 223, 218', (styles === null || styles === void 0 ? void 0 : styles.paddingTop) || '10px', (styles === null || styles === void 0 ? void 0 : styles.paddingTop) || '96%', (styles === null || styles === void 0 ? void 0 : styles.paddingTop) || '5px', (styles === null || styles === void 0 ? void 0 : styles.customStyles) || '');
};
var ListContainer = exports.ListContainer = function ListContainer(_ref) {
  var _ref$divStiles = _ref.divStiles,
    divStiles = _ref$divStiles === void 0 ? {} : _ref$divStiles,
    propsList = _ref.propsList;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _css.cx)(divListContainerStyleDefault(divStiles))
  }, /*#__PURE__*/_react["default"].createElement(_List.List, propsList)));
};