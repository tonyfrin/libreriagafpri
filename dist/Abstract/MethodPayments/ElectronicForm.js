"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ElectronicForm = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireDefault(require("react"));
var _Input = require("../Input");
var _Containers = require("../Containers");
var _Form = require("../Form");
var _Span = require("../Span");
var ElectronicForm = exports.ElectronicForm = function ElectronicForm(_ref) {
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
    bankCurrency = _React$useState4[0],
    setBankCurrency = _React$useState4[1];
  var _React$useState5 = _react["default"].useState(null),
    _React$useState6 = (0, _slicedToArray2["default"])(_React$useState5, 2),
    currentBankType = _React$useState6[0],
    setCurrentBankType = _React$useState6[1];
  var siteCurrency = useCurrencies.actions.getById(siteOptions.currencyId);
  var bankTypeOptions = useBankType.data.actions.getOptionsByMethods(siteOptions.id, currentPaymentInfo.paymentType);
  var bankTypePostsIdDefault = {
    label: 'Selecciona un banco',
    value: ''
  };
  var setChange = function setChange(e) {
    var value = e.target.value;
    if (!bankCurrency) return;
    if ("".concat(siteOptions.currencyId) === "".concat(bankCurrency.id)) {
      usePayment.useGeneralPaymentMethods.useBankTransactions.actions.setAmount(parseFloat(value));
      usePayment.useGeneralPaymentMethods.usePaymentMethods.actions.setAmount(parseFloat(value));
    }
    usePayment.useGeneralPaymentMethods.useBankTransactions.actions.setChange(parseFloat(value));
    usePayment.useGeneralPaymentMethods.usePaymentMethods.actions.setChange(parseFloat(value));
  };
  var changeAmount = function changeAmount(e) {
    var value = e.target.value;
    if (!bankCurrency) return;
    if ("".concat(siteOptions.currencyId) !== "".concat(bankCurrency.id)) {
      usePayment.useGeneralPaymentMethods.useBankTransactions.actions.setAmount(parseFloat(value));
      usePayment.useGeneralPaymentMethods.usePaymentMethods.actions.setAmount(parseFloat(value));
    }
  };
  _react["default"].useEffect(function () {
    if (currentPaymentInfo.bankTypePostsId !== 0) {
      var _useBankType$data$act;
      setBankCurrency(useCurrencies.actions.getById(((_useBankType$data$act = useBankType.data.actions.getById(currentPaymentInfo.bankTypePostsId)) === null || _useBankType$data$act === void 0 ? void 0 : _useBankType$data$act.currenciesId) || 0));
      setCurrentBankType(useBankType.data.actions.getById(currentPaymentInfo.bankTypePostsId));
    }
  }, [currentPaymentInfo.bankTypePostsId]);
  _react["default"].useEffect(function () {
    setInputBankType(function () {
      return /*#__PURE__*/_react["default"].createElement(_Input.SelectBankType, {
        change: function change(e) {
          return currentPaymentInfo.changeBankTypePostsId(e);
        },
        props: {
          options: bankTypeOptions,
          defaultValue: bankTypePostsIdDefault,
          styles: {
            width: '100%'
          }
        }
      });
    });
  }, []);
  var title1Text = 'Modulo de pago';
  var title2Text = 'Agrega un nuevo transacción bancarias';
  var buttonTitle = 'Procesar';
  var buttonAction = currentPaymentInfo.add;
  var buttonReturn = function buttonReturn() {
    currentPaymentInfo.infoReset();
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
      width: '100%',
      display: 'flex',
      justifyContent: 'flex-start',
      custom: "\n              margin: 20px 0px;\n              padding-left: 5%;\n            "
    }
  }, /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Span.SpanValue, {
    value: "Metodo de pago: ",
    containerStyles: {
      margin: '0px 15px 0px 0px',
      custom: "\n                  font-weight: 700;\n                  font-size: 20px;\n                "
    }
  }), /*#__PURE__*/_react["default"].createElement(_Span.SpanValue, {
    containerStyles: {
      margin: '0',
      custom: "\n                  font-weight: 700;\n                  font-size: 20px;\n                "
    },
    value: currentPaymentInfo.paymentType
  }))), /*#__PURE__*/_react["default"].createElement(_Containers.ContainerButton, {
    styles: {
      width: '100%'
    }
  }, /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, InputBankType)), /*#__PURE__*/_react["default"].createElement(_Containers.ContainerButton, {
    styles: {
      width: '100%'
    }
  }, /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Input.Input, {
    inputProps: {
      onChange: function onChange(e) {
        return currentPaymentInfo.changeNumber(e);
      },
      title: 'Numero de confirmación',
      type: 'text',
      placeholder: 'Numero de transacción'
    },
    styles: {
      width: '100%'
    }
  }))), /*#__PURE__*/_react["default"].createElement(_Containers.ContainerButton, {
    styles: {
      width: '100%'
    }
  }, /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Input.Input, {
    inputProps: {
      onChange: function onChange(e) {
        return currentPaymentInfo.changeNote(e);
      },
      title: 'Nota interna',
      type: 'text',
      placeholder: 'Comentarios internos'
    },
    styles: {
      width: '100%'
    }
  }))), /*#__PURE__*/_react["default"].createElement(_Containers.ContainerButton, {
    styles: {
      width: '100%'
    }
  }, /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, siteCurrency && bankCurrency && /*#__PURE__*/_react["default"].createElement(_Input.Input, {
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
  }, /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, siteCurrency && bankCurrency && "".concat(siteOptions.currencyId) !== "".concat(bankCurrency.id) && /*#__PURE__*/_react["default"].createElement(_Input.Input, {
    inputProps: {
      onChange: function onChange(e) {
        return changeAmount(e);
      },
      title: "Monto en ".concat(bankCurrency.name, " ").concat(bankCurrency.symbol),
      type: 'number',
      step: '0.01'
    },
    styles: {
      width: '100%'
    }
  }))), currentBankType && useBankType.data.actions.isWalletGafpri(currentBankType.postsId) && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Containers.ContainerButton, {
    styles: {
      width: '100%'
    }
  }, /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Input.Input, {
    inputProps: {
      onChange: function onChange(e) {
        return currentPaymentInfo.changeNameSend(e);
      },
      title: 'Nombre de la persona que realizó el pago:',
      type: 'text',
      placeholder: 'Persona o empresa'
    },
    styles: {
      width: '100%'
    }
  }))))));
};