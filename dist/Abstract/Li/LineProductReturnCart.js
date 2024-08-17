"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LineProductReturnCart = void 0;
var _react = _interopRequireDefault(require("react"));
var _Button = require("../Button");
var _Input = require("../Input");
var _helpers = require("../../helpers");
var _LineCol = require("./LineCol1");
var _Span = require("../Span");
var _LineCol2 = require("./LineCol4");
var _LineCol3 = require("./LineCol2");
var _LineTable = require("./LineTable");
var LineProductReturnCart = exports.LineProductReturnCart = function LineProductReturnCart(_ref) {
  var useOrderReturn = _ref.useOrderReturn,
    siteOptions = _ref.siteOptions;
  var handleInputQtyChange = function handleInputQtyChange(e, max, index) {
    var newValue = parseFloat(e.target.value);
    if (Number.isNaN(newValue)) {
      return;
    }
    if (newValue > max) {
      useOrderReturn.useProductItems.actions.updateQtyItemCart(index, "".concat(max));
      return;
    }
    useOrderReturn.useProductItems.actions.updateQtyItemCart(index, "".concat(newValue));
  };
  var items = useOrderReturn.useProductItems.states.shoppingCart.map(function (product, index) {
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
        value: "".concat(product.qty),
        onChange: function onChange(event) {
          return handleInputQtyChange(event, parseFloat("".concat(product.qtyOrderItem)), index);
        }
      }
    })), /*#__PURE__*/_react["default"].createElement(_LineCol3.LineCol2, null, /*#__PURE__*/_react["default"].createElement(_Span.SpanValue, {
      value: (0, _helpers.decimalFormatPriceConverter)(product.price || 0, siteOptions.DECIMAL_NUMBERS, siteOptions.CURRENCY_SYMBOL, siteOptions.CURRENCY_LOCATION)
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
          return useOrderReturn.useProductItems.actions.removeShoppingCartItem(index);
        }
      }
    })));
  });
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, items);
};