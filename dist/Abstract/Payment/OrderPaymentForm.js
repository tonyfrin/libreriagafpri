"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrderPaymentForm = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _react = _interopRequireDefault(require("react"));
var _css = require("@emotion/css");
var _Components = require("../../Components");
var _helpers = require("../../helpers");
var _Form = require("../Form");
var _Header = require("../Header");
var _Table = require("../Table");
var _templateObject, _templateObject2, _templateObject3;
var orderStylesMainContainer = function orderStylesMainContainer() {
  return (0, _css.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  justify-content: center;\n  margin-top: 20px;\n"])));
};
var orderStylesContainer = function orderStylesContainer() {
  return (0, _css.css)(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  background-color: #fff;\n  padding: 10px 40px;\n  width: 90%;\n  border-radius: 10px;\n  height: auto;\n  margin: 0;\n"])));
};
var methodsStylesContainer = function methodsStylesContainer() {
  return (0, _css.css)(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n  width: 98%;\n"])));
};
var OrderPaymentForm = exports.OrderPaymentForm = function OrderPaymentForm(_ref) {
  var use = _ref.use,
    useOrder = _ref.useOrder,
    siteOptions = _ref.siteOptions;
  var order = useOrder.data.actions.getById(useOrder.attributes.states.currentId);
  if (!order) {
    return /*#__PURE__*/_react["default"].createElement(_Components.Loading, null);
  }
  use.attributes.actions.setTotal("".concat(order.total));
  use.attributes.actions.setType('order');
  var goCash = function goCash(type) {
    use.attributes.useGeneralPaymentMethods.actions.setType(type);
    use.subPagesDeposit.actions.openModalPage();
    use.attributes.useGeneralPaymentMethods.pages.actions.onCash();
  };
  var goElectronic = function goElectronic(type, paymentType) {
    use.attributes.useGeneralPaymentMethods.actions.setType(type);
    use.attributes.useGeneralPaymentMethods.usePaymentMethods.actions.setPaymentType(paymentType);
    use.attributes.useGeneralPaymentMethods.useBankTransactions.actions.setPaymentType(paymentType);
    use.subPagesDeposit.actions.openModalPage();
    use.attributes.useGeneralPaymentMethods.pages.actions.onTransfer();
  };
  var goCredit = function goCredit() {
    useOrder.attributes.actions.changeCustomerId(order.customerId);
    use.subPagesDeposit.actions.openModalPage();
    use.attributes.useGeneralPaymentMethods.pages.actions.onCredit();
  };
  var goSingle = function goSingle(type, paymentType) {
    use.attributes.useGeneralPaymentMethods.actions.setType(type);
    use.attributes.useGeneralPaymentMethods.usePaymentMethods.actions.setPaymentType(paymentType);
    use.subPagesDeposit.actions.openModalPage();
    use.attributes.useGeneralPaymentMethods.pages.actions.onSingle();
  };
  var buttonsDeposit = [{
    title: 'Efectivo',
    action: function action() {
      return goCash('deposit');
    }
  }, {
    title: 'Zelle',
    action: function action() {
      return goElectronic('deposit', 'zelle');
    }
  }, {
    title: 'Transferencia',
    action: function action() {
      return goElectronic('deposit', 'transfer');
    }
  }, {
    title: 'Pago Movil',
    action: function action() {
      return goElectronic('deposit', 'pagoMovil');
    }
  }, {
    title: 'Punto de Venta',
    action: function action() {
      return goElectronic('deposit', 'puntoDeVenta');
    }
  }, {
    title: 'Credito',
    action: function action() {
      return goCredit();
    }
  }, {
    title: 'Descuento',
    action: function action() {
      return goSingle('deposit', 'discount');
    }
  }];
  var buttonsDebit = [{
    title: 'Zelle',
    action: function action() {
      return goElectronic('debit', 'zelle');
    }
  }, {
    title: 'Transferencia',
    action: function action() {
      return goElectronic('debit', 'transfer');
    }
  }, {
    title: 'Efectivo',
    action: function action() {
      return goCash('debit');
    }
  }, {
    title: 'Pago Movil',
    action: function action() {
      return goElectronic('debit', 'pagoMovil');
    }
  }, {
    title: 'Sobrante',
    action: function action() {
      return goSingle('debit', 'surplus');
    }
  }];
  var methodsDeposit = [];
  var methodsDebit = [];
  use.attributes.useGeneralPaymentMethods.states.arrayPaymentMethod.map(function (item, index) {
    if (item.paymentMethods.type === 'deposit') {
      methodsDeposit.push({
        title: item.paymentMethods.methodType === 'cash' ? 'Efectivo' : item.paymentMethods.methodType === 'bank' ? 'Transacción Electrónica' : item.paymentMethods.methodType === 'credit' ? 'Credito' : item.paymentMethods.methodType === 'single' ? 'Descuento' : '',
        amount: item.paymentMethods.change,
        remove: function remove() {
          return use.attributes.useGeneralPaymentMethods.actions.deletePaymentMethod(index);
        }
      });
    } else if (item.paymentMethods.type === 'debit') {
      methodsDebit.push({
        title: item.paymentMethods.methodType === 'cash' ? 'Efectivo' : item.paymentMethods.methodType === 'bank' ? 'Transacción Electrónica' : item.paymentMethods.methodType === 'single' ? 'Sobrante' : '',
        amount: item.paymentMethods.change,
        remove: function remove() {
          return use.attributes.useGeneralPaymentMethods.actions.deletePaymentMethod(index);
        }
      });
    }
    return null;
  });
  var totalDeposit = methodsDeposit.reduce(function (accumulator, currentItem) {
    return accumulator + currentItem.amount;
  }, 0);
  var totalDebit = methodsDebit.reduce(function (accumulator, currentItem) {
    return accumulator + currentItem.amount;
  }, 0);
  var totalMethodsPayment = totalDeposit - totalDebit;
  var difference = parseFloat("".concat(order.total)) - totalMethodsPayment;
  use.attributes.actions.setDifference(difference);
  var returnList = function returnList() {
    use.attributes.actions.infoReset();
    useOrder.attributes.actions.infoReset();
    useOrder.pages.actions.onOrderList();
  };
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Header.PaymentHeader, {
    error: use.error.states.error,
    moduleName: "Modulo de entradas",
    stepName: "P\xE1gina de pago de pedidos",
    step: "2",
    returnFunction: returnList,
    returnTitle: "Volver"
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _css.cx)(orderStylesMainContainer())
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _css.cx)(orderStylesContainer())
  }, /*#__PURE__*/_react["default"].createElement(_Header.ModuleHeader, null, /*#__PURE__*/_react["default"].createElement(_Form.PaymentInfoForm, {
    type: "Pago de pedido",
    postsId: "".concat(useOrder.attributes.states.currentId),
    total: (0, _helpers.decimalFormatPriceConverter)(order.total, siteOptions.DECIMAL_NUMBERS, siteOptions.CURRENCY_SYMBOL, siteOptions.CURRENCY_LOCATION),
    totalMethodsPayment: (0, _helpers.decimalFormatPriceConverter)(totalMethodsPayment, siteOptions.DECIMAL_NUMBERS, siteOptions.CURRENCY_SYMBOL, siteOptions.CURRENCY_LOCATION),
    difference: (0, _helpers.decimalFormatPriceConverter)(difference, siteOptions.DECIMAL_NUMBERS, siteOptions.CURRENCY_SYMBOL, siteOptions.CURRENCY_LOCATION)
  }), /*#__PURE__*/_react["default"].createElement(_Form.ButtonsPaymentMethodsForm, {
    buttonsDeposit: buttonsDeposit,
    buttonsDebit: buttonsDebit,
    total: parseFloat("".concat(order.total)),
    depositTotal: totalDeposit,
    debitTotal: totalDebit,
    setNote: use.attributes.actions.setNote,
    add: use.api.actions.addOrderPayment
  })))), /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _css.cx)(orderStylesMainContainer())
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _css.cx)(methodsStylesContainer())
  }, /*#__PURE__*/_react["default"].createElement(_Header.ModuleHeader, {
    containerStyles: {
      custom: "\n                justify-content: space-around;\n                border: none;\n                align-items: flex-start;\n                "
    }
  }, /*#__PURE__*/_react["default"].createElement(_Table.MethodsPaymentTable, {
    title: "Pagos Seleccionados",
    total: totalDeposit,
    methods: methodsDeposit,
    siteOptions: siteOptions
  }), /*#__PURE__*/_react["default"].createElement(_Table.MethodsPaymentTable, {
    title: "Vueltos Seleccionados",
    total: totalDebit,
    methods: methodsDebit,
    siteOptions: siteOptions
  })))));
};