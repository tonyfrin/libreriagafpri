"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CashForm = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireDefault(require("react"));
var _Input = require("../Input");
var _Containers = require("../Containers");
var _Form = require("../Form");
var CashForm = exports.CashForm = function CashForm(_ref) {
  var useError = _ref.useError,
    siteOptions = _ref.siteOptions,
    useCurrencies = _ref.useCurrencies,
    currentPaymentInfo = _ref.currentPaymentInfo,
    usePayment = _ref.usePayment;
  var _React$useState = _react["default"].useState( /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null)),
    _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
    InputCurrencies = _React$useState2[0],
    setInputCurrencies = _React$useState2[1];
  var _React$useState3 = _react["default"].useState(null),
    _React$useState4 = (0, _slicedToArray2["default"])(_React$useState3, 2),
    currentCurrency = _React$useState4[0],
    setCurrentCurrency = _React$useState4[1];
  var siteCurrency = useCurrencies.actions.getById(siteOptions.currencyId);
  var add = function add() {
    if (currentPaymentInfo.validationButtonNext()) {
      usePayment.useGeneralPaymentMethods.actions.addCashTransaction();
      currentPaymentInfo.next();
    }
  };
  var changeAmount = function changeAmount(e) {
    var value = e.target.value;
    if (siteOptions.currencyId === usePayment.useGeneralPaymentMethods.states.currenciesId) {
      //cashTransactions
      usePayment.useGeneralPaymentMethods.useCashTransactions.actions.setAmount(parseFloat(value));
      usePayment.useGeneralPaymentMethods.useCashTransactions.actions.setChange(parseFloat(value));

      //paymentMethods
      usePayment.useGeneralPaymentMethods.usePaymentMethods.actions.setAmount(parseFloat(value));
      usePayment.useGeneralPaymentMethods.usePaymentMethods.actions.setChange(parseFloat(value));

      //Payment
      if (currentPaymentInfo.paymentType) {
        usePayment.actions.setTotal(value);
      }
    } else {
      //cashTransactions
      usePayment.useGeneralPaymentMethods.useCashTransactions.actions.setAmount(parseFloat(value));

      //paymentMethods
      usePayment.useGeneralPaymentMethods.usePaymentMethods.actions.setAmount(parseFloat(value));
    }
  };
  var setChange = function setChange(e) {
    var value = e.target.value;
    if (siteOptions.currencyId !== usePayment.useGeneralPaymentMethods.states.currenciesId) {
      //cashTransactions
      usePayment.useGeneralPaymentMethods.useCashTransactions.actions.setChange(parseFloat(value));

      //paymentMethods
      usePayment.useGeneralPaymentMethods.usePaymentMethods.actions.setChange(parseFloat(value));

      //Payment
      if (currentPaymentInfo.paymentType) {
        usePayment.actions.setTotal(value);
      }
    }
  };
  _react["default"].useEffect(function () {
    usePayment.useGeneralPaymentMethods.useCashTransactions.actions.setCashRegisterPostsId(currentPaymentInfo.cashRegisterPostsId);
    usePayment.useGeneralPaymentMethods.useCashTransactions.actions.setCashRegisterTypePostsId(currentPaymentInfo.cashRegisterTypePostsId);
    usePayment.useGeneralPaymentMethods.usePaymentMethods.actions.setType(currentPaymentInfo.type);
    usePayment.useGeneralPaymentMethods.useCashTransactions.actions.setType(currentPaymentInfo.type);
    usePayment.useGeneralPaymentMethods.usePaymentMethods.actions.setMethodType('cash');
    if (currentPaymentInfo.paymentType) {
      usePayment.actions.setType(currentPaymentInfo.paymentType);
    }
  }, []);
  _react["default"].useEffect(function () {
    if (usePayment.useGeneralPaymentMethods.states.currenciesId !== 0) {
      setCurrentCurrency(useCurrencies.actions.getById(usePayment.useGeneralPaymentMethods.states.currenciesId));
    }
  }, [usePayment.useGeneralPaymentMethods.states.currenciesId]);
  _react["default"].useEffect(function () {
    usePayment.useGeneralPaymentMethods.actions.validationCurrenciesId("".concat(usePayment.useGeneralPaymentMethods.states.currenciesId));
  }, [usePayment.useGeneralPaymentMethods.states.currenciesId, usePayment.useGeneralPaymentMethods.states.currenciesIdValid, InputCurrencies]);
  _react["default"].useEffect(function () {
    currentPaymentInfo.validationButtonNext();
  }, [usePayment.useGeneralPaymentMethods.states.currenciesIdValid, usePayment.useGeneralPaymentMethods.useCashTransactions.states.change, usePayment.useGeneralPaymentMethods.usePaymentMethods.states.change, usePayment.states.total]);
  _react["default"].useEffect(function () {
    setInputCurrencies(function () {
      return /*#__PURE__*/_react["default"].createElement(_Input.SelectCurrencies, {
        changeCurrencies: function changeCurrencies(e) {
          return usePayment.useGeneralPaymentMethods.actions.changeCashCurrenciesId(e);
        },
        props: {
          options: usePayment.useGeneralPaymentMethods.states.currenciesIdOptions,
          defaultValue: usePayment.useGeneralPaymentMethods.states.currenciesIdDefault,
          title: 'Moneda',
          styles: {
            width: '100%'
          }
        }
      });
    });
  }, []);
  var title1Text = 'Pago en efectivo';
  var title2Text = 'Agrega un nuevo pago en efectivo';
  var buttonTitle = 'Procesar';
  var buttonAction = add;
  var handleActions = function handleActions(action, value) {
    switch (action) {
      case 'submit':
        buttonAction();
        break;
      case 'return':
        currentPaymentInfo.returnInit();
        break;
      default:
        console.log('Acción desconocida:', action);
    }
  };
  return /*#__PURE__*/_react["default"].createElement(_Form.ModelForm, {
    titles: {
      title1: title1Text,
      title2: title2Text
    },
    buttonTitles: {
      mainButton: buttonTitle,
      returnButton: 'Volver'
    },
    handleActions: handleActions,
    error: useError.states.error,
    buttonNextId: currentPaymentInfo.buttonNextId,
    boxProps: {
      styles: {
        width: 'auto',
        height: 'auto'
      }
    },
    returnButtonConatinerStyle: "padding-button: 0px;"
  }, /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Containers.ContainerButton, {
    styles: {
      width: '100%'
    }
  }, /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, InputCurrencies)), /*#__PURE__*/_react["default"].createElement(_Containers.ContainerButton, {
    styles: {
      width: '100%'
    }
  }, /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, currentCurrency && /*#__PURE__*/_react["default"].createElement(_Input.Input, {
    inputProps: {
      onChange: function onChange(e) {
        return changeAmount(e);
      },
      title: "Monto en ".concat(currentCurrency.name, " ").concat(currentCurrency.symbol),
      type: 'number',
      step: '0.01'
    },
    styles: {
      width: '100%'
    }
  }))), currentCurrency && siteCurrency && currentCurrency.id !== siteCurrency.id && /*#__PURE__*/_react["default"].createElement(_Containers.ContainerButton, {
    styles: {
      width: '100%'
    }
  }, /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Input.Input, {
    inputProps: {
      onChange: function onChange(e) {
        return setChange(e);
      },
      title: "Monto en ".concat(siteCurrency.name, " ").concat(siteCurrency.symbol),
      type: 'number',
      step: '0.01'
    },
    styles: {
      width: '100%'
    }
  })))));
};