"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrderFormInfoHeader = void 0;
var _react = _interopRequireDefault(require("react"));
var _Containers = require("../Containers");
var _Button = require("../Button");
var _Li = require("../Li");
var _helpers = require("../../helpers");
var OrderFormInfoHeader = exports.OrderFormInfoHeader = function OrderFormInfoHeader(_ref) {
  var useOrder = _ref.useOrder,
    siteOptions = _ref.siteOptions;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Containers.ContainerHeaderInfo, {
    containerStyles: {
      borderRight: 'none'
    }
  }, /*#__PURE__*/_react["default"].createElement(_Li.LineInfoTwo, {
    title: "Sub-Total: ",
    info: (0, _helpers.decimalFormatPriceConverter)(useOrder.useProductItems.states.subTotal || '0', siteOptions.DECIMAL_NUMBERS, siteOptions.CURRENCY_SYMBOL, siteOptions.CURRENCY_LOCATION),
    contentInfoStyles: {
      custom: 'text-align: center;'
    }
  }), /*#__PURE__*/_react["default"].createElement(_Li.LineInfoTwo, {
    title: "Impuestos: ",
    info: (0, _helpers.decimalFormatPriceConverter)(useOrder.useProductItems.states.subTotalTax || '0', siteOptions.DECIMAL_NUMBERS, siteOptions.CURRENCY_SYMBOL, siteOptions.CURRENCY_LOCATION),
    contentInfoStyles: {
      custom: 'text-align: center;'
    }
  }), /*#__PURE__*/_react["default"].createElement(_Li.LineInfoTwo, {
    title: "Total: ",
    info: (0, _helpers.decimalFormatPriceConverter)(useOrder.useProductItems.states.total || '0', siteOptions.DECIMAL_NUMBERS, siteOptions.CURRENCY_SYMBOL, siteOptions.CURRENCY_LOCATION),
    contentInfoStyles: {
      custom: 'text-align: center;'
    }
  }), /*#__PURE__*/_react["default"].createElement(_Containers.ContainerButton, {
    styles: {
      width: '100%',
      custom: 'margin-top: 30px;'
    }
  }, /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, parseFloat(useOrder.useProductItems.states.total) > 0 && /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    title: "Emitir pedido",
    buttonProps: {
      onClick: function onClick() {
        return useOrder.api.actions.add();
      }
    },
    styles: {
      fontSize: '12px'
    }
  })))));
};