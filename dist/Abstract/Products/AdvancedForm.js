"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AdvancedForm = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _react = _interopRequireDefault(require("react"));
var _css = require("@emotion/css");
var _Form = require("../Form");
var _Containers = require("../Containers");
var _Input = require("../Input");
var _CheckBox = require("../CheckBox");
var _templateObject, _templateObject2, _templateObject3;
var defaultFormContainerStyle = (0, _css.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  justify-content: space-between;\n  margin-top: 10px;\n  padding-left: 24px;\n"])));
var defaultImageContainerStyle = (0, _css.css)(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  width: 50%;\n"])));
var defaultTitleContainerStyle = (0, _css.css)(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n  width: 50%;\n"])));
var AdvancedForm = exports.AdvancedForm = function AdvancedForm(_ref) {
  var use = _ref.use,
    formType = _ref.formType;
  var isAddForm = formType === 'add';
  var isUpdateForm = formType === 'update';
  var current = isUpdateForm ? use.data.actions.getById(use.attributes.states.currentId) : null;
  _react["default"].useEffect(function () {
    use.attributes.actions.validationButtonNext();
  }, [use.attributes.states.skuValid, use.attributes.states.nameValid, use.attributes.states.salesPriceValid, use.attributes.states.typeValid, use.attributes.states.statusValid, use.attributes.states.visibilityValid]);
  _react["default"].useEffect(function () {
    if (current) {
      if (current.taxStatus) {
        var taxOption = use.attributes.actions.getTaxStatusOptionByValue(current.taxStatus);
        if (taxOption) {
          use.attributes.actions.changeTaxStatus(taxOption);
        }
      }
      if (current.taxClass) {
        var taxClassOption = use.attributes.actions.getTaxClassesOptionByValue(current.taxClass);
        if (taxClassOption) {
          use.attributes.actions.changeTaxClasses(taxClassOption);
        }
      }
      if (current.note) {
        use.attributes.actions.changeNote(current.note);
      }
      if (current.reviews) {
        use.attributes.actions.setReviews(current.reviews);
      }
    }
  }, [current]);
  var title1Text = isAddForm ? 'Avanzado' : 'Actualización Avanzada';
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
    error: use.error.states.error,
    buttonConditional: false
  }, /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _css.css)(defaultFormContainerStyle)
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _css.css)(defaultImageContainerStyle)
  }, /*#__PURE__*/_react["default"].createElement(_Containers.ContainerButton, {
    styles: {
      width: '100%'
    }
  }, /*#__PURE__*/_react["default"].createElement(_Input.SelectTaxStatus, {
    change: use.attributes.actions.changeTaxStatus,
    props: {
      title: 'Estado de impuestos',
      options: use.attributes.states.taxStatusOptions,
      defaultValue: use.attributes.states.taxStatusDefault
    }
  }))), /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _css.css)(defaultTitleContainerStyle)
  }, /*#__PURE__*/_react["default"].createElement(_Containers.ContainerButton, {
    styles: {
      width: '100%'
    }
  }, /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, use.attributes.states.taxStatus === 'taxable' && /*#__PURE__*/_react["default"].createElement(_Input.SelectTaxClass, {
    change: use.attributes.actions.changeTaxClasses,
    props: {
      title: 'Clases de impuestos',
      options: use.attributes.states.taxClassesOptions,
      defaultValue: use.attributes.states.taxClassesDefault
    }
  }))))), /*#__PURE__*/_react["default"].createElement(_Containers.ContainerButton, {
    styles: {
      width: '100%'
    }
  }, /*#__PURE__*/_react["default"].createElement(_Input.ParagraphNote, {
    change: use.attributes.actions.changeNote,
    props: {
      inputProps: {
        defaultValue: use.attributes.states.note
      }
    }
  })), /*#__PURE__*/_react["default"].createElement(_Containers.ContainerButton, {
    styles: {
      width: '100%',
      justifyContent: 'flex-start',
      custom: "padding-left: 34px;"
    }
  }, /*#__PURE__*/_react["default"].createElement(_CheckBox.SingleCheckBox, {
    title: "Habilitar rese\xF1as",
    selected: use.attributes.states.reviews,
    onChange: use.attributes.actions.changeReviews,
    titleStyles: {
      customStyle: "\n              margin-right: 15px;\n              color: #8d8d8d;\n            "
    }
  }))));
};