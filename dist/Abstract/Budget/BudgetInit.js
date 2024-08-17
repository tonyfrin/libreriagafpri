"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BudgetInit = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _react = _interopRequireDefault(require("react"));
var _css = require("@emotion/css");
var _Form = require("../Form");
var _excluded = ["className"];
var _templateObject;
var budgetInitStylesContainer = function budgetInitStylesContainer(stayles) {
  return (0, _css.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  max-width: ", ";\n  margin: ", ";\n  ", "\n"])), stayles.maxWidht || '900px', stayles.margin || 'auto', stayles.custom || '');
};
var BudgetInit = exports.BudgetInit = function BudgetInit(_ref) {
  var _ref$containerStyles = _ref.containerStyles,
    containerStyles = _ref$containerStyles === void 0 ? {} : _ref$containerStyles,
    _ref$containerProps = _ref.containerProps,
    containerProps = _ref$containerProps === void 0 ? {} : _ref$containerProps,
    useBudget = _ref.useBudget,
    useEntity = _ref.useEntity,
    usePagesMain = _ref.usePagesMain,
    uploadBudget = _ref.uploadBudget;
  var containerClassName = containerProps.className,
    restContainerProps = (0, _objectWithoutProperties2["default"])(containerProps, _excluded);
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", (0, _extends2["default"])({
    className: (0, _css.cx)(budgetInitStylesContainer(containerStyles), containerClassName)
  }, restContainerProps), /*#__PURE__*/_react["default"].createElement(_Form.EntityBudgetSearchForm, {
    useBudget: useBudget,
    useEntity: useEntity,
    usePagesSalesModule: usePagesMain,
    uploadBudget: uploadBudget
  })));
};