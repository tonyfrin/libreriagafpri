"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CashRegisterForm = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _react = _interopRequireDefault(require("react"));
var _css = require("@emotion/css");
var _Components = require("../../Components");
var _Button = require("../Button");
var _Modal = require("../Modal");
var _Header = require("../Header");
var _Table = require("../Table");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9;
var bodyMainContainerStyle = function bodyMainContainerStyle() {
  return (0, _css.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  justify-content: center;\n  width: 100%;\n  margin-top: 10px;\n"])));
};
var bodyContainerStyle = function bodyContainerStyle() {
  return (0, _css.css)(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  justify-content: center;\n  width: 95%;\n"])));
};
var leftMainBodyContainerStyle = function leftMainBodyContainerStyle() {
  return (0, _css.css)(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n  width: 60%;\n  display: block;\n"])));
};
var rigthMainBodyContainerStyle = function rigthMainBodyContainerStyle() {
  return (0, _css.css)(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2["default"])(["\n  width: 40%;\n  display: block;\n"])));
};
var leftBodyContainerStyle = function leftBodyContainerStyle() {
  return (0, _css.css)(_templateObject5 || (_templateObject5 = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n"])));
};
var rightBodyContainerStyle = function rightBodyContainerStyle() {
  return (0, _css.css)(_templateObject6 || (_templateObject6 = (0, _taggedTemplateLiteral2["default"])([""])));
};
var expensesContainerStyle = function expensesContainerStyle() {
  return (0, _css.css)(_templateObject7 || (_templateObject7 = (0, _taggedTemplateLiteral2["default"])(["\n  background-color: rgba(255, 255, 255, 0.75);\n  border-radius: 10px;\n  margin: 1em 0.5em;\n  width: 95%;\n  height: auto;\n"])));
};
var conciliatedContainerStyle = function conciliatedContainerStyle() {
  return (0, _css.css)(_templateObject8 || (_templateObject8 = (0, _taggedTemplateLiteral2["default"])(["\n  background: linear-gradient(\n    to bottom,\n    rgb(77, 174, 205, 0.75),\n    rgb(96, 100, 124, 0.55)\n  );\n  border-radius: 10px;\n  margin: 1em 0.5em;\n  color: #fff;\n  height: auto;\n  padding: 20px;\n"])));
};
var expensesBodyContainerStyle = function expensesBodyContainerStyle() {
  return (0, _css.css)(_templateObject9 || (_templateObject9 = (0, _taggedTemplateLiteral2["default"])(["\n  width: 90%;\n  margin: auto;\n  padding: 10px 0px;\n"])));
};
var CashRegisterForm = exports.CashRegisterForm = function CashRegisterForm(_ref) {
  var _useLogin$states$curr;
  var use = _ref.use,
    siteOptions = _ref.siteOptions,
    useExpenses = _ref.useExpenses,
    useCurrencies = _ref.useCurrencies,
    useEntity = _ref.useEntity,
    entityMenu = _ref.entityMenu,
    usePaymentTransferCashRegister = _ref.usePaymentTransferCashRegister,
    useIncome = _ref.useIncome,
    useLogin = _ref.useLogin;
  var current = use.data.actions.getById(use.attributes.states.currentId);
  var currentCashRegisterPostId = use.data.actions.getCurrentCashRegisterPostsId(use.attributes.states.currentId);
  if (!current) return /*#__PURE__*/_react["default"].createElement(_Components.Loading, null);
  var cashTransactions = current.cashRegister[0].cashTransactions;
  var expenses = cashTransactions.filter(function (item) {
    return item.type === 'debit';
  });
  var income = cashTransactions.filter(function (item) {
    return item.type === 'deposit';
  });
  var currentBalance = current.cashRegisterTypeCurrencies;
  var initBalance = current.cashRegister[0].cashRegisterCurrencies;
  var conciliate = function conciliate() {
    use.api.actions.conciliate(currentCashRegisterPostId);
  };
  var returnModal = function returnModal() {
    use.subPages.actions.onFetching();
    use.pages.actions.closeModalPage();
    useExpenses.pages.actions.returnInit();
    usePaymentTransferCashRegister.pages.actions.returnInit();
    useIncome.pages.actions.returnInit();
    use.subPages.actions.onInit();
  };
  var goExpenses = function goExpenses() {
    useExpenses.attributes.actions.setCashRegisterPostsId(currentCashRegisterPostId);
    useExpenses.attributes.actions.setCashRegisterTypePostsId(current.postsId);
    use.subPages.actions.onExpenses();
    use.pages.actions.openModalPage();
  };
  var goTransfer = function goTransfer() {
    usePaymentTransferCashRegister.attributes.actions.setCurrentCashRegisterPostsId(currentCashRegisterPostId);
    usePaymentTransferCashRegister.attributes.actions.setCurrentCashRegisterTypePostsId(current.postsId);
    use.subPages.actions.onTransfer();
    use.pages.actions.openModalPage();
  };
  var goIncome = function goIncome() {
    useIncome.attributes.actions.setCashRegisterPostsId(currentCashRegisterPostId);
    useIncome.attributes.actions.setCashRegisterTypePostsId(current.postsId);
    use.subPages.actions.onIncome();
    use.pages.actions.openModalPage();
  };
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Header.CashRegisterHeader, {
    error: use.error.states.error,
    crName: current.name,
    cashRegisterPostId: currentCashRegisterPostId,
    dateOpen: "".concat(current.posts.createdAt),
    author: ((_useLogin$states$curr = useLogin.states.currentUser) === null || _useLogin$states$curr === void 0 ? void 0 : _useLogin$states$curr.name) || ''
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _css.cx)(bodyMainContainerStyle())
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _css.cx)(bodyContainerStyle())
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _css.cx)(leftMainBodyContainerStyle())
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _css.cx)(leftBodyContainerStyle())
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _css.cx)(expensesContainerStyle())
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _css.cx)(expensesBodyContainerStyle())
  }, /*#__PURE__*/_react["default"].createElement(_Table.CashTransationsTable, {
    title: "egresos",
    use: use,
    siteOptions: siteOptions,
    cashTransactions: expenses,
    currentPage: use.paginations.states.debitCurrentPage,
    setCurrentPage: use.paginations.actions.setDebitCurrentPage
  }), /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    title: "Egreso",
    styles: {
      fontSize: '10px',
      padding: '0.3rem',
      margin: '0px 15px 0px 0px'
    },
    buttonProps: {
      onClick: function onClick() {
        return goExpenses();
      }
    }
  }), /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    title: "Traspaso",
    styles: {
      fontSize: '10px',
      padding: '0.3rem'
    },
    buttonProps: {
      onClick: function onClick() {
        return goTransfer();
      }
    }
  }))), /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _css.cx)(expensesContainerStyle())
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _css.cx)(expensesBodyContainerStyle())
  }, /*#__PURE__*/_react["default"].createElement(_Table.CashTransationsTable, {
    title: "ingresos",
    use: use,
    siteOptions: siteOptions,
    cashTransactions: income,
    currentPage: use.paginations.states.creditCurrentPage,
    setCurrentPage: use.paginations.actions.setCreditCurrentPage
  }), /*#__PURE__*/_react["default"].createElement(_Button.Button, {
    title: "Ingreso",
    styles: {
      fontSize: '10px',
      padding: '0.3rem'
    },
    buttonProps: {
      onClick: function onClick() {
        return goIncome();
      }
    }
  }))))), /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _css.cx)(rigthMainBodyContainerStyle())
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _css.cx)(leftBodyContainerStyle())
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _css.cx)(expensesContainerStyle())
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _css.cx)(expensesBodyContainerStyle())
  }, /*#__PURE__*/_react["default"].createElement(_Table.CashBalanceTable, {
    siteOptions: siteOptions,
    currentBalance: currentBalance,
    useCurrencies: useCurrencies
  })))), /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _css.cx)(rightBodyContainerStyle())
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _css.cx)(conciliatedContainerStyle())
  }, /*#__PURE__*/_react["default"].createElement(_Table.ConciliateTable, {
    expenses: expenses,
    income: income,
    siteOptions: siteOptions,
    currentBalance: currentBalance,
    initBalance: initBalance,
    conciliate: conciliate
  })))))), /*#__PURE__*/_react["default"].createElement(_Modal.Modal, {
    open: use.pages.states.modalPage
  }, /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, use.subPages.states.isFetching && /*#__PURE__*/_react["default"].createElement(_Components.Loading, null), use.subPages.states.isExpenses && /*#__PURE__*/_react["default"].createElement(_Components.ExpensesCashRegister, {
    use: useExpenses,
    useCurrencies: useCurrencies,
    useEntity: useEntity,
    returnInitModule: returnModal,
    sitesOptions: siteOptions,
    menuEntity: entityMenu
  }), use.subPages.states.isTransfer && /*#__PURE__*/_react["default"].createElement(_Components.PaymentTransferCashRegister, {
    use: usePaymentTransferCashRegister,
    useCurrencies: useCurrencies,
    sitesOptions: siteOptions,
    returnInitModule: returnModal
  }), use.subPages.states.isIncome && /*#__PURE__*/_react["default"].createElement(_Components.IncomeCashRegister, {
    use: useIncome,
    useEntity: useEntity,
    useCurrencies: useCurrencies,
    returnInitModule: returnModal,
    sitesOptions: siteOptions,
    menuEntity: entityMenu
  }))));
};