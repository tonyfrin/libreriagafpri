"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AttributesForm = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _react = _interopRequireDefault(require("react"));
var _css = require("@emotion/css");
var _Form = require("../Form");
var _Input = require("../Input");
var _Table = require("../Table");
var _Button = require("../Button");
var _Containers = require("../Containers");
var _templateObject, _templateObject2, _templateObject3;
var defaultFormContainerStyle = (0, _css.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  justify-content: space-between;\n  margin-top: 10px;\n  padding-left: 24px;\n"])));
var defaultImageContainerStyle = (0, _css.css)(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  width: 50%;\n"])));
var defaultTitleContainerStyle = (0, _css.css)(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n  width: 50%;\n"])));
var AttributesForm = exports.AttributesForm = function AttributesForm(_ref) {
  var use = _ref.use,
    formType = _ref.formType;
  var isAddForm = formType === 'add';
  var isUpdateForm = formType === 'update';
  var current = isUpdateForm ? use.data.actions.getById(use.attributes.states.currentId) : null;
  _react["default"].useEffect(function () {
    if (current) {
      if (current.attributes) {
        use.attributes.actions.setAttributes(current.attributes);
      }
    }
  }, [current]);
  var title1Text = isAddForm ? 'Atributos' : 'Actualización de Atributos';
  var title2Text = isAddForm ? '' : '';
  var buttonTitle = 'Siguiente';
  var buttonAction = use.subPages.actions.onAdvanced;
  var handleActions = function handleActions(action, value) {
    switch (action) {
      case 'submit':
        buttonAction();
        break;
      case 'return':
        use.subPages.actions.onShip();
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
  }, /*#__PURE__*/_react["default"].createElement(_Input.Input, {
    styles: {
      width: '90%'
    },
    inputProps: {
      placeholder: 'Atributo',
      title: 'Atributo',
      type: 'text',
      onChange: function onChange(event) {
        return use.attributes.actions.setValueAttributes(event.currentTarget.value);
      },
      value: use.attributes.states.valueAttributes
    }
  })), /*#__PURE__*/_react["default"].createElement(_Containers.ContainerButton, {
    styles: {
      width: '100%'
    }
  }, /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    title: "Agregar Atributo",
    buttonProps: {
      onClick: function onClick() {
        return use.attributes.actions.addAttributes();
      }
    }
  }))), /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _css.css)(defaultTitleContainerStyle)
  }, /*#__PURE__*/_react["default"].createElement(_Input.Paragraph, {
    onChange: function onChange(e) {
      return use.attributes.actions.setDescriptionAttributes(e);
    },
    inputProps: {
      value: use.attributes.states.descriptionAttributes,
      title: 'Descripción',
      placeholder: 'Descripción'
    }
  }))), /*#__PURE__*/_react["default"].createElement(_Table.AttributeTable, {
    data: use.attributes.states.attributes,
    onRemove: use.attributes.actions.onRemoveAttibutes
  })));
};