"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ShippingAreasForm = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _react = _interopRequireWildcard(require("react"));
var _css = require("@emotion/css");
var _Containers = require("../../Containers");
var _Form = require("../../Form");
var _Input = require("../../Input");
var _Button = require("../../Button");
var _List = require("../../List");
var _Modal = require("../../Modal");
var _Components = require("../../../Components");
var _Map = require("../../Map");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var regionsContainerStyles = (0, _css.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  margin: 20px 10px;\n  padding: 15px 0px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  width: 91%;\n"])));
var containerButtonsStyles = (0, _css.css)(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  justify-content: center;\n"])));
var regionItemStyles = (0, _css.css)(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n  position: relative;\n  display: flex;\n  align-items: center;\n  margin-bottom: 8px;\n"])));
var regionContainerStyles = (0, _css.css)(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2["default"])(["\n  position: relative;\n  display: flex;\n  align-items: center;\n  margin-right: 5px;\n  margin-bottom: 5px;\n"])));
var regionButtonStyles = (0, _css.css)(_templateObject5 || (_templateObject5 = (0, _taggedTemplateLiteral2["default"])(["\n  margin-right: 8px;\n  padding: 8px;\n  color: #8d8d8d;\n  border-radius: 4px;\n  border: 1px solid #dfdbdb;\n"])));
var closeButtonStyles = (0, _css.css)(_templateObject6 || (_templateObject6 = (0, _taggedTemplateLiteral2["default"])(["\n  position: absolute;\n  top: 0px;\n  transform: translateY(-50%);\n  right: 0px;\n  cursor: pointer;\n  color: #fff;\n  background-color: #f44336;\n  border-radius: 100%;\n  padding: 2px 5px 4px 5px;\n  font-size: 8px;\n"])));
var ShippingAreasForm = exports.ShippingAreasForm = function ShippingAreasForm(_ref) {
  var _shippingMethodsPagin;
  var use = _ref.use,
    formType = _ref.formType,
    modelFormProps = _ref.modelFormProps,
    infoContainerProps = _ref.infoContainerProps,
    nameInputProps = _ref.nameInputProps;
  var _useState = (0, _react.useState)(''),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    type = _useState2[0],
    SetType = _useState2[1];
  var optionsType = [{
    label: 'Código Potal',
    value: 'postalCodes'
  }, {
    label: 'Ciudades',
    value: 'cities'
  }, {
    label: 'Estados',
    value: 'statesCountries'
  }, {
    label: 'Paises',
    value: 'countries'
  }];
  var changeType = function changeType(e) {
    if (e) {
      SetType(e.value);
    }
  };
  var isAddForm = formType === 'add';
  var isUpdateForm = formType === 'update';
  var currentItem = isUpdateForm ? use.data.actions.getById(use.attributes.states.currentId) : null;
  _react["default"].useEffect(function () {
    use.attributes.actions.validationName(use.attributes.states.name);
    use.attributes.actions.validationButtonNext();
  }, [use.attributes.states.name]);
  _react["default"].useEffect(function () {
    use.attributes.actions.validationButtonNext();
  }, [use.attributes.states.nameValid]);
  _react["default"].useEffect(function () {
    if (currentItem) {
      use.attributes.actions.changeName(currentItem.name);
    }
  }, []);
  var title1Text = isAddForm ? 'Nueva Zona' : 'Actualizar Zona';
  var title2Text = isAddForm ? 'Agrega una nueva Zona de Envío' : "Actualiza la informaci\xF3n de la zona #".concat(currentItem === null || currentItem === void 0 ? void 0 : currentItem.id);
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
  var goToShippingMethods = function goToShippingMethods() {
    if (currentItem !== null && currentItem !== void 0 && currentItem.id) {
      use.useShippingMethoods.pages.actions.onAdd();
      use.useShippingMethoods.attributes.actions.changeShippingAreasId("".concat(currentItem === null || currentItem === void 0 ? void 0 : currentItem.id));
      use.pages.actions.openModalPage();
    }
  };

  //Items for the list
  var goToShippingMethodsUpdate = function goToShippingMethodsUpdate(id) {
    use.useShippingMethoods.pages.actions.goUpdate(id);
    use.pages.actions.openModalPage();
  };
  var ButtonActionsShippingMethods = function ButtonActionsShippingMethods(_ref2) {
    var id = _ref2.id;
    return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
      className: (0, _css.css)(containerButtonsStyles)
    }, /*#__PURE__*/_react["default"].createElement(_Button.ButtonOptionsContainer, {
      props: {
        title: 'Actualizar',
        buttonProps: {
          onClick: function onClick() {
            return goToShippingMethodsUpdate(id);
          }
        },
        styles: {
          fontSize: '10px',
          margin: '0px 5px 0px 0px'
        }
      }
    }), /*#__PURE__*/_react["default"].createElement(_Button.ButtonOptionsContainer, {
      props: {
        title: 'Borrar',
        buttonProps: {
          onClick: function onClick() {
            return use.useShippingMethoods.api.actions.erase(id);
          }
        },
        styles: {
          fontSize: '10px',
          backgroundColor: '#c12429'
        }
      }
    })));
  };
  var shippingMethods = currentItem !== null && currentItem !== void 0 && currentItem.id ? use.useShippingMethoods.data.actions.filterByShippingAreasId(currentItem === null || currentItem === void 0 ? void 0 : currentItem.id) : [];
  shippingMethods.sort(function (a, b) {
    if (a.id && b.id) {
      return a.id - b.id;
    } else {
      return 0;
    }
  });
  var shippingMethodsPaginated = use.useShippingMethoods.paginations.actions.getPaginated(shippingMethods, use.useShippingMethoods.paginations.states.currentPage, use.useShippingMethoods.paginations.states.itemsPerPage);

  //id

  var shippingMethodsItems = (_shippingMethodsPagin = shippingMethodsPaginated === null || shippingMethodsPaginated === void 0 ? void 0 : shippingMethodsPaginated.map(function (item) {
    return [item.name, item.type, item.status, /*#__PURE__*/_react["default"].createElement(ButtonActionsShippingMethods, {
      id: item.id
    })];
  })) !== null && _shippingMethodsPagin !== void 0 ? _shippingMethodsPagin : [];
  var headers = ['Name', 'Tipo', 'Estatus', 'Acción'];
  var totalPages = Math.ceil(shippingMethods.length / use.useShippingMethoods.paginations.states.itemsPerPage);
  var changePlace = function changePlace(value) {
    if (value && type !== '') {
      if (type === 'postalCodes') {
        use.attributes.actions.changePostalCode(value.postalCode || '', value.city || '', value.state || '', value.country || '');
      } else if (type === 'cities') {
        use.attributes.actions.changeCities(value.city || '', value.state || '', value.country || '');
      } else if (type === 'statesCountries') {
        use.attributes.actions.changeStateCountry(value.state || '', value.country || '');
      } else if (type === 'countries') {
        use.attributes.actions.changeCountry(value.country || '');
      }
    }
  };
  return /*#__PURE__*/_react["default"].createElement(_Form.ModelForm, (0, _extends2["default"])({
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
  }, modelFormProps), /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Containers.ContainerButton, (0, _extends2["default"])({
    styles: {
      width: '96.5%'
    }
  }, infoContainerProps), /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Input.InputName, {
    changeName: use.attributes.actions.changeName,
    props: _objectSpread({
      inputProps: {
        defaultValue: use.attributes.states.name
      },
      styles: {
        width: '100%'
      }
    }, nameInputProps)
  }))), /*#__PURE__*/_react["default"].createElement(_Containers.ContainerButton, (0, _extends2["default"])({
    styles: {
      width: '96.5%'
    }
  }, infoContainerProps), /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Input.GsSelect, {
    options: optionsType,
    onChange: function onChange(e) {
      return changeType(e);
    },
    placeholder: "Selecciona el tipo de Zona",
    title: "Tipo de Zona"
  }))), type !== '' && /*#__PURE__*/_react["default"].createElement(_Map.MapComponent, {
    setPlace: changePlace
  }), /*#__PURE__*/_react["default"].createElement(_Containers.ContainerButton, (0, _extends2["default"])({
    styles: {
      width: '96.5%'
    }
  }, infoContainerProps), /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _css.cx)(regionsContainerStyles)
  }, /*#__PURE__*/_react["default"].createElement("span", null, "C\xF3digos postales"), use.attributes.states.postalCodes.map(function (item) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      key: "container-postal-code-".concat(item),
      className: (0, _css.cx)(regionItemStyles)
    }, /*#__PURE__*/_react["default"].createElement("div", {
      key: "postal-code-".concat(item),
      className: (0, _css.cx)(regionContainerStyles)
    }, /*#__PURE__*/_react["default"].createElement("span", {
      key: "x-".concat(item),
      className: (0, _css.cx)(closeButtonStyles),
      onClick: function onClick() {
        return use.attributes.actions.removePostalCode(item);
      }
    }, "x"), /*#__PURE__*/_react["default"].createElement("button", {
      key: "button-".concat(item),
      className: (0, _css.cx)(regionButtonStyles)
    }, item)));
  }))), /*#__PURE__*/_react["default"].createElement(_Containers.ContainerButton, (0, _extends2["default"])({
    styles: {
      width: '96.5%'
    }
  }, infoContainerProps), /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _css.cx)(regionsContainerStyles)
  }, /*#__PURE__*/_react["default"].createElement("span", null, "Ciudades"), use.attributes.states.cities.map(function (item) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      key: "container-cities-".concat(item),
      className: (0, _css.cx)(regionItemStyles)
    }, /*#__PURE__*/_react["default"].createElement("div", {
      key: "cities-".concat(item),
      className: (0, _css.cx)(regionContainerStyles)
    }, /*#__PURE__*/_react["default"].createElement("span", {
      key: "x-cities-".concat(item),
      className: (0, _css.cx)(closeButtonStyles),
      onClick: function onClick() {
        return use.attributes.actions.removeCities(item);
      }
    }, "x"), /*#__PURE__*/_react["default"].createElement("button", {
      key: "button-cities-".concat(item),
      className: (0, _css.cx)(regionButtonStyles)
    }, item)));
  }))), /*#__PURE__*/_react["default"].createElement(_Containers.ContainerButton, (0, _extends2["default"])({
    styles: {
      width: '96.5%'
    }
  }, infoContainerProps), /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _css.cx)(regionsContainerStyles)
  }, /*#__PURE__*/_react["default"].createElement("span", null, "Estados"), use.attributes.states.statesCountries.map(function (item) {
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
        return use.attributes.actions.removeStatesCountries(item);
      }
    }, "x"), /*#__PURE__*/_react["default"].createElement("button", {
      key: "button-states-countries-".concat(item),
      className: (0, _css.cx)(regionButtonStyles)
    }, item)));
  }))), /*#__PURE__*/_react["default"].createElement(_Containers.ContainerButton, (0, _extends2["default"])({
    styles: {
      width: '96.5%'
    }
  }, infoContainerProps), /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _css.cx)(regionsContainerStyles)
  }, /*#__PURE__*/_react["default"].createElement("span", null, "Paises"), use.attributes.states.countries.map(function (item) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      key: "container-countries-".concat(item),
      className: (0, _css.cx)(regionItemStyles)
    }, /*#__PURE__*/_react["default"].createElement("div", {
      key: "countries-".concat(item),
      className: (0, _css.cx)(regionContainerStyles)
    }, /*#__PURE__*/_react["default"].createElement("span", {
      key: "x-countries-".concat(item),
      className: (0, _css.cx)(closeButtonStyles),
      onClick: function onClick() {
        return use.attributes.actions.removeCountries(item);
      }
    }, "x"), /*#__PURE__*/_react["default"].createElement("button", {
      key: "button-countries-".concat(item),
      className: (0, _css.cx)(regionButtonStyles)
    }, item)));
  }))), isUpdateForm && shippingMethods.length > 0 ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_List.ListContainer, {
    propsList: {
      title: 'Métodos de Envío',
      items: shippingMethodsItems,
      headers: headers,
      columns: 4,
      propsPagination: {
        currentPage: use.useShippingMethoods.paginations.states.currentPage,
        setCurrentPage: use.useShippingMethoods.paginations.actions.setCurrentPage,
        totalPages: totalPages
      },
      actionButton: {
        title: 'Agregar',
        buttonProps: {
          onClick: function onClick() {
            return goToShippingMethods();
          }
        }
      }
    }
  })) : isUpdateForm && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Containers.ContainerButton, (0, _extends2["default"])({
    styles: {
      width: '96.5%'
    }
  }, infoContainerProps), /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    title: "Agregar Metodos de Env\xEDo",
    buttonProps: {
      onClick: function onClick() {
        return goToShippingMethods();
      }
    }
  }))), /*#__PURE__*/_react["default"].createElement(_Modal.Modal, {
    open: use.pages.states.modalPage
  }, /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Components.ShippingMethods, {
    use: use.useShippingMethoods
  })))));
};