"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WalletAccountForm = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireDefault(require("react"));
var _Containers = require("../Containers");
var _Form = require("../Form");
var _Input = require("../Input");
var _Span = require("../Span");
var WalletAccountForm = exports.WalletAccountForm = function WalletAccountForm(_ref) {
  var _use$attributes$state2;
  var use = _ref.use,
    formType = _ref.formType;
  var isAddForm = formType === 'add';
  var isUpdateForm = formType === 'update';
  var _React$useState = _react["default"].useState( /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null)),
    _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
    InputStatus = _React$useState2[0],
    setInputStatus = _React$useState2[1];
  var _React$useState3 = _react["default"].useState( /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null)),
    _React$useState4 = (0, _slicedToArray2["default"])(_React$useState3, 2),
    InputCurrency = _React$useState4[0],
    setInputCurrency = _React$useState4[1];
  var current = isUpdateForm ? use.data.actions.getById(use.attributes.states.currentId) : null;
  _react["default"].useEffect(function () {
    use.attributes.actions.validationUserId(use.attributes.states.userId);
    use.attributes.actions.validationName(use.attributes.states.name);
    use.attributes.actions.validationStatus(use.attributes.states.status);
    use.attributes.actions.validationCurrency(use.attributes.states.currency);
    use.attributes.actions.validationButtonNext();
  }, [use.attributes.states.name, use.attributes.states.userId, use.attributes.states.currency, use.attributes.states.status, InputStatus, InputCurrency]);
  _react["default"].useEffect(function () {
    use.attributes.actions.validationButtonNext();
  }, [use.attributes.states.nameValid, use.attributes.states.userIdValid, use.attributes.states.statusValid, use.attributes.states.currencyValid]);
  _react["default"].useEffect(function () {
    if (current) {
      if (current.name) use.attributes.actions.changeName(current.name);
      if (current.status) {
        var _use$attributes$state;
        var statusLabel = ((_use$attributes$state = use.attributes.states.statusOptions) === null || _use$attributes$state === void 0 || (_use$attributes$state = _use$attributes$state.find(function (option) {
          return (option === null || option === void 0 ? void 0 : option.value) === "".concat(current.status);
        })) === null || _use$attributes$state === void 0 ? void 0 : _use$attributes$state.label) || '';
        use.attributes.actions.changeStatus({
          label: statusLabel,
          value: current.status
        });
      }
    }
    if (isAddForm) {
      setInputStatus(function () {
        return /*#__PURE__*/_react["default"].createElement(_Input.SelectStatus, {
          changeStatus: function changeStatus(event) {
            return use.attributes.actions.changeStatus(event);
          },
          props: {
            defaultValue: use.attributes.states.statusDefault,
            title: 'Estado',
            styles: {
              width: '96.5%'
            },
            options: use.attributes.states.statusOptions,
            containerStyles: {
              custom: "\n                  display: block;\n                "
            }
          }
        });
      });
      setInputCurrency(function () {
        return /*#__PURE__*/_react["default"].createElement(_Input.SelectCurrencies, {
          changeCurrencies: function changeCurrencies(event) {
            return use.attributes.actions.changeCurrency(event);
          },
          props: {
            defaultValue: use.attributes.states.currencyDefault,
            title: 'Moneda',
            styles: {
              width: '96.5%'
            },
            options: use.attributes.states.currencyOptions,
            containerStyles: {
              custom: "\n                  display: block;\n                "
            }
          }
        });
      });
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  _react["default"].useEffect(function () {
    if (isUpdateForm && current) {
      if (use.attributes.states.statusDefault.value !== '') {
        setInputStatus(function () {
          return /*#__PURE__*/_react["default"].createElement(_Input.SelectStatus, {
            changeStatus: function changeStatus(event) {
              return use.attributes.actions.changeStatus(event);
            },
            props: {
              defaultValue: use.attributes.states.statusDefault,
              title: 'Estado',
              styles: {
                width: '96.5%'
              },
              options: use.attributes.states.statusOptions,
              containerStyles: {
                custom: "\n                        display: block;\n                      "
              }
            }
          });
        });
      }
    }
  }, [use.attributes.states.statusDefault.value, isUpdateForm, current]);
  var title1Text = isAddForm ? 'Nueva Cuenta' : 'Actualizar Cuenta';
  var title2Text = isAddForm ? 'Agrega una nueva Cuenta de Billetera' : "Actualiza la informaci\xF3n de la cuenta #".concat(current === null || current === void 0 ? void 0 : current.id);
  var buttonTitle = isAddForm ? 'Agregar' : 'Actualizar';
  var buttonAction = isAddForm ? use.api.actions.add : use.api.actions.update;
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
    error: use.error.states.error
  }, /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Containers.ContainerButton, {
    styles: {
      width: '96.5%',
      display: 'flex',
      justifyContent: 'flex-start',
      custom: "\n              margin: 20px 0px;\n              padding-left: 5%;\n            "
    }
  }, /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Span.SpanValue, {
    value: "Usuario: ",
    containerStyles: {
      margin: '0px 15px 0px 0px',
      custom: "\n                  font-weight: 700;\n                  font-size: 20px;\n                "
    }
  }), /*#__PURE__*/_react["default"].createElement(_Span.SpanValue, {
    containerStyles: {
      margin: '0',
      custom: "\n                  font-weight: 700;\n                  font-size: 20px;\n                "
    },
    value: ((_use$attributes$state2 = use.attributes.states.user) === null || _use$attributes$state2 === void 0 ? void 0 : _use$attributes$state2.name) || ''
  }))), /*#__PURE__*/_react["default"].createElement(_Containers.ContainerButton, {
    styles: {
      width: '96.5%'
    }
  }, /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, isAddForm && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Containers.ContainerButton, {
    styles: {
      width: '50%',
      display: 'block'
    }
  }, /*#__PURE__*/_react["default"].createElement(_Input.InputName, {
    changeName: use.attributes.actions.changeName,
    props: {
      inputProps: {
        defaultValue: use.attributes.states.name,
        title: 'Nombre'
      },
      styles: {
        width: '96.5%',
        padding: '10px 19px'
      },
      containerStyles: {
        custom: "\n                        display: block;\n                      "
      }
    }
  })), /*#__PURE__*/_react["default"].createElement(_Containers.ContainerButton, {
    styles: {
      width: '50%',
      display: 'block'
    }
  }, InputCurrency)), isUpdateForm && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Containers.ContainerButton, {
    styles: {
      width: '100%',
      display: 'block'
    }
  }, /*#__PURE__*/_react["default"].createElement(_Input.InputName, {
    changeName: use.attributes.actions.changeName,
    props: {
      inputProps: {
        defaultValue: use.attributes.states.name,
        title: 'Nombre'
      },
      styles: {
        width: '100%',
        padding: '10px 19px'
      },
      containerStyles: {
        custom: "\n                        display: block;\n                      "
      }
    }
  }))), /*#__PURE__*/_react["default"].createElement(_Containers.ContainerButton, {
    styles: {
      width: '100%',
      display: 'block'
    }
  }, InputStatus)))));
};