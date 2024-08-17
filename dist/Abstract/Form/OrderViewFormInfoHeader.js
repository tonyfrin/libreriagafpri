"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrderViewFormInfoHeader = void 0;
var _react = _interopRequireDefault(require("react"));
var _Containers = require("../Containers");
var _Li = require("../Li");
var _helpers = require("../../helpers");
var _Pdf = require("../Pdf");
var OrderViewFormInfoHeader = exports.OrderViewFormInfoHeader = function OrderViewFormInfoHeader(_ref) {
  var order = _ref.order,
    siteOptions = _ref.siteOptions,
    logoPdf = _ref.logoPdf;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Containers.ContainerHeaderInfo, {
    containerStyles: {
      borderRight: 'none'
    }
  }, /*#__PURE__*/_react["default"].createElement(_Li.LineInfoTwo, {
    title: "Sub-Total: ",
    info: (0, _helpers.decimalFormatPriceConverter)(order.subTotal || '0', siteOptions.DECIMAL_NUMBERS, siteOptions.CURRENCY_SYMBOL, siteOptions.CURRENCY_LOCATION),
    contentInfoStyles: {
      custom: 'text-align: center;'
    }
  }), /*#__PURE__*/_react["default"].createElement(_Li.LineInfoTwo, {
    title: "Impuestos: ",
    info: (0, _helpers.decimalFormatPriceConverter)(order.subTotalTax || '0', siteOptions.DECIMAL_NUMBERS, siteOptions.CURRENCY_SYMBOL, siteOptions.CURRENCY_LOCATION),
    contentInfoStyles: {
      custom: 'text-align: center;'
    }
  }), /*#__PURE__*/_react["default"].createElement(_Li.LineInfoTwo, {
    title: "Total: ",
    info: (0, _helpers.decimalFormatPriceConverter)(order.total || '0', siteOptions.DECIMAL_NUMBERS, siteOptions.CURRENCY_SYMBOL, siteOptions.CURRENCY_LOCATION),
    contentInfoStyles: {
      custom: 'text-align: center;'
    }
  }), /*#__PURE__*/_react["default"].createElement(_Containers.ContainerButton, {
    styles: {
      width: '100%',
      custom: 'margin-top: 30px;'
    }
  }, /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Pdf.PrintButtonOrderPending, {
    order: order,
    siteOptions: siteOptions,
    logoPdf: logoPdf
  })))));
};