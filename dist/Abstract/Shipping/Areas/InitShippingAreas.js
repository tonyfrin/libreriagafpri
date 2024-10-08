"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InitShippingAreas = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _react = _interopRequireWildcard(require("react"));
var _fa = require("react-icons/fa");
var _css = require("@emotion/css");
var _Button = require("../../Button");
var _Header = require("../../Header");
var _Error = require("../../Error");
var _List = require("../../List");
var _templateObject;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var defaultOptionsButtonMainContainerStyle = (0, _css.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  justify-content: space-evenly;\n"])));
var InitShippingAreas = exports.InitShippingAreas = function InitShippingAreas(_ref) {
  var _paginated$map;
  var use = _ref.use,
    useLogin = _ref.useLogin,
    _ref$optionsButtonMai = _ref.optionsButtonMainContainerStyle,
    optionsButtonMainContainerStyle = _ref$optionsButtonMai === void 0 ? defaultOptionsButtonMainContainerStyle : _ref$optionsButtonMai,
    _ref$updateButtonProp = _ref.updateButtonProps,
    updateButtonProps = _ref$updateButtonProp === void 0 ? {
      title: 'Actualizar',
      styles: {
        fontSize: '10px'
      }
    } : _ref$updateButtonProp,
    _ref$deleteButtonProp = _ref.deleteButtonProps,
    deleteButtonProps = _ref$deleteButtonProp === void 0 ? {
      title: 'Eliminar',
      styles: {
        backgroundColor: '#c12429',
        fontSize: '10px'
      }
    } : _ref$deleteButtonProp,
    _ref$headerProps = _ref.headerProps,
    headerProps = _ref$headerProps === void 0 ? {
      title: 'Zonas de envíos',
      buttonLargeProps: {
        label: 'Añadir zona de envío',
        onClick: use.pages.actions.goAdd,
        Icon: _fa.FaPlus,
        titleButton: 'Agregar',
        description: 'Agrega una nueva zona.'
      }
    } : _ref$headerProps,
    _ref$errorProps = _ref.errorProps,
    errorProps = _ref$errorProps === void 0 ? {
      error: use.error.states.error
    } : _ref$errorProps,
    listProps = _ref.listProps;
  var erase = /*#__PURE__*/function () {
    var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(id) {
      var data;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            if (!use.attributes.actions.validationButtonNext()) {
              _context.next = 15;
              break;
            }
            _context.prev = 1;
            use.pages.actions.onFetching();
            _context.next = 5;
            return use.api.actions.erase(id);
          case 5:
            data = _context.sent;
            if (data.success) {
              use.data.actions.handleDeleted({
                itemId: id
              });
            } else {
              use.error.actions.changeError([data.message]);
            }
            _context.next = 12;
            break;
          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](1);
            use.error.actions.changeError(["".concat(_context.t0)]);
          case 12:
            _context.prev = 12;
            use.pages.actions.onInit();
            return _context.finish(12);
          case 15:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[1, 9, 12, 15]]);
    }));
    return function erase(_x) {
      return _ref2.apply(this, arguments);
    };
  }();
  var ButtonUpdate = function ButtonUpdate(_ref3) {
    var id = _ref3.id;
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: (0, _css.css)(optionsButtonMainContainerStyle)
    }, /*#__PURE__*/_react["default"].createElement(_Button.Button, (0, _extends2["default"])({
      buttonProps: {
        onClick: function onClick() {
          return use.pages.actions.goUpdate(id);
        }
      }
    }, updateButtonProps)), /*#__PURE__*/_react["default"].createElement(_Button.Button, (0, _extends2["default"])({
      buttonProps: {
        onClick: function onClick() {
          return erase(id);
        }
      }
    }, deleteButtonProps)));
  };
  var filtered = use.paginations.actions.filterByName(use.data.states.items, use.paginations.states.searchTerm);
  var areas = use.paginations.actions.sortByName(filtered, use.paginations.states.orderList) || [];
  var paginated = use.paginations.actions.getPaginated(areas, use.paginations.states.currentPage, use.paginations.states.itemsPerPage);
  var items = (_paginated$map = paginated === null || paginated === void 0 ? void 0 : paginated.map(function (item) {
    return [item.name, /*#__PURE__*/_react["default"].createElement(ButtonUpdate, {
      id: item.id
    })];
  })) !== null && _paginated$map !== void 0 ? _paginated$map : [];
  var headers = ['Nombre', 'Opciones'];
  var options = [{
    value: 'asc',
    label: 'Ascendente'
  }, {
    value: 'desc',
    label: 'Descendente'
  }];
  var valueDefaul = use.paginations.states.orderList === 'asc' ? {
    value: 'asc',
    label: 'Ascendente'
  } : {
    value: 'desc',
    label: 'Descendente'
  };
  var totalPages = Math.ceil(areas.length / use.paginations.states.itemsPerPage);
  (0, _react.useEffect)(function () {
    var get = /*#__PURE__*/function () {
      var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
        var data;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              if (!(useLogin.states.token && !use.data.states.isReady)) {
                _context2.next = 17;
                break;
              }
              _context2.prev = 1;
              use.pages.actions.onFetching();
              use.data.actions.setIsReady(false);
              _context2.next = 6;
              return use.data.actions.getItems();
            case 6:
              data = _context2.sent;
              if (data.success) {
                use.data.actions.setItems(data.data.items);
                use.data.actions.setIsReady(true);
              } else {
                use.error.actions.changeError([data.message]);
                use.data.actions.setIsReady(false);
              }
              _context2.next = 14;
              break;
            case 10:
              _context2.prev = 10;
              _context2.t0 = _context2["catch"](1);
              use.error.actions.changeError(["".concat(_context2.t0)]);
              use.data.actions.setIsReady(false);
            case 14:
              _context2.prev = 14;
              use.pages.actions.onInit();
              return _context2.finish(14);
            case 17:
            case "end":
              return _context2.stop();
          }
        }, _callee2, null, [[1, 10, 14, 17]]);
      }));
      return function get() {
        return _ref4.apply(this, arguments);
      };
    }();
    var getMethods = /*#__PURE__*/function () {
      var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3() {
        var data;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              if (!(useLogin.states.token && !use.useShippingMethoods.data.states.isReady)) {
                _context3.next = 13;
                break;
              }
              _context3.prev = 1;
              use.useShippingMethoods.data.actions.setIsReady(false);
              _context3.next = 5;
              return use.useShippingMethoods.data.actions.getItems();
            case 5:
              data = _context3.sent;
              if (data.success) {
                use.useShippingMethoods.data.actions.setItems(data.data.items);
                use.useShippingMethoods.data.actions.setIsReady(true);
              } else {
                use.error.actions.changeError([data.message]);
                use.useShippingMethoods.data.actions.setIsReady(false);
              }
              _context3.next = 13;
              break;
            case 9:
              _context3.prev = 9;
              _context3.t0 = _context3["catch"](1);
              use.error.actions.changeError(["".concat(_context3.t0)]);
              use.useShippingMethoods.data.actions.setIsReady(false);
            case 13:
            case "end":
              return _context3.stop();
          }
        }, _callee3, null, [[1, 9]]);
      }));
      return function getMethods() {
        return _ref5.apply(this, arguments);
      };
    }();
    get();
    getMethods();
  }, [useLogin.states.token, use.useShippingMethoods.data.states.isReady]);
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Header.Header, headerProps), /*#__PURE__*/_react["default"].createElement(_Error.Error, errorProps), /*#__PURE__*/_react["default"].createElement(_List.List, (0, _extends2["default"])({
    title: "Zonas",
    items: items,
    headers: headers,
    columns: 2,
    selectProps: {
      options: options,
      onChange: function onChange(event) {
        if (event !== null && event !== void 0 && event.value) {
          use.paginations.actions.setOrderList(event.value);
        }
      },
      defaultValue: valueDefaul,
      styles: {
        width: '50%'
      }
    },
    inputProps: {
      value: use.paginations.states.searchTerm,
      onChange: function onChange(e) {
        return use.paginations.actions.setSearchTerm(e.target.value);
      },
      placeholder: 'Buscar por nombre...'
    },
    propsPagination: {
      currentPage: use.paginations.states.currentPage,
      setCurrentPage: use.paginations.actions.setCurrentPage,
      totalPages: totalPages
    }
  }, listProps)));
};