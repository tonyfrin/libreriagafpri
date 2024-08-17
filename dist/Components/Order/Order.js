"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Order = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _react = _interopRequireDefault(require("react"));
var _css = require("@emotion/css");
var _Loading = require("../Loading");
var _Abstract = require("../../Abstract");
var _Entity = require("../Entity");
var _Products = require("../Products");
var _excluded = ["className"];
var _templateObject;
var orderStylesContainer = function orderStylesContainer(stayles) {
  return (0, _css.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  padding-top: ", ";\n  padding-bottom: ", ";\n  min-height: ", ";\n  ", "\n  background-repeat: ", ";\n  background-size: ", ";\n  ", "\n"])), stayles.paddingTop || '60px', stayles.paddingBottom || '50px', stayles.minHeight || '100vh', stayles.backgroundImage && "background-image: url(".concat(stayles.backgroundImage, ");"), stayles.backgroundRepeat || 'no-repeat', stayles.backgroundSize || '345vh', stayles.custom || '');
};
var Order = exports.Order = function Order(_ref) {
  var use = _ref.use,
    useEntity = _ref.useEntity,
    _ref$containerStyles = _ref.containerStyles,
    containerStyles = _ref$containerStyles === void 0 ? {} : _ref$containerStyles,
    _ref$containerProps = _ref.containerProps,
    containerProps = _ref$containerProps === void 0 ? {} : _ref$containerProps,
    itemsMenu = _ref.itemsMenu,
    usePagesMain = _ref.usePagesMain,
    sitesOptions = _ref.sitesOptions,
    useProducts = _ref.useProducts,
    menuEntity = _ref.menuEntity,
    uploadOrder = _ref.uploadOrder,
    uploadOrderOnlyProducts = _ref.uploadOrderOnlyProducts;
  var containerClassName = containerProps.className,
    restContainerProps = (0, _objectWithoutProperties2["default"])(containerProps, _excluded);
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", (0, _extends2["default"])({
    className: (0, _css.cx)(orderStylesContainer(containerStyles), containerClassName)
  }, restContainerProps), /*#__PURE__*/_react["default"].createElement(_Abstract.HeaderMenu, {
    items: itemsMenu
  }), use.pages.states.isFetching && /*#__PURE__*/_react["default"].createElement(_Loading.Loading, {
    mainStyles: {
      custom: 'height: 100vh;'
    }
  }), use.pages.states.isInit && /*#__PURE__*/_react["default"].createElement(_Abstract.FadeIn, {
    keyName: "init",
    isVisible: use.pages.states.isInit
  }, /*#__PURE__*/_react["default"].createElement(_Abstract.OrderInit, {
    useEntity: useEntity,
    useOrder: use,
    usePagesMain: usePagesMain,
    uploadOrder: uploadOrder
  })), use.pages.states.isAddEntity && /*#__PURE__*/_react["default"].createElement(_Abstract.FadeIn, {
    keyName: "addEntity",
    isVisible: use.pages.states.isAddEntity
  }, /*#__PURE__*/_react["default"].createElement(_Entity.EntityOrder, {
    use: useEntity,
    useOrder: use,
    menu: menuEntity
  })), use.pages.states.isSales && /*#__PURE__*/_react["default"].createElement(_Abstract.FadeIn, {
    keyName: "sales",
    isVisible: use.pages.states.isSales
  }, /*#__PURE__*/_react["default"].createElement(_Abstract.Sales, {
    useOrder: use,
    sitesOptions: sitesOptions,
    useProducts: useProducts,
    uploadOrder: uploadOrderOnlyProducts
  })), use.pages.states.isEntitySearch && /*#__PURE__*/_react["default"].createElement(_Abstract.FadeIn, {
    keyName: "entitySearch",
    isVisible: use.pages.states.isEntitySearch
  }, /*#__PURE__*/_react["default"].createElement(_Abstract.EntitySearch, {
    use: useEntity,
    useOrder: use
  })), use.pages.states.isProductSearch && /*#__PURE__*/_react["default"].createElement(_Abstract.FadeIn, {
    keyName: "productySearch",
    isVisible: use.pages.states.isProductSearch
  }, /*#__PURE__*/_react["default"].createElement(_Products.ProductOrder, {
    useProduct: useProducts,
    useOrder: use,
    sitesOptions: sitesOptions
  }))));
};