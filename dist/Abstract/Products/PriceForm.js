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
      if (current.price1) {
        use.attributes.actions.changePrice1("".concat(current.price1));
      }
      if (current.price2) {
        use.attributes.actions.changePrice1("".concat(current.price2));
      }
      if (current.price3) {
        use.attributes.actions.changePrice1("".concat(current.price3));
      }
      if (current.price4) {
        use.attributes.actions.changePrice1("".concat(current.price4));
      }
      if (current.price5) {
        use.attributes.actions.changePrice1("".concat(current.price5));
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
  }, /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Input.Input, {
    styles: {
      width: '100%'
    },
    inputProps: {
      placeholder: 'Precio 1',
      type: 'number',
      min: '0',
      step: '0.1',
      title: 'Precio 1',
      onChange: function onChange(event) {
        return use.attributes.actions.changePrice1(event.currentTarget.value);
      },
      defaultValue: use.attributes.states.price1
    }
  }))), /*#__PURE__*/_react["default"].createElement(_Containers.ContainerButton, {
    styles: {
      width: '40%',
      justifyContent: 'end'
    }
  }, /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Input.Input, {
    styles: {
      width: '100%'
    },
    inputProps: {
      placeholder: 'Precio 2',
      type: 'number',
      min: '0',
      step: '0.1',
      title: 'Precio 2',
      onChange: function onChange(event) {
        return use.attributes.actions.changePrice2(event.currentTarget.value);
      },
      defaultValue: use.attributes.states.price2
    }
  }))), /*#__PURE__*/_react["default"].createElement(_Containers.ContainerButton, {
    styles: {
      width: '40%',
      justifyContent: 'end'
    }
  }, /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Input.Input, {
    styles: {
      width: '100%'
    },
    inputProps: {
      placeholder: 'Precio 3',
      type: 'number',
      min: '0',
      step: '0.1',
      title: 'Precio 3',
      onChange: function onChange(event) {
        return use.attributes.actions.changePrice3(event.currentTarget.value);
      },
      defaultValue: use.attributes.states.price3
    }
  }))), /*#__PURE__*/_react["default"].createElement(_Containers.ContainerButton, {
    styles: {
      width: '40%',
      justifyContent: 'end'
    }
  }, /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Input.Input, {
    styles: {
      width: '100%'
    },
    inputProps: {
      placeholder: 'Precio 4',
      type: 'number',
      min: '0',
      step: '0.1',
      title: 'Precio 4',
      onChange: function onChange(event) {
        return use.attributes.actions.changePrice4(event.currentTarget.value);
      },
      defaultValue: use.attributes.states.price4
    }
  }))), /*#__PURE__*/_react["default"].createElement(_Containers.ContainerButton, {
    styles: {
      width: '40%',
      justifyContent: 'end'
    }
  }, /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Input.Input, {
    styles: {
      width: '100%'
    },
    inputProps: {
      placeholder: 'Precio 5',
      type: 'number',
      min: '0',
      step: '0.1',
      title: 'Precio 5',
      onChange: function onChange(event) {
        return use.attributes.actions.changePrice5(event.currentTarget.value);
      },
      defaultValue: use.attributes.states.price5
    }
  })))));
};