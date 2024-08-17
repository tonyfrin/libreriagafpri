"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrderPendingTable = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _react = _interopRequireDefault(require("react"));
var _css = require("@emotion/css");
var _Title = require("../Title");
var _helpers = require("../../helpers");
var _Button = require("../Button");
var _List = require("../List");
var _templateObject;
var orderPendingTdStyle = function orderPendingTdStyle(width, custom) {
  return (0, _css.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  width: ", ";\n  border: 1px solid #ddd;\n  padding: 4px;\n  text-align: center;\n  ", "\n"])), width, custom || '');
};
var OrderPendingTable = exports.OrderPendingTable = function OrderPendingTable(_ref) {
  var _use$data$states$item, _paginated$map;
  var use = _ref.use,
    siteOptions = _ref.siteOptions;
  var ordersPending = ((_use$data$states$item = use.data.states.items.data.items) === null || _use$data$states$item === void 0 ? void 0 : _use$data$states$item.filter(function (item) {
    return item.posts.status === 'on_hold';
  })) || [];
  var sort = use.paginations.actions.sortById(ordersPending, use.paginations.states.orderList) || [];
  var paginated = use.paginations.actions.getPaginated(sort, use.paginations.states.currentPage, use.paginations.states.itemsPerPage);
  var goPayment = function goPayment(id) {
    use.attributes.actions.setCurrentId(id);
    use.pages.actions.onOrderPayment();
  };
  var items = (_paginated$map = paginated === null || paginated === void 0 ? void 0 : paginated.map(function (item) {
    return [/*#__PURE__*/_react["default"].createElement("td", {
      className: (0, _css.cx)(orderPendingTdStyle('20%'))
    }, item.postsId), /*#__PURE__*/_react["default"].createElement("td", {
      className: (0, _css.cx)(orderPendingTdStyle('20%'))
    }, (0, _helpers.formatDate)("".concat(item.posts.createdAt))), /*#__PURE__*/_react["default"].createElement("td", {
      className: (0, _css.cx)(orderPendingTdStyle('20%'))
    }, item.orderCustomer[0].lastName ? "".concat(item.orderCustomer[0].name, " ").concat(item.orderCustomer[0].lastName) : "".concat(item.orderCustomer[0].name)), /*#__PURE__*/_react["default"].createElement("td", {
      className: (0, _css.cx)(orderPendingTdStyle('20%'))
    }, (0, _helpers.decimalFormatPriceConverter)(item.total || 0, siteOptions.DECIMAL_NUMBERS, siteOptions.CURRENCY_SYMBOL, siteOptions.CURRENCY_LOCATION)), /*#__PURE__*/_react["default"].createElement("td", {
      className: (0, _css.cx)(orderPendingTdStyle('20%'))
    }, /*#__PURE__*/_react["default"].createElement(_Button.Button, {
      title: "Ver",
      styles: {
        fontSize: '8px',
        margin: '0px 20px 0px 0px'
      },
      buttonProps: {
        onClick: function onClick() {
          return use.pages.actions.goOrderView(item.postsId);
        }
      }
    }), /*#__PURE__*/_react["default"].createElement(_Button.Button, {
      title: "Pagar",
      styles: {
        fontSize: '8px',
        margin: '0px 20px 0px 0px',
        backgroundColor: '#439b57'
      },
      buttonProps: {
        onClick: function onClick() {
          return goPayment(item.postsId);
        }
      }
    }), /*#__PURE__*/_react["default"].createElement(_Button.Button, {
      title: "Cancelar",
      styles: {
        fontSize: '8px',
        margin: '0px',
        backgroundColor: '#c12429'
      },
      buttonProps: {
        onClick: function onClick() {
          return use.api.actions.erase(item.postsId);
        }
      }
    }))];
  })) !== null && _paginated$map !== void 0 ? _paginated$map : [];
  var header = ['#', 'fecha', 'cliente', 'monto', 'acciones'];
  var totalPages = Math.ceil(sort.length / use.paginations.states.itemsPerPage);
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_Title.Title2, {
    title: 'Pedidos en espera',
    styles: {
      fontSize: '0.9rem',
      margin: '0px 0px 10px 0px',
      fontWeight: '700'
    }
  }), /*#__PURE__*/_react["default"].createElement(_List.SingleList, {
    headers: header,
    items: items,
    propsPagination: {
      currentPage: use.paginations.states.currentPage,
      setCurrentPage: use.paginations.actions.setCurrentPage,
      totalPages: totalPages
    }
  })));
};