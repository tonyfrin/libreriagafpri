"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useGafpriPayment = useGafpriPayment;
var _useGafpriError = require("./useGafpriError");
var _Abstract = require("../Abstract");
function useGafpriPayment(_ref) {
  var currencies = _ref.currencies,
    useBankType = _ref.useBankType,
    useOrder = _ref.useOrder,
    useCredit = _ref.useCredit,
    useOrderReturn = _ref.useOrderReturn,
    token = _ref.token;
  var error = (0, _useGafpriError.useGafpriError)();
  var attributes = (0, _Abstract.useGafpriAttributesPayment)({
    currencies: currencies,
    useBankType: useBankType,
    useOrder: useOrder
  });
  var subPagesDeposit = (0, _Abstract.useGafpriSubPagesDepositPayment)();
  var pages = (0, _Abstract.useGafpriPagesPayment)({
    attributes: attributes,
    subPagesDeposit: subPagesDeposit
  });
  var api = (0, _Abstract.useGafpriApiPayment)({
    useOrder: useOrder,
    usePages: pages,
    useAttributes: attributes,
    useError: error,
    useCredit: useCredit,
    useOrderReturn: useOrderReturn,
    token: token
  });
  return {
    attributes: attributes,
    pages: pages,
    subPagesDeposit: subPagesDeposit,
    error: error,
    api: api
  };
}