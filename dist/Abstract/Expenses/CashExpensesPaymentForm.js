"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CashExpensesPaymentForm = void 0;
var _react = _interopRequireDefault(require("react"));
var _Containers = require("../Containers");
var _Form = require("../Form");
var _Span = require("../Span");
var _constants = require("../../constants");
var CashExpensesPaymentForm = exports.CashExpensesPaymentForm = function CashExpensesPaymentForm(_ref) {
  var use = _ref.use;
  var title1Text = 'Nuevo Egreso';
  var title2Text = 'Agrega un nuevo engreso';
  var buttonTitle = 'Procesar';
  var buttonAction = use.api.actions.add;
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
    use.attributes.actions.validationSupplierId(use.attributes.states.supplierId);
    use.attributes.actions.validationExpensesTypeId(use.attributes.states.expensesTypeId);
    use.attributes.actions.validationProjectsPostsId(use.attributes.states.projectsPostsId);
  }, [use.attributes.states.supplierId, use.attributes.states.expensesTypeId, use.attributes.states.projectsPostsId, use.attributes.states.supplierIdValid, use.attributes.states.expensesTypeIdValid, use.attributes.states.projectsPostsIdValid]);
  _react["default"].useEffect(function () {
    use.attributes.actions.validationButtonNextAdd();
  }, [use.attributes.states.supplierIdValid, use.attributes.states.expensesTypeIdValid, use.attributes.states.projectsPostsIdValid, use.attributes.states.total]);
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
    buttonNextId: "".concat(_constants.EXPENSES_ROUTE, "-Add"),
    returnButtonConatinerStyle: "padding-button: 0px;",
    boxProps: {
      styles: {
        width: 'auto',
        height: 'auto'
      }
    }
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
    value: use.attributes.states.total === use.attributes.usePayment.states.total ? 'Todo listo para precesar el egreso' : 'El monto ingresado no coincide con el monto total'
  })))));
};