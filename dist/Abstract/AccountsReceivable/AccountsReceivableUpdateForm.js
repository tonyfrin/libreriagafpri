"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AccountsReceivableUpdateForm = void 0;
var _react = _interopRequireDefault(require("react"));
var _Input = require("../Input");
var _Containers = require("../Containers");
var _Form = require("../Form");
var _Span = require("../Span");
var _Components = require("../../Components");
var AccountsReceivableUpdateForm = exports.AccountsReceivableUpdateForm = function AccountsReceivableUpdateForm(_ref) {
  var _current$entity, _current$entity2, _current$entity3, _current$entity4;
  var use = _ref.use;
  var current = use.data.actions.getById(use.attributes.states.currentId);
  if (!current) {
    return /*#__PURE__*/_react["default"].createElement(_Components.Loading, null);
  }
  var entityName = current !== null && current !== void 0 && current.entity ? (_current$entity = current.entity) !== null && _current$entity !== void 0 && _current$entity.lastName ? "".concat((_current$entity2 = current.entity) === null || _current$entity2 === void 0 ? void 0 : _current$entity2.name, " ").concat((_current$entity3 = current.entity) === null || _current$entity3 === void 0 ? void 0 : _current$entity3.lastName) : (_current$entity4 = current.entity) === null || _current$entity4 === void 0 ? void 0 : _current$entity4.name : '';
  var next = function next() {
    if (use.attributes.states.limitValid && use.attributes.states.timeToPayValid) {
      use.pages.actions.onLoginUpdateForm();
    }
  };
  _react["default"].useEffect(function () {
    use.attributes.actions.changeEntityId(current.entityId);
    use.attributes.actions.changeLimit("".concat(current.limit));
    use.attributes.actions.changeTimeToPay("".concat(current.timeToPay));
  }, []);
  _react["default"].useEffect(function () {
    use.attributes.actions.validationEntityId(use.attributes.states.entityId);
    use.attributes.actions.validationLimit(use.attributes.states.limit);
    use.attributes.actions.validationTimeToPay(use.attributes.states.timeToPay);
  }, [use.attributes.states.limit, use.attributes.states.timeToPay, use.attributes.states.entityId]);
  _react["default"].useEffect(function () {
    use.attributes.actions.validationButtonNext();
  }, [use.attributes.states.entityIdValid, use.attributes.states.limitValid, use.attributes.states.timeToPayValid]);
  var title1Text = 'Actualiza cuenta de credito';
  var title2Text = "Actualiza la cuenta de credito # ".concat(current.postsId);
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
    returnButtonConatinerStyle: "padding-button: 0px;"
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