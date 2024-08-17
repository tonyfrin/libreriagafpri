"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CartOrderViewTable = void 0;
var _react = _interopRequireDefault(require("react"));
var _Li = require("../Li");
var _Span = require("../Span");
var _SimpleTable = require("./SimpleTable");
var CartOrderViewTable = exports.CartOrderViewTable = function CartOrderViewTable(_ref) {
  var siteOptions = _ref.siteOptions,
    order = _ref.order;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_SimpleTable.SimpleTable, {
    header: /*#__PURE__*/_react["default"].createElement(_Li.LineHeaderTable, null, /*#__PURE__*/_react["default"].createElement(_Li.ColHeaderTable, null, /*#__PURE__*/_react["default"].createElement(_Span.SpanValue, {
      value: "C\xF3digo"
    })), /*#__PURE__*/_react["default"].createElement(_Li.ColHeaderTable, null, /*#__PURE__*/_react["default"].createElement(_Span.SpanValue, {
      value: "Nombre"
    })), /*#__PURE__*/_react["default"].createElement(_Li.ColHeaderTable, null, /*#__PURE__*/_react["default"].createElement(_Span.SpanValue, {
      value: "Cantidad"
    })), /*#__PURE__*/_react["default"].createElement(_Li.ColHeaderTable, null, /*#__PURE__*/_react["default"].createElement(_Span.SpanValue, {
      value: "Precio"
    })), /*#__PURE__*/_react["default"].createElement(_Li.ColHeaderTable, null, /*#__PURE__*/_react["default"].createElement(_Span.SpanValue, {
      value: "Total"
    }))),
    body: /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Li.LineProductOrderViewCart, {
      order: order,
      siteOptions: siteOptions
    }))
  }));
};