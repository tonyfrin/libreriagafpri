"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CartOrderReturnSections = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _react = _interopRequireDefault(require("react"));
var _css = require("@emotion/css");
var _Button = require("../Button");
var _Containers = require("../Containers");
var _Title = require("../Title");
var _Table = require("../Table");
var _excluded = ["className"],
  _excluded2 = ["className"],
  _excluded3 = ["className"];
var _templateObject, _templateObject2;
var cartOrderReturnSectionsStylesContainer = function cartOrderReturnSectionsStylesContainer(styles) {
  return (0, _css.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  width: ", ";\n  padding: ", ";\n  border-radius: ", ";\n  background-color: ", ";\n  margin: ", ";\n  ", "\n"])), styles.width || '70%', styles.padding || '12px', styles.borderRadius || '10px', styles.backgroundColor || '#fff', styles.margin || 'auto', styles.custom || '');
};
var cartOrderReturnSectionsStylesContentItems = function cartOrderReturnSectionsStylesContentItems(styles) {
  return (0, _css.css)(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  display: ", ";\n  flex-direction: ", ";\n  text-align: ", ";\n  ", "\n"])), styles.display || 'flex', styles.flexDirection || 'column', styles.textAlign || 'center', styles.custom || '');
};
var CartOrderReturnSections = exports.CartOrderReturnSections = function CartOrderReturnSections(_ref) {
  var _ref$containerStyles = _ref.containerStyles,
    containerStyles = _ref$containerStyles === void 0 ? {} : _ref$containerStyles,
    _ref$containerProps = _ref.containerProps,
    containerProps = _ref$containerProps === void 0 ? {} : _ref$containerProps,
    _ref$contentItemsStyl = _ref.contentItemsStyles,
    contentItemsStyles = _ref$contentItemsStyl === void 0 ? {} : _ref$contentItemsStyl,
    _ref$contentItemsProp = _ref.contentItemsProps,
    contentItemsProps = _ref$contentItemsProp === void 0 ? {} : _ref$contentItemsProp,
    _ref$contentOptionsPr = _ref.contentOptionsProps,
    contentOptionsProps = _ref$contentOptionsPr === void 0 ? {} : _ref$contentOptionsPr,
    sitesOptions = _ref.sitesOptions,
    useOrderReturn = _ref.useOrderReturn;
  var containerClassName = containerProps.className,
    restContainerProps = (0, _objectWithoutProperties2["default"])(containerProps, _excluded);
  var contentItemsClassName = contentItemsProps.className,
    restContentItemsProps = (0, _objectWithoutProperties2["default"])(contentItemsProps, _excluded2);
  var contentOptionsClassName = contentOptionsProps.className,
    restContentOptionsProps = (0, _objectWithoutProperties2["default"])(contentOptionsProps, _excluded3);
  return /*#__PURE__*/_react["default"].createElement("div", (0, _extends2["default"])({
    className: (0, _css.cx)(cartOrderReturnSectionsStylesContainer(containerStyles), containerClassName)
  }, restContainerProps), /*#__PURE__*/_react["default"].createElement("div", (0, _extends2["default"])({
    className: (0, _css.cx)(cartOrderReturnSectionsStylesContentItems(contentItemsStyles), contentItemsClassName)
  }, restContentItemsProps), /*#__PURE__*/_react["default"].createElement(_Containers.ContainerButton, {
    styles: {
      width: '100%',
      custom: 'margin: 20px 0px 0px 0px;'
    }
  }, /*#__PURE__*/_react["default"].createElement(_Title.Title2, {
    title: "Carrito"
  })), /*#__PURE__*/_react["default"].createElement(_Containers.ContainerButton, {
    styles: {
      width: '100%',
      justifyContent: 'flex-end',
      custom: 'margin: 10px 0px;'
    }
  }, /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    title: "Vaciar carrito",
    styles: {
      fontSize: '8px',
      backgroundColor: '#c12429'
    },
    buttonProps: {
      onClick: function onClick() {
        return useOrderReturn.useProductItems.actions.voidShoppingCart();
      }
    }
  })), /*#__PURE__*/_react["default"].createElement(_Table.CartOrderReturnTable, {
    useOrderReturn: useOrderReturn,
    siteOptions: sitesOptions
  })));
};