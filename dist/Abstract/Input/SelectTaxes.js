"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SelectTaxes = void 0;
var _react = _interopRequireDefault(require("react"));
var _constants = require("../../constants");
var _Input = require("./Input");
var SelectTaxes = exports.SelectTaxes = function SelectTaxes(_ref) {
  var changeTaxes = _ref.changeTaxes,
    props = _ref.props,
    _ref$inputId = _ref.inputId,
    inputId = _ref$inputId === void 0 ? '' : _ref$inputId;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Input.GsSelect, {
    styles: props === null || props === void 0 ? void 0 : props.styles,
    Class: props === null || props === void 0 ? void 0 : props.Class,
    options: props.options,
    id: "".concat(_constants.TAXES_INPUT).concat(inputId),
    onChange: changeTaxes,
    placeholder: props === null || props === void 0 ? void 0 : props.placeholder,
    containerStyles: props === null || props === void 0 ? void 0 : props.containerStyles,
    containerClass: props === null || props === void 0 ? void 0 : props.containerClass,
    defaultValue: props === null || props === void 0 ? void 0 : props.defaultValue,
    title: props === null || props === void 0 ? void 0 : props.title
  }));
};