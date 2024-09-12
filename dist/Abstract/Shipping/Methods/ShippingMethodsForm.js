"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ShippingMethodsForm = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _react = _interopRequireDefault(require("react"));
var _css = require("@emotion/css");
var _Containers = require("../../Containers");
var _Form = require("../../Form");
var _Input = require("../../Input");
var _constants = require("../../../constants");
var _Button = require("../../Button");
var _helpers = require("../../../helpers");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12;
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var regionsContainerStyles = (0, _css.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  margin: 0px 10px;\n  padding: 15px 0px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  width: 91%;\n"])));
var regionsTitleStyles = (0, _css.css)(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  font-size: x-small;\n  color: #8d8d8d;\n"])));
var regionItemStyles = (0, _css.css)(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n  position: relative;\n  display: flex;\n  align-items: center;\n  margin-bottom: 8px;\n"])));
var regionContainerStyles = (0, _css.css)(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2["default"])(["\n  position: relative;\n  display: flex;\n  align-items: center;\n  margin-right: 5px;\n  margin-bottom: 5px;\n"])));
var regionButtonStyles = (0, _css.css)(_templateObject5 || (_templateObject5 = (0, _taggedTemplateLiteral2["default"])(["\n  margin-right: 8px;\n  padding: 8px;\n  color: #8d8d8d;\n  border-radius: 4px;\n  border: 1px solid #dfdbdb;\n"])));
var closeButtonStyles = (0, _css.css)(_templateObject6 || (_templateObject6 = (0, _taggedTemplateLiteral2["default"])(["\n  position: absolute;\n  top: 0px;\n  transform: translateY(-50%);\n  right: 0px;\n  cursor: pointer;\n  color: #fff;\n  background-color: #f44336;\n  border-radius: 100%;\n  padding: 2px 5px 4px 5px;\n  font-size: 8px;\n"])));
var mainContainerStyle = (0, _css.css)(_templateObject7 || (_templateObject7 = (0, _taggedTemplateLiteral2["default"])([""])));
var titleContainerStyle = (0, _css.css)(_templateObject8 || (_templateObject8 = (0, _taggedTemplateLiteral2["default"])(["\n  transition: all 1s ease 0s;\n  font-family: 'Poppins', sans-serif;\n  font-weight: 700;\n  font-size: 1rem;\n  color: rgb(38, 35, 33);\n  display: table-cell;\n  width: auto;\n  padding-bottom: 20px;\n  vertical-align: middle;\n  line-height: 1.25rem;\n"])));
var checkBoxContainerStyle = (0, _css.css)(_templateObject9 || (_templateObject9 = (0, _taggedTemplateLiteral2["default"])(["\n  display: inline-flex;\n  align-items: center;\n  margin-right: 1rem;\n"])));
var nameStyle = (0, _css.css)(_templateObject10 || (_templateObject10 = (0, _taggedTemplateLiteral2["default"])(["\n  margin-left: 0.25rem;\n"])));
var infoContainerStyle = (0, _css.css)(_templateObject11 || (_templateObject11 = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  justify-content: space-around;\n"])));
var checkBoxStyle = (0, _css.css)(_templateObject12 || (_templateObject12 = (0, _taggedTemplateLiteral2["default"])([""])));
var ShippingMethodsForm = exports.ShippingMethodsForm = function ShippingMethodsForm(_ref) {
  var _useRoles$states$role;
  var use = _ref.use,
    useRoles = _ref.useRoles,
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
    inputStatus = _React$useState4[0],
    setInputStatus = _React$useState4[1];
  var _React$useState5 = _react["default"].useState(''),
    _React$useState6 = (0, _slicedToArray2["default"])(_React$useState5, 2),
    workDay = _React$useState6[0],
    setWorkDay = _React$useState6[1];
  var _React$useState7 = _react["default"].useState(''),
    _React$useState8 = (0, _slicedToArray2["default"])(_React$useState7, 2),
    workOpenHour = _React$useState8[0],
    setWorkOpenHour = _React$useState8[1];
  var _React$useState9 = _react["default"].useState(''),
    _React$useState10 = (0, _slicedToArray2["default"])(_React$useState9, 2),
    workCloseHour = _React$useState10[0],
    setWorkCloseHour = _React$useState10[1];
  var _React$useState11 = _react["default"].useState(false),
    _React$useState12 = (0, _slicedToArray2["default"])(_React$useState11, 2),
    buttonAddValid = _React$useState12[0],
    setButtonAddValid = _React$useState12[1];
  var validationButtonAdd = function validationButtonAdd() {
    return workDay !== '' && workOpenHour !== '' && workCloseHour !== '' && parseInt(workOpenHour) < parseInt(workCloseHour);
  };
  var currentItem = isUpdateForm ? use.data.actions.getById(use.attributes.states.currentId) : null;
  _react["default"].useEffect(function () {
    var valid = validationButtonAdd();
    setButtonAddValid(valid);
  }, [workDay, workOpenHour, workCloseHour]);
  var addWorkDayHours = function addWorkDayHours() {
    if (validationButtonAdd()) {
      use.attributes.actions.pushWorkDayHour(parseInt(workDay, 10), "".concat(workOpenHour, "-").concat(workCloseHour));
    }
  };
  _react["default"].useEffect(function () {
    use.attributes.actions.validationShippingAreasId(parseInt(use.attributes.states.shippingAreasId, 10));
    use.attributes.actions.validationName(use.attributes.states.name);
    use.attributes.actions.validationDescription(use.attributes.states.description);
    use.attributes.actions.validationCost(parseFloat(use.attributes.states.cost));
    use.attributes.actions.validationStatus(use.attributes.states.status);
    use.attributes.actions.validationButtonNext();
  }, [use.attributes.states.shippingAreasId, use.attributes.states.name, use.attributes.states.description, use.attributes.states.cost, use.attributes.states.type, use.attributes.states.status, inputType, inputStatus]);
  _react["default"].useEffect(function () {
    use.attributes.actions.validationButtonNext();
  }, [use.attributes.states.shippingAreasIdValid, use.attributes.states.nameValid, use.attributes.states.descriptionValid, use.attributes.states.costValid, use.attributes.states.typeValid, use.attributes.states.statusValid, use.attributes.states.roles, use.attributes.states.workDaysHours, use.attributes.states.preparationTime, use.attributes.states.pickupTime, use.attributes.states.deliveryTime, use.attributes.states.typeStart, use.attributes.states.valueStart, use.attributes.states.conditional, use.attributes.states.typeConditional, use.attributes.states.valueConditional]);
  _react["default"].useEffect(function () {
    if (isUpdateForm && currentItem) {
      use.attributes.actions.changeShippingAreasId("".concat(currentItem.shippingAreasId));
      use.attributes.actions.changeName(currentItem.name);
      use.attributes.actions.changeDescription(currentItem.description);
      use.attributes.actions.changeCost("".concat(currentItem.cost));
      var type = use.attributes.states.typeOptions.find(function (item) {
        return item.value === currentItem.type;
      }) || {
        value: '',
        label: 'Elija tipo'
      };
      use.attributes.actions.changeType(type);
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
  }, [use.attributes.states.typeDefault, use.attributes.states.statusDefault]);
  var title1Text = isAddForm ? 'Nuevo metodo de envío' : 'Actualizar metodo de envío';
  var title2Text = isAddForm ? 'Agrega un nuevo metodo de envío' : "Actualiza la informaci\xF3n del metodo de env\xEDo #".concat(currentItem === null || currentItem === void 0 ? void 0 : currentItem.id);
  var optionsRoles = [];
  (_useRoles$states$role = useRoles.states.roles.data.items) === null || _useRoles$states$role === void 0 || _useRoles$states$role.map(function (item) {
    var option = {
      label: item.name,
      value: item.id.toString()
    };
    optionsRoles.push(option);
    return null;
  });
  var optionsWorkDays = [{
    label: 'Lunes',
    value: '1'
  }, {
    label: 'Martes',
    value: '2'
  }, {
    label: 'Miércoles',
    value: '3'
  }, {
    label: 'Jueves',
    value: '4'
  }, {
    label: 'Viernes',
    value: '5'
  }, {
    label: 'Sábado',
    value: '6'
  }, {
    label: 'Domingo',
    value: '7'
  }];
  var optionsTypeStart = [{
    label: 'Al instante',
    value: 'immediate'
  }, {
    label: 'Personalizado',
    value: 'custom'
  }];
  var getLabelByValue = function getLabelByValue(value) {
    var option = optionsRoles.find(function (option) {
      return option.value === value;
    });
    return option ? option.label : 'Etiqueta no encontrada';
  };
  var add = /*#__PURE__*/function () {
    var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
      var data;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            if (!use.attributes.actions.validationButtonNext()) {
              _context.next = 13;
              break;
            }
            _context.prev = 1;
            use.pages.actions.onFetching();
            _context.next = 5;
            return use.api.actions.add();
          case 5:
            data = _context.sent;
            if (data.success) {
              use.data.actions.handleNewItem(data.item);
              use.pages.actions.onInit();
            } else {
              use.error.actions.changeError([data.message]);
              use.pages.actions.onAdd();
            }
            _context.next = 13;
            break;
          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](1);
            use.error.actions.changeError(["".concat(_context.t0)]);
            use.pages.actions.onAdd();
          case 13:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[1, 9]]);
    }));
    return function add() {
      return _ref2.apply(this, arguments);
    };
  }();
  var update = /*#__PURE__*/function () {
    var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
      var data;
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            if (!use.attributes.actions.validationButtonNext()) {
              _context2.next = 13;
              break;
            }
            _context2.prev = 1;
            use.pages.actions.onFetching();
            _context2.next = 5;
            return use.api.actions.update();
          case 5:
            data = _context2.sent;
            if (data.success) {
              use.data.actions.handleUpdated(data.item);
              use.pages.actions.onInit();
            } else {
              use.error.actions.changeError([data.message]);
              use.pages.actions.onUpdate();
            }
            _context2.next = 13;
            break;
          case 9:
            _context2.prev = 9;
            _context2.t0 = _context2["catch"](1);
            use.error.actions.changeError(["".concat(_context2.t0)]);
            use.pages.actions.onUpdate();
          case 13:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[1, 9]]);
    }));
    return function update() {
      return _ref3.apply(this, arguments);
    };
  }();
  var buttonTitle = isAddForm ? 'Agregar' : 'Actualizar';
  var buttonAction = isAddForm ? add : update;
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
  var changeRoles = function changeRoles(options) {
    if (options) {
      use.attributes.actions.pushRole(options.value);
    }
  };
  var changeWorkDay = function changeWorkDay(options) {
    if (options) {
      setWorkDay(options.value);
    }
  };
  var changeTypeStart = function changeTypeStart(options) {
    if (options) {
      use.attributes.actions.setTypeStart(options.value);
    }
  };
  var handlePermissionChange = function handlePermissionChange(event) {
    use.attributes.actions.changeConditional(!use.attributes.states.conditional);
  };
  return /*#__PURE__*/_react["default"].createElement(_Form.ModelForm, (0, _extends2["default"])({
    boxProps: {
      styles: {
        width: '100%',
        height: 'auto',
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
      width: '100%',
      custom: "\n              align-items: center;\n            "
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
      },
      containerStyles: {
        custom: "\n                    display: flex;\n                    flex-direction: column;\n                  "
      }
    },
    inputId: _constants.SHIPPING_METHODS_ROUTE
  }))), /*#__PURE__*/_react["default"].createElement(_Containers.ContainerButton, (0, _extends2["default"])({
    styles: {
      width: '100%',
      custom: "\n              align-items: center;\n            "
    }
  }, infoContainerProps), /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Input.SelectRoles, {
    changeRoles: changeRoles,
    props: {
      title: 'Rol',
      options: optionsRoles,
      styles: {
        width: '90%'
      }
    }
  }), /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      width: '90%'
    }
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: (0, _css.cx)(regionsTitleStyles)
  }, "Roles"), /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _css.cx)(regionsContainerStyles)
  }, use.attributes.states.roles.map(function (item) {
    var label = getLabelByValue(item.toString());
    return /*#__PURE__*/_react["default"].createElement("div", {
      key: "container-states-countries-".concat(item),
      className: (0, _css.cx)(regionItemStyles)
    }, /*#__PURE__*/_react["default"].createElement("div", {
      key: "states-countries-".concat(item),
      className: (0, _css.cx)(regionContainerStyles)
    }, /*#__PURE__*/_react["default"].createElement("span", {
      key: "x-states-countries-".concat(item),
      className: (0, _css.cx)(closeButtonStyles),
      onClick: function onClick() {
        return use.attributes.actions.removeRole(item);
      }
    }, "x"), /*#__PURE__*/_react["default"].createElement("button", {
      key: "button-states-countries-".concat(item),
      className: (0, _css.cx)(regionButtonStyles)
    }, label)));
  })))))), /*#__PURE__*/_react["default"].createElement(_Containers.ContainerButton, (0, _extends2["default"])({
    styles: {
      width: '100%',
      custom: "\n              align-items: center;\n              margin: 10px 0px;\n            "
    }
  }, infoContainerProps), /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Input.SelectType, {
    changeType: changeWorkDay,
    props: {
      title: 'Día',
      options: optionsWorkDays,
      styles: {
        width: '90%'
      },
      containerStyles: {
        width: '70%'
      }
    }
  }), /*#__PURE__*/_react["default"].createElement(_Input.Input, {
    inputProps: {
      type: 'number',
      min: '1',
      max: '23',
      title: 'Hora de Apertura',
      onKeyUp: function onKeyUp(event) {
        return setWorkOpenHour(event.currentTarget.value);
      }
    },
    containerStyles: {
      width: '50%',
      margin: '0px 10px 0px 0px'
    }
  }), /*#__PURE__*/_react["default"].createElement(_Input.Input, {
    inputProps: {
      type: 'number',
      min: '1',
      max: '23',
      title: 'Hora de Cierre',
      onKeyUp: function onKeyUp(event) {
        return setWorkCloseHour(event.currentTarget.value);
      }
    },
    containerStyles: {
      width: '50%',
      margin: '0px 10px 0px 0px'
    }
  }), /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    title: "Agregar",
    Class: !buttonAddValid ? 'gs-disabled' : '',
    buttonProps: {
      onClick: addWorkDayHours
    },
    styles: {
      height: 'fit-content'
    }
  }))), /*#__PURE__*/_react["default"].createElement(_Containers.ContainerButton, (0, _extends2["default"])({
    styles: {
      width: '100%'
    }
  }, infoContainerProps), /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      width: '100%'
    }
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: (0, _css.cx)(regionsTitleStyles)
  }, "D\xEDas laborales"), /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _css.cx)(regionsContainerStyles)
  }, (0, _helpers.workDaysHoursToArray)(use.attributes.states.workDaysHours).map(function (item) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      key: "container-states-countries-".concat(item),
      className: (0, _css.cx)(regionItemStyles)
    }, /*#__PURE__*/_react["default"].createElement("div", {
      key: "states-countries-".concat(item),
      className: (0, _css.cx)(regionContainerStyles)
    }, /*#__PURE__*/_react["default"].createElement("span", {
      key: "x-states-countries-".concat(item),
      className: (0, _css.cx)(closeButtonStyles),
      onClick: function onClick() {
        return use.attributes.actions.removeWorkDayHour(item.day);
      }
    }, "x"), /*#__PURE__*/_react["default"].createElement("button", {
      key: "button-states-countries-".concat(item),
      className: (0, _css.cx)(regionButtonStyles)
    }, item.hoursString)));
  }))))), /*#__PURE__*/_react["default"].createElement(_Containers.ContainerButton, (0, _extends2["default"])({
    styles: {
      width: '100%'
    }
  }, infoContainerProps), /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Input.Input, {
    inputProps: {
      type: 'number',
      min: '1',
      title: 'Tiempo de preparación',
      onKeyUp: function onKeyUp(event) {
        return use.attributes.actions.setPreparationTime(event.currentTarget.value);
      }
    },
    containerStyles: {
      width: '30%',
      margin: '0px 10px 0px 0px'
    }
  }), /*#__PURE__*/_react["default"].createElement(_Input.Input, {
    inputProps: {
      type: 'number',
      min: '1',
      title: 'Tiempo de recogida',
      onKeyUp: function onKeyUp(event) {
        return use.attributes.actions.setPickupTime(event.currentTarget.value);
      }
    },
    containerStyles: {
      width: '30%',
      margin: '0px 10px 0px 0px'
    }
  }), /*#__PURE__*/_react["default"].createElement(_Input.Input, {
    inputProps: {
      type: 'number',
      min: '1',
      max: '23',
      title: 'Tiempo de entrega',
      onKeyUp: function onKeyUp(event) {
        return use.attributes.actions.setDeliveryTime(event.currentTarget.value);
      }
    },
    containerStyles: {
      width: '30%',
      margin: '0px 10px 0px 0px'
    }
  }))), /*#__PURE__*/_react["default"].createElement(_Containers.ContainerButton, (0, _extends2["default"])({
    styles: {
      width: '100%',
      custom: "\n              align-items: center;\n              margin: 10px 0px;\n            "
    }
  }, infoContainerProps), /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Input.SelectType, {
    changeType: changeTypeStart,
    props: {
      title: 'Tipo de inicio',
      options: optionsTypeStart,
      styles: {
        width: '90%'
      },
      containerStyles: {
        width: '70%'
      }
    }
  }), /*#__PURE__*/_react["default"].createElement(_Input.Input, {
    inputProps: {
      type: 'text',
      title: 'Valor de inicio',
      onKeyUp: function onKeyUp(event) {
        return use.attributes.actions.setValueStart(event.currentTarget.value);
      }
    },
    containerStyles: {
      width: '90%',
      margin: '0px 10px 0px 0px'
    }
  }))), /*#__PURE__*/_react["default"].createElement(_Containers.ContainerButton, {
    styles: {
      width: '96.5%'
    }
  }, /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _css.css)(mainContainerStyle)
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _css.css)(titleContainerStyle)
  }, '¿Tiene otra condicional?'), /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _css.css)(infoContainerStyle)
  }, /*#__PURE__*/_react["default"].createElement("label", {
    className: (0, _css.css)(checkBoxContainerStyle)
  }, /*#__PURE__*/_react["default"].createElement("input", {
    type: "checkbox",
    onChange: handlePermissionChange,
    checked: use.attributes.states.conditional,
    className: (0, _css.css)(checkBoxStyle)
  }), /*#__PURE__*/_react["default"].createElement("span", {
    className: (0, _css.css)(nameStyle)
  }, 'Si')))))), use.attributes.states.conditional && /*#__PURE__*/_react["default"].createElement(_Containers.ContainerButton, (0, _extends2["default"])({
    styles: {
      width: '100%',
      custom: "\n              align-items: center;\n              margin: 10px 0px;\n            "
    }
  }, infoContainerProps), /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Input.SelectType, {
    changeType: use.attributes.actions.changeTypeConditional,
    props: {
      title: 'Tipo de condicional',
      options: use.attributes.states.typeConditionalOptions,
      styles: {
        width: '90%'
      }
    }
  }), use.attributes.states.typeConditional !== undefined && /*#__PURE__*/_react["default"].createElement(_Input.Input, {
    inputProps: {
      type: 'text',
      title: 'Valor de la condicional',
      onKeyUp: function onKeyUp(event) {
        return use.attributes.actions.changeValueConditional(event.currentTarget.value);
      }
    },
    containerStyles: {
      width: '90%',
      margin: '0px 10px 0px 0px'
    }
  })))));
};