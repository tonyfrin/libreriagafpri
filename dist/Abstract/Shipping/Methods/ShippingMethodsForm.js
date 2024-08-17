"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ShippingMethodsForm = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireDefault(require("react"));
var _Containers = require("../../Containers");
var _Form = require("../../Form");
var _Input = require("../../Input");
var _constants = require("../../../constants");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var ShippingMethodsForm = exports.ShippingMethodsForm = function ShippingMethodsForm(_ref) {
  var use = _ref.use,
    formType = _ref.formType,
    modelFormProps = _ref.modelFormProps,
    infoContainerProps = _ref.infoContainerProps,
    nameInputProps = _ref.nameInputProps;
  var isAddForm = formType === 'add';
  var isUpdateForm = formType === 'update';
  var _React$useState = _react["default"].useState( /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null)),
    _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
    inputType = _React$useState2[0],
    setInputType = _React$useState2[1];
  var _React$useState3 = _react["default"].useState( /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null)),
    _React$useState4 = (0, _slicedToArray2["default"])(_React$useState3, 2),
    inputAvailableShippingServices = _React$useState4[0],
    setInputAvailableShippingServices = _React$useState4[1];
  var _React$useState5 = _react["default"].useState( /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null)),
    _React$useState6 = (0, _slicedToArray2["default"])(_React$useState5, 2),
    inputTaxStatus = _React$useState6[0],
    setInputTaxStatus = _React$useState6[1];
  var _React$useState7 = _react["default"].useState( /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null)),
    _React$useState8 = (0, _slicedToArray2["default"])(_React$useState7, 2),
    inputTaxClass = _React$useState8[0],
    setInputTaxClass = _React$useState8[1];
  var _React$useState9 = _react["default"].useState( /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null)),
    _React$useState10 = (0, _slicedToArray2["default"])(_React$useState9, 2),
    inputStatus = _React$useState10[0],
    setInputStatus = _React$useState10[1];
  var currentItem = isUpdateForm ? use.data.actions.getById(use.attributes.states.currentId) : null;
  _react["default"].useEffect(function () {
    use.attributes.actions.validationShippingAreasId(parseInt(use.attributes.states.shippingAreasId, 10));
    use.attributes.actions.validationName(use.attributes.states.name);
    use.attributes.actions.validationDescription(use.attributes.states.description);
    use.attributes.actions.validationCost(parseFloat(use.attributes.states.cost));
    use.attributes.actions.validationShippingTimeDays(parseFloat(use.attributes.states.shippingTimeDays));
    use.attributes.actions.validationType(use.attributes.states.type);
    use.attributes.actions.validationAvailableShippingServices(use.attributes.states.availableShippingServices);
    use.attributes.actions.validationTaxStatus(use.attributes.states.taxStatus);
    use.attributes.actions.validationTaxClass(use.attributes.states.taxClass);
    use.attributes.actions.validationStatus(use.attributes.states.status);
    use.attributes.actions.validationButtonNext();
  }, [use.attributes.states.shippingAreasId, use.attributes.states.name, use.attributes.states.description, use.attributes.states.cost, use.attributes.states.shippingTimeDays, use.attributes.states.type, use.attributes.states.availableShippingServices, use.attributes.states.taxStatus, use.attributes.states.taxClass, use.attributes.states.status, inputType, inputAvailableShippingServices, inputTaxStatus, inputTaxClass, inputStatus]);
  console.log('cost', use.attributes.states.cost);
  _react["default"].useEffect(function () {
    use.attributes.actions.validationButtonNext();
  }, [use.attributes.states.shippingAreasIdValid, use.attributes.states.nameValid, use.attributes.states.descriptionValid, use.attributes.states.costValid, use.attributes.states.shippingTimeDaysValid, use.attributes.states.typeValid, use.attributes.states.availableShippingServicesValid, use.attributes.states.taxStatusValid, use.attributes.states.taxClassValid, use.attributes.states.statusValid]);
  _react["default"].useEffect(function () {
    if (isUpdateForm && currentItem) {
      use.attributes.actions.changeShippingAreasId("".concat(currentItem.shippingAreasId));
      use.attributes.actions.changeName(currentItem.name);
      use.attributes.actions.changeDescription(currentItem.description);
      console.log('currentItem.cost', currentItem.cost);
      use.attributes.actions.changeCost(currentItem.cost);
      use.attributes.actions.changeShippingTimeDays(currentItem.shippingTimeDays);
      var type = use.attributes.states.typeOptions.find(function (item) {
        return item.value === currentItem.type;
      }) || {
        value: '',
        label: 'Elija tipo'
      };
      use.attributes.actions.changeType(type);
      var availableShippingServices = use.attributes.states.availableShippingServicesOptions.find(function (item) {
        return item.value === currentItem.availableShippingServices;
      }) || {
        value: '',
        label: 'Elija servicio de envío'
      };
      use.attributes.actions.changeAvailableShippingServices(availableShippingServices);
      var taxStatus = use.attributes.states.taxStatusOptions.find(function (item) {
        return item.value === currentItem.taxStatus;
      }) || {
        value: '',
        label: 'Elija estado de impuestos'
      };
      use.attributes.actions.changeTaxStatus(taxStatus);
      var taxClass = use.attributes.states.taxClassOptions.find(function (item) {
        return item.value === currentItem.taxClass;
      }) || {
        value: '',
        label: 'Elija clase de impuestos'
      };
      use.attributes.actions.changeTaxClass(taxClass);
      var status = use.attributes.states.statusOptions.find(function (item) {
        return item.value === currentItem.status;
      }) || {
        value: '',
        label: 'Elija estado'
      };
      use.attributes.actions.changeStatus(status);
    }
  }, []);
  _react["default"].useEffect(function () {
    if (isAddForm) {
      setInputAvailableShippingServices( /*#__PURE__*/_react["default"].createElement(_Input.SelectAvailableShippingServices, {
        change: use.attributes.actions.changeAvailableShippingServices,
        props: {
          title: 'Servicios de envío disponibles',
          options: use.attributes.states.availableShippingServicesOptions,
          defaultValue: use.attributes.states.availableShippingServicesDefault,
          styles: {
            width: '90%'
          }
          // ...nameInputProps
        },
        inputId: _constants.SHIPPING_METHODS_ROUTE
      }));
      setInputType( /*#__PURE__*/_react["default"].createElement(_Input.SelectType, {
        changeType: use.attributes.actions.changeType,
        props: {
          title: 'Tipo',
          options: use.attributes.states.typeOptions,
          defaultValue: use.attributes.states.typeDefault,
          styles: {
            width: '90%'
          }
          // ...nameInputProps
        },
        inputId: _constants.SHIPPING_METHODS_ROUTE
      }));
      setInputTaxStatus( /*#__PURE__*/_react["default"].createElement(_Input.SelectTaxStatus, {
        change: use.attributes.actions.changeTaxStatus,
        props: {
          title: 'Estado de impuestos',
          options: use.attributes.states.taxStatusOptions,
          defaultValue: use.attributes.states.taxStatusDefault,
          styles: {
            width: '90%'
          }
          // ...nameInputProps
        },
        inputId: _constants.SHIPPING_METHODS_ROUTE
      }));
      setInputTaxClass( /*#__PURE__*/_react["default"].createElement(_Input.SelectTaxClass, {
        change: use.attributes.actions.changeTaxClass,
        props: {
          title: 'Clase de impuestos',
          options: use.attributes.states.taxClassOptions,
          defaultValue: use.attributes.states.taxClassDefault,
          styles: {
            width: '90%'
          }
          // ...nameInputProps
        },
        inputId: _constants.SHIPPING_METHODS_ROUTE
      }));
      setInputStatus( /*#__PURE__*/_react["default"].createElement(_Input.SelectStatus, {
        changeStatus: use.attributes.actions.changeStatus,
        props: {
          title: 'Estado',
          options: use.attributes.states.statusOptions,
          defaultValue: use.attributes.states.statusDefault,
          styles: {
            width: '104%'
          }
          // ...nameInputProps
        },
        inputId: _constants.SHIPPING_METHODS_ROUTE
      }));
    }
  }, []);
  _react["default"].useEffect(function () {
    if (isUpdateForm) {
      if (use.attributes.states.availableShippingServicesDefault.value !== '') {
        setInputAvailableShippingServices( /*#__PURE__*/_react["default"].createElement(_Input.SelectAvailableShippingServices, {
          change: use.attributes.actions.changeAvailableShippingServices,
          props: {
            title: 'Servicios de envío disponibles',
            options: use.attributes.states.availableShippingServicesOptions,
            defaultValue: use.attributes.states.availableShippingServicesDefault,
            styles: {
              width: '90%'
            }
            // ...nameInputProps
          },
          inputId: _constants.SHIPPING_METHODS_ROUTE
        }));
      }
      if (use.attributes.states.typeDefault.value !== '') {
        setInputType( /*#__PURE__*/_react["default"].createElement(_Input.SelectType, {
          changeType: use.attributes.actions.changeType,
          props: {
            title: 'Tipo',
            options: use.attributes.states.typeOptions,
            defaultValue: use.attributes.states.typeDefault,
            styles: {
              width: '90%'
            }
            // ...nameInputProps
          },
          inputId: _constants.SHIPPING_METHODS_ROUTE
        }));
      }
      if (use.attributes.states.taxStatusDefault.value !== '') {
        setInputTaxStatus( /*#__PURE__*/_react["default"].createElement(_Input.SelectTaxStatus, {
          change: use.attributes.actions.changeTaxStatus,
          props: {
            title: 'Estado de impuestos',
            options: use.attributes.states.taxStatusOptions,
            defaultValue: use.attributes.states.taxStatusDefault,
            styles: {
              width: '90%'
            }
            // ...nameInputProps
          },
          inputId: _constants.SHIPPING_METHODS_ROUTE
        }));
      }
      if (use.attributes.states.taxClassDefault.value !== '') {
        setInputTaxClass( /*#__PURE__*/_react["default"].createElement(_Input.SelectTaxClass, {
          change: use.attributes.actions.changeTaxClass,
          props: {
            title: 'Clase de impuestos',
            options: use.attributes.states.taxClassOptions,
            defaultValue: use.attributes.states.taxClassDefault,
            styles: {
              width: '90%'
            }
            // ...nameInputProps
          },
          inputId: _constants.SHIPPING_METHODS_ROUTE
        }));
      }
      if (use.attributes.states.statusDefault.value !== '') {
        setInputStatus( /*#__PURE__*/_react["default"].createElement(_Input.SelectStatus, {
          changeStatus: use.attributes.actions.changeStatus,
          props: {
            title: 'Estado',
            options: use.attributes.states.statusOptions,
            defaultValue: use.attributes.states.statusDefault,
            styles: {
              width: '104%'
            }
            // ...nameInputProps
          },
          inputId: _constants.SHIPPING_METHODS_ROUTE
        }));
      }
    }
  }, [use.attributes.states.availableShippingServicesDefault.value, use.attributes.states.typeDefault, use.attributes.states.taxStatusDefault, use.attributes.states.taxClassDefault, use.attributes.states.statusDefault]);
  var title1Text = isAddForm ? 'Nuevo metodo de envío' : 'Actualizar metodo de envío';
  var title2Text = isAddForm ? 'Agrega un nuevo metodo de envío' : "Actualiza la informaci\xF3n del metodo de env\xEDo #".concat(currentItem === null || currentItem === void 0 ? void 0 : currentItem.id);
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
  return /*#__PURE__*/_react["default"].createElement(_Form.ModelForm, (0, _extends2["default"])({
    boxProps: {
      styles: {
        width: '100%',
        height: '75vh',
        margin: '30px auto 0px'
      }
    },
    mainButtonProps: {
      styles: {
        fontSize: '10px'
      },
      title: buttonTitle
    },
    returnButtonProps: {
      styles: {
        fontSize: '10px',
        backgroundColor: '#c12429'
      },
      title: 'volver',
      buttonProps: {
        onClick: use.pages.actions.returnInit
      }
    },
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
    buttonNextId: _constants.SHIPPING_METHODS_ROUTE
  }, modelFormProps), /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Containers.ContainerButton, (0, _extends2["default"])({
    styles: {
      width: '100%'
    }
  }, infoContainerProps), /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Input.InputName, {
    changeName: use.attributes.actions.changeName,
    props: _objectSpread({
      inputProps: {
        defaultValue: use.attributes.states.name,
        title: 'Nombre'
      },
      styles: {
        width: '90%'
      }
    }, nameInputProps),
    inputId: _constants.SHIPPING_METHODS_ROUTE
  }), /*#__PURE__*/_react["default"].createElement(_Input.InputDescription, {
    changeDescription: use.attributes.actions.changeDescription,
    props: {
      inputProps: {
        defaultValue: use.attributes.states.description,
        title: 'Descripción'
      },
      styles: {
        width: '90%'
      }
      // ...nameInputProps
    },
    inputId: _constants.SHIPPING_METHODS_ROUTE
  }))), /*#__PURE__*/_react["default"].createElement(_Containers.ContainerButton, (0, _extends2["default"])({
    styles: {
      width: '100%',
      justifyContent: 'space-between'
    }
  }, infoContainerProps), /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, inputStatus)), /*#__PURE__*/_react["default"].createElement(_Containers.ContainerButton, (0, _extends2["default"])({
    styles: {
      width: '100%'
    }
  }, infoContainerProps), /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, inputType, /*#__PURE__*/_react["default"].createElement(_Input.InputCost, {
    changeCost: use.attributes.actions.changeCost,
    props: {
      inputProps: {
        defaultValue: use.attributes.states.cost,
        title: 'Precio'
      },
      styles: {
        width: '90%'
      }
    },
    inputId: _constants.SHIPPING_METHODS_ROUTE
  }))), /*#__PURE__*/_react["default"].createElement(_Containers.ContainerButton, (0, _extends2["default"])({
    styles: {
      width: '100%'
    }
  }, infoContainerProps), /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Input.InputShippingTimeDays, {
    change: use.attributes.actions.changeShippingTimeDays,
    props: {
      inputProps: {
        defaultValue: use.attributes.states.shippingTimeDays,
        title: 'Días de envío'
      },
      styles: {
        width: '90%'
      }
      // ...nameInputProps
    },
    inputId: _constants.SHIPPING_METHODS_ROUTE
  }), inputAvailableShippingServices)), /*#__PURE__*/_react["default"].createElement(_Containers.ContainerButton, (0, _extends2["default"])({
    styles: {
      width: '100%'
    }
  }, infoContainerProps), /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, inputTaxStatus, inputTaxClass))));
};