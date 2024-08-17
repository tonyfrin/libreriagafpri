"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LineProductBudgetCart = void 0;
var _react = _interopRequireDefault(require("react"));
var _Button = require("../Button");
var _Input = require("../Input");
var _helpers = require("../../helpers");
var _LineCol = require("./LineCol1");
var _Span = require("../Span");
var _LineCol2 = require("./LineCol4");
var _LineCol3 = require("./LineCol2");
var _LineTable = require("./LineTable");
var LineProductBudgetCart = exports.LineProductBudgetCart = function LineProductBudgetCart(_ref) {
  var useBudget = _ref.useBudget,
    siteOptions = _ref.siteOptions;
  var items = useBudget.useProductItems.states.shoppingCart.map(function (product, index) {
    return /*#__PURE__*/_react["default"].createElement(_LineTable.LineTable, {
      containerProps: {
        key: "product-".concat(index)
      }
    }, /*#__PURE__*/_react["default"].createElement(_LineCol.LineCol1, null, /*#__PURE__*/_react["default"].createElement(_Span.SpanValue, {
      value: product.sku
    })), /*#__PURE__*/_react["default"].createElement(_LineCol2.LineCol4, null, /*#__PURE__*/_react["default"].createElement(_Span.SpanValue, {
      value: product.name
    })), /*#__PURE__*/_react["default"].createElement(_LineCol.LineCol1, null, /*#__PURE__*/_react["default"].createElement(_Span.SpanValue, {
      value: (0, _helpers.decimalFormatPriceConverter)(product.cost || 0, siteOptions.DECIMAL_NUMBERS, siteOptions.CURRENCY_SYMBOL, siteOptions.CURRENCY_LOCATION)
    })), /*#__PURE__*/_react["default"].createElement(_LineCol.LineCol1, null, /*#__PURE__*/_react["default"].createElement(_Input.InputCart, {
      contentProps: {
        defaultValue: parseFloat("".concat(product.qty)).toFixed(2),
        onChange: function onChange(event) {
          return useBudget.useProductItems.actions.updateQtyItemCart(index, event.target.value);
        }
      }
    })), /*#__PURE__*/_react["default"].createElement(_LineCol3.LineCol2, null, /*#__PURE__*/_react["default"].createElement(_Input.InputCart, {
      contentProps: {
        defaultValue: parseFloat("".concat(product.price)).toFixed(2),
        onChange: function onChange(event) {
          return useBudget.useProductItems.actions.updatePriceItemCart(index, event.target.value);
        }
      }
    })), /*#__PURE__*/_react["default"].createElement(_LineCol3.LineCol2, null, /*#__PURE__*/_react["default"].createElement(_Span.SpanValue, {
      value: (0, _helpers.decimalFormatPriceConverter)((parseFloat("".concat(product.qty)) * parseFloat("".concat(product.price))).toFixed(2) || '0', siteOptions.DECIMAL_NUMBERS, siteOptions.CURRENCY_SYMBOL, siteOptions.CURRENCY_LOCATION)
    })), /*#__PURE__*/_react["default"].createElement(_LineCol.LineCol1, null, /*#__PURE__*/_react["default"].createElement(_Button.Button, {
      title: "X",
      styles: {
        backgroundColor: '#c12429',
        fontSize: '8px',
        padding: '0.275rem 0.5rem'
      },
      buttonProps: {
        onClick: function onClick() {
          return useBudget.useProductItems.actions.removeShoppingCartItem(index);
        }
      }
    })));
  });
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, items);
};