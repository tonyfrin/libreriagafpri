"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IncomeForm = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireDefault(require("react"));
var _Input = require("../Input");
var _Containers = require("../Containers");
var _Form = require("../Form");
var _Span = require("../Span");
var _helpers = require("../../helpers");
var _constants = require("../../constants");
var IncomeForm = exports.IncomeForm = function IncomeForm(_ref) {
  var _use$attributes$state, _use$attributes$state2, _use$attributes$state3, _use$attributes$state4, _use$attributes$state5;
  var use = _ref.use,
    siteOptions = _ref.siteOptions;
  var _React$useState = _react["default"].useState( /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null)),
    _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
    InputProjects = _React$useState2[0],
    setInputProjects = _React$useState2[1];
  var customerName = (_use$attributes$state = use.attributes.states) !== null && _use$attributes$state !== void 0 && _use$attributes$state.entity ? (_use$attributes$state2 = use.attributes.states.entity) !== null && _use$attributes$state2 !== void 0 && _use$attributes$state2.lastName ? "".concat((_use$attributes$state3 = use.attributes.states.entity) === null || _use$attributes$state3 === void 0 ? void 0 : _use$attributes$state3.name, " ").concat((_use$attributes$state4 = use.attributes.states.entity) === null || _use$attributes$state4 === void 0 ? void 0 : _use$attributes$state4.lastName) : (_use$attributes$state5 = use.attributes.states.entity) === null || _use$attributes$state5 === void 0 ? void 0 : _use$attributes$state5.name : '';
  var goPaymentCr = function goPaymentCr() {
    use.pages.actions.onPaymentCrForm();
  };
  _react["default"].useEffect(function () {
    use.attributes.actions.validationCustomerId(use.attributes.states.customerId);
    use.attributes.actions.validationProjectsPostsId(use.attributes.states.projectsPostsId);
  }, [use.attributes.states.customerId, use.attributes.states.projectsPostsId, use.attributes.states.customerIdValid, use.attributes.states.projectsPostsIdValid, InputProjects]);
  _react["default"].useEffect(function () {
    use.attributes.actions.validationButtonNext();
  }, [use.attributes.states.customerIdValid, use.attributes.states.projectsPostsIdValid, use.attributes.states.total]);
  _react["default"].useEffect(function () {
    setInputProjects(function () {
      return /*#__PURE__*/_react["default"].createElement(_Input.SelectProjectId, {
        change: function change(e) {
          return use.attributes.actions.changeProjectsPostsId(e);
        },
        props: {
          options: use.attributes.states.projectsPostsIdOptions,
          defaultValue: use.attributes.states.projectsPostsIdDefault,
          styles: {
            width: '100%'
          }
        }
      });
    });
  }, []);
  var title1Text = 'Nuevo Ingreso';
  var title2Text = 'Agrega un nuevo ingreso';
  var buttonTitle = 'Siguiente';
  var buttonAction = goPaymentCr;
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
    buttonNextId: _constants.INCOME_ROUTE,
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
    value: "Proveedor: ",
    containerStyles: {
      margin: '0px 15px 0px 0px',
      custom: "\n                  font-weight: 700;\n                  font-size: 20px;\n                "
    }
  }), /*#__PURE__*/_react["default"].createElement(_Span.SpanValue, {
    containerStyles: {
      margin: '0',
      custom: "\n                  font-weight: 700;\n                  font-size: 20px;\n                "
    },
    value: customerName
  }))), /*#__PURE__*/_react["default"].createElement(_Containers.ContainerButton, {
    styles: {
      width: '100%'
    }
  }, /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, InputProjects)), /*#__PURE__*/_react["default"].createElement(_Containers.ContainerButton, {
    styles: {
      width: '100%'
    }
  }, /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Input.InputNote, {
    change: function change(e) {
      return use.attributes.actions.changeNote(e);
    },
    props: {
      inputProps: {
        defaultValue: use.attributes.states.note
      },
      styles: {
        width: '100%'
      }
    }
  }))), /*#__PURE__*/_react["default"].createElement(_Containers.ContainerButton, {
    styles: {
      width: '100%'
    }
  }, /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Input.Input, {
    inputProps: {
      onChange: function onChange(e) {
        return use.attributes.actions.changeSubTotal(e.target.value);
      },
      title: 'Sub-Total',
      placeholder: 'Sub-Total',
      type: 'number',
      step: '0.01',
      defaultValue: use.attributes.states.subTotal
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
        return use.attributes.actions.changeSubTotalTax(e.target.value);
      },
      title: 'Impuestos',
      placeholder: 'Impuestos',
      type: 'number',
      step: '0.01',
      defaultValue: use.attributes.states.subTotalTax
    },
    styles: {
      width: '100%'
    }
  }))), /*#__PURE__*/_react["default"].createElement(_Containers.ContainerButton, {
    styles: {
      width: '100%',
      display: 'flex',
      justifyContent: 'flex-start',
      custom: "\n              margin: 20px 0px;\n              padding-left: 5%;\n            "
    }
  }, /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Span.SpanValue, {
    value: "Total: ",
    containerStyles: {
      margin: '0px 15px 0px 0px',
      custom: "\n                  font-weight: 700;\n                  font-size: 20px;\n                "
    }
  }), /*#__PURE__*/_react["default"].createElement(_Span.SpanValue, {
    containerStyles: {
      margin: '0',
      custom: "\n                  font-weight: 700;\n                  font-size: 20px;\n                "
    },
    value: (0, _helpers.decimalFormatPriceConverter)(use.attributes.states.total, siteOptions.DECIMAL_NUMBERS, siteOptions.CURRENCY_SYMBOL, siteOptions.CURRENCY_LOCATION, siteOptions.CURRENCY_FORMAT)
  })))));
};