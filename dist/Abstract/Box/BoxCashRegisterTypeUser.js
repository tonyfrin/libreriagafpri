"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BoxCashRegisterTypeUser = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _react = _interopRequireDefault(require("react"));
var _css = require("@emotion/css");
var _excluded = ["className"],
  _excluded2 = ["className"],
  _excluded3 = ["className"],
  _excluded4 = ["className"],
  _excluded5 = ["className"];
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;
var boxCashRegisterTypeUserContainerStyles = function boxCashRegisterTypeUserContainerStyles(styles) {
  return (0, _css.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  display: ", ";\n  flex-wrap: ", ";\n  justify-content: ", ";\n  margin: ", ";\n  padding: ", ";\n  border: ", ";\n  border-radius: ", ";\n  width: ", ";\n  ", "\n"])), styles.display || 'flex', styles.flexWrap || 'wrap', styles.justifyContent || 'center', styles.margin || '20px 10px', styles.padding || '15px 0px', styles.border || '1px solid #ccc', styles.borderRadius || '4px', styles.width || '91%', styles.custom || '');
};
var boxCashRegisterTypeUserContentStyles = function boxCashRegisterTypeUserContentStyles(styles) {
  return (0, _css.css)(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  position: ", ";\n  display: ", ";\n  align-items: ", ";\n  margin-bottom: ", ";\n  ", "\n"])), styles.position || 'relative', styles.display || 'flex', styles.alignItems || 'center', styles.marginBottom || '8px', styles.custom || '');
};
var boxCashRegisterTypeUserContentItemsStyles = function boxCashRegisterTypeUserContentItemsStyles(styles) {
  return (0, _css.css)(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n  position: ", ";\n  display: ", ";\n  align-items: ", ";\n  margin-right: ", ";\n  margin-bottom: ", ";\n  ", "\n"])), styles.position || 'relative', styles.display || 'flex', styles.alignItems || 'center', styles.marginRight || '5px', styles.marginBottom || '5px', styles.custom || '');
};
var boxCashRegisterTypeUserContentButtonStyles = function boxCashRegisterTypeUserContentButtonStyles(styles) {
  return (0, _css.css)(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2["default"])(["\n  position: ", ";\n  top: ", ";\n  transform: ", ";\n  right: ", ";\n  cursor: ", ";\n  color: ", ";\n  background-color: ", ";\n  border-radius: ", ";\n  padding: ", ";\n  font-size: ", ";\n  ", "\n"])), styles.position || 'absolute', styles.top || '0px', styles.transform || 'translateY(-50%)', styles.right || '0px', styles.cursor || 'pointer', styles.color || '#fff', styles.backgroundColor || '#f44336', styles.borderRadius || '100%', styles.padding || '2px 5px 4px 5px', styles.fontSize || '8px', styles.custom || '');
};
var boxCashRegisterTypeUserContentTitleStyles = function boxCashRegisterTypeUserContentTitleStyles(styles) {
  return (0, _css.css)(_templateObject5 || (_templateObject5 = (0, _taggedTemplateLiteral2["default"])(["\n  margin-right: ", ";\n  padding: ", ";\n  color: ", ";\n  border-radius: ", ";\n  border: ", ";\n  ", "\n"])), styles.marginRight || '8px', styles.padding || '8px', styles.color || '#8d8d8d', styles.borderRadius || '4px', styles.border || '1px solid #dfdbdb', styles.custom || '');
};
var BoxCashRegisterTypeUser = exports.BoxCashRegisterTypeUser = function BoxCashRegisterTypeUser(_ref) {
  var _ref$containerStyles = _ref.containerStyles,
    containerStyles = _ref$containerStyles === void 0 ? {} : _ref$containerStyles,
    _ref$containerProps = _ref.containerProps,
    containerProps = _ref$containerProps === void 0 ? {} : _ref$containerProps,
    _ref$contentStyles = _ref.contentStyles,
    contentStyles = _ref$contentStyles === void 0 ? {} : _ref$contentStyles,
    _ref$contentProps = _ref.contentProps,
    contentProps = _ref$contentProps === void 0 ? {} : _ref$contentProps,
    _ref$contentItemsStyl = _ref.contentItemsStyles,
    contentItemsStyles = _ref$contentItemsStyl === void 0 ? {} : _ref$contentItemsStyl,
    _ref$contentItemsProp = _ref.contentItemsProps,
    contentItemsProps = _ref$contentItemsProp === void 0 ? {} : _ref$contentItemsProp,
    _ref$contentButtonSty = _ref.contentButtonStyles,
    contentButtonStyles = _ref$contentButtonSty === void 0 ? {} : _ref$contentButtonSty,
    _ref$contentButtonPro = _ref.contentButtonProps,
    contentButtonProps = _ref$contentButtonPro === void 0 ? {} : _ref$contentButtonPro,
    _ref$contentTitleStyl = _ref.contentTitleStyles,
    contentTitleStyles = _ref$contentTitleStyl === void 0 ? {} : _ref$contentTitleStyl,
    _ref$contentTitleProp = _ref.contentTitleProps,
    contentTitleProps = _ref$contentTitleProp === void 0 ? {} : _ref$contentTitleProp,
    items = _ref.items,
    removeItem = _ref.removeItem,
    useUser = _ref.useUser;
  var containerClassName = containerProps.className,
    restContainerProps = (0, _objectWithoutProperties2["default"])(containerProps, _excluded);
  var contentClassName = contentProps.className,
    restContentProps = (0, _objectWithoutProperties2["default"])(contentProps, _excluded2);
  var contentItemsClassName = contentItemsProps.className,
    restContentItemsProps = (0, _objectWithoutProperties2["default"])(contentItemsProps, _excluded3);
  var closeButtonClassName = contentButtonProps.className,
    restCloseButtonProps = (0, _objectWithoutProperties2["default"])(contentButtonProps, _excluded4);
  var titleClassName = contentTitleProps.className,
    restTitleProps = (0, _objectWithoutProperties2["default"])(contentTitleProps, _excluded5);
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", (0, _extends2["default"])({
    className: (0, _css.cx)(boxCashRegisterTypeUserContainerStyles(containerStyles), containerClassName)
  }, restContainerProps), items.map(function (item, index) {
    var user = useUser.actions.getById(item.userId);
    return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, user && /*#__PURE__*/_react["default"].createElement("div", (0, _extends2["default"])({
      key: "".concat(item.userId, "-").concat(index),
      className: (0, _css.cx)(boxCashRegisterTypeUserContentStyles(contentStyles), contentClassName)
    }, restContentProps), /*#__PURE__*/_react["default"].createElement("div", (0, _extends2["default"])({
      className: (0, _css.cx)(boxCashRegisterTypeUserContentItemsStyles(contentItemsStyles), contentItemsClassName)
    }, restContentItemsProps), /*#__PURE__*/_react["default"].createElement("span", (0, _extends2["default"])({
      className: (0, _css.cx)(boxCashRegisterTypeUserContentButtonStyles(contentButtonStyles), closeButtonClassName),
      onClick: function onClick() {
        return removeItem(index);
      }
    }, restCloseButtonProps), "x"), /*#__PURE__*/_react["default"].createElement("span", (0, _extends2["default"])({
      className: (0, _css.cx)(boxCashRegisterTypeUserContentTitleStyles(contentTitleStyles), titleClassName)
    }, restTitleProps), user !== null && user !== void 0 && user.lastName ? "".concat(user.name, " ").concat(user.lastName) : user.name))));
  })));
};