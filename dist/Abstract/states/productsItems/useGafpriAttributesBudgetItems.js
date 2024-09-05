"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useGafpriAttributesBudgetItems = useGafpriAttributesBudgetItems;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
var _helpers = require("../../../helpers");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function useGafpriAttributesBudgetItems(_ref) {
  var useError = _ref.useError;
  var _useState = (0, _react.useState)(''),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    subTotal = _useState2[0],
    setSubTotal = _useState2[1];
  var _useState3 = (0, _react.useState)(''),
    _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
    subTotalTax = _useState4[0],
    setSubTotalTax = _useState4[1];
  var _useState5 = (0, _react.useState)(''),
    _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
    total = _useState6[0],
    setTotal = _useState6[1];
  var _useState7 = (0, _react.useState)(''),
    _useState8 = (0, _slicedToArray2["default"])(_useState7, 2),
    type = _useState8[0],
    setType = _useState8[1];
  var _useState9 = (0, _react.useState)(''),
    _useState10 = (0, _slicedToArray2["default"])(_useState9, 2),
    taxClass = _useState10[0],
    setTaxClass = _useState10[1];
  var _useState11 = (0, _react.useState)([]),
    _useState12 = (0, _slicedToArray2["default"])(_useState11, 2),
    shoppingCart = _useState12[0],
    setShoppingCart = _useState12[1];
  var infoReset = function infoReset() {
    setSubTotal('');
    setSubTotalTax('');
    setTotal('');
    setType('');
    setTaxClass('');
    setShoppingCart([]);
  };

  // Validation Functions
  var validationShoppingCart = function validationShoppingCart(value) {
    return value.length <= 20;
  };

  // Funciones de Change

  var changeShoppingCart = function changeShoppingCart(value) {
    var valid = validationShoppingCart([].concat((0, _toConsumableArray2["default"])(shoppingCart), [value]));
    if (valid) {
      setShoppingCart(function (prevCart) {
        return [].concat((0, _toConsumableArray2["default"])(prevCart), [value]);
      });
    } else {
      useError.actions.changeError(['No se pueden agregar más de 20 productos al carrito']);
    }
  };
  var voidShoppingCart = function voidShoppingCart() {
    setShoppingCart([]);
  };
  var updateShoppingCartItem = function updateShoppingCartItem(index, updatedItem) {
    setShoppingCart(function (prevCart) {
      var updatedCart = (0, _toConsumableArray2["default"])(prevCart);
      if (index >= 0 && index < updatedCart.length) {
        updatedCart[index] = updatedItem;
      }
      return updatedCart;
    });
  };
  var removeShoppingCartItem = function removeShoppingCartItem(index) {
    setShoppingCart(function (prevCart) {
      var updatedCart = (0, _toConsumableArray2["default"])(prevCart);
      if (index >= 0 && index < updatedCart.length) {
        updatedCart.splice(index, 1);
      }
      return updatedCart;
    });
  };
  var calculateSubTotal = function calculateSubTotal() {
    return shoppingCart.reduce(function (acc, item) {
      var newSubTotal = item.qty * item.price;
      return acc + newSubTotal;
    }, 0);
  };
  var calculateSubTotalTax = function calculateSubTotalTax() {
    return shoppingCart.reduce(function (acc, item) {
      var newSubTotalTax = item.qty * item.price * 0;
      return acc + newSubTotalTax;
    }, 0);
  };
  var calculateTotal = function calculateTotal() {
    var newSubTotal = calculateSubTotal();
    setSubTotal("".concat(newSubTotal));
    var newSubTotalTax = calculateSubTotalTax();
    setSubTotalTax("".concat(newSubTotalTax));
    var newTotal = newSubTotal + newSubTotalTax;
    setTotal("".concat(newTotal));
    return newTotal;
  };
  var addItemToCart = function addItemToCart(product) {
    var item = {
      productsPostsId: product.postsId,
      sku: product.sku,
      name: product.name,
      cost: 0,
      qty: 1,
      price: parseFloat("".concat(product.salesPrice)),
      type: product.type,
      taxClass: product.taxClass || ''
    };
    var valid = validationShoppingCart([].concat((0, _toConsumableArray2["default"])(shoppingCart), [item]));
    if (valid) {
      setShoppingCart(function (prevCart) {
        return [].concat((0, _toConsumableArray2["default"])(prevCart), [item]);
      });
    } else {
      useError.actions.changeError(['No se pueden agregar más de 20 productos al carrito']);
    }
  };
  var updateQtyItemCart = function updateQtyItemCart(index, value) {
    setShoppingCart(function (prevCartItems) {
      return prevCartItems.map(function (product, i) {
        if (index === i) {
          var newValue = value === '' ? 0 : parseFloat(value);
          if (newValue >= 0) {
            return _objectSpread(_objectSpread({}, product), {}, {
              qty: newValue
            });
          }
          return product;
        }
        return product;
      });
    });
  };
  var updatePriceItemCart = function updatePriceItemCart(index, value) {
    setShoppingCart(function (prevCartItems) {
      return prevCartItems.map(function (product, i) {
        if (index === i) {
          var newValue = value === '' ? 0 : parseFloat(value);
          if (newValue >= 0) {
            return _objectSpread(_objectSpread({}, product), {}, {
              price: newValue
            });
          }
          return product;
        }
        return product;
      });
    });
  };
  var addBudgetItemToCart = function addBudgetItemToCart(budgetItem) {
    var _parseFloat;
    var item = {
      productsPostsId: budgetItem.productsPostsId,
      sku: budgetItem.sku,
      name: budgetItem.name,
      cost: (_parseFloat = parseFloat("".concat(budgetItem.cost))) !== null && _parseFloat !== void 0 ? _parseFloat : 0,
      qty: budgetItem.qty,
      price: parseFloat("".concat(budgetItem.price)),
      type: budgetItem.type,
      taxClass: budgetItem.taxClass || ''
    };
    var valid = validationShoppingCart([].concat((0, _toConsumableArray2["default"])(shoppingCart), [item]));
    if (valid) {
      setShoppingCart(function (prevCart) {
        return [].concat((0, _toConsumableArray2["default"])(prevCart), [item]);
      });
    } else {
      useError.actions.changeError(['No se pueden agregar más de 20 productos al carrito']);
    }
  };
  var addOrderItemToCart = function addOrderItemToCart(orderItem) {
    var _parseFloat2;
    var item = {
      productsPostsId: orderItem.productsPostsId,
      sku: orderItem.sku,
      name: orderItem.name,
      cost: (_parseFloat2 = parseFloat("".concat(orderItem.cost))) !== null && _parseFloat2 !== void 0 ? _parseFloat2 : 0,
      qty: orderItem.qty,
      price: parseFloat("".concat(orderItem.price)),
      type: orderItem.type,
      taxClass: orderItem.taxClass || ''
    };
    var valid = validationShoppingCart([].concat((0, _toConsumableArray2["default"])(shoppingCart), [item]));
    if (valid) {
      setShoppingCart(function (prevCart) {
        return [].concat((0, _toConsumableArray2["default"])(prevCart), [item]);
      });
    } else {
      useError.actions.changeError(['No se pueden agregar más de 20 productos al carrito']);
      (0, _helpers.scrollToTop)();
    }
  };
  var uploadBudgetItems = function uploadBudgetItems(orderItems) {
    orderItems.forEach(function (orderItem) {
      addBudgetItemToCart(orderItem);
      return null;
    });
  };
  var uploadOrderItems = function uploadOrderItems(orderItems) {
    orderItems.forEach(function (orderItem) {
      addOrderItemToCart(orderItem);
      return null;
    });
  };
  _react["default"].useEffect(function () {
    calculateTotal();
  }, [shoppingCart]); // eslint-disable-line react-hooks/exhaustive-deps

  /**
   * Export
   *
   *
   */
  var states = {
    subTotal: subTotal,
    subTotalTax: subTotalTax,
    total: total,
    type: type,
    taxClass: taxClass,
    shoppingCart: shoppingCart
  };
  var actions = {
    validationShoppingCart: validationShoppingCart,
    changeShoppingCart: changeShoppingCart,
    voidShoppingCart: voidShoppingCart,
    updateShoppingCartItem: updateShoppingCartItem,
    removeShoppingCartItem: removeShoppingCartItem,
    infoReset: infoReset,
    calculateSubTotal: calculateSubTotal,
    calculateSubTotalTax: calculateSubTotalTax,
    calculateTotal: calculateTotal,
    addItemToCart: addItemToCart,
    updateQtyItemCart: updateQtyItemCart,
    updatePriceItemCart: updatePriceItemCart,
    uploadBudgetItems: uploadBudgetItems,
    uploadOrderItems: uploadOrderItems
  };
  return {
    states: states,
    actions: actions
  };
}