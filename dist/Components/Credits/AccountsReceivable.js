"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AccountsReceivable = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _react = _interopRequireDefault(require("react"));
var _css = require("@emotion/css");
var _Loading = require("../Loading");
var _Abstract = require("../../Abstract");
var _Entity = require("../Entity");
var _excluded = ["className"];
var _templateObject;
var accountsReceivableStylesContainer = function accountsReceivableStylesContainer(stayles) {
  return (0, _css.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  padding-top: ", ";\n  padding-bottom: ", ";\n  min-height: ", ";\n  ", "\n  background-repeat: ", ";\n  background-size: ", ";\n  ", "\n"])), stayles.paddingTop || '60px', stayles.paddingBottom || '50px', stayles.minHeight || '100vh', stayles.backgroundImage && "background-image: url(".concat(stayles.backgroundImage, ");"), stayles.backgroundRepeat || 'no-repeat', stayles.backgroundSize || '345vh', stayles.custom || '');
};
var AccountsReceivable = exports.AccountsReceivable = function AccountsReceivable(_ref) {
  var use = _ref.use,
    useEntity = _ref.useEntity,
    _ref$containerStyles = _ref.containerStyles,
    containerStyles = _ref$containerStyles === void 0 ? {} : _ref$containerStyles,
    _ref$containerProps = _ref.containerProps,
    containerProps = _ref$containerProps === void 0 ? {} : _ref$containerProps,
    sitesOptions = _ref.sitesOptions,
    menuEntity = _ref.menuEntity;
  var containerClassName = containerProps.className,
    restContainerProps = (0, _objectWithoutProperties2["default"])(containerProps, _excluded);
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", (0, _extends2["default"])({
    className: (0, _css.cx)(accountsReceivableStylesContainer(containerStyles), containerClassName)
  }, restContainerProps), use.pages.states.isFetching && /*#__PURE__*/_react["default"].createElement(_Loading.Loading, {
    mainStyles: {
      custom: 'height: 100vh;'
    }
  }), use.pages.states.isInit && /*#__PURE__*/_react["default"].createElement(_Abstract.FadeIn, {
    keyName: "init",
    isVisible: use.pages.states.isInit
  }, /*#__PURE__*/_react["default"].createElement(_Abstract.InitAccountsReceivable, {
    use: use,
    siteOptions: sitesOptions
  })), use.pages.states.isInitAdd && /*#__PURE__*/_react["default"].createElement(_Abstract.FadeIn, {
    keyName: "init-add",
    isVisible: use.pages.states.isInitAdd
  }, /*#__PURE__*/_react["default"].createElement(_Abstract.InitAddAccountsReceivable, {
    use: use,
    useEntity: useEntity
  })), use.pages.states.isAddEntity && /*#__PURE__*/_react["default"].createElement(_Abstract.FadeIn, {
    keyName: "addEntity",
    isVisible: use.pages.states.isAddEntity
  }, /*#__PURE__*/_react["default"].createElement(_Entity.EntityAccountsReceivable, {
    use: useEntity,
    useAccountsReceivable: use,
    menu: menuEntity
  })), use.pages.states.isForm && /*#__PURE__*/_react["default"].createElement(_Abstract.FadeIn, {
    keyName: "form",
    isVisible: use.pages.states.isForm
  }, /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Abstract.AccountsReceivableAddForm, {
    use: use,
    siteOptions: sitesOptions
  }))), use.pages.states.isFormUpdate && /*#__PURE__*/_react["default"].createElement(_Abstract.FadeIn, {
    keyName: "form-update",
    isVisible: use.pages.states.isFormUpdate
  }, /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Abstract.AccountsReceivableUpdateForm, {
    use: use,
    siteOptions: sitesOptions
  }))), use.pages.states.isEntitySearch && /*#__PURE__*/_react["default"].createElement(_Abstract.FadeIn, {
    keyName: "entitySearch",
    isVisible: use.pages.states.isEntitySearch
  }, /*#__PURE__*/_react["default"].createElement(_Abstract.EntityAccountsReceivableSearch, {
    use: useEntity,
    useAccountsReceivable: use
  })), use.pages.states.isLoginForm && /*#__PURE__*/_react["default"].createElement(_Abstract.FadeIn, {
    keyName: "login-form",
    isVisible: use.pages.states.isLoginForm
  }, /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Abstract.AccountsReceivableLoginForm, {
    use: use
  }))), use.pages.states.isLoginUpdateForm && /*#__PURE__*/_react["default"].createElement(_Abstract.FadeIn, {
    keyName: "login-update-form",
    isVisible: use.pages.states.isLoginUpdateForm
  }, /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Abstract.AccountsReceivableLoginUpdateForm, {
    use: use
  })))));
};