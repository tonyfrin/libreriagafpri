"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FinalPaymentTransferCashRegister = void 0;
var _react = _interopRequireDefault(require("react"));
var _Containers = require("../Containers");
var _Form = require("../Form");
var _Span = require("../Span");
var _constants = require("../../constants");
var FinalPaymentTransferCashRegister = exports.FinalPaymentTransferCashRegister = function FinalPaymentTransferCashRegister(_ref) {
  var use = _ref.use;
  var title1Text = 'Nuevo Traspaso';
  var title2Text = 'Agrega un nuevo traspaso de efectivo';
  var buttonTitle = 'Procesar';
  var buttonAction = function buttonAction() {
    use.api.actions.add();
  };
  var buttonReturn = function buttonReturn() {
    use.attributes.usePayment.actions.infoReset();
    use.pages.actions.onPaymentCrForm();
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
  _react["default"].useEffect(function () {
    use.attributes.actions.validationCashRegisterTypePostsId(use.attributes.states.cashRegisterTypePostsId);
  }, [use.attributes.states.cashRegisterTypePostsId, use.attributes.states.cashRegisterTypePostsIdValid]);
  _react["default"].useEffect(function () {
    use.attributes.actions.validationButtonNextAdd();
  }, [use.attributes.states.cashRegisterTypePostsIdValid, use.attributes.usePayment.states.total, use.attributes.usePayment.useGeneralPaymentMethods.usePaymentMethods.states.change]);
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
    error: use.error.states.error,
    buttonNextId: "".concat(_constants.PAYMENT_TRANSFER_CASH_REGISTER_ROUTE, "-Add"),
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
    value: "Aviso: ",
    containerStyles: {
      margin: '0px 15px 0px 0px',
      custom: "\n                  font-weight: 700;\n                  font-size: 20px;\n                "
    }
  }), /*#__PURE__*/_react["default"].createElement(_Span.SpanValue, {
    containerStyles: {
      margin: '0',
      custom: "\n                  font-weight: 700;\n                  font-size: 20px;\n                "
    },
    value: 'Todo listo para precesar el traspaso'
  })))));
};