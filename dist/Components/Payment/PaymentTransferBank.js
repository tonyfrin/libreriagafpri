"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PaymentTransferBank = void 0;
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = _interopRequireDefault(require("react"));
var _Loading = require("../Loading");
var _Abstract = require("../../Abstract");
var _constants = require("../../constants");
var _excluded = ["className"];
var PaymentTransferBank = exports.PaymentTransferBank = function PaymentTransferBank(_ref) {
  var use = _ref.use,
    useCurrencies = _ref.useCurrencies,
    useBankType = _ref.useBankType,
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
  }), use.pages.states.isPaymentForm && /*#__PURE__*/_react["default"].createElement(_Abstract.FadeIn, {
    keyName: "PaymentForm",
    isVisible: use.pages.states.isPaymentForm
  }, /*#__PURE__*/_react["default"].createElement(_Abstract.TransferBankForm, {
    useError: use.error,
    siteOptions: sitesOptions,
    useCurrencies: useCurrencies,
    usePayment: use.attributes,
    useBankType: useBankType,
    currentPaymentInfo: {
      returnInit: returnInitModule,
      buttonNextId: _constants.PAYMENT_TRANSFER_BANK_ROUTE,
      next: use.pages.actions.onFinalPaymentForm,
      debitBankTypePostsId: use.attributes.states.debitBankTypePostsId
    }
  })), use.pages.states.isFinalPaymentForm && /*#__PURE__*/_react["default"].createElement(_Abstract.FadeIn, {
    keyName: "FinalPaymentForm",
    isVisible: use.pages.states.isFinalPaymentForm
  }, /*#__PURE__*/_react["default"].createElement(_Abstract.FinalPaymentTransferBank, {
    use: use
  })));
};