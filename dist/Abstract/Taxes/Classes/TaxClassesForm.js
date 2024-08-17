"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TaxClassesForm = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _react = _interopRequireDefault(require("react"));
var _css = require("@emotion/css");
var _Containers = require("../../Containers");
var _Form = require("../../Form");
var _Input = require("../../Input");
var _Button = require("../../Button");
var _constants = require("../../../constants");
var _List = require("../../List");
var _Modal = require("../../Modal");
var _Components = require("../../../Components");
var _templateObject;
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var containerButtonsStyles = (0, _css.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  justify-content: center;\n"])));
var TaxClassesForm = exports.TaxClassesForm = function TaxClassesForm(_ref) {
  var _taxRatesPaginated$ma;
  var use = _ref.use,
    formType = _ref.formType,
    modelFormProps = _ref.modelFormProps,
    infoContainerProps = _ref.infoContainerProps,
    nameInputProps = _ref.nameInputProps;
  var isAddForm = formType === 'add';
  var isUpdateForm = formType === 'update';
  var currentItem = isUpdateForm ? use.data.actions.getById(use.attributes.states.currentId) : null;
  _react["default"].useEffect(function () {
    use.attributes.actions.validationName(use.attributes.states.name);
    use.attributes.actions.validationDescription(use.attributes.states.description);
    use.attributes.actions.validationButtonNext();
  }, [use.attributes.states.name, use.attributes.states.description]);
  _react["default"].useEffect(function () {
    use.attributes.actions.validationButtonNext();
  }, [use.attributes.states.nameValid, use.attributes.states.descriptionValid]);
  _react["default"].useEffect(function () {
    if (currentItem) {
      use.attributes.actions.changeName(currentItem.name);
      if (currentItem.description) use.attributes.actions.changeDescription(currentItem.description);
    }
  }, []);
  var title1Text = isAddForm ? 'Nueva Clase' : 'Actualizar Clase';
  var title2Text = isAddForm ? 'Agrega una nueva calse de impuesto' : "Actualiza la informaci\xF3n de la clase de impuesto #".concat(currentItem === null || currentItem === void 0 ? void 0 : currentItem.id);
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
  var goToTaxRates = function goToTaxRates() {
    if (currentItem !== null && currentItem !== void 0 && currentItem.id) {
      use.useTaxRates.pages.actions.onAdd();
      use.useTaxRates.attributes.actions.changeTaxClasses("".concat(currentItem === null || currentItem === void 0 ? void 0 : currentItem.id));
      use.pages.actions.openModalPage();
    }
  };

  //Items for the list
  var goToTaxRatesUpdate = function goToTaxRatesUpdate(id) {
    use.useTaxRates.pages.actions.goUpdate(id);
    use.pages.actions.openModalPage();
  };
  var ButtonActionsTaxRates = function ButtonActionsTaxRates(_ref2) {
    var id = _ref2.id;
    return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
      className: (0, _css.css)(containerButtonsStyles)
    }, /*#__PURE__*/_react["default"].createElement(_Button.ButtonOptionsContainer, {
      props: {
        title: 'Actualizar',
        buttonProps: {
          onClick: function onClick() {
            return goToTaxRatesUpdate(id);
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
            return use.useTaxRates.api.actions.erase(id);
          }
        },
        styles: {
          fontSize: '10px',
          backgroundColor: '#c12429'
        }
      }
    })));
  };
  var taxRates = currentItem !== null && currentItem !== void 0 && currentItem.id ? use.useTaxRates.data.actions.filterByTaxClassesId(currentItem === null || currentItem === void 0 ? void 0 : currentItem.id) : [];
  taxRates.sort(function (a, b) {
    if (a.id && b.id) {
      return a.id - b.id;
    } else {
      return 0;
    }
  });
  var taxRatesPaginated = use.useTaxRates.paginations.actions.getPaginated(taxRates, use.useTaxRates.paginations.states.currentPage, use.useTaxRates.paginations.states.itemsPerPage);

  //id

  var taxRatesItems = (_taxRatesPaginated$ma = taxRatesPaginated === null || taxRatesPaginated === void 0 ? void 0 : taxRatesPaginated.map(function (item) {
    var country = _constants.Countries[0][item === null || item === void 0 ? void 0 : item.country] || '';
    var rate = "".concat(item.rate, " %");
    return [country, rate, /*#__PURE__*/_react["default"].createElement(ButtonActionsTaxRates, {
      id: item.id
    })];
  })) !== null && _taxRatesPaginated$ma !== void 0 ? _taxRatesPaginated$ma : [];
  var headers = ['País', 'Porcentaje', 'Acción'];
  var totalPages = Math.ceil(taxRates.length / use.useTaxRates.paginations.states.itemsPerPage);
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
        defaultValue: use.attributes.states.name,
        title: 'Nombre'
      },
      styles: {
        width: '100%'
      }
    }, nameInputProps)
  }))), /*#__PURE__*/_react["default"].createElement(_Containers.ContainerButton, (0, _extends2["default"])({
    styles: {
      width: '96.5%'
    }
  }, infoContainerProps), /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Input.InputDescription, {
    changeDescription: use.attributes.actions.changeDescription,
    props: {
      inputProps: {
        defaultValue: use.attributes.states.description,
        title: 'Descripción'
      },
      styles: {
        width: '100%'
      }
    }
  }))), isUpdateForm && taxRates.length > 0 ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_List.ListContainer, {
    propsList: {
      title: 'Tasas',
      items: taxRatesItems,
      headers: headers,
      columns: 3,
      propsPagination: {
        currentPage: use.useTaxRates.paginations.states.currentPage,
        setCurrentPage: use.useTaxRates.paginations.actions.setCurrentPage,
        totalPages: totalPages
      },
      actionButton: {
        title: 'Agregar',
        buttonProps: {
          onClick: function onClick() {
            return goToTaxRates();
          }
        }
      }
    }
  })) : isUpdateForm && taxRates.length === 0 && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Containers.ContainerButton, (0, _extends2["default"])({
    styles: {
      width: '96.5%'
    }
  }, infoContainerProps), /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    title: "Agregar tasa de impuestos",
    buttonProps: {
      onClick: function onClick() {
        return goToTaxRates();
      }
    }
  }))), /*#__PURE__*/_react["default"].createElement(_Modal.Modal, {
    open: use.pages.states.modalPage
  }, /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Components.TaxRates, {
    use: use.useTaxRates
  })))));
};