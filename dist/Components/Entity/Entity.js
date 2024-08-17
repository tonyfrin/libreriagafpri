"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Entity = void 0;
var _react = _interopRequireDefault(require("react"));
var _Loading = require("../Loading");
var _Abstract = require("../../Abstract");
var Entity = exports.Entity = function Entity(_ref) {
  var use = _ref.use;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, use.pages.states.isFetching && /*#__PURE__*/_react["default"].createElement(_Loading.Loading, null), use.pages.states.isInit && /*#__PURE__*/_react["default"].createElement(_Abstract.FadeIn, {
    keyName: "init",
    isVisible: use.pages.states.isInit
  }, /*#__PURE__*/_react["default"].createElement(_Abstract.InitEntity, {
    use: use
  })), use.pages.states.isAdd && /*#__PURE__*/_react["default"].createElement(_Abstract.FadeIn, {
    keyName: "add",
    isVisible: use.pages.states.isAdd
  }, /*#__PURE__*/_react["default"].createElement(_Abstract.EntityAddForm, {
    use: use,
    formType: use.attributes.states.formType
  })), use.pages.states.isUpdate && /*#__PURE__*/_react["default"].createElement(_Abstract.FadeIn, {
    keyName: "update",
    isVisible: use.pages.states.isUpdate
  }, /*#__PURE__*/_react["default"].createElement(_Abstract.EntityUpdateForm, {
    use: use
  })), use.pages.states.isAddAddress && /*#__PURE__*/_react["default"].createElement(_Abstract.FadeIn, {
    keyName: "addAddress",
    isVisible: use.pages.states.isAddAddress
  }, /*#__PURE__*/_react["default"].createElement(_Abstract.AddressAddForm, {
    use: use
  })), use.pages.states.isAddDocument && /*#__PURE__*/_react["default"].createElement(_Abstract.FadeIn, {
    keyName: "addDocument",
    isVisible: use.pages.states.isAddDocument
  }, /*#__PURE__*/_react["default"].createElement(_Abstract.DocumentAddForm, {
    use: use
  })));
};