"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InventoryForm = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _react = _interopRequireDefault(require("react"));
var _Containers = require("../Containers");
var _Form = require("../Form");
var _css = require("@emotion/css");
var _Input = require("../Input");
var _templateObject, _templateObject2, _templateObject3;
var defaultFormContainerStyle = (0, _css.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  justify-content: space-between;\n  margin-top: 10px;\n  padding-left: 24px;\n"])));
var defaultImageContainerStyle = (0, _css.css)(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  width: 50%;\n"])));
var defaultTitleContainerStyle = (0, _css.css)(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n  width: 50%;\n"])));
var InventoryForm = exports.InventoryForm = function InventoryForm(_ref) {
  var use = _ref.use,
    formType = _ref.formType;
  var _React$useState = _react["default"].useState( /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null)),
    _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
    InputType = _React$useState2[0],
    setInputType = _React$useState2[1];
  var isAddForm = formType === 'add';
  var isUpdateForm = formType === 'update';
  var current = isUpdateForm ? use.data.actions.getById(use.attributes.states.currentId) : null;
  _react["default"].useEffect(function () {
    use.attributes.actions.validationSku(use.attributes.states.sku);
    use.attributes.actions.validationType(use.attributes.states.type);
  }, [use.attributes.states.sku, use.attributes.states.type, InputType]);
  _react["default"].useEffect(function () {
    use.attributes.actions.validationButtonNext();
  }, [use.attributes.states.skuValid, use.attributes.states.typeValid]);
  _react["default"].useEffect(function () {
    if (current) {
      if (current.sku) {
        use.attributes.actions.changeSku(current.sku);
      }
      if (current.type) {
        var type = use.attributes.actions.getTypeOptionByValue(current.type);
        if (type) use.attributes.actions.changeType(type);
      }
    }
  }, [current]);
  _react["default"].useEffect(function () {
    if (isAddForm) {
      setInputType(function () {
        return /*#__PURE__*/_react["default"].createElement(_Input.SelectType, {
          changeType: function changeType(e) {
            return use.attributes.actions.changeType(e);
          },
          props: {
            options: use.attributes.states.typeOptions,
            defaultValue: use.attributes.states.typeDefault,
            styles: {
              width: '90%'
            },
            title: 'Tipo'
          }
        });
      });
    }
  }, []);
  _react["default"].useEffect(function () {
    if (isUpdateForm && current) {
      setInputType(function () {
        return /*#__PURE__*/_react["default"].createElement(_Input.SelectType, {
          changeType: function changeType(e) {
            return use.attributes.actions.changeType(e);
          },
          props: {
            options: use.attributes.states.typeOptions,
            defaultValue: use.attributes.states.typeDefault,
            styles: {
              width: '90%'
            },
            title: 'Tipo',
            containerStyles: {
              custom: "\n                    display: flex;\n                    flex-direction: column;\n                "
            }
          }
        });
      });
    }
  }, [current]);
  var title1Text = isAddForm ? 'Inventario' : 'Actualización de Inventario';
  var title2Text = isAddForm ? '' : '';
  var buttonTitle = 'Siguiente';
  var buttonAction = use.subPages.actions.onShip;
  var handleActions = function handleActions(action, value) {
    switch (action) {
      case 'submit':
        buttonAction();
        break;
      case 'return':
        use.subPages.actions.onCatalog();
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
      width: '100%',
      justifyContent: 'end'
    }
  }, /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, InputType))), /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _css.css)(defaultTitleContainerStyle)
  }, /*#__PURE__*/_react["default"].createElement(_Containers.ContainerButton, {
    styles: {
      width: '100%'
    }
  }, /*#__PURE__*/_react["default"].createElement(_Input.InputSku, {
    change: use.attributes.actions.changeSku,
    props: {
      styles: {
        width: '90%'
      },
      inputProps: {
        defaultValue: use.attributes.states.sku
      },
      containerStyles: {
        custom: "\n                        display: flex;\n                        flex-direction: column;\n                    "
      }
    }
  }))))));
};