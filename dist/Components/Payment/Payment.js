"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Payment = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _react = _interopRequireDefault(require("react"));
var _css = require("@emotion/css");
var _PaymentDeposit = require("./PaymentDeposit");
var _Loading = require("../Loading");
var _Abstract = require("../../Abstract");
var _OrderReturn = require("../OrderReturn");
var _excluded = ["className"];
var _templateObject;
var orderStylesContainer = function orderStylesContainer(stayles) {
  return (0, _css.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  padding-top: ", ";\n  padding-bottom: ", ";\n  min-height: ", ";\n  ", "\n  background-repeat: ", ";\n  background-size: ", ";\n  ", "\n"])), stayles.paddingTop || '60px', stayles.paddingBottom || '50px', stayles.minHeight || '100vh', stayles.backgroundImage && "background-image: url(".concat(stayles.backgroundImage, ");"), stayles.backgroundRepeat || 'no-repeat', stayles.backgroundSize || '345vh', stayles.custom || '');
};
var Payment = exports.Payment = function Payment(_ref) {
  var use = _ref.use,
    useOrder = _ref.useOrder,
    useOrderReturn = _ref.useOrderReturn,
    siteOptions = _ref.siteOptions,
    useCurrencies = _ref.useCurrencies,
    useBankType = _ref.useBankType,
    useCredits = _ref.useCredits,
    logoPdf = _ref.logoPdf,
    _ref$containerStyles = _ref.containerStyles,
    containerStyles = _ref$containerStyles === void 0 ? {} : _ref$containerStyles,
    _ref$containerProps = _ref.containerProps,
    containerProps = _ref$containerProps === void 0 ? {} : _ref$containerProps,
    itemsMain = _ref.itemsMain,
    headerMenuItems = _ref.headerMenuItems,
    images = _ref.images,
    returnModule = _ref.returnModule;
  var containerClassName = containerProps.className,
    restContainerProps = (0, _objectWithoutProperties2["default"])(containerProps, _excluded);
  var returnPayment = function returnPayment() {
    use.attributes.useGeneralPaymentMethods.pages.actions.onFetching();
    use.attributes.useGeneralPaymentMethods.actions.partiallyInfoReset();
    use.subPagesDeposit.actions.closeModalPage();
  };
  var nextCash = function nextCash() {
    use.attributes.useGeneralPaymentMethods.actions.partiallyInfoReset();
    use.subPagesDeposit.actions.closeModalPage();
  };
  var changeNumber = function changeNumber(e) {
    use.attributes.useGeneralPaymentMethods.usePaymentMethods.actions.setNumber(e.target.value);
  };
  var changeNote = function changeNote(e) {
    use.attributes.useGeneralPaymentMethods.usePaymentMethods.actions.setNote(e.target.value);
  };
  var addElectronic = function addElectronic() {
    if (use.attributes.useGeneralPaymentMethods.usePaymentMethods.states.amount > 0 && use.attributes.useGeneralPaymentMethods.usePaymentMethods.states.change > 0 && use.attributes.useGeneralPaymentMethods.useBankTransactions.states.amount > 0 && use.attributes.useGeneralPaymentMethods.useBankTransactions.states.change > 0 && use.attributes.useGeneralPaymentMethods.useBankTransactions.states.bankTypePostsId !== 0) {
      use.attributes.useGeneralPaymentMethods.actions.addElectronicPaymentMethod();
      use.attributes.useGeneralPaymentMethods.actions.partiallyInfoReset();
      use.subPagesDeposit.actions.closeModalPage();
    }
  };
  var nextCredit = function nextCredit() {
    use.attributes.useGeneralPaymentMethods.pages.actions.onAuthorization();
  };
  var addCredit = function addCredit() {
    use.attributes.useGeneralPaymentMethods.actions.addCreditPaymentMethod(useOrder.attributes.states.customerId, siteOptions.currencyId);
    use.attributes.useGeneralPaymentMethods.actions.partiallyInfoReset();
    use.subPagesDeposit.actions.closeModalPage();
  };
  var addSingle = function addSingle() {
    use.attributes.useGeneralPaymentMethods.actions.addSinglePaymentMethod(siteOptions.currencyId);
    use.attributes.useGeneralPaymentMethods.actions.partiallyInfoReset();
    use.subPagesDeposit.actions.closeModalPage();
  };
  var changeBankTypePostsId = function changeBankTypePostsId(e) {
    if (e === null) {
      use.attributes.useGeneralPaymentMethods.useBankTransactions.actions.setBankTypePostsId(0);
      return;
    }
    var value = parseInt(e.value, 10);
    if (isNaN(value)) {
      use.attributes.useGeneralPaymentMethods.useBankTransactions.actions.setBankTypePostsId(0);
      return;
    }
    use.attributes.useGeneralPaymentMethods.useBankTransactions.actions.setBankTypePostsId(value);
  };
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", (0, _extends2["default"])({
    className: (0, _css.cx)(orderStylesContainer(containerStyles), containerClassName)
  }, restContainerProps), use.pages.states.isFetching && /*#__PURE__*/_react["default"].createElement(_Loading.Loading, {
    mainStyles: {
      custom: 'height: 100vh;'
    }
  }), use.pages.states.isInit && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Abstract.HeaderMenu, {
    items: headerMenuItems
  }), /*#__PURE__*/_react["default"].createElement(_Abstract.MainMenu, {
    items: itemsMain
  })), use.pages.states.isDeposit && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_PaymentDeposit.PaymentDeposit, {
    use: use,
    useOrder: useOrder,
    useCredits: useCredits,
    siteOptions: siteOptions,
    logoPdf: logoPdf,
    useCurrencies: useCurrencies,
    useBankType: useBankType,
    images: images
  })), use.pages.states.isOrderReturn && useOrderReturn && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_OrderReturn.OrderReturn, {
    use: useOrderReturn,
    returnModule: returnModule,
    sitesOptions: siteOptions,
    itemsMenu: headerMenuItems,
    usePayment: use
  })), use.subPagesDeposit.states.modalPage && /*#__PURE__*/_react["default"].createElement(_Abstract.Modal, {
    open: use.subPagesDeposit.states.modalPage
  }, /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, use.attributes.useGeneralPaymentMethods.pages.states.isFetching && /*#__PURE__*/_react["default"].createElement(_Loading.Loading, null), use.attributes.useGeneralPaymentMethods.pages.states.isCash && /*#__PURE__*/_react["default"].createElement(_Abstract.CashForm, {
    useError: use.error,
    siteOptions: siteOptions,
    useCurrencies: useCurrencies,
    currentPaymentInfo: {
      validationButtonNext: function validationButtonNext() {
        return use.attributes.actions.validationButtonNextPaymentCash();
      },
      returnInit: function returnInit() {
        return returnPayment();
      },
      next: function next() {
        return nextCash();
      },
      buttonNextId: 'cash',
      cashRegisterTypePostsId: 6,
      cashRegisterPostsId: 7,
      type: use.attributes.useGeneralPaymentMethods.states.type
    },
    usePayment: use.attributes
  }), use.attributes.useGeneralPaymentMethods.pages.states.isTransfer && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Abstract.ElectronicForm, {
    useError: use.error,
    siteOptions: siteOptions,
    useCurrencies: useCurrencies,
    usePayment: use.attributes,
    useBankType: useBankType,
    currentPaymentInfo: {
      paymentType: use.attributes.useGeneralPaymentMethods.usePaymentMethods.states.paymentType,
      changeNumber: changeNumber,
      changeBankTypePostsId: changeBankTypePostsId,
      bankTypePostsId: use.attributes.useGeneralPaymentMethods.useBankTransactions.states.bankTypePostsId,
      changeNote: changeNote,
      add: addElectronic,
      infoReset: function infoReset() {
        return use.attributes.useGeneralPaymentMethods.actions.partiallyInfoReset();
      },
      returnInit: function returnInit() {
        return returnPayment();
      },
      buttonNextId: 'electronic',
      changeNameSend: function changeNameSend(e) {
        return use.attributes.useGeneralPaymentMethods.useBankTransactions.actions.setNameSend(e.target.value);
      }
    }
  })), use.attributes.useGeneralPaymentMethods.pages.states.isCredit && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Abstract.CreditForm, {
    useError: use.error,
    siteOptions: siteOptions,
    useOrder: useOrder,
    usePayment: use.attributes,
    useCurrencies: useCurrencies,
    currentPaymentInfo: {
      orderPostsId: useOrder.attributes.states.currentId,
      difference: use.attributes.states.difference,
      amount: use.attributes.useGeneralPaymentMethods.usePaymentMethods.states.amount,
      validationButtonNext: use.attributes.actions.validationButtonNextPaymentCredit,
      add: function add() {
        return nextCredit();
      },
      infoReset: function infoReset() {
        return use.attributes.useGeneralPaymentMethods.actions.partiallyInfoReset();
      },
      returnInit: function returnInit() {
        return returnPayment();
      },
      buttonNextId: 'credit-next'
    }
  })), use.attributes.useGeneralPaymentMethods.pages.states.isAuthorization && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Abstract.PaymentLoginForm, {
    validationButtonNext: use.attributes.actions.validationButtonNextPaymentCreditAdd,
    validationAuthorizedLogin: use.attributes.useGeneralPaymentMethods.useCreditOpening.actions.validationAuthorizedLogin,
    validationAuthorizedPassword: use.attributes.useGeneralPaymentMethods.useCreditOpening.actions.validationAuthorizedPassword,
    authorizedLogin: use.attributes.useGeneralPaymentMethods.useCreditOpening.states.authorizedLogin,
    authorizedPassword: use.attributes.useGeneralPaymentMethods.useCreditOpening.states.authorizedPassword,
    changeAuthorizedLogin: use.attributes.useGeneralPaymentMethods.useCreditOpening.actions.setAuthorizedLogin,
    changeAuthorizedPassword: use.attributes.useGeneralPaymentMethods.useCreditOpening.actions.setAuthorizedPassword,
    inputId: "credit-add",
    add: addCredit
  })), use.attributes.useGeneralPaymentMethods.pages.states.isSingle && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Abstract.SingleForm, {
    useError: use.error,
    siteOptions: siteOptions,
    currentPaymentInfo: {
      difference: use.attributes.states.difference,
      amount: use.attributes.useGeneralPaymentMethods.usePaymentMethods.states.amount,
      add: addSingle,
      validationButtonNext: use.attributes.actions.validationButtonNextPaymentSingle,
      infoReset: use.attributes.useGeneralPaymentMethods.actions.partiallyInfoReset,
      returnInit: returnPayment,
      buttonNextId: 'single-add',
      paymentType: use.attributes.useGeneralPaymentMethods.usePaymentMethods.states.paymentType
    },
    usePayment: use.attributes,
    useCurrencies: useCurrencies
  }))))));
};