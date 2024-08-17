"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InitUser = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _react = _interopRequireDefault(require("react"));
var _fa = require("react-icons/fa");
var _css = require("@emotion/css");
var _Button = require("../Button");
var _List = require("../List");
var _Error = require("../Error");
var _Header = require("../Header");
var _helpers = require("../../helpers");
var _templateObject;
var defaultOptionButtonContainerStyle = (0, _css.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  justify-content: space-evenly;\n"])));
var InitUser = exports.InitUser = function InitUser(_ref) {
  var _paginated$map;
  var use = _ref.use,
    _ref$optionButtonCont = _ref.optionButtonContainerStyle,
    optionButtonContainerStyle = _ref$optionButtonCont === void 0 ? defaultOptionButtonContainerStyle : _ref$optionButtonCont,
    _ref$updateButtonProp = _ref.updateButtonProps,
    updateButtonProps = _ref$updateButtonProp === void 0 ? {
      title: 'Actualizar',
      styles: {
        fontSize: '10px'
      }
    } : _ref$updateButtonProp,
    _ref$viewButtonProps = _ref.viewButtonProps,
    viewButtonProps = _ref$viewButtonProps === void 0 ? {
      title: 'Ver',
      styles: {
        fontSize: '10px'
      }
    } : _ref$viewButtonProps,
    emailButtonProps = _ref.emailButtonProps,
    phoneButtonProps = _ref.phoneButtonProps,
    statusButtonProps = _ref.statusButtonProps,
    _ref$headerProps = _ref.headerProps,
    headerProps = _ref$headerProps === void 0 ? {
      title: 'Usuarios',
      buttonLargeProps: {
        label: 'Añadir Usuario',
        onClick: use.actions.goAdd,
        Icon: _fa.FaPlus,
        titleButton: 'Agregar',
        description: 'Agrega un nuevo usuario.'
      }
    } : _ref$headerProps,
    _ref$errorProps = _ref.errorProps,
    errorProps = _ref$errorProps === void 0 ? {
      error: use.states.error
    } : _ref$errorProps,
    listProps = _ref.listProps;
  var ButtonUpdate = function ButtonUpdate(_ref2) {
    var id = _ref2.id;
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: (0, _css.css)(optionButtonContainerStyle)
    }, /*#__PURE__*/_react["default"].createElement(_Button.Button, (0, _extends2["default"])({
      buttonProps: {
        onClick: function onClick() {
          return use.actions.goUpdate(id);
        }
      }
    }, updateButtonProps)), /*#__PURE__*/_react["default"].createElement(_Button.Button, (0, _extends2["default"])({
      buttonProps: {
        onClick: function onClick() {
          return use.actions.goView(id);
        }
      }
    }, viewButtonProps)));
  };
  var ButtonEmail = function ButtonEmail(_ref3) {
    var email = _ref3.email,
      isActive = _ref3.isActive;
    var color = isActive ? '#439b57' : '#c12429';
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: (0, _css.css)(optionButtonContainerStyle)
    }, /*#__PURE__*/_react["default"].createElement(_Button.Button, (0, _extends2["default"])({
      title: email,
      styles: {
        fontSize: '10px',
        backgroundColor: color,
        cursor: 'off'
      },
      Class: "email-button",
      buttonProps: {
        title: "".concat(email)
      }
    }, emailButtonProps)));
  };
  var ButtonPhone = function ButtonPhone(_ref4) {
    var phone = _ref4.phone,
      isActive = _ref4.isActive;
    var color = isActive ? '#439b57' : '#c12429';
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: (0, _css.css)(optionButtonContainerStyle)
    }, /*#__PURE__*/_react["default"].createElement(_Button.Button, (0, _extends2["default"])({
      title: phone,
      styles: {
        fontSize: '10px',
        backgroundColor: color,
        cursor: 'off'
      }
    }, phoneButtonProps)));
  };
  var ButtonStatus = function ButtonStatus(_ref5) {
    var status = _ref5.status,
      isActive = _ref5.isActive;
    var color = isActive ? '#439b57' : '#c12429';
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: (0, _css.css)(optionButtonContainerStyle)
    }, /*#__PURE__*/_react["default"].createElement(_Button.Button, (0, _extends2["default"])({
      title: status,
      styles: {
        fontSize: '10px',
        backgroundColor: color,
        cursor: 'off'
      }
    }, statusButtonProps)));
  };
  var allowedValues = ['name', 'email', 'phone', 'login'];
  var searchBy = allowedValues.includes(use.states.searchBy) ? use.states.searchBy : 'name';
  var filtered = use.actions.filterBySearch(use.states.searchTerm, searchBy);
  var roles = use.actions.sortByProperty(filtered, searchBy, use.states.orderList) || [];
  var paginated = use.actions.getPaginated(roles, use.states.currentPage, use.states.itemsPerPage);
  var items = (_paginated$map = paginated === null || paginated === void 0 ? void 0 : paginated.map(function (item) {
    var status = item.isActive ? 'Activo' : 'Inactivo';
    return [item.login, item.name, /*#__PURE__*/_react["default"].createElement(ButtonEmail, {
      email: item.email,
      isActive: item.emailConfirmation
    }), /*#__PURE__*/_react["default"].createElement(ButtonPhone, {
      phone: (0, _helpers.formatPhoneNumber)(item.phone),
      isActive: item.phoneConfirmation
    }), /*#__PURE__*/_react["default"].createElement(ButtonStatus, {
      status: status,
      isActive: item.isActive
    }), /*#__PURE__*/_react["default"].createElement(ButtonUpdate, {
      id: item.id
    })];
  })) !== null && _paginated$map !== void 0 ? _paginated$map : [];
  var headers = ['Login', 'Nombre', 'Email', 'Teléfono', 'Estatus', 'Opciones'];
  var options = [{
    value: 'asc',
    label: 'Ascendente'
  }, {
    value: 'desc',
    label: 'Descendente'
  }];
  var valueDefaul = use.states.orderList === 'asc' ? {
    value: 'asc',
    label: 'Ascendente'
  } : {
    value: 'desc',
    label: 'Descendente'
  };
  var totalPages = Math.ceil(roles.length / use.states.itemsPerPage);
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Header.Header, headerProps), /*#__PURE__*/_react["default"].createElement(_Error.Error, errorProps), /*#__PURE__*/_react["default"].createElement(_List.List, (0, _extends2["default"])({
    title: "Usuarios",
    items: items,
    headers: headers,
    columns: 6,
    selectProps: {
      options: options,
      onChange: function onChange(event) {
        if (event !== null && event !== void 0 && event.value) {
          use.actions.setOrderList(event.value);
        }
      },
      defaultValue: valueDefaul,
      styles: {
        width: '50%'
      }
    },
    selectByProps: {
      options: use.states.searchByOptions,
      onChange: function onChange(event) {
        use.actions.changeSearchBy(event);
      },
      defaultValue: use.states.searchByDefault,
      styles: {
        width: '100%'
      }
    },
    inputProps: {
      value: use.states.searchTerm,
      onChange: function onChange(e) {
        return use.actions.setSearchTerm(e.target.value);
      },
      placeholder: 'Buscar...'
    },
    propsPagination: {
      currentPage: use.states.currentPage,
      setCurrentPage: use.actions.setCurrentPage,
      totalPages: totalPages
    }
  }, listProps)));
};