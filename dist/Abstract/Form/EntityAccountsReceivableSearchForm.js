"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EntityAccountsReceivableSearchForm = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _react = _interopRequireDefault(require("react"));
var _css = require("@emotion/css");
var _Box = require("../Box");
var _Button = require("../Button");
var _Containers = require("../Containers");
var _Input = require("../Input");
var _excluded = ["className"];
var _templateObject;
var entityAccountsReceivableSearchFormStaylesContainer = function entityAccountsReceivableSearchFormStaylesContainer(styles) {
  return (0, _css.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  color: ", ";\n  font-size: ", ";\n  padding-bottom: ", ";\n  ", "\n"])), styles.color || '#616e7d', styles.fontSize || '12px', styles.paddingBottom || '40px', styles.custom || '');
};
var EntityAccountsReceivableSearchForm = exports.EntityAccountsReceivableSearchForm = function EntityAccountsReceivableSearchForm(_ref) {
  var _ref$containerStyles = _ref.containerStyles,
    containerStyles = _ref$containerStyles === void 0 ? {} : _ref$containerStyles,
    _ref$containerProps = _ref.containerProps,
    containerProps = _ref$containerProps === void 0 ? {} : _ref$containerProps,
    use = _ref.use,
    useEntity = _ref.useEntity,
    returnModule = _ref.returnModule;
  var containerClassName = containerProps.className,
    restContainerProps = (0, _objectWithoutProperties2["default"])(containerProps, _excluded);
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", (0, _extends2["default"])({
    className: (0, _css.cx)(entityAccountsReceivableSearchFormStaylesContainer(containerStyles), containerClassName)
  }, restContainerProps), /*#__PURE__*/_react["default"].createElement(_Box.SearchBox, {
    title1Props: {
      title: 'Modulo de creditos'
    },
    title2Props: {
      title: 'Busqueda de clientes'
    }
  }, /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Containers.ContainerButton, {
    styles: {
      width: '100%'
    }
  }, /*#__PURE__*/_react["default"].createElement(_Input.InputDocumentiIdDigit, {
    changeDocumentiIdDigit: function changeDocumentiIdDigit(e) {
      return useEntity.attributes.actions.changeDigit(e);
    },
    props: {
      styles: {
        width: '100%'
      },
      inputProps: {
        title: 'Cedula o RIF',
        onKeyPress: use.pages.actions.processEntityBydocumentId
      }
    }
  })), /*#__PURE__*/_react["default"].createElement(_Containers.ContainerButton, {
    styles: {
      width: '100%'
    }
  }, /*#__PURE__*/_react["default"].createElement(_Input.InputName, {
    changeName: function changeName(e) {
      return useEntity.attributes.actions.changeName(e);
    },
    props: {
      styles: {
        width: '100%'
      },
      inputProps: {
        title: 'Nombre',
        onKeyPress: use.pages.actions.processEntityByName
      }
    }
  })), /*#__PURE__*/_react["default"].createElement(_Containers.ContainerButton, {
    styles: {
      width: '100%'
    }
  }, /*#__PURE__*/_react["default"].createElement(_Input.InputPhone, {
    changePhone: function changePhone(e) {
      return useEntity.attributes.actions.changePhone(e);
    },
    props: {
      styles: {
        width: '100%'
      },
      inputProps: {
        title: 'Numero de telefono',
        onKeyPress: use.pages.actions.processEntityByPhone
      }
    }
  })), /*#__PURE__*/_react["default"].createElement(_Containers.ContainerButton, {
    styles: {
      width: '100%'
    }
  }, /*#__PURE__*/_react["default"].createElement(_Input.InputEmail, {
    changeEmail: function changeEmail(e) {
      return useEntity.attributes.actions.changeEmail(e);
    },
    props: {
      styles: {
        width: '100%'
      },
      inputProps: {
        title: 'Email',
        onKeyPress: use.pages.actions.processEntityByEmail
      }
    }
  })), /*#__PURE__*/_react["default"].createElement(_Containers.ContainerButton, {
    styles: {
      width: '100%',
      justifyContent: 'flex-start',
      custom: "\n                  margin-top: 30px;"
    }
  }, /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    title: "regresar",
    buttonProps: {
      onClick: function onClick() {
        return returnModule();
      }
    },
    styles: {
      backgroundColor: '#c12429'
    }
  }))))));
};