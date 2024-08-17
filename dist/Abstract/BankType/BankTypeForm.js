"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BankTypeForm = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _react = _interopRequireDefault(require("react"));
var _css = require("@emotion/css");
var _Containers = require("../Containers");
var _Button = require("../Button");
var _Form = require("../Form");
var _Input = require("../Input");
var _Table = require("../Table");
var _templateObject, _templateObject2, _templateObject3;
var defaultFormContainerStyle = (0, _css.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  justify-content: space-between;\n  margin-top: 10px;\n  padding-left: 24px;\n"])));
var defaultImageContainerStyle = (0, _css.css)(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  width: 50%;\n"])));
var defaultTitleContainerStyle = (0, _css.css)(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n  width: 50%;\n"])));
var BankTypeForm = exports.BankTypeForm = function BankTypeForm(_ref) {
  var use = _ref.use,
    formType = _ref.formType,
    useCurrencies = _ref.useCurrencies;
  var isAddForm = formType === 'add';
  var isUpdateForm = formType === 'update';
  var _React$useState = _react["default"].useState( /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null)),
    _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
    InputSite = _React$useState2[0],
    setInputSite = _React$useState2[1];
  var _React$useState3 = _react["default"].useState( /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null)),
    _React$useState4 = (0, _slicedToArray2["default"])(_React$useState3, 2),
    InputAccountType = _React$useState4[0],
    setInputAccountType = _React$useState4[1];
  var _React$useState5 = _react["default"].useState( /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null)),
    _React$useState6 = (0, _slicedToArray2["default"])(_React$useState5, 2),
    InputCurrency = _React$useState6[0],
    setInputCurrency = _React$useState6[1];
  var current = isUpdateForm ? use.data.actions.getById(use.attributes.states.currentId) : null;
  _react["default"].useEffect(function () {
    use.attributes.actions.validationName(use.attributes.states.name);
    use.attributes.actions.validationSite(use.attributes.states.sitesId);
    use.attributes.actions.validationBankName(use.attributes.states.bankName);
    use.attributes.actions.validationAccount(use.attributes.states.account);
    use.attributes.actions.validationAccountType(use.attributes.states.accountType);
    use.attributes.actions.validationCurrency(use.attributes.states.currency);
    use.attributes.actions.validationSettings(use.attributes.states.settings);
    use.attributes.actions.validationButtonNext();
  }, [use.attributes.states.name, use.attributes.states.sitesId, use.attributes.states.bankName, use.attributes.states.account, use.attributes.states.accountType, use.attributes.states.currency, use.attributes.states.settings, InputSite, InputAccountType, InputCurrency]);
  _react["default"].useEffect(function () {
    use.attributes.actions.validationButtonNext();
  }, [use.attributes.states.nameValid, use.attributes.states.sitesIdValid, use.attributes.states.bankNameValid, use.attributes.states.accountValid, use.attributes.states.accountTypeValid, use.attributes.states.currencyValid, use.attributes.states.settingsValid]);
  _react["default"].useEffect(function () {
    if (current) {
      if (current.name) use.attributes.actions.changeName(current.name);
      if (current.sitesId) {
        use.attributes.actions.changeSitesId({
          label: "".concat(current.sitesId),
          value: "".concat(current.sitesId)
        });
      }
      if (current.bankName) use.attributes.actions.changeBankName(current.bankName);
      if (current.account) use.attributes.actions.changeAccount(current.account);
      if (current.accountType) {
        var _use$attributes$state;
        var accountTypeName = ((_use$attributes$state = use.attributes.states.accountTypeOptions.find(function (option) {
          return (option === null || option === void 0 ? void 0 : option.value) === "".concat(current.accountType);
        })) === null || _use$attributes$state === void 0 ? void 0 : _use$attributes$state.label) || '';
        use.attributes.actions.changeAccountType({
          label: accountTypeName,
          value: current.accountType
        });
      }
      if (current.currenciesId) {
        var _useCurrencies$action;
        var currencyName = ((_useCurrencies$action = useCurrencies.actions.getById(current.currenciesId)) === null || _useCurrencies$action === void 0 ? void 0 : _useCurrencies$action.name) || '';
        use.attributes.actions.changeCurrency({
          label: currencyName,
          value: "".concat(current.currenciesId)
        });
      }
      if (current.settings) use.attributes.actions.setSettings(current.settings);
    }
    if (isAddForm) {
      setInputSite(function () {
        return /*#__PURE__*/_react["default"].createElement(_Input.SelectSite, {
          changeSite: function changeSite(event) {
            return use.attributes.actions.changeSitesId(event);
          },
          props: {
            defaultValue: use.attributes.states.sitesIdDefault,
            title: 'Sucursal',
            styles: {
              width: '96.5%'
            },
            options: use.attributes.states.sitesIdOptions,
            containerStyles: {
              custom: "\n                  display: block;\n                "
            }
          }
        });
      });
      setInputAccountType(function () {
        return /*#__PURE__*/_react["default"].createElement(_Input.SelectAccountType, {
          change: function change(event) {
            return use.attributes.actions.changeAccountType(event);
          },
          props: {
            defaultValue: use.attributes.states.accountTypeDefault,
            styles: {
              width: '96.5%'
            },
            options: use.attributes.states.accountTypeOptions,
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
      if (use.attributes.states.accountTypeDefault.value !== '') {
        setInputAccountType(function () {
          return /*#__PURE__*/_react["default"].createElement(_Input.SelectAccountType, {
            change: function change(event) {
              return use.attributes.actions.changeAccountType(event);
            },
            props: {
              defaultValue: use.attributes.states.accountTypeDefault,
              styles: {
                width: '96.5%'
              },
              options: use.attributes.states.accountTypeOptions,
              containerStyles: {
                custom: "\n                    display: block;\n                  "
              }
            }
          });
        });
      }
      if (use.attributes.states.currencyDefault.value !== '') {
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
                custom: "\n                    display: block;\n                  "
              }
            }
          });
        });
      }
    }
  }, [use.attributes.states.currencyDefault, use.attributes.states.accountTypeDefault.value, isUpdateForm, current]);
  var title1Text = isAddForm ? 'Nuevo Banco' : 'Actualizar Banco';
  var title2Text = isAddForm ? 'Agrega un nuevo Banco' : "Actualiza la informaci\xF3n del banco #".concat(current === null || current === void 0 ? void 0 : current.postsId);
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
  }, InputSite)), isUpdateForm && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Containers.ContainerButton, {
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
  }))))), /*#__PURE__*/_react["default"].createElement(_Containers.ContainerButton, {
    styles: {
      width: '96.5%'
    }
  }, /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Containers.ContainerButton, {
    styles: {
      width: '50%',
      display: 'block'
    }
  }, /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Containers.ContainerButton, {
    styles: {
      width: '96.5%',
      justifyContent: 'flex-start'
    }
  }, /*#__PURE__*/_react["default"].createElement(_Input.InputBankName, {
    change: function change(name) {
      return use.attributes.actions.changeBankName(name);
    },
    props: {
      inputProps: {
        defaultValue: use.attributes.states.bankName
      },
      styles: {
        width: '100%'
      },
      containerStyles: {
        custom: "\n                          display: block;\n                        "
      }
    }
  })), /*#__PURE__*/_react["default"].createElement(_Containers.ContainerButton, {
    styles: {
      width: '96.5%',
      justifyContent: 'flex-start'
    }
  }, InputCurrency))), /*#__PURE__*/_react["default"].createElement(_Containers.ContainerButton, {
    styles: {
      width: '50%',
      display: 'block'
    }
  }, /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Containers.ContainerButton, {
    styles: {
      width: '96.5%',
      justifyContent: 'flex-start'
    }
  }, /*#__PURE__*/_react["default"].createElement(_Input.InputAccountNumber, {
    change: function change(value) {
      return use.attributes.actions.changeAccount(value);
    },
    props: {
      inputProps: {
        defaultValue: use.attributes.states.account
      },
      styles: {
        width: '100%'
      },
      containerStyles: {
        custom: "\n                          display: block;\n                        "
      }
    }
  })), /*#__PURE__*/_react["default"].createElement(_Containers.ContainerButton, {
    styles: {
      width: '96.5%',
      justifyContent: 'flex-start'
    }
  }, InputAccountType))))), /*#__PURE__*/_react["default"].createElement(_Containers.ContainerButton, {
    styles: {
      width: '96.5%'
    }
  }, /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _css.css)(defaultFormContainerStyle)
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _css.css)(defaultImageContainerStyle)
  }, /*#__PURE__*/_react["default"].createElement(_Containers.ContainerButton, {
    styles: {
      width: '100%'
    }
  }, /*#__PURE__*/_react["default"].createElement(_Input.Input, {
    styles: {
      width: '90%'
    },
    inputProps: {
      placeholder: 'Opción',
      title: 'Opción',
      type: 'text',
      onChange: function onChange(event) {
        return use.attributes.actions.setValueSettings(event.currentTarget.value);
      },
      value: use.attributes.states.valueSettings
    }
  })), /*#__PURE__*/_react["default"].createElement(_Containers.ContainerButton, {
    styles: {
      width: '100%'
    }
  }, /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    title: "Agregar Opci\xF3n",
    buttonProps: {
      onClick: function onClick() {
        return use.attributes.actions.addSettings();
      }
    }
  }))), /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _css.css)(defaultTitleContainerStyle)
  }, /*#__PURE__*/_react["default"].createElement(_Input.Paragraph, {
    onChange: function onChange(e) {
      return use.attributes.actions.setDescriptionSettings(e);
    },
    inputProps: {
      value: use.attributes.states.descriptionSettings,
      title: 'Valor',
      placeholder: 'Valor'
    }
  }))))), /*#__PURE__*/_react["default"].createElement(_Containers.ContainerButton, {
    styles: {
      width: '96.5%'
    }
  }, /*#__PURE__*/_react["default"].createElement(_Table.AttributeTable, {
    data: use.attributes.states.settings,
    onRemove: use.attributes.actions.onRemoveSettings
  }))));
};