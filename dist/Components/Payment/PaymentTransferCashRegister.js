"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PaymentTransferCashRegister = void 0;
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = _interopRequireDefault(require("react"));
var _Loading = require("../Loading");
var _Abstract = require("../../Abstract");
var _constants = require("../../constants");
var _excluded = ["className"];
var PaymentTransferCashRegister = exports.PaymentTransferCashRegister = function PaymentTransferCashRegister(_ref) {
  var use = _ref.use,
    useCurrencies = _ref.useCurrencies,
    _ref$containerProps = _ref.containerProps,
    containerProps = _ref$containerProps === void 0 ? {} : _ref$containerProps,
    sitesOptions = _ref.sitesOptions,
    returnInitModule = _ref.returnInitModule;
  var containerClassName = containerProps.className,
    restContainerProps = (0, _objectWithoutProperties2["default"])(containerProps, _excluded);
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, use.pages.states.isFetching && /*#__PURE__*/_react["default"].createElement(_Loading.Loading, {
    mainStyles: {
      custom: 'height: 100vh;'
    }
  }), use.pages.states.isPaymentCrForm && /*#__PURE__*/_react["default"].createElement(_Abstract.FadeIn, {
    keyName: "PaymentCrForm",
    isVisible: use.pages.states.isPaymentCrForm
  }, /*#__PURE__*/_react["default"].createElement(_Abstract.TransferCashRegisterForm, {
    useError: use.error,
    siteOptions: sitesOptions,
    useCurrencies: useCurrencies,
    usePayment: use.attributes,
    currentPaymentInfo: {
      returnInit: returnInitModule,
      buttonNextId: _constants.PAYMENT_TRANSFER_CASH_REGISTER_ROUTE,
      next: use.pages.actions.onFinalPaymentCrForm,
      cashRegisterPostsId: use.attributes.states.currentCashRegisterPostsId,
      cashRegisterTypePostsId: use.attributes.states.currentCashRegisterTypePostsId
    }
  })), use.pages.states.isFinalPaymentCrForm && /*#__PURE__*/_react["default"].createElement(_Abstract.FadeIn, {
    keyName: "FinalPaymentCrForm",
    isVisible: use.pages.states.isFinalPaymentCrForm
  }, /*#__PURE__*/_react["default"].createElement(_Abstract.FinalPaymentTransferCashRegister, {
    use: use
  })));
};