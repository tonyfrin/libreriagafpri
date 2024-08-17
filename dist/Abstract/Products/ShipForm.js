"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ShipForm = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _react = _interopRequireDefault(require("react"));
var _css = require("@emotion/css");
var _Form = require("../Form");
var _Containers = require("../Containers");
var _Input = require("../Input");
var _templateObject, _templateObject2, _templateObject3, _templateObject4;
var defaultFormContainerStyle = (0, _css.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  justify-content: space-between;\n  margin-top: 10px;\n  padding-left: 24px;\n"])));
var defaultImageContainerStyle = (0, _css.css)(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  width: 50%;\n"])));
var defaultTitleContainerStyle = (0, _css.css)(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n  width: 50%;\n"])));
var defaultFormContainerUndsStyle = (0, _css.css)(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  justify-content: space-between;\n  margin-top: 10px;\n  padding-left: 32px;\n  width: 92%;\n"])));
var ShipForm = exports.ShipForm = function ShipForm(_ref) {
  var use = _ref.use,
    formType = _ref.formType;
  var isAddForm = formType === 'add';
  var isUpdateForm = formType === 'update';
  var current = isUpdateForm ? use.data.actions.getById(use.attributes.states.currentId) : null;
  _react["default"].useEffect(function () {
    if (current) {
      if (current.packageType) {
        var options = use.attributes.actions.getPackageTypeOptionByValue(current.packageType);
        if (options) use.attributes.actions.changePackageType(options);
      }
      if (current.qtyPack) use.attributes.actions.changeQtyPack("".concat(current.qtyPack));
      if (current.undCbm) use.attributes.actions.changeUndCbm("".concat(current.undCbm));
      if (current.weight) use.attributes.actions.changeWeight("".concat(current.weight));
      if (current.height) use.attributes.actions.changeHeight("".concat(current.height));
      if (current.width) use.attributes.actions.changeWidth("".concat(current.width));
      if (current.length) use.attributes.actions.changeLength("".concat(current.length));
    }
  }, [current]);
  var title1Text = isAddForm ? 'Envío' : 'Actualización de Envío';
  var title2Text = isAddForm ? '' : '';
  var buttonTitle = 'Siguiente';
  var buttonAction = use.subPages.actions.onAttributes;
  var handleActions = function handleActions(action, value) {
    switch (action) {
      case 'submit':
        buttonAction();
        break;
      case 'return':
        use.subPages.actions.onInventory();
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
  }, /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _css.css)(defaultFormContainerStyle)
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _css.css)(defaultImageContainerStyle)
  }, /*#__PURE__*/_react["default"].createElement(_Containers.ContainerButton, {
    styles: {
      width: '100%'
    }
  }, /*#__PURE__*/_react["default"].createElement(_Input.SelectPackageType, {
    change: use.attributes.actions.changePackageType,
    props: {
      options: use.attributes.states.packageTypeOptions,
      defaultValue: use.attributes.states.packageTypeDefault,
      title: 'Tipo de paquete',
      styles: {
        width: '90%'
      }
    }
  }))), /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _css.css)(defaultTitleContainerStyle)
  }, /*#__PURE__*/_react["default"].createElement(_Input.InputQtyPack, {
    change: use.attributes.actions.changeQtyPack,
    props: {
      styles: {
        width: '90%'
      },
      inputProps: {
        defaultValue: use.attributes.states.qtyPack
      }
    }
  }))), /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _css.css)(defaultFormContainerStyle)
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _css.css)(defaultImageContainerStyle)
  }, /*#__PURE__*/_react["default"].createElement(_Containers.ContainerButton, {
    styles: {
      width: '100%'
    }
  }, /*#__PURE__*/_react["default"].createElement(_Input.InputUndCbm, {
    change: use.attributes.actions.changeUndCbm,
    props: {
      styles: {
        width: '90%'
      },
      containerStyles: {
        custom: "\n                      display: flex;\n                      flex-direction: column;\n                  "
      },
      inputProps: {
        defaultValue: use.attributes.states.undCbm
      }
    }
  }))), /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _css.css)(defaultTitleContainerStyle)
  }, /*#__PURE__*/_react["default"].createElement(_Input.InputWeight, {
    change: use.attributes.actions.changeWeight,
    props: {
      styles: {
        width: '90%'
      },
      containerStyles: {
        custom: "\n                    display: flex;\n                    flex-direction: column;\n                "
      },
      inputProps: {
        defaultValue: use.attributes.states.weight
      }
    }
  }))), /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _css.css)(defaultFormContainerUndsStyle)
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _css.css)(defaultImageContainerStyle)
  }, /*#__PURE__*/_react["default"].createElement(_Containers.ContainerButton, {
    styles: {
      width: '100%'
    }
  }, /*#__PURE__*/_react["default"].createElement(_Input.InputHeight, {
    change: use.attributes.actions.changeHeight,
    props: {
      styles: {
        width: '90%'
      },
      containerStyles: {
        custom: "\n                      display: flex;\n                      flex-direction: column;\n                  "
      },
      inputProps: {
        defaultValue: use.attributes.states.height
      }
    }
  }))), /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _css.css)(defaultTitleContainerStyle)
  }, /*#__PURE__*/_react["default"].createElement(_Containers.ContainerButton, {
    styles: {
      width: '100%'
    }
  }, /*#__PURE__*/_react["default"].createElement(_Input.InputWidth, {
    change: use.attributes.actions.changeWidth,
    props: {
      styles: {
        width: '90%'
      },
      containerStyles: {
        custom: "\n                      display: flex;\n                      flex-direction: column;\n                  "
      },
      inputProps: {
        defaultValue: use.attributes.states.width
      }
    }
  }))), /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _css.css)(defaultTitleContainerStyle)
  }, /*#__PURE__*/_react["default"].createElement(_Containers.ContainerButton, {
    styles: {
      width: '100%'
    }
  }, /*#__PURE__*/_react["default"].createElement(_Input.InputLength, {
    change: use.attributes.actions.changeLength,
    props: {
      styles: {
        width: '90%'
      },
      containerStyles: {
        custom: "\n                      display: flex;\n                      flex-direction: column;\n                  "
      },
      inputProps: {
        defaultValue: use.attributes.states.length
      }
    }
  }))))));
};