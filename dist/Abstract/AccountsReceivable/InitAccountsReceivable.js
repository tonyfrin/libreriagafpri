"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InitAccountsReceivable = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _react = _interopRequireDefault(require("react"));
var _fa = require("react-icons/fa");
var _css = require("@emotion/css");
var _Button = require("../Button");
var _Header = require("../Header");
var _Error = require("../Error");
var _List = require("../List");
var _helpers = require("../../helpers");
var _templateObject;
var defaultOptionsButtonMainContainerStyle = (0, _css.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  justify-content: space-evenly;\n"])));
var InitAccountsReceivable = exports.InitAccountsReceivable = function InitAccountsReceivable(_ref) {
  var _paginated$map;
  var use = _ref.use,
    siteOptions = _ref.siteOptions,
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
      title: 'Creditos',
      buttonLargeProps: {
        label: 'Añadir una cuenta de credito',
        onClick: use.pages.actions.onInitAdd,
        Icon: _fa.FaPlus,
        titleButton: 'Agregar',
        description: 'Agrega un nuevo credito.'
      }
    } : _ref$headerProps,
    _ref$errorProps = _ref.errorProps,
    errorProps = _ref$errorProps === void 0 ? {
      error: use.error.states.error
    } : _ref$errorProps,
    listProps = _ref.listProps;
  var ButtonUpdate = function ButtonUpdate(_ref2) {
    var id = _ref2.id;
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: (0, _css.css)(optionsButtonMainContainerStyle)
    }, /*#__PURE__*/_react["default"].createElement(_Button.Button, (0, _extends2["default"])({
      buttonProps: {
        onClick: function onClick() {
          return use.pages.actions.goFormUpdate(id);
        }
      }
    }, updateButtonProps)), /*#__PURE__*/_react["default"].createElement(_Button.Button, (0, _extends2["default"])({
      buttonProps: {
        onClick: function onClick() {
          return use.api.actions.erase(id);
        }
      }
    }, deleteButtonProps)));
  };
  var filtered = use.paginations.actions.filterByName(use.paginations.states.searchTerm);
  var sort = use.paginations.actions.sortByName(filtered, use.paginations.states.orderList) || [];
  var paginated = use.paginations.actions.getPaginated(sort, use.paginations.states.currentPage, use.paginations.states.itemsPerPage);
  var items = (_paginated$map = paginated === null || paginated === void 0 ? void 0 : paginated.map(function (item) {
    var _item$entity;
    var name = (_item$entity = item.entity) !== null && _item$entity !== void 0 && _item$entity.lastName ? "".concat(item.entity.name, " ").concat(item.entity.lastName) : item.entity.name;
    return [name, (0, _helpers.decimalFormatPriceConverter)(item.limit || 0, siteOptions.DECIMAL_NUMBERS, siteOptions.CURRENCY_SYMBOL, siteOptions.CURRENCY_LOCATION), (0, _helpers.decimalFormatPriceConverter)(item.balance || 0, siteOptions.DECIMAL_NUMBERS, siteOptions.CURRENCY_SYMBOL, siteOptions.CURRENCY_LOCATION), /*#__PURE__*/_react["default"].createElement(ButtonUpdate, {
      id: item.postsId
    })];
  })) !== null && _paginated$map !== void 0 ? _paginated$map : [];
  var headers = ['Cliente', 'Limite', 'Balance', 'Opciones'];
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
  var totalPages = Math.ceil(sort.length / use.paginations.states.itemsPerPage);
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Header.Header, headerProps), /*#__PURE__*/_react["default"].createElement(_Error.Error, errorProps), /*#__PURE__*/_react["default"].createElement(_List.List, (0, _extends2["default"])({
    title: "Creditos",
    items: items,
    headers: headers,
    columns: 4,
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