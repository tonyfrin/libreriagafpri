"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CashRegisterTypeForm = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireDefault(require("react"));
var _Containers = require("../Containers");
var _Form = require("../Form");
var _Input = require("../Input");
var _BoxCashRegisterTypeUser = require("../Box/BoxCashRegisterTypeUser");
var CashRegisterTypeForm = exports.CashRegisterTypeForm = function CashRegisterTypeForm(_ref) {
  var use = _ref.use,
    formType = _ref.formType,
    useUser = _ref.useUser;
  var isAddForm = formType === 'add';
  var isUpdateForm = formType === 'update';
  var _React$useState = _react["default"].useState( /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null)),
    _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
    InputSite = _React$useState2[0],
    setInputSite = _React$useState2[1];
  var current = isUpdateForm ? use.data.actions.getById(use.attributes.states.currentId) : null;
  _react["default"].useEffect(function () {
    use.attributes.actions.validationName(use.attributes.states.name);
    use.attributes.actions.validationSite(use.attributes.states.site);
    use.attributes.actions.validationButtonNext();
  }, [use.attributes.states.name, use.attributes.states.site, InputSite]);
  _react["default"].useEffect(function () {
    use.attributes.actions.validationButtonNext();
  }, [use.attributes.states.nameValid, use.attributes.states.siteValid]);
  _react["default"].useEffect(function () {
    if (current) {
      if (current.name) use.attributes.actions.changeName(current.name);
      if (current.sitesId) {
        use.attributes.actions.changeSite({
          label: "".concat(current.sitesId),
          value: "".concat(current.sitesId)
        });
      }
      if (current.cashRegisterTypeUser) {
        var authorized = current.cashRegisterTypeUser.filter(function (item) {
          return item.isAuthorized;
        });
        var supervisor = current.cashRegisterTypeUser.filter(function (item) {
          return item.isSupervisor;
        });
        if (supervisor.length > 0) {
          use.crtu.actions.setSupervisor(supervisor);
        }
        if (authorized.length > 0) {
          use.crtu.actions.setAuthorized(authorized);
        }
      }
    }
    if (isAddForm) {
      setInputSite(function () {
        return /*#__PURE__*/_react["default"].createElement(_Input.SelectSite, {
          changeSite: function changeSite(event) {
            return use.attributes.actions.changeSite(event);
          },
          props: {
            defaultValue: use.attributes.states.siteDefault,
            title: 'Sucursal',
            styles: {
              width: '96.5%'
            },
            options: use.attributes.states.siteOptions,
            containerStyles: {
              custom: "\n                  display: block;\n                "
            }
          }
        });
      });
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  var title1Text = isAddForm ? 'Nueva Caja' : 'Actualizar Caja';
  var title2Text = isAddForm ? 'Agrega una nueva Caja' : "Actualiza la informaci\xF3n de la caja #".concat(current === null || current === void 0 ? void 0 : current.postsId);
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
  }, /*#__PURE__*/_react["default"].createElement(_Input.GsSelect, {
    styles: {
      width: '100%'
    },
    containerStyles: {
      custom: "\n                        display: block;\n                      "
    },
    options: use.crtu.states.authorizedOptions,
    onChange: function onChange(event) {
      if (event) {
        use.crtu.actions.addAuthorized(event.value);
      }
    },
    defaultValue: use.crtu.states.authorizedDefault,
    title: 'Autorizados'
  })), /*#__PURE__*/_react["default"].createElement(_Containers.ContainerButton, {
    styles: {
      width: '96.5%',
      justifyContent: 'flex-start'
    }
  }, /*#__PURE__*/_react["default"].createElement(_BoxCashRegisterTypeUser.BoxCashRegisterTypeUser, {
    items: use.crtu.states.authorized,
    useUser: useUser,
    removeItem: use.crtu.actions.removeAuthorized,
    containerStyles: {
      width: '90%',
      margin: '20px 0px'
    }
  })))), /*#__PURE__*/_react["default"].createElement(_Containers.ContainerButton, {
    styles: {
      width: '50%',
      display: 'block'
    }
  }, /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Containers.ContainerButton, {
    styles: {
      width: '96.5%',
      justifyContent: 'flex-start'
    }
  }, /*#__PURE__*/_react["default"].createElement(_Input.GsSelect, {
    styles: {
      width: '100%'
    },
    containerStyles: {
      custom: "\n                        display: block;\n                      "
    },
    options: use.crtu.states.supervisorOptions,
    onChange: function onChange(event) {
      if (event) {
        use.crtu.actions.addSupervisor(event.value);
      }
    },
    defaultValue: use.crtu.states.supervisorDefault,
    title: 'Supervisores'
  })), /*#__PURE__*/_react["default"].createElement(_Containers.ContainerButton, {
    styles: {
      width: '96.5%',
      justifyContent: 'flex-start'
    }
  }, /*#__PURE__*/_react["default"].createElement(_BoxCashRegisterTypeUser.BoxCashRegisterTypeUser, {
    items: use.crtu.states.supervisor,
    useUser: useUser,
    removeItem: use.crtu.actions.removeSupervisor,
    containerStyles: {
      width: '90%',
      margin: '20px 0px'
    }
  }))))))));
};