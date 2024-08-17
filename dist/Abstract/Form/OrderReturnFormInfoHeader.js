"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrderReturnFormInfoHeader = void 0;
var _react = _interopRequireDefault(require("react"));
var _Containers = require("../Containers");
var _Button = require("../Button");
var _Li = require("../Li");
var _helpers = require("../../helpers");
var OrderReturnFormInfoHeader = exports.OrderReturnFormInfoHeader = function OrderReturnFormInfoHeader(_ref) {
  var useOrderReturn = _ref.useOrderReturn,
    siteOptions = _ref.siteOptions,
    goPayment = _ref.goPayment;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Containers.ContainerHeaderInfo, {
    containerStyles: {
      borderRight: 'none'
    }
  }, /*#__PURE__*/_react["default"].createElement(_Li.LineInfoTwo, {
    title: "Sub-Total: ",
    info: (0, _helpers.decimalFormatPriceConverter)(useOrderReturn.useProductItems.states.subTotal || '0', siteOptions.DECIMAL_NUMBERS, siteOptions.CURRENCY_SYMBOL, siteOptions.CURRENCY_LOCATION),
    contentInfoStyles: {
      custom: 'text-align: center;'
    }
  }), /*#__PURE__*/_react["default"].createElement(_Li.LineInfoTwo, {
    title: "Impuestos: ",
    info: (0, _helpers.decimalFormatPriceConverter)(useOrderReturn.useProductItems.states.subTotalTax || '0', siteOptions.DECIMAL_NUMBERS, siteOptions.CURRENCY_SYMBOL, siteOptions.CURRENCY_LOCATION),
    contentInfoStyles: {
      custom: 'text-align: center;'
    }
  }), /*#__PURE__*/_react["default"].createElement(_Li.LineInfoTwo, {
    title: "Total: ",
    info: (0, _helpers.decimalFormatPriceConverter)(useOrderReturn.useProductItems.states.total || '0', siteOptions.DECIMAL_NUMBERS, siteOptions.CURRENCY_SYMBOL, siteOptions.CURRENCY_LOCATION),
    contentInfoStyles: {
      custom: 'text-align: center;'
    }
  }), /*#__PURE__*/_react["default"].createElement(_Containers.ContainerButton, {
    styles: {
      width: '100%',
      custom: 'margin-top: 30px;'
    }
  }, /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, parseFloat(useOrderReturn.useProductItems.states.total) > 0 && /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    title: "Emitir devoluci\xF3n",
    buttonProps: {
      onClick: function onClick() {
        return goPayment();
      }
    },
    styles: {
      fontSize: '12px'
    }
  })))));
};