"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TransferCashRegisterForm = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireDefault(require("react"));
var _Input = require("../Input");
var _Containers = require("../Containers");
var _Form = require("../Form");
var TransferCashRegisterForm = exports.TransferCashRegisterForm = function TransferCashRegisterForm(_ref) {
  var useError = _ref.useError,
    siteOptions = _ref.siteOptions,
    useCurrencies = _ref.useCurrencies,
    currentPaymentInfo = _ref.currentPaymentInfo,
    usePayment = _ref.usePayment;
  var _React$useState = _react["default"].useState( /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null)),
    _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
    InputCurrencies = _React$useState2[0],
    setInputCurrencies = _React$useState2[1];
  var _React$useState3 = _react["default"].useState( /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null)),
    _React$useState4 = (0, _slicedToArray2["default"])(_React$useState3, 2),
    InputCashRegisterType = _React$useState4[0],
    setInputCashRegisterType = _React$useState4[1];
  var _React$useState5 = _react["default"].useState(null),
    _React$useState6 = (0, _slicedToArray2["default"])(_React$useState5, 2),
    currentCurrency = _React$useState6[0],
    setCurrentCurrency = _React$useState6[1];
  var siteCurrency = useCurrencies.actions.getById(siteOptions.currencyId);
  var add = function add() {
    usePayment.usePayment.useGeneralPaymentMethods.actions.addTransferCashRegister(usePayment.states.currentCashRegisterPostsId, usePayment.states.currentCashRegisterTypePostsId, usePayment.states.cashRegisterPostsId, parseInt(usePayment.states.cashRegisterTypePostsId, 10));
    currentPaymentInfo.next();
  };
  var changeAmount = function changeAmount(e) {
    var value = e.target.value;
    if (siteOptions.currencyId === usePayment.usePayment.useGeneralPaymentMethods.states.currenciesId) {
      //paymentMethods
      usePayment.usePayment.useGeneralPaymentMethods.usePaymentMethods.actions.setAmount(parseFloat(value));
      usePayment.usePayment.useGeneralPaymentMethods.usePaymentMethods.actions.setChange(parseFloat(value));

      //Payment
      usePayment.usePayment.actions.setTotal(value);
    } else {
      //paymentMethods
      usePayment.usePayment.useGeneralPaymentMethods.usePaymentMethods.actions.setAmount(parseFloat(value));
    }
  };
  var setChange = function setChange(e) {
    var value = e.target.value;
    if (siteOptions.currencyId !== usePayment.usePayment.useGeneralPaymentMethods.states.currenciesId) {
      //paymentMethods
      usePayment.usePayment.useGeneralPaymentMethods.usePaymentMethods.actions.setChange(parseFloat(value));

      //Payment
      usePayment.usePayment.actions.setTotal(value);
    }
  };
  _react["default"].useEffect(function () {
    usePayment.actions.setCurrentCashRegisterPostsId(currentPaymentInfo.cashRegisterPostsId);
    usePayment.actions.setCurrentCashRegisterTypePostsId(currentPaymentInfo.cashRegisterTypePostsId);
  }, []);
  _react["default"].useEffect(function () {
    if (usePayment.usePayment.useGeneralPaymentMethods.states.currenciesId !== 0) {
      setCurrentCurrency(useCurrencies.actions.getById(usePayment.usePayment.useGeneralPaymentMethods.states.currenciesId));
    }
  }, [usePayment.usePayment.useGeneralPaymentMethods.states.currenciesId]);
  _react["default"].useEffect(function () {
    usePayment.usePayment.useGeneralPaymentMethods.actions.validationCurrenciesId("".concat(usePayment.usePayment.useGeneralPaymentMethods.states.currenciesId));
    usePayment.actions.validationCashRegisterTypePostsId(usePayment.states.cashRegisterTypePostsId);
  }, [usePayment.usePayment.useGeneralPaymentMethods.states.currenciesId, usePayment.usePayment.useGeneralPaymentMethods.states.currenciesIdValid, usePayment.states.cashRegisterTypePostsId, usePayment.states.cashRegisterTypePostsIdValid, InputCashRegisterType, InputCurrencies]);
  _react["default"].useEffect(function () {
    usePayment.actions.validationButtonNextPaymentCr();
  }, [usePayment.usePayment.useGeneralPaymentMethods.states.currenciesIdValid, usePayment.usePayment.useGeneralPaymentMethods.useCashTransactions.states.change, usePayment.usePayment.useGeneralPaymentMethods.usePaymentMethods.states.change, usePayment.usePayment.states.total, usePayment.states.cashRegisterTypePostsIdValid]);
  _react["default"].useEffect(function () {
    setInputCurrencies(function () {
      return /*#__PURE__*/_react["default"].createElement(_Input.SelectCurrencies, {
        changeCurrencies: function changeCurrencies(e) {
          return usePayment.usePayment.useGeneralPaymentMethods.actions.changeCashCurrenciesId(e);
        },
        props: {
          options: usePayment.usePayment.useGeneralPaymentMethods.states.currenciesIdOptions,
          defaultValue: usePayment.usePayment.useGeneralPaymentMethods.states.currenciesIdDefault,
          title: 'Moneda',
          styles: {
            width: '100%'
          }
        }
      });
    });
    setInputCashRegisterType(function () {
      return /*#__PURE__*/_react["default"].createElement(_Input.SelectCashRegisterType, {
        change: function change(e) {
          return usePayment.actions.changeCashRegisterTypeId(e);
        },
        props: {
          options: usePayment.states.cashRegisterTypePostsIdOptions,
          defaultValue: usePayment.states.cashRegisterTypePostsIdDefault,
          styles: {
            width: '100%'
          }
        }
      });
    });
  }, []);
  var title1Text = 'Transpaso de efectivo';
  var title2Text = 'Agrega un nuevo transpaso de efectivo';
  var buttonTitle = 'Procesar';
  var buttonAction = add;
  var buttonReturn = function buttonReturn() {
    usePayment.actions.infoReset();
    currentPaymentInfo.returnInit();
  };
  var handleActions = function handleActions(action, value) {
    switch (action) {
      case 'submit':
        buttonAction();
        break;
      case 'return':
        buttonReturn();
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
        height: 'auto',
        width: 'auto',
        padding: '20px'
      }
    },
    returnButtonConatinerStyle: "padding-button: 0px;"
  }, /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Containers.ContainerButton, {
    styles: {
      width: '100%'
    }
  }, /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, InputCashRegisterType)), /*#__PURE__*/_react["default"].createElement(_Containers.ContainerButton, {
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
  }), currentCurrency && siteCurrency && currentCurrency.id !== siteCurrency.id && /*#__PURE__*/_react["default"].createElement(_Input.Input, {
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