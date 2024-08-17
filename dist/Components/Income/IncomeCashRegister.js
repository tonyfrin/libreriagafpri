"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IncomeCashRegister = void 0;
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = _interopRequireDefault(require("react"));
var _Loading = require("../Loading");
var _Abstract = require("../../Abstract");
var _Entity = require("../Entity");
var _constants = require("../../constants");
var _excluded = ["className"];
var IncomeCashRegister = exports.IncomeCashRegister = function IncomeCashRegister(_ref) {
  var use = _ref.use,
    useEntity = _ref.useEntity,
    useCurrencies = _ref.useCurrencies,
    returnInitModule = _ref.returnInitModule,
    _ref$containerProps = _ref.containerProps,
    containerProps = _ref$containerProps === void 0 ? {} : _ref$containerProps,
    sitesOptions = _ref.sitesOptions,
    menuEntity = _ref.menuEntity;
  var containerClassName = containerProps.className,
    restContainerProps = (0, _objectWithoutProperties2["default"])(containerProps, _excluded);
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, use.pages.states.isFetching && /*#__PURE__*/_react["default"].createElement(_Loading.Loading, {
    mainStyles: {
      custom: 'height: 100vh;'
    }
  }), use.pages.states.isInit && /*#__PURE__*/_react["default"].createElement(_Abstract.FadeIn, {
    keyName: "init",
    isVisible: use.pages.states.isInit
  }, /*#__PURE__*/_react["default"].createElement(_Abstract.IncomeInit, {
    useEntity: useEntity,
    useIncome: use,
    returnInitModule: returnInitModule
  })), use.pages.states.isAddEntity && /*#__PURE__*/_react["default"].createElement(_Abstract.FadeIn, {
    keyName: "addEntity",
    isVisible: use.pages.states.isAddEntity
  }, /*#__PURE__*/_react["default"].createElement(_Entity.EntityIncome, {
    use: useEntity,
    useIncome: use,
    menu: menuEntity
  })), use.pages.states.isIncomeForm && /*#__PURE__*/_react["default"].createElement(_Abstract.FadeIn, {
    keyName: "IncomeCrForm",
    isVisible: use.pages.states.isIncomeForm
  }, /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Abstract.IncomeForm, {
    use: use,
    siteOptions: sitesOptions
  }))), use.pages.states.isEntitySearch && /*#__PURE__*/_react["default"].createElement(_Abstract.FadeIn, {
    keyName: "entitySearch",
    isVisible: use.pages.states.isEntitySearch
  }, /*#__PURE__*/_react["default"].createElement(_Abstract.EntityIncomeSearch, {
    use: useEntity,
    useIncome: use
  })), use.pages.states.isPaymentCrForm && /*#__PURE__*/_react["default"].createElement(_Abstract.FadeIn, {
    keyName: "PaymentCrForm",
    isVisible: use.pages.states.isPaymentCrForm
  }, /*#__PURE__*/_react["default"].createElement(_Abstract.CashForm, {
    useError: use.error,
    siteOptions: sitesOptions,
    useCurrencies: useCurrencies,
    usePayment: use.attributes.usePayment,
    currentPaymentInfo: {
      validationButtonNext: use.attributes.actions.validationButtonNextPaymentCr,
      returnInit: use.pages.actions.onIncomeForm,
      buttonNextId: "".concat(_constants.INCOME_ROUTE, "-2"),
      next: use.pages.actions.onFinalPaymentCrForm,
      type: 'deposit',
      cashRegisterPostsId: use.attributes.states.cashRegisterPostsId,
      cashRegisterTypePostsId: use.attributes.states.cashRegisterTypePostsId,
      paymentType: 'income'
    }
  })), use.pages.states.isFinalPaymentCrForm && /*#__PURE__*/_react["default"].createElement(_Abstract.FadeIn, {
    keyName: "FinalPaymentCrForm",
    isVisible: use.pages.states.isFinalPaymentCrForm
  }, /*#__PURE__*/_react["default"].createElement(_Abstract.CashIncomePaymentForm, {
    use: use
  })));
};