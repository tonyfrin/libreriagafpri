"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreditStep = void 0;
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _react = _interopRequireWildcard(require("react"));
var _css = require("@emotion/css");
var _helpers = require("../../helpers");
var _Header = require("../Header");
var _Table = require("../Table");
var _Button = require("../Button");
var _Input = require("../Input");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var orderStylesMainContainer = function orderStylesMainContainer() {
  return (0, _css.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  justify-content: center;\n  margin-top: 20px;\n"])));
};
var orderStylesContainer = function orderStylesContainer() {
  return (0, _css.css)(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  background-color: #fff;\n  padding: 10px 40px;\n  width: 90%;\n  border-radius: 10px;\n  height: auto;\n  margin: 0;\n"])));
};
var creditHeaderLineContainerStyles = function creditHeaderLineContainerStyles() {
  return (0, _css.css)(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n  background-color: #eaeaea;\n  margin: 1%;\n  border-radius: 5px;\n  padding: 1%;\n  display: flex;\n  font-size: 12px;\n"])));
};
var creditHeaderLineColStyles = function creditHeaderLineColStyles(width, custom) {
  return (0, _css.css)(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2["default"])(["\n  text-align: center;\n  width: ", ";\n  margin: auto 0px;\n  ", ";\n"])), width, custom || '');
};
var TdStyle = function TdStyle(width, custom) {
  return (0, _css.css)(_templateObject5 || (_templateObject5 = (0, _taggedTemplateLiteral2["default"])(["\n  width: ", ";\n  border: 1px solid #ddd;\n  padding: 4px;\n  text-align: center;\n  ", "\n"])), width, custom || '');
};
var checkboxConatinerStyle = function checkboxConatinerStyle() {
  return (0, _css.css)(_templateObject6 || (_templateObject6 = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"])));
};
var buttonLoopContainerStyle = function buttonLoopContainerStyle() {
  return (0, _css.css)(_templateObject7 || (_templateObject7 = (0, _taggedTemplateLiteral2["default"])(["\n  width: 95%;\n  overflow: auto;\n  margin: 20px auto;\n  display: flex;\n  justify-content: flex-end;\n"])));
};
var CreditStep = exports.CreditStep = function CreditStep(_ref) {
  var use = _ref.use,
    useCredits = _ref.useCredits,
    useOrder = _ref.useOrder,
    siteOptions = _ref.siteOptions;
  var _useState = (0, _react.useState)(null),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    selectedCredit = _useState2[0],
    setSelectedCredit = _useState2[1];
  var _useState3 = (0, _react.useState)([]),
    _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
    checkboxStates = _useState4[0],
    setCheckboxStates = _useState4[1];
  var _useState5 = (0, _react.useState)({}),
    _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
    inputValues = _useState6[0],
    setInputValues = _useState6[1];
  var goOrderView = function goOrderView(postsId) {
    useOrder.attributes.actions.setCurrentId(postsId);
    useCredits.pages.actions.onOrderView();
  };
  var goToPayment = function goToPayment() {
    if (Object.keys(inputValues).length > 0) {
      var total = 0;
      Object.keys(inputValues).forEach(function (key) {
        var postsId = parseInt(key);
        var value = parseFloat("".concat(inputValues[postsId]));
        total += value;
        use.attributes.useGeneralPaymentMethods.actions.addCreditPaymentPaymentMethod(postsId, siteOptions.currencyId, value);
      });
      use.attributes.actions.setTotal("".concat(total));
      useCredits.pages.actions.onCreditPayment();
    }
  };
  (0, _react.useEffect)(function () {
    setCheckboxStates([]);
    setInputValues({});
  }, [selectedCredit]);
  var handleInputChange = function handleInputChange(e, postsId, balance) {
    var newValue = parseFloat(e.target.value);
    if (Number.isNaN(newValue) && inputValues[postsId]) {
      removeInputValue(postsId);
      return;
    }
    if (newValue > balance) {
      setInputValues(function (prevInputValues) {
        return _objectSpread(_objectSpread({}, prevInputValues), {}, (0, _defineProperty2["default"])({}, postsId, balance));
      });
      return;
    }
    setInputValues(function (prevInputValues) {
      return _objectSpread(_objectSpread({}, prevInputValues), {}, (0, _defineProperty2["default"])({}, postsId, newValue));
    });
  };
  var removeInputValue = function removeInputValue(postsIdToRemove) {
    setInputValues(function (prevInputValues) {
      // Crear una copia del estado actual
      var newInputValues = _objectSpread({}, prevInputValues);
      // Eliminar el postsId del objeto
      delete newInputValues[postsIdToRemove];
      // Devolver el nuevo objeto de valores de entrada
      return newInputValues;
    });
  };
  var handleCheckboxChange = function handleCheckboxChange(index, coIndex, checkboxIndex, value, postsId, amount) {
    setCheckboxStates(function (prevStates) {
      var newStates = (0, _toConsumableArray2["default"])(prevStates);

      // Asegúrate de que haya un estado previo para el índice actual
      if (!newStates[index]) {
        newStates[index] = [];
      }

      // Asegúrate de que haya un estado previo para el índice actual del array interno de checkboxes
      if (!newStates[index][coIndex]) {
        newStates[index][coIndex] = {
          checkbox1: false,
          checkbox2: false
        };
      }

      // Actualiza el estado del checkbox
      newStates[index][coIndex][checkboxIndex] = !value;

      // Desactiva el otro checkbox solo si se hace clic en el mismo checkbox
      if (newStates[index][coIndex][checkboxIndex] && checkboxIndex === 'checkbox1') {
        newStates[index][coIndex].checkbox2 = false;
      } else if (newStates[index][coIndex][checkboxIndex] && checkboxIndex === 'checkbox2') {
        newStates[index][coIndex].checkbox1 = false;
      }
      return newStates;
    });
    if (value) {
      removeInputValue(postsId);
    }
    if (amount && !value) {
      setInputValues(function (prevInputValues) {
        return _objectSpread(_objectSpread({}, prevInputValues), {}, (0, _defineProperty2["default"])({}, postsId, parseFloat(amount)));
      });
    }
  };
  var toggleCreditDetails = function toggleCreditDetails(index) {
    setSelectedCredit(selectedCredit === index ? null : index);
  };
  var credits = useCredits.data.states.items.data.items || [];
  var sortedCredits = credits.slice().sort(function (a, b) {
    var comparison = a.entity.name.localeCompare(b.entity.name, undefined, {
      sensitivity: 'base'
    });
    return comparison;
  });
  var items = sortedCredits.map(function (item, index) {
    if (item.balance > 0) {
      var _item$entity;
      var documentId = item.entity.documentId[0].index ? "".concat(item.entity.documentId[0].index, "-").concat(item.entity.documentId[0].digit) : item.entity.documentId[0].digit;
      var lastName = ((_item$entity = item.entity) === null || _item$entity === void 0 ? void 0 : _item$entity.lastName) || '';
      var fullName = "".concat(item.entity.name, " ").concat(lastName);
      var header = ['fecha', 'Credito#', 'Pedido#', 'Limite de Pago', 'saldo', 'Pagar Todo', 'Abono'];
      var creditOpening = item.creditOpening || [];
      creditOpening.sort(function (a, b) {
        var postsIdA = a.postsId || 0;
        var postsIdB = b.postsId || 0;
        return postsIdA - postsIdB;
      });
      var data = creditOpening.map(function (co, coIndex) {
        var _co$paymentMethods, _co$posts;
        var orderId = ((_co$paymentMethods = co.paymentMethods) === null || _co$paymentMethods === void 0 || (_co$paymentMethods = _co$paymentMethods.payment) === null || _co$paymentMethods === void 0 || (_co$paymentMethods = _co$paymentMethods.order) === null || _co$paymentMethods === void 0 || (_co$paymentMethods = _co$paymentMethods[0]) === null || _co$paymentMethods === void 0 ? void 0 : _co$paymentMethods.postsId) || 0;
        return [/*#__PURE__*/_react["default"].createElement("td", {
          className: (0, _css.cx)(TdStyle('14.2857143%', "text-align: center;"))
        }, (0, _helpers.formatDate)("".concat((_co$posts = co.posts) === null || _co$posts === void 0 ? void 0 : _co$posts.createdAt))), /*#__PURE__*/_react["default"].createElement("td", {
          className: (0, _css.cx)(TdStyle('14.2857143%', "text-align: center;"))
        }, co.postsId), /*#__PURE__*/_react["default"].createElement("td", {
          className: (0, _css.cx)(TdStyle('14.2857143%', "text-align: center;"))
        }, /*#__PURE__*/_react["default"].createElement(_Button.Button, {
          title: orderId,
          styles: {
            fontSize: '8px'
          },
          buttonProps: {
            onClick: function onClick() {
              goOrderView(orderId);
            }
          }
        })), /*#__PURE__*/_react["default"].createElement("td", {
          className: (0, _css.cx)(TdStyle('14.2857143%', "text-align: center;"))
        }, (0, _helpers.formatDate)("".concat(co.payDayLimit))), /*#__PURE__*/_react["default"].createElement("td", {
          className: (0, _css.cx)(TdStyle('14.2857143%', "text-align: center;"))
        }, (0, _helpers.decimalFormatPriceConverter)(co.balance || 0, siteOptions.DECIMAL_NUMBERS, siteOptions.CURRENCY_SYMBOL, siteOptions.CURRENCY_LOCATION)), /*#__PURE__*/_react["default"].createElement("td", {
          className: (0, _css.cx)(TdStyle('14.2857143%', "text-align: center;"))
        }, /*#__PURE__*/_react["default"].createElement(_Input.Input, {
          inputProps: {
            type: 'checkbox',
            checked: checkboxStates[index] && checkboxStates[index][coIndex] ? checkboxStates[index][coIndex].checkbox1 : false,
            onChange: function onChange() {
              return handleCheckboxChange(index, coIndex, 'checkbox1', checkboxStates[index] && checkboxStates[index][coIndex] ? checkboxStates[index][coIndex].checkbox1 : false, "".concat(co.postsId), "".concat(co.balance));
            }
          }
        })), /*#__PURE__*/_react["default"].createElement("td", {
          className: (0, _css.cx)(TdStyle('14.2857143%', "text-align: center;"))
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: (0, _css.cx)(checkboxConatinerStyle())
        }, /*#__PURE__*/_react["default"].createElement(_Input.Input, {
          containerStyles: {
            margin: 'auto',
            width: '25%'
          },
          inputProps: {
            type: 'checkbox',
            checked: checkboxStates[index] && checkboxStates[index][coIndex] ? checkboxStates[index][coIndex].checkbox2 : false,
            onChange: function onChange() {
              return handleCheckboxChange(index, coIndex, 'checkbox2', checkboxStates[index] && checkboxStates[index][coIndex] ? checkboxStates[index][coIndex].checkbox2 : false, "".concat(co.postsId));
            }
          }
        }), checkboxStates[index] && checkboxStates[index][coIndex] && checkboxStates[index][coIndex].checkbox2 && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Input.Input, {
          containerStyles: {
            margin: 'auto',
            width: '75%'
          },
          styles: {
            fontSize: '10px'
          },
          inputProps: {
            type: 'number',
            placeholder: 'Monto',
            value: inputValues["".concat(co.postsId)] || '',
            onChange: function onChange(e) {
              return handleInputChange(e, "".concat(co.postsId), parseFloat("".concat(co.balance)));
            },
            max: parseFloat("".concat(co.balance))
          }
        }))))];
      });
      return [/*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
        className: (0, _css.cx)(creditHeaderLineContainerStyles())
      }, /*#__PURE__*/_react["default"].createElement("span", {
        className: (0, _css.cx)(creditHeaderLineColStyles('16.66666666%'))
      }, documentId), /*#__PURE__*/_react["default"].createElement("span", {
        className: (0, _css.cx)(creditHeaderLineColStyles('50%'))
      }, fullName), /*#__PURE__*/_react["default"].createElement("span", {
        className: (0, _css.cx)(creditHeaderLineColStyles('25%'))
      }, (0, _helpers.decimalFormatPriceConverter)(item.balance || 0, siteOptions.DECIMAL_NUMBERS, siteOptions.CURRENCY_SYMBOL || '', siteOptions.CURRENCY_LOCATION)), /*#__PURE__*/_react["default"].createElement("span", {
        className: (0, _css.cx)(creditHeaderLineColStyles('8.33333333%'))
      }, /*#__PURE__*/_react["default"].createElement(_Button.Button, {
        title: "Ver",
        styles: {
          fontSize: '8px'
        },
        buttonProps: {
          onClick: function onClick() {
            return toggleCreditDetails(index);
          }
        }
      }))), selectedCredit === index && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_Table.SingleTable, {
        headers: header,
        data: data,
        containerStyles: {
          width: '98%',
          custom: "\n                    margin: auto;\n                "
        }
      }), /*#__PURE__*/_react["default"].createElement("div", {
        className: (0, _css.cx)(buttonLoopContainerStyle())
      }, /*#__PURE__*/_react["default"].createElement(_Button.Button, {
        title: "Cerrar",
        styles: {
          fontSize: '8px',
          margin: '0px 15px 0px 0px',
          backgroundColor: '#c12429'
        },
        buttonProps: {
          onClick: function onClick() {
            return toggleCreditDetails(index);
          }
        }
      }), /*#__PURE__*/_react["default"].createElement(_Button.Button, {
        title: "Pagar",
        styles: {
          fontSize: '8px',
          backgroundColor: '#439b57'
        },
        buttonProps: {
          onClick: function onClick() {
            return goToPayment();
          }
        }
      })))))];
    }
    return [];
  });
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Header.PaymentHeader, {
    error: use.error.states.error,
    moduleName: "Modulo de entradas",
    stepName: "Cuentas por cobrar",
    step: "2",
    returnFunction: use.subPagesDeposit.actions.onOrder,
    returnTitle: "Regresar"
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _css.cx)(orderStylesMainContainer())
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _css.cx)(orderStylesContainer())
  }, /*#__PURE__*/_react["default"].createElement(_Table.SingleBodyTable, {
    data: items
  }))));
};