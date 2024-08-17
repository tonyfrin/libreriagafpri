"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LineBudgetPrint = void 0;
var _react = _interopRequireDefault(require("react"));
var _Button = require("../Button");
var _helpers = require("../../helpers");
var _Span = require("../Span");
var _LineCol = require("./LineCol4");
var _LineCol2 = require("./LineCol2");
var _LineTable = require("./LineTable");
var LineBudgetPrint = exports.LineBudgetPrint = function LineBudgetPrint(_ref) {
  var useBudget = _ref.useBudget,
    siteOptions = _ref.siteOptions;
  var items = useBudget.data.states.items.data.items && useBudget.data.states.items.data.items.map(function (item, index) {
    var _item$budgetCustomer$;
    var date = (0, _helpers.formatDate)("".concat(item.posts.createdAt));
    return /*#__PURE__*/_react["default"].createElement(_LineTable.LineTable, {
      containerProps: {
        key: "budget-".concat(index)
      }
    }, /*#__PURE__*/_react["default"].createElement(_LineCol2.LineCol2, null, /*#__PURE__*/_react["default"].createElement(_Span.SpanValue, {
      value: "".concat(item.postsId)
    })), /*#__PURE__*/_react["default"].createElement(_LineCol2.LineCol2, null, /*#__PURE__*/_react["default"].createElement(_Span.SpanValue, {
      value: date
    })), /*#__PURE__*/_react["default"].createElement(_LineCol.LineCol4, null, /*#__PURE__*/_react["default"].createElement(_Span.SpanValue, {
      value: "".concat(item.budgetCustomer[0].name, " ").concat((_item$budgetCustomer$ = item.budgetCustomer[0]) === null || _item$budgetCustomer$ === void 0 ? void 0 : _item$budgetCustomer$.lastName)
    })), /*#__PURE__*/_react["default"].createElement(_LineCol2.LineCol2, null, /*#__PURE__*/_react["default"].createElement(_Span.SpanValue, {
      value: (0, _helpers.decimalFormatPriceConverter)(item.total || '0', siteOptions.DECIMAL_NUMBERS, siteOptions.CURRENCY_SYMBOL, siteOptions.CURRENCY_LOCATION)
    })), /*#__PURE__*/_react["default"].createElement(_LineCol2.LineCol2, null, /*#__PURE__*/_react["default"].createElement(_Button.Button, {
      title: "Ver",
      styles: {
        backgroundColor: '#c12429',
        fontSize: '8px',
        padding: '0.275rem 0.5rem'
      },
      buttonProps: {
        onClick: function onClick() {
          return console.log('delete budget', item.postsId);
        }
      }
    })));
  });
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, items);
};