"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BudgetViewFormInfoHeader = void 0;
var _react = _interopRequireDefault(require("react"));
var _Containers = require("../Containers");
var _Li = require("../Li");
var _helpers = require("../../helpers");
var BudgetViewFormInfoHeader = exports.BudgetViewFormInfoHeader = function BudgetViewFormInfoHeader(_ref) {
  var budget = _ref.budget,
    siteOptions = _ref.siteOptions,
    logoPdf = _ref.logoPdf;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Containers.ContainerHeaderInfo, {
    containerStyles: {
      borderRight: 'none'
    }
  }, /*#__PURE__*/_react["default"].createElement(_Li.LineInfoTwo, {
    title: "PRESUPUESTO: ",
    info: "".concat(budget.postsId),
    contentInfoStyles: {
      custom: 'text-align: center;'
    }
  }), /*#__PURE__*/_react["default"].createElement(_Li.LineInfoTwo, {
    title: "Sub-Total: ",
    info: (0, _helpers.decimalFormatPriceConverter)(budget.subTotal || '0', siteOptions.DECIMAL_NUMBERS, siteOptions.CURRENCY_SYMBOL, siteOptions.CURRENCY_LOCATION),
    contentInfoStyles: {
      custom: 'text-align: center;'
    }
  }), /*#__PURE__*/_react["default"].createElement(_Li.LineInfoTwo, {
    title: "Impuestos: ",
    info: (0, _helpers.decimalFormatPriceConverter)(budget.subTotalTax || '0', siteOptions.DECIMAL_NUMBERS, siteOptions.CURRENCY_SYMBOL, siteOptions.CURRENCY_LOCATION),
    contentInfoStyles: {
      custom: 'text-align: center;'
    }
  }), /*#__PURE__*/_react["default"].createElement(_Li.LineInfoTwo, {
    title: "Total: ",
    info: (0, _helpers.decimalFormatPriceConverter)(budget.total || '0', siteOptions.DECIMAL_NUMBERS, siteOptions.CURRENCY_SYMBOL, siteOptions.CURRENCY_LOCATION),
    contentInfoStyles: {
      custom: 'text-align: center;'
    }
  })));
};