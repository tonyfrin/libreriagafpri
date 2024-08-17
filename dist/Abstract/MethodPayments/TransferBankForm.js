"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TransferBankForm = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireDefault(require("react"));
var _Input = require("../Input");
var _Containers = require("../Containers");
var _Form = require("../Form");
var TransferBankForm = exports.TransferBankForm = function TransferBankForm(_ref) {
  var _useBankType$data$act;
  var useError = _ref.useError,
    siteOptions = _ref.siteOptions,
    currentPaymentInfo = _ref.currentPaymentInfo,
    usePayment = _ref.usePayment,
    useBankType = _ref.useBankType,
    useCurrencies = _ref.useCurrencies;
  var _React$useState = _react["default"].useState( /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null)),
    _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
    InputBankType = _React$useState2[0],
    setInputBankType = _React$useState2[1];
  var _React$useState3 = _react["default"].useState(null),
    _React$useState4 = (0, _slicedToArray2["default"])(_React$useState3, 2),
    depositCurrency = _React$useState4[0],
    setDepositCurrency = _React$useState4[1];
  var debitCurrency = useCurrencies.actions.getById(((_useBankType$data$act = useBankType.data.actions.getById(usePayment.states.debitBankTypePostsId)) === null || _useBankType$data$act === void 0 ? void 0 : _useBankType$data$act.currenciesId) || 0);
  var siteCurrency = useCurrencies.actions.getById(siteOptions.currencyId);
  var add = function add() {
    if (parseFloat(usePayment.usePayment.states.total) > 0 && usePayment.states.depositBankTypePostsIdValid) {
      usePayment.usePayment.useGeneralPaymentMethods.actions.addTransferBankRegister(usePayment.states.debitBankTypePostsId, parseInt(usePayment.states.depositBankTypePostsId, 10));
      currentPaymentInfo.next();
    }
  };
  var setChange = function setChange(e) {
    var value = e.target.value;
    if (!debitCurrency || !depositCurrency) return;
    console.log('debitCurrency', debitCurrency);
    console.log('depositCurrency', depositCurrency);
    console.log('siteOptions', siteOptions);
    if ("".concat(siteOptions.currencyId) === "".concat(debitCurrency.id) && "".concat(siteOptions.currencyId) === "".concat(depositCurrency.id)) {
      usePayment.usePayment.useGeneralPaymentMethods.actions.setDebitAmount(parseFloat(value));
      usePayment.usePayment.useGeneralPaymentMethods.actions.setDepositAmount(parseFloat(value));
    } else if ("".concat(siteOptions.currencyId) !== "".concat(debitCurrency.id) && "".concat(siteOptions.currencyId) === "".concat(depositCurrency.id)) {
      usePayment.usePayment.useGeneralPaymentMethods.actions.setDepositAmount(parseFloat(value));
    } else if ("".concat(siteOptions.currencyId) === "".concat(debitCurrency.id) && "".concat(siteOptions.currencyId) !== "".concat(depositCurrency.id)) {
      usePayment.usePayment.useGeneralPaymentMethods.actions.setDebitAmount(parseFloat(value));
    }
    usePayment.usePayment.useGeneralPaymentMethods.actions.setChange(parseFloat(value));
    usePayment.usePayment.actions.setTotal(value);
  };
  var changeDebitAmount = function changeDebitAmount(e) {
    var value = e.target.value;
    if (!debitCurrency || !depositCurrency) return;
    if ("".concat(siteOptions.currencyId) !== "".concat(debitCurrency.id) && "".concat(debitCurrency.id) !== "".concat(depositCurrency.id)) {
      usePayment.usePayment.useGeneralPaymentMethods.actions.setDebitAmount(parseFloat(value));
    } else if ("".concat(siteOptions.currencyId) !== "".concat(debitCurrency.id) && "".concat(debitCurrency.id) === "".concat(depositCurrency.id)) {
      usePayment.usePayment.useGeneralPaymentMethods.actions.setDebitAmount(parseFloat(value));
      usePayment.usePayment.useGeneralPaymentMethods.actions.setDepositAmount(parseFloat(value));
    }
  };
  var changeDepositAmount = function changeDepositAmount(e) {
    var value = e.target.value;
    if (!debitCurrency || !depositCurrency) return;
    if ("".concat(siteOptions.currencyId) !== "".concat(depositCurrency.id) && "".concat(debitCurrency.id) !== "".concat(depositCurrency.id)) {
      usePayment.usePayment.useGeneralPaymentMethods.actions.setDepositAmount(parseFloat(value));
    }
  };
  _react["default"].useEffect(function () {
    if (usePayment.states.depositBankTypePostsId !== '') {
      var _useBankType$data$act2;
      setDepositCurrency(useCurrencies.actions.getById(((_useBankType$data$act2 = useBankType.data.actions.getById(parseInt(usePayment.states.depositBankTypePostsId, 10))) === null || _useBankType$data$act2 === void 0 ? void 0 : _useBankType$data$act2.currenciesId) || 0));
    }
  }, [usePayment.states.depositBankTypePostsId]);
  _react["default"].useEffect(function () {
    usePayment.actions.setDebitBankTypePostsId(currentPaymentInfo.debitBankTypePostsId);
  }, []);
  _react["default"].useEffect(function () {
    usePayment.actions.validationDepositBankTypePostsId(usePayment.states.depositBankTypePostsId);
  }, [usePayment.states.depositBankTypePostsId, usePayment.states.depositBankTypePostsIdValid, InputBankType]);
  _react["default"].useEffect(function () {
    usePayment.actions.validationButtonNextPayment();
  }, [usePayment.usePayment.states.total, usePayment.states.depositBankTypePostsIdValid]);
  _react["default"].useEffect(function () {
    setInputBankType(function () {
      return /*#__PURE__*/_react["default"].createElement(_Input.SelectBankType, {
        change: function change(e) {
          return usePayment.actions.changeDepositBankTypeId(e);
        },
        props: {
          options: usePayment.states.depositBankTypePostsIdOptions,
          defaultValue: usePayment.states.depositBankTypePostsIdDefault,
          styles: {
            width: '100%'
          }
        }
      });
    });
  }, []);
  var title1Text = 'Transpaso entre bancos';
  var title2Text = 'Agrega un nuevo transpaso entre cuentas bancarias';
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
  }, /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, InputBankType)), /*#__PURE__*/_react["default"].createElement(_Containers.ContainerButton, {
    styles: {
      width: '100%'
    }
  }, /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, siteCurrency && debitCurrency && depositCurrency && /*#__PURE__*/_react["default"].createElement(_Input.Input, {
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
  }))), /*#__PURE__*/_react["default"].createElement(_Containers.ContainerButton, {
    styles: {
      width: '100%'
    }
  }, /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, siteCurrency && debitCurrency && depositCurrency && "".concat(siteOptions.currencyId) !== "".concat(debitCurrency.id) && /*#__PURE__*/_react["default"].createElement(_Input.Input, {
    inputProps: {
      onChange: function onChange(e) {
        return changeDebitAmount(e);
      },
      title: "Monto en ".concat(debitCurrency.name, " ").concat(debitCurrency.symbol),
      type: 'number',
      step: '0.01'
    },
    styles: {
      width: '100%'
    }
  }))), /*#__PURE__*/_react["default"].createElement(_Containers.ContainerButton, {
    styles: {
      width: '100%'
    }
  }, /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, siteCurrency && debitCurrency && depositCurrency && "".concat(siteOptions.currencyId) !== "".concat(depositCurrency.id) && "".concat(debitCurrency.id) !== "".concat(depositCurrency.id) && /*#__PURE__*/_react["default"].createElement(_Input.Input, {
    inputProps: {
      onChange: function onChange(e) {
        return changeDepositAmount(e);
      },
      title: "Monto en ".concat(depositCurrency.name, " ").concat(depositCurrency.symbol),
      type: 'number',
      step: '0.01'
    },
    styles: {
      width: '100%'
    }
  })))));
};