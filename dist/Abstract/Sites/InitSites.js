"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InitSites = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _react = _interopRequireWildcard(require("react"));
var _fa = require("react-icons/fa");
var _css = require("@emotion/css");
var _Button = require("../Button");
var _constants = require("../../constants");
var _List = require("../List");
var _Error = require("../Error");
var _Header = require("../Header");
var _Components = require("../../Components");
var _templateObject;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var defaultOptionButtonContainerStyle = (0, _css.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  justify-content: space-evenly;\n"])));
var InitSites = exports.InitSites = function InitSites(_ref) {
  var _paginatedSites$map;
  var use = _ref.use,
    token = _ref.token,
    _ref$optionButtonCont = _ref.optionButtonContainerStyle,
    optionButtonContainerStyle = _ref$optionButtonCont === void 0 ? defaultOptionButtonContainerStyle : _ref$optionButtonCont,
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
      title: 'Sitios',
      buttonLargeProps: {
        label: 'Añadir sitios',
        onClick: use.pages.actions.goAdd,
        Icon: _fa.FaPlus,
        titleButton: 'Agregar',
        description: 'Agrega un nuevo Sitio.'
      }
    } : _ref$headerProps,
    _ref$errorProps = _ref.errorProps,
    errorProps = _ref$errorProps === void 0 ? {
      error: use.attributes.states.error
    } : _ref$errorProps,
    listProps = _ref.listProps;
  var deleteSite = /*#__PURE__*/function () {
    var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(id) {
      var data;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            use.data.actions.setIsReady(false);
            _context.next = 4;
            return use.api.actions.erase(id);
          case 4:
            data = _context.sent;
            if (data && data.success) {
              use.data.actions.handleDeletedSite({
                itemId: id
              });
            }
            _context.next = 11;
            break;
          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](0);
            use.error.actions.changeError(['Error al eliminar sitio']);
          case 11:
            _context.prev = 11;
            use.data.actions.setIsReady(true);
            return _context.finish(11);
          case 14:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 8, 11, 14]]);
    }));
    return function deleteSite(_x) {
      return _ref2.apply(this, arguments);
    };
  }();
  var ButtonUpdate = function ButtonUpdate(_ref3) {
    var id = _ref3.id;
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: (0, _css.css)(optionButtonContainerStyle)
    }, /*#__PURE__*/_react["default"].createElement(_Button.Button, (0, _extends2["default"])({
      buttonProps: {
        onClick: function onClick() {
          return use.pages.actions.goUpdate(id);
        }
      }
    }, updateButtonProps)), /*#__PURE__*/_react["default"].createElement(_Button.Button, (0, _extends2["default"])({
      buttonProps: {
        onClick: function onClick() {
          return deleteSite(id);
        }
      }
    }, deleteButtonProps)));
  };
  var filteredSites = use.paginations.actions.filterByName(use.paginations.states.searchTerm, use.data.states.sites);
  var sites = use.paginations.actions.sortByName(filteredSites, use.paginations.states.orderList) || [];
  var paginatedSites = use.paginations.actions.getPaginated(sites, use.paginations.states.currentPage, use.paginations.states.itemsPerPage);
  var items = (_paginatedSites$map = paginatedSites === null || paginatedSites === void 0 ? void 0 : paginatedSites.map(function (item) {
    var stateCountry = _constants.StatesCountries[0][item === null || item === void 0 ? void 0 : item.country][0][item === null || item === void 0 ? void 0 : item.state] || '';
    var country = _constants.Countries[0][item === null || item === void 0 ? void 0 : item.country] || '';
    return [item.name, item.city, stateCountry, country, /*#__PURE__*/_react["default"].createElement(ButtonUpdate, {
      id: item.id
    })];
  })) !== null && _paginatedSites$map !== void 0 ? _paginatedSites$map : [];
  var headers = ['Nombre', 'Ciudad', 'Estado', 'País', 'Opciones'];
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
  var totalPages = Math.ceil(sites.length / use.paginations.states.itemsPerPage);
  var getSites = /*#__PURE__*/function () {
    var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
      var data;
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            use.data.actions.setIsReady(false);
            _context2.next = 4;
            return use.data.actions.getSites();
          case 4:
            data = _context2.sent;
            if (data && data.success) {
              use.data.actions.setSites(data.data.items);
            }
            _context2.next = 11;
            break;
          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](0);
            use.data.actions.setSites([]);
          case 11:
            _context2.prev = 11;
            use.data.actions.setIsReady(true);
            return _context2.finish(11);
          case 14:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[0, 8, 11, 14]]);
    }));
    return function getSites() {
      return _ref4.apply(this, arguments);
    };
  }();
  (0, _react.useEffect)(function () {
    getSites();
  }, [token]);
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, !use.data.states.isReady ? /*#__PURE__*/_react["default"].createElement(_Components.Loading, null) : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Header.Header, headerProps), /*#__PURE__*/_react["default"].createElement(_Error.Error, errorProps), /*#__PURE__*/_react["default"].createElement(_List.List, (0, _extends2["default"])({
    title: "Sitios",
    items: items,
    headers: headers,
    columns: 5,
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
  }, listProps))));
};