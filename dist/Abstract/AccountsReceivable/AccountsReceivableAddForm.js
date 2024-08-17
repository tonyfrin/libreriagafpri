"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AccountsReceivableAddForm = void 0;
var _react = _interopRequireDefault(require("react"));
var _Input = require("../Input");
var _Containers = require("../Containers");
var _Form = require("../Form");
var _Span = require("../Span");
var _constants = require("../../constants");
var AccountsReceivableAddForm = exports.AccountsReceivableAddForm = function AccountsReceivableAddForm(_ref) {
  var _use$attributes$state, _use$attributes$state2, _use$attributes$state3, _use$attributes$state4, _use$attributes$state5;
  var use = _ref.use;
  var entityName = (_use$attributes$state = use.attributes.states) !== null && _use$attributes$state !== void 0 && _use$attributes$state.entity ? (_use$attributes$state2 = use.attributes.states.entity) !== null && _use$attributes$state2 !== void 0 && _use$attributes$state2.lastName ? "".concat((_use$attributes$state3 = use.attributes.states.entity) === null || _use$attributes$state3 === void 0 ? void 0 : _use$attributes$state3.name, " ").concat((_use$attributes$state4 = use.attributes.states.entity) === null || _use$attributes$state4 === void 0 ? void 0 : _use$attributes$state4.lastName) : (_use$attributes$state5 = use.attributes.states.entity) === null || _use$attributes$state5 === void 0 ? void 0 : _use$attributes$state5.name : '';
  var next = function next() {
    if (use.attributes.states.entityIdValid && use.attributes.states.limitValid && use.attributes.states.timeToPayValid) {
      use.pages.actions.onLoginForm();
    }
  };
  _react["default"].useEffect(function () {
    use.attributes.actions.validationEntityId(use.attributes.states.entityId);
    use.attributes.actions.validationLimit(use.attributes.states.limit);
    use.attributes.actions.validationTimeToPay(use.attributes.states.timeToPay);
  }, [use.attributes.states.entityId, use.attributes.states.limit, use.attributes.states.timeToPay]);
  _react["default"].useEffect(function () {
    use.attributes.actions.validationButtonNext();
  }, [use.attributes.states.entityIdValid, use.attributes.states.limitValid, use.attributes.states.timeToPayValid]);
  var title1Text = 'Nueva cuenta de credito';
  var title2Text = 'Agrega una nueva cuenta de credito';
  var buttonTitle = 'Siguiente';
  var buttonAction = next;
  var handleActions = function handleActions(action, value) {
    switch (action) {
      case 'submit':
        buttonAction();
        break;
      case 'return':
        use.pages.actions.returnInit();
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
    error: use.error.states.error,
    boxProps: {
      styles: {
        width: 'auto',
        height: 'auto'
      }
    },
    returnButtonConatinerStyle: "padding-button: 0px;",
    buttonNextId: _constants.ACCOUNTS_RECEIVABLE_ROUTE
  }, /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Containers.ContainerButton, {
    styles: {
      width: '100%',
      display: 'flex',
      justifyContent: 'flex-start',
      custom: "\n              margin: 20px 0px;\n              padding-left: 5%;\n            "
    }
  }, /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Span.SpanValue, {
    value: "Cliente: ",
    containerStyles: {
      margin: '0px 15px 0px 0px',
      custom: "\n                  font-weight: 700;\n                  font-size: 20px;\n                "
    }
  }), /*#__PURE__*/_react["default"].createElement(_Span.SpanValue, {
    containerStyles: {
      margin: '0',
      custom: "\n                  font-weight: 700;\n                  font-size: 20px;\n                "
    },
    value: entityName
  }))), /*#__PURE__*/_react["default"].createElement(_Containers.ContainerButton, {
    styles: {
      width: '100%'
    }
  }, /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Input.InputCreditLimit, {
    change: function change(e) {
      return use.attributes.actions.changeLimit(e);
    },
    props: {
      inputProps: {
        defaultValue: use.attributes.states.limit
      },
      styles: {
        width: '100%'
      }
    }
  }))), /*#__PURE__*/_react["default"].createElement(_Containers.ContainerButton, {
    styles: {
      width: '100%'
    }
  }, /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Input.InputCreditTimeToPay, {
    change: function change(e) {
      return use.attributes.actions.changeTimeToPay(e);
    },
    props: {
      styles: {
        width: '100%'
      },
      inputProps: {
        defaultValue: use.attributes.states.timeToPay
      }
    }
  })))));
};