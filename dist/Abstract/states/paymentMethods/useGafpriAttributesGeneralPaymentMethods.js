"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useGafpriAttributesGeneralPaymentMethods = useGafpriAttributesGeneralPaymentMethods;
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
var _useGafpriAttributesPaymentMethods = require("./useGafpriAttributesPaymentMethods");
var _cashRegister = require("../cashRegister");
var _Validations = require("../../../Validations");
var _useGafpriAttributesBankTransactions = require("../bank/bankTransactions/useGafpriAttributesBankTransactions");
var _useGafpriPagesPaymentMethods = require("./useGafpriPagesPaymentMethods");
var _credits = require("../credits");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function useGafpriAttributesGeneralPaymentMethods(_ref) {
  var currencies = _ref.currencies,
    useBankType = _ref.useBankType,
    useError = _ref.useError;
  var _useState = (0, _react.useState)([]),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    arrayPaymentMethod = _useState2[0],
    setArrayPaymentMethod = _useState2[1];
  var usePaymentMethods = (0, _useGafpriAttributesPaymentMethods.useGafpriAttributesPaymentMethods)();
  var useCashTransactions = (0, _cashRegister.useGafpriAttributesCashTransactions)();
  var useBankTransactions = (0, _useGafpriAttributesBankTransactions.useGafpriAttributesBankTransactions)();
  var useCreditOpening = (0, _credits.useGafpriAttributesCreditOpening)();
  var pages = (0, _useGafpriPagesPaymentMethods.useGafpriPagesPaymentMethods)();
  var _useState3 = (0, _react.useState)(0),
    _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
    totalPaymentMethod = _useState4[0],
    setTotalPaymentMethod = _useState4[1];
  var _useState5 = (0, _react.useState)(0),
    _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
    totalMethods = _useState6[0],
    setTotalMethods = _useState6[1];
  var _useState7 = (0, _react.useState)(0),
    _useState8 = (0, _slicedToArray2["default"])(_useState7, 2),
    currenciesId = _useState8[0],
    setCurrenciesId = _useState8[1];
  var _useState9 = (0, _react.useState)(false),
    _useState10 = (0, _slicedToArray2["default"])(_useState9, 2),
    currenciesIdValid = _useState10[0],
    setCurrenciesIdValid = _useState10[1];
  var _useState11 = (0, _react.useState)({
      value: '',
      label: 'Selecciona la Moneda'
    }),
    _useState12 = (0, _slicedToArray2["default"])(_useState11, 2),
    currenciesIdDefault = _useState12[0],
    setCurrenciesIdDefault = _useState12[1];
  var currenciesIdOptions = currencies ? currencies.actions.getOptionsItems() : [];
  var _useState13 = (0, _react.useState)(0),
    _useState14 = (0, _slicedToArray2["default"])(_useState13, 2),
    change = _useState14[0],
    setChange = _useState14[1];
  var _useState15 = (0, _react.useState)(0),
    _useState16 = (0, _slicedToArray2["default"])(_useState15, 2),
    debitAmount = _useState16[0],
    setDebitAmount = _useState16[1];
  var _useState17 = (0, _react.useState)(0),
    _useState18 = (0, _slicedToArray2["default"])(_useState17, 2),
    depositAmount = _useState18[0],
    setDepositAmount = _useState18[1];
  var _useState19 = (0, _react.useState)('deposit'),
    _useState20 = (0, _slicedToArray2["default"])(_useState19, 2),
    type = _useState20[0],
    setType = _useState20[1];
  var infoReset = function infoReset() {
    usePaymentMethods.actions.infoReset();
    useCashTransactions.actions.infoReset();
    useBankTransactions.actions.infoReset();
    useCreditOpening.actions.infoReset();
    setArrayPaymentMethod([]);
    setCurrenciesId(0);
    setCurrenciesIdValid(false);
    setCurrenciesIdDefault({
      value: '',
      label: 'Selecciona la Moneda'
    });
    setChange(0);
    setDebitAmount(0);
    setDepositAmount(0);
    setType('deposit');
  };
  var partiallyInfoReset = function partiallyInfoReset() {
    usePaymentMethods.actions.infoReset();
    useCashTransactions.actions.infoReset();
    useBankTransactions.actions.infoReset();
    useCreditOpening.actions.infoReset();
    setCurrenciesId(0);
    setCurrenciesIdValid(false);
    setCurrenciesIdDefault({
      value: '',
      label: 'Selecciona la Moneda'
    });
    setChange(0);
    setDebitAmount(0);
    setDepositAmount(0);
    setType('deposit');
  };
  var validationCurrenciesId = function validationCurrenciesId(value) {
    var newValue;
    if (value) {
      newValue = value === '' || value === '0' ? '' : value;
    } else {
      newValue = '';
    }
    return (0, _Validations.generalValidationSelectCurrencies)({
      value: newValue,
      setValid: setCurrenciesIdValid,
      currentValid: currenciesIdValid
    });
  };
  var validationArrayPaymentMethod = function validationArrayPaymentMethod(value) {
    return value.length <= 100;
  };
  var changeArrayPaymentMethod = function changeArrayPaymentMethod(value) {
    var valid = validationArrayPaymentMethod([].concat((0, _toConsumableArray2["default"])(arrayPaymentMethod), [value]));
    if (valid) {
      setArrayPaymentMethod(function (prevCart) {
        return [].concat((0, _toConsumableArray2["default"])(prevCart), [value]);
      });
      return;
    }
    if (useError) {
      useError.actions.changeError(['No se pueden agregar más de 100 metodos de pagos']);
    }
  };
  var addCashTransaction = function addCashTransaction() {
    changeArrayPaymentMethod({
      paymentMethods: usePaymentMethods.states,
      cashTransactions: useCashTransactions.states
    });
    usePaymentMethods.actions.infoReset();
    useCashTransactions.actions.infoReset();
  };
  var addTransferCashRegister = function addTransferCashRegister(currentCashRegisterPostsId, currentCashRegisterTypePostsId, cashRegisterPostsId, cashRegisterTypePostsId) {
    var debitCashTransactions = {
      cashRegisterPostsId: currentCashRegisterPostsId,
      cashRegisterTypePostsId: currentCashRegisterTypePostsId,
      type: 'debit',
      amount: usePaymentMethods.states.amount,
      change: usePaymentMethods.states.change,
      currenciesId: currenciesId,
      note: ''
    };
    var depositCashTransactions = {
      cashRegisterTypePostsId: cashRegisterTypePostsId,
      cashRegisterPostsId: cashRegisterPostsId,
      type: 'deposit',
      amount: usePaymentMethods.states.amount,
      change: usePaymentMethods.states.change,
      currenciesId: currenciesId,
      note: ''
    };
    var debitPaymentMethods = {
      methodType: 'cash',
      type: 'debit',
      paymentType: '',
      currenciesId: currenciesId,
      bank: '',
      number: '',
      amount: usePaymentMethods.states.amount,
      change: usePaymentMethods.states.change,
      note: ''
    };
    var depositPaymentMethods = {
      methodType: 'cash',
      type: 'deposit',
      paymentType: '',
      currenciesId: currenciesId,
      bank: '',
      number: '',
      amount: usePaymentMethods.states.amount,
      change: usePaymentMethods.states.change,
      note: ''
    };
    var debitTransfer = {
      paymentMethods: debitPaymentMethods,
      cashTransactions: debitCashTransactions
    };
    var depositTransfer = {
      paymentMethods: depositPaymentMethods,
      cashTransactions: depositCashTransactions
    };
    changeArrayPaymentMethod(debitTransfer);
    changeArrayPaymentMethod(depositTransfer);
  };
  var addTransferBankRegister = function addTransferBankRegister(debitBankTypePostsId, depositBankTypePostsId) {
    if (useBankType) {
      var debitBankType = useBankType.data.actions.getById(debitBankTypePostsId);
      var depositBankType = useBankType.data.actions.getById(depositBankTypePostsId);
      if (!debitBankType || !depositBankType) return;
      var currentDate = new Date();
      var formatDate = currentDate.toISOString().split('T')[0];
      var debitBankTransactions = {
        bankTypePostsId: debitBankTypePostsId,
        type: 'debit',
        paymentType: 'transfers',
        description: "Transferecia de ".concat(debitBankType.name, " a ").concat(depositBankType.name),
        amount: debitAmount,
        change: change,
        dateTransations: "".concat(formatDate)
      };
      var depositBankTransactions = {
        bankTypePostsId: depositBankTypePostsId,
        type: 'deposit',
        paymentType: 'transfers',
        description: "Transferecia de ".concat(debitBankType.name, " a ").concat(depositBankType.name),
        amount: depositAmount,
        change: change,
        dateTransations: "".concat(formatDate)
      };
      var debitPaymentMethods = {
        methodType: 'bank',
        type: 'debit',
        paymentType: 'transfers',
        currenciesId: debitBankType.currenciesId,
        bank: debitBankType.bankName,
        number: usePaymentMethods.states.number,
        amount: debitAmount,
        change: change,
        note: ''
      };
      var depositPaymentMethods = {
        methodType: 'bank',
        type: 'deposit',
        paymentType: 'transfers',
        currenciesId: depositBankType.currenciesId,
        bank: debitBankType.bankName,
        number: usePaymentMethods.states.number,
        amount: depositAmount,
        change: change,
        note: ''
      };
      var debitTransfer = {
        paymentMethods: debitPaymentMethods,
        bankTransactions: debitBankTransactions
      };
      var depositTransfer = {
        paymentMethods: depositPaymentMethods,
        bankTransactions: depositBankTransactions
      };
      changeArrayPaymentMethod(debitTransfer);
      changeArrayPaymentMethod(depositTransfer);
    }
  };
  var addElectronicPaymentMethod = function addElectronicPaymentMethod() {
    if (useBankType) {
      var bankType = useBankType.data.actions.getById(useBankTransactions.states.bankTypePostsId);
      if (!bankType) return;
      var currentDate = new Date();
      var formatDate = currentDate.toISOString().split('T')[0];
      var newBankTransactions = {
        bankTypePostsId: useBankTransactions.states.bankTypePostsId,
        type: type,
        paymentType: useBankTransactions.states.paymentType,
        description: useBankTransactions.states.description,
        amount: useBankTransactions.states.amount,
        change: useBankTransactions.states.change,
        dateTransations: "".concat(formatDate),
        nameSend: useBankTransactions.states.nameSend
      };
      var newPaymentMethods = {
        methodType: 'bank',
        type: type,
        paymentType: usePaymentMethods.states.paymentType,
        currenciesId: bankType.currenciesId,
        bank: bankType.bankName,
        number: usePaymentMethods.states.number,
        amount: usePaymentMethods.states.amount,
        change: usePaymentMethods.states.change,
        note: usePaymentMethods.states.note
      };
      var newPayment = {
        paymentMethods: newPaymentMethods,
        bankTransactions: newBankTransactions
      };
      changeArrayPaymentMethod(newPayment);
    }
  };
  var addCreditPaymentMethod = function addCreditPaymentMethod(entityId, siteCurrenciesId) {
    var newCreditOpening = {
      entityId: entityId,
      authorizedLogin: useCreditOpening.states.authorizedLogin,
      authorizedPassword: useCreditOpening.states.authorizedPassword,
      amount: useCreditOpening.states.amount
    };
    var newType = 'deposit';
    var newPaymentMethods = {
      methodType: 'credit',
      type: newType,
      paymentType: '',
      currenciesId: siteCurrenciesId,
      bank: '',
      number: '',
      amount: usePaymentMethods.states.amount,
      change: usePaymentMethods.states.change,
      note: ''
    };
    var newPayment = {
      paymentMethods: newPaymentMethods,
      creditOpening: newCreditOpening
    };
    changeArrayPaymentMethod(newPayment);
  };
  var addCreditPaymentPaymentMethod = function addCreditPaymentPaymentMethod(creditOpeningPostsId, siteCurrenciesId, newAmount) {
    var newCreditPayment = {
      creditOpeningPostsId: creditOpeningPostsId,
      amount: newAmount
    };
    var newType = 'debit';
    var newPaymentMethods = {
      methodType: 'creditPayment',
      type: newType,
      paymentType: 'creditPayment',
      currenciesId: siteCurrenciesId,
      bank: '',
      number: '',
      amount: newAmount,
      change: newAmount,
      note: ''
    };
    var newPayment = {
      paymentMethods: newPaymentMethods,
      creditPayment: newCreditPayment
    };
    changeArrayPaymentMethod(newPayment);
  };
  var addSinglePaymentMethod = function addSinglePaymentMethod(siteCurrenciesId) {
    var newPaymentMethods = {
      methodType: 'single',
      type: type,
      paymentType: usePaymentMethods.states.paymentType,
      currenciesId: siteCurrenciesId,
      bank: '',
      number: '',
      amount: usePaymentMethods.states.amount,
      change: usePaymentMethods.states.change,
      note: ''
    };
    var newPayment = {
      paymentMethods: newPaymentMethods
    };
    changeArrayPaymentMethod(newPayment);
  };
  var deletePaymentMethod = function deletePaymentMethod(index) {
    var newArray = (0, _toConsumableArray2["default"])(arrayPaymentMethod);
    if (index >= 0 && index < newArray.length) {
      var updatedArray = [].concat((0, _toConsumableArray2["default"])(newArray.slice(0, index)), (0, _toConsumableArray2["default"])(newArray.slice(index + 1)));
      setArrayPaymentMethod(updatedArray);
    } else {
      console.error('Índice fuera de los límites del array'); // eslint-disable-line no-console
    }
  };
  var emptyPaymentMethodArray = function emptyPaymentMethodArray() {
    setArrayPaymentMethod([]);
  };
  var calculateTotalPaymentMethod = function calculateTotalPaymentMethod() {
    return arrayPaymentMethod.reduce(function (acc, item) {
      var newSubTotal = parseFloat("".concat(item.paymentMethods.change));
      return acc + newSubTotal;
    }, 0);
  };
  var calculateTotalCashTransactions = function calculateTotalCashTransactions() {
    return arrayPaymentMethod.reduce(function (acc, item) {
      if (!item.cashTransactions) return acc;
      var newSubTotal = parseFloat("".concat(item.cashTransactions.change));
      return acc + newSubTotal;
    }, 0);
  };
  var calculateTotalMethods = function calculateTotalMethods() {
    var totalCashTransactions = calculateTotalCashTransactions();
    var total = totalCashTransactions;
    return total;
  };
  var calculateTotal = function calculateTotal() {
    var newTotalPaymentMethod = calculateTotalPaymentMethod();
    var newTotalMethods = calculateTotalMethods();
    setTotalPaymentMethod(newTotalPaymentMethod);
    setTotalMethods(newTotalMethods);
  };
  var changeCashCurrenciesId = function changeCashCurrenciesId(value) {
    var newValue;
    if (value !== null && value !== void 0 && value.value) {
      newValue = value.value === '' || value.value === '0' ? '' : value.value;
    } else {
      newValue = '';
    }
    var valid = validationCurrenciesId(newValue);
    if (valid) {
      setCurrenciesId(newValue === '' ? 0 : parseInt(newValue, 10));
      setCurrenciesIdDefault({
        value: newValue,
        label: value !== null && value !== void 0 && value.label ? value.label : 'Selecciona la Moneda'
      });
      useCashTransactions.actions.setCurrenciesId(newValue === '' ? 0 : parseInt(newValue, 10));
      usePaymentMethods.actions.setCurrenciesId(newValue === '' ? 0 : parseInt(newValue, 10));
    }
  };
  _react["default"].useEffect(function () {
    calculateTotal();
  }, [arrayPaymentMethod]); // eslint-disable-line react-hooks/exhaustive-deps

  /**
   * Export
   *
   *
   */
  var states = {
    arrayPaymentMethod: arrayPaymentMethod,
    totalPaymentMethod: totalPaymentMethod,
    totalMethods: totalMethods,
    currenciesId: currenciesId,
    currenciesIdValid: currenciesIdValid,
    currenciesIdDefault: currenciesIdDefault,
    currenciesIdOptions: currenciesIdOptions,
    change: change,
    debitAmount: debitAmount,
    depositAmount: depositAmount,
    type: type
  };
  var actions = {
    infoReset: infoReset,
    addCashTransaction: addCashTransaction,
    emptyPaymentMethodArray: emptyPaymentMethodArray,
    deletePaymentMethod: deletePaymentMethod,
    validationCurrenciesId: validationCurrenciesId,
    changeCashCurrenciesId: changeCashCurrenciesId,
    addTransferCashRegister: addTransferCashRegister,
    addTransferBankRegister: addTransferBankRegister,
    setChange: setChange,
    setDebitAmount: setDebitAmount,
    setDepositAmount: setDepositAmount,
    setType: setType,
    partiallyInfoReset: partiallyInfoReset,
    addElectronicPaymentMethod: addElectronicPaymentMethod,
    addCreditPaymentMethod: addCreditPaymentMethod,
    addSinglePaymentMethod: addSinglePaymentMethod,
    addCreditPaymentPaymentMethod: addCreditPaymentPaymentMethod
  };
  return {
    states: states,
    actions: actions,
    usePaymentMethods: usePaymentMethods,
    useCashTransactions: useCashTransactions,
    useBankTransactions: useBankTransactions,
    useCreditOpening: useCreditOpening,
    pages: pages
  };
}