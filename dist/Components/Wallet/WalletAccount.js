"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WalletAccount = void 0;
var _react = _interopRequireDefault(require("react"));
var _Loading = require("../Loading");
var _Abstract = require("../../Abstract");
var WalletAccount = exports.WalletAccount = function WalletAccount(_ref) {
  var use = _ref.use,
    useUser = _ref.useUser;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, use.pages.states.isFetching && /*#__PURE__*/_react["default"].createElement(_Loading.Loading, null), use.pages.states.isInit && /*#__PURE__*/_react["default"].createElement(_Abstract.FadeIn, {
    keyName: "init",
    isVisible: use.pages.states.isInit
  }, /*#__PURE__*/_react["default"].createElement(_Abstract.InitWalletAccount, {
    use: use
  })), use.pages.states.isInitUser && /*#__PURE__*/_react["default"].createElement(_Abstract.FadeIn, {
    keyName: "init-user",
    isVisible: use.pages.states.isInitUser
  }, /*#__PURE__*/_react["default"].createElement(_Abstract.UserWalletAccountSearchForm, {
    use: use,
    useUser: useUser,
    returnModule: use.pages.actions.returnInit
  })), use.pages.states.isAdd && /*#__PURE__*/_react["default"].createElement(_Abstract.FadeIn, {
    keyName: "add",
    isVisible: use.pages.states.isAdd
  }, /*#__PURE__*/_react["default"].createElement(_Abstract.WalletAccountForm, {
    use: use,
    formType: "add"
  })), use.pages.states.isUpdate && /*#__PURE__*/_react["default"].createElement(_Abstract.FadeIn, {
    keyName: "update",
    isVisible: use.pages.states.isUpdate
  }, /*#__PURE__*/_react["default"].createElement(_Abstract.WalletAccountForm, {
    formType: "update",
    use: use
  })));
};