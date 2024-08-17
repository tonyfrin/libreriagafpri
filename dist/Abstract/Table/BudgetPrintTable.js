"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BudgetPrintTable = void 0;
var _react = _interopRequireDefault(require("react"));
var _Li = require("../Li");
var _Span = require("../Span");
var _SimpleTable = require("./SimpleTable");
var BudgetPrintTable = exports.BudgetPrintTable = function BudgetPrintTable(_ref) {
  var siteOptions = _ref.siteOptions,
    useBudget = _ref.useBudget;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_SimpleTable.SimpleTable, {
    header: /*#__PURE__*/_react["default"].createElement(_Li.LineHeaderTable, null, /*#__PURE__*/_react["default"].createElement(_Li.ColHeaderTable, null, /*#__PURE__*/_react["default"].createElement(_Span.SpanValue, {
      value: "Presupuesto #"
    })), /*#__PURE__*/_react["default"].createElement(_Li.ColHeaderTable, null, /*#__PURE__*/_react["default"].createElement(_Span.SpanValue, {
      value: "Fecha"
    })), /*#__PURE__*/_react["default"].createElement(_Li.ColHeaderTable, null, /*#__PURE__*/_react["default"].createElement(_Span.SpanValue, {
      value: "Cliente"
    })), /*#__PURE__*/_react["default"].createElement(_Li.ColHeaderTable, null, /*#__PURE__*/_react["default"].createElement(_Span.SpanValue, {
      value: "Monto"
    })), /*#__PURE__*/_react["default"].createElement(_Li.ColHeaderTable, null, /*#__PURE__*/_react["default"].createElement(_Span.SpanValue, {
      value: "Acciones"
    }))),
    body: /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Li.LineBudgetPrint, {
      useBudget: useBudget,
      siteOptions: siteOptions
    }))
  }));
};