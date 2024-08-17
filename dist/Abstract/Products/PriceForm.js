"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PriceForm = void 0;
var _react = _interopRequireDefault(require("react"));
var _Containers = require("../Containers");
var _Form = require("../Form");
var _Input = require("../Input");
var PriceForm = exports.PriceForm = function PriceForm(_ref) {
  var use = _ref.use,
    formType = _ref.formType;
  var isAddForm = formType === 'add';
  var isUpdateForm = formType === 'update';
  var current = isUpdateForm ? use.data.actions.getById(use.attributes.states.currentId) : null;
  _react["default"].useEffect(function () {
    use.attributes.actions.validationSalesPrice(parseFloat(use.attributes.states.salesPrice));
  }, [use.attributes.states.salesPrice]);
  _react["default"].useEffect(function () {
    use.attributes.actions.validationButtonNext();
  }, [use.attributes.states.salesPriceValid]);
  _react["default"].useEffect(function () {
    if (current) {
      if (current.salesPrice) {
        use.attributes.actions.changeSalesPrice("".concat(current.salesPrice));
      }
      if (current.offerPrice) {
        use.attributes.actions.changeOfferPrice("".concat(current.offerPrice));
      }
      if (current.cost) {
        use.attributes.actions.changeCost("".concat(current.cost));
      }
    }
  }, [current]);
  var title1Text = isAddForm ? 'Precios' : 'Actualización de Precios';
  var title2Text = isAddForm ? '' : '';
  var buttonTitle = 'Siguiente';
  var buttonAction = use.subPages.actions.onCatalog;
  var handleActions = function handleActions(action, value) {
    switch (action) {
      case 'submit':
        buttonAction();
        break;
      case 'return':
        use.subPages.actions.onGeneral();
        break;
      default:
        console.log('Acción desconocida:', action);
    }
  };
  return /*#__PURE__*/_react["default"].createElement(_Form.ModelForm, {
    boxProps: {
      styles: {
        width: '90%',
        padding: '0',
        margin: '0'
      }
    },
    childrenContainerProps: {
      styles: {
        width: '100%'
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
    error: use.error.states.error
  }, /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Containers.ContainerButton, {
    styles: {
      width: '40%',
      justifyContent: 'end'
    }
  }, /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Input.InputSalesPrice, {
    change: use.attributes.actions.changeSalesPrice,
    props: {
      styles: {
        width: '100%'
      },
      inputProps: {
        defaultValue: use.attributes.states.salesPrice
      }
    }
  }))), /*#__PURE__*/_react["default"].createElement(_Containers.ContainerButton, {
    styles: {
      width: '40%',
      justifyContent: 'end'
    }
  }, /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Input.InputOfferPrice, {
    change: use.attributes.actions.changeOfferPrice,
    props: {
      styles: {
        width: '100%'
      },
      inputProps: {
        defaultValue: use.attributes.states.offerPrice
      }
    }
  }))), /*#__PURE__*/_react["default"].createElement(_Containers.ContainerButton, {
    styles: {
      width: '40%',
      justifyContent: 'end'
    }
  }, /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Input.InputCost, {
    changeCost: use.attributes.actions.changeCost,
    props: {
      styles: {
        width: '100%'
      },
      inputProps: {
        defaultValue: use.attributes.states.cost
      }
    }
  })))));
};