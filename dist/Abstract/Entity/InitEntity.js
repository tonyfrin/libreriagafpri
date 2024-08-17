"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InitEntity = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _react = _interopRequireDefault(require("react"));
var _fa = require("react-icons/fa");
var _css = require("@emotion/css");
var _Button = require("../Button");
var _List = require("../List");
var _Error = require("../Error");
var _Header = require("../Header");
var _templateObject;
var defaultOptionButtonContainerStyle = (0, _css.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  justify-content: space-evenly;\n"])));
var InitEntity = exports.InitEntity = function InitEntity(_ref) {
  var _paginated$map;
  var use = _ref.use,
    _ref$optionButtonCont = _ref.optionButtonContainerStyle,
    optionButtonContainerStyle = _ref$optionButtonCont === void 0 ? defaultOptionButtonContainerStyle : _ref$optionButtonCont,
    updateButtonProps = _ref.updateButtonProps,
    viewButtonProps = _ref.viewButtonProps,
    headerProps = _ref.headerProps,
    _ref$errorProps = _ref.errorProps,
    errorProps = _ref$errorProps === void 0 ? {
      error: use.error.states.error
    } : _ref$errorProps,
    listProps = _ref.listProps;
  var ButtonUpdate = function ButtonUpdate(_ref2) {
    var id = _ref2.id;
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: (0, _css.css)(optionButtonContainerStyle)
    }, /*#__PURE__*/_react["default"].createElement(_Button.Button, (0, _extends2["default"])({
      title: "Actualizar",
      buttonProps: {
        onClick: function onClick() {
          return use.pages.actions.goUpdate(id);
        }
      },
      styles: {
        fontSize: '10px'
      }
    }, updateButtonProps)), /*#__PURE__*/_react["default"].createElement(_Button.Button, (0, _extends2["default"])({
      title: "Ver",
      buttonProps: {
        onClick: function onClick() {
          return use.pages.actions.goView(id);
        }
      },
      styles: {
        fontSize: '10px'
      }
    }, viewButtonProps)));
  };
  var allowedValues = ['name', 'lastName', 'email', 'phone', 'digit'];
  var searchBy = allowedValues.includes(use.paginations.states.searchBy) ? use.paginations.states.searchBy : 'name';
  var filtered = use.paginations.actions.filterBySearch(use.paginations.states.searchTerm, searchBy);
  var entities = use.paginations.actions.sortByProperty(filtered, searchBy, use.paginations.states.orderList) || [];
  var paginated = use.paginations.actions.getPaginated(entities, use.paginations.states.currentPage, use.paginations.states.itemsPerPage);
  var items = (_paginated$map = paginated === null || paginated === void 0 ? void 0 : paginated.map(function (item) {
    var entityItem = item;
    var lastName = (entityItem === null || entityItem === void 0 ? void 0 : entityItem.lastName) || '';
    var fullName = "".concat(entityItem.name, " ").concat(lastName);
    var documentId = entityItem.documentId[0].index ? "".concat(entityItem.documentId[0].index, "-").concat(entityItem.documentId[0].digit) : entityItem.documentId[0].digit;
    var type = entityItem.type === 'legal' ? 'Jurídica' : entityItem.type === 'personal' ? 'Natural' : '';
    return [fullName, type, documentId, entityItem.email, entityItem.phone, /*#__PURE__*/_react["default"].createElement(ButtonUpdate, {
      id: entityItem.id
    })];
  })) !== null && _paginated$map !== void 0 ? _paginated$map : [];
  var headers = ['Nombre', 'Tipo', 'Documento Legal', 'Email', 'Teléfono', 'Opciones'];
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
  var totalPages = Math.ceil(entities.length / use.paginations.states.itemsPerPage);
  var itemsButton = [{
    id: 'button-tdi-1',
    label: 'Agregar persona natural',
    onClick: function onClick() {
      return use.pages.actions.goAddPersonal();
    },
    icon: _fa.FaUser
  }, {
    id: 'button-tdi-2',
    label: 'Agregar persona jurídica',
    onClick: function onClick() {
      return use.pages.actions.goAddLegal();
    },
    icon: _fa.FaBuilding
  }];
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Header.Header, (0, _extends2["default"])({
    title: "Entidades",
    menuButtonProps: {
      items: itemsButton
    }
  }, headerProps)), /*#__PURE__*/_react["default"].createElement(_Error.Error, errorProps), /*#__PURE__*/_react["default"].createElement(_List.List, (0, _extends2["default"])({
    title: "Entidades",
    items: items,
    headers: headers,
    columns: 6,
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
    selectByProps: {
      options: use.paginations.states.searchByOptions,
      onChange: function onChange(event) {
        use.paginations.actions.changeSearchBy(event);
      },
      defaultValue: use.paginations.states.searchByDefault,
      styles: {
        width: '100%'
      }
    },
    inputProps: {
      value: use.paginations.states.searchTerm,
      onChange: function onChange(e) {
        return use.paginations.actions.setSearchTerm(e.target.value);
      },
      placeholder: 'Buscar...'
    },
    propsPagination: {
      currentPage: use.paginations.states.currentPage,
      setCurrentPage: use.paginations.actions.setCurrentPage,
      totalPages: totalPages
    }
  }, listProps)));
};