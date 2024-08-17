"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LineProductBudgetViewCart = void 0;
var _react = _interopRequireDefault(require("react"));
var _helpers = require("../../helpers");
var _Span = require("../Span");
var _LineCol = require("./LineCol4");
var _LineCol2 = require("./LineCol2");
var _LineTable = require("./LineTable");
var LineProductBudgetViewCart = exports.LineProductBudgetViewCart = function LineProductBudgetViewCart(_ref) {
  var budget = _ref.budget,
    siteOptions = _ref.siteOptions;
  var items = budget.budgetItems.map(function (product, index) {
    return /*#__PURE__*/_react["default"].createElement(_LineTable.LineTable, {
      containerProps: {
        key: "product-".concat(index)
      }
    }, /*#__PURE__*/_react["default"].createElement(_LineCol2.LineCol2, null, /*#__PURE__*/_react["default"].createElement(_Span.SpanValue, {
      value: product.sku
    })), /*#__PURE__*/_react["default"].createElement(_LineCol.LineCol4, null, /*#__PURE__*/_react["default"].createElement(_Span.SpanValue, {
      value: product.name
    })), /*#__PURE__*/_react["default"].createElement(_LineCol2.LineCol2, null, /*#__PURE__*/_react["default"].createElement(_Span.SpanValue, {
      value: (0, _helpers.decimalFormatPriceConverter)(product.qty || 0, siteOptions.DECIMAL_NUMBERS, siteOptions.CURRENCY_SYMBOL, siteOptions.CURRENCY_LOCATION)
    })), /*#__PURE__*/_react["default"].createElement(_LineCol2.LineCol2, null, /*#__PURE__*/_react["default"].createElement(_Span.SpanValue, {
      value: (0, _helpers.decimalFormatPriceConverter)(product.price || 0, siteOptions.DECIMAL_NUMBERS, siteOptions.CURRENCY_SYMBOL, siteOptions.CURRENCY_LOCATION)
    })), /*#__PURE__*/_react["default"].createElement(_LineCol2.LineCol2, null, /*#__PURE__*/_react["default"].createElement(_Span.SpanValue, {
      value: (0, _helpers.decimalFormatPriceConverter)((parseFloat("".concat(product.qty)) * parseFloat("".concat(product.price))).toFixed(2) || '0', siteOptions.DECIMAL_NUMBERS, siteOptions.CURRENCY_SYMBOL, siteOptions.CURRENCY_LOCATION)
    })));
  });
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, items);
};