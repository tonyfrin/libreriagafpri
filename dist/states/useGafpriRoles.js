"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useGafpriRoles = useGafpriRoles;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
var _helpers = require("../helpers");
var _Context = require("../Context");
var _constants = require("../constants");
var _Validations = require("../Validations");
var _Changes = require("../Changes");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function useGafpriRoles(_ref) {
  var _roles$data;
  var token = _ref.token,
    useError = _ref.useError;
  var _useState = (0, _react.useState)(''),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    name = _useState2[0],
    setName = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
    nameValid = _useState4[0],
    setNameValid = _useState4[1];
  var _useState5 = (0, _react.useState)([]),
    _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
    permissions = _useState6[0],
    setPermissions = _useState6[1];
  var _useState7 = (0, _react.useState)(false),
    _useState8 = (0, _slicedToArray2["default"])(_useState7, 2),
    isReady = _useState8[0],
    setIsReady = _useState8[1];
  var _useState9 = (0, _react.useState)(false),
    _useState10 = (0, _slicedToArray2["default"])(_useState9, 2),
    isFetching = _useState10[0],
    setIsFetching = _useState10[1];
  var _useState11 = (0, _react.useState)(true),
    _useState12 = (0, _slicedToArray2["default"])(_useState11, 2),
    isInit = _useState12[0],
    setIsInit = _useState12[1];
  var _useState13 = (0, _react.useState)(false),
    _useState14 = (0, _slicedToArray2["default"])(_useState13, 2),
    isAdd = _useState14[0],
    setIsAdd = _useState14[1];
  var _useState15 = (0, _react.useState)(false),
    _useState16 = (0, _slicedToArray2["default"])(_useState15, 2),
    isUpdate = _useState16[0],
    setIsUpdate = _useState16[1];
  var _useState17 = (0, _react.useState)({
      data: {
        items: (0, _Context.getItem)(_constants.ROLES_STORAGE, null)
      }
    }),
    _useState18 = (0, _slicedToArray2["default"])(_useState17, 2),
    roles = _useState18[0],
    setRoles = _useState18[1];
  var error = useError.states.error;
  var _useState19 = (0, _react.useState)(0),
    _useState20 = (0, _slicedToArray2["default"])(_useState19, 2),
    currentId = _useState20[0],
    setCurrentId = _useState20[1];
  var _useState21 = (0, _react.useState)('asc'),
    _useState22 = (0, _slicedToArray2["default"])(_useState21, 2),
    orderList = _useState22[0],
    setOrderList = _useState22[1];
  var _useState23 = (0, _react.useState)(''),
    _useState24 = (0, _slicedToArray2["default"])(_useState23, 2),
    searchTerm = _useState24[0],
    setSearchTerm = _useState24[1];
  var _useState25 = (0, _react.useState)(1),
    _useState26 = (0, _slicedToArray2["default"])(_useState25, 2),
    currentPage = _useState26[0],
    setCurrentPage = _useState26[1];
  var itemsPerPage = 6;
  var infoReset = function infoReset() {
    setName('');
    setPermissions([]);
    setNameValid(false);
    useError.actions.changeError([]);
  };
  var onFetching = function onFetching() {
    setIsFetching(true);
    setIsInit(false);
    setIsAdd(false);
    setIsUpdate(false);
    (0, _helpers.scrollToTop)();
  };
  var onInit = function onInit() {
    setIsFetching(false);
    setIsInit(true);
    setIsAdd(false);
    setIsUpdate(false);
    (0, _helpers.scrollToTop)();
  };
  var onAdd = function onAdd() {
    setIsFetching(false);
    setIsInit(false);
    setIsAdd(true);
    setIsUpdate(false);
    (0, _helpers.scrollToTop)();
  };
  var onUpdate = function onUpdate() {
    setIsFetching(false);
    setIsInit(false);
    setIsAdd(false);
    setIsUpdate(true);
    (0, _helpers.scrollToTop)();
  };
  var onIsReady = function onIsReady() {
    setIsReady(true);
  };
  var notReady = function notReady() {
    setIsReady(false);
  };
  var goUpdate = function goUpdate(id) {
    infoReset();
    setCurrentId(id);
    onUpdate();
  };
  var goAdd = function goAdd() {
    infoReset();
    onAdd();
  };

  // Funciones de Validacion
  var validationName = function validationName(value) {
    return (0, _Validations.generalValidationName)({
      value: value,
      setValid: setNameValid,
      currentValid: nameValid
    });
  };
  var validationButtonNext = function validationButtonNext() {
    (0, _Validations.generalValidationButtonNext)({
      validations: [nameValid]
    });
  };

  // Funciones de cambios
  var changeName = function changeName(value) {
    (0, _Changes.generalChangeName)({
      value: value,
      validation: validationName,
      setValue: setName
    });
  };
  var changePermissions = function changePermissions(permissionValue, checked) {
    setPermissions(function (prevSelectedPermissions) {
      return checked ? [].concat((0, _toConsumableArray2["default"])(prevSelectedPermissions), [permissionValue]) : prevSelectedPermissions.filter(function (value) {
        return value !== permissionValue;
      });
    });
  };

  // Manejo de la data de Roles

  var getLastItem = (_roles$data = roles.data) !== null && _roles$data !== void 0 && _roles$data.items ? roles.data.items.sort(function (a, b) {
    return new Date(b.modifiedAt).getTime() - new Date(a.modifiedAt).getTime();
  })[0] : null;
  var selectAllPermissions = function selectAllPermissions() {
    var allPermissions = _constants.AllRoles.flatMap(function (role) {
      return role.permissions.map(function (permission) {
        return permission.value;
      });
    });
    setPermissions(allPermissions);
  };
  var deselectAllPermissions = function deselectAllPermissions() {
    setPermissions([]);
  };
  var setDataStorage = function setDataStorage(newData) {
    (0, _Context.saveItem)(_constants.ROLES_STORAGE, newData.data.items);
  };
  var setData = function setData(newData) {
    setRoles(newData);
    setDataStorage(newData);
  };
  var onRoles = function onRoles(newData) {
    setData(newData);
    onIsReady();
  };
  var offRoles = function offRoles() {
    setData({
      data: {
        items: null
      }
    });
    notReady();
  };
  var getRoles = /*#__PURE__*/function () {
    var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
      var _roles$data$items;
      var lastEntryDateAndCount, lastDate, count;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _helpers.getLastEntryDateAndCount)(_constants.ROLES_ROUTE);
          case 2:
            lastEntryDateAndCount = _context.sent;
            lastDate = (getLastItem === null || getLastItem === void 0 ? void 0 : getLastItem.modifiedAt) || null;
            count = ((_roles$data$items = roles.data.items) === null || _roles$data$items === void 0 ? void 0 : _roles$data$items.length) || 0;
            if (roles.data.items === null || "".concat(lastEntryDateAndCount === null || lastEntryDateAndCount === void 0 ? void 0 : lastEntryDateAndCount.date) !== "".concat(lastDate) || "".concat(lastEntryDateAndCount === null || lastEntryDateAndCount === void 0 ? void 0 : lastEntryDateAndCount.count) !== "".concat(count)) {
              if (token) {
                (0, _helpers.gafpriFetch)({
                  initMethod: 'GET',
                  initRoute: _constants.ROLES_ROUTE,
                  initToken: {
                    token: token
                  },
                  functionFetching: notReady,
                  functionSuccess: onRoles
                });
              } else {
                notReady();
              }
            } else {
              onIsReady();
            }
          case 6:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function getRoles() {
      return _ref2.apply(this, arguments);
    };
  }();
  var handleNewRoles = function handleNewRoles(newRoles) {
    setRoles(function (prevState) {
      var newData = {
        data: {
          items: [].concat((0, _toConsumableArray2["default"])(prevState.data.items || []), [newRoles])
        }
      };
      setDataStorage(newData);
      return newData;
    });
  };
  var handleUpdatedRoles = function handleUpdatedRoles(updatedRoles) {
    setRoles(function (prevState) {
      var _prevState$data$items;
      var updatedItems = ((_prevState$data$items = prevState.data.items) === null || _prevState$data$items === void 0 ? void 0 : _prevState$data$items.map(function (item) {
        return "".concat(item.id) === "".concat(updatedRoles.id) ? updatedRoles : item;
      })) || [];
      var newData = {
        data: {
          items: updatedItems
        }
      };
      setDataStorage(newData);
      return newData;
    });
  };
  var handleDeletedRoles = function handleDeletedRoles(_ref3) {
    var itemId = _ref3.itemId;
    setRoles(function (prevState) {
      var _prevState$data$items2;
      var filteredItems = ((_prevState$data$items2 = prevState.data.items) === null || _prevState$data$items2 === void 0 ? void 0 : _prevState$data$items2.filter(function (item) {
        return "".concat(item.id) !== "".concat(itemId);
      })) || [];
      var newData = {
        data: {
          items: filteredItems
        }
      };
      setDataStorage(newData);
      return newData;
    });
  };
  var returnInit = function returnInit() {
    infoReset();
    onInit();
  };
  var newError = function newError(newErrorValue) {
    useError.actions.newError({
      newErrorValue: newErrorValue,
      functionAction: onAdd
    });
  };
  var newErrorDelete = function newErrorDelete(newErrorValue) {
    useError.actions.newError({
      newErrorValue: newErrorValue,
      functionAction: onInit
    });
  };
  var add = function add() {
    if (nameValid && token) {
      (0, _helpers.gafpriFetch)({
        initMethod: 'POST',
        initRoute: _constants.ROLES_ROUTE,
        initCredentials: {
          name: name,
          permissions: permissions
        },
        initToken: {
          token: token
        },
        functionFetching: onFetching,
        functionSuccess: returnInit,
        functionError: newError
      });
    }
  };
  function getById(id) {
    var _roles$data$items2;
    return ((_roles$data$items2 = roles.data.items) === null || _roles$data$items2 === void 0 ? void 0 : _roles$data$items2.find(function (item) {
      return item.id === id;
    })) || null;
  }
  var update = function update() {
    if (nameValid && token) {
      (0, _helpers.gafpriFetch)({
        initMethod: 'PATCH',
        initRoute: "".concat(_constants.ROLES_ROUTE, "/").concat(currentId),
        initCredentials: {
          name: name,
          permissions: permissions
        },
        initToken: {
          token: token
        },
        functionFetching: onFetching,
        functionSuccess: returnInit,
        functionError: newError
      });
    }
  };
  var deleteRoles = function deleteRoles(id) {
    if (token) {
      (0, _helpers.gafpriFetch)({
        initMethod: 'DELETE',
        initRoute: "".concat(_constants.ROLES_ROUTE, "/").concat(id),
        initToken: {
          token: token
        },
        functionFetching: onFetching,
        functionSuccess: returnInit,
        functionError: newErrorDelete
      });
    }
  };
  function sortByName(items, order) {
    if (items) {
      return items.slice().sort(function (a, b) {
        var comparison = a.name.localeCompare(b.name, undefined, {
          sensitivity: 'base'
        });
        return order === 'asc' ? comparison : -comparison;
      });
    }
    return null;
  }
  var filterByName = function filterByName(search) {
    if (roles.data.items) {
      return roles.data.items.filter(function (item) {
        return item.name.toLowerCase().includes(search.toLowerCase());
      });
    }
    return null;
  };
  var getPaginated = function getPaginated(items, page, itemPerPage) {
    var startIndex = (page - 1) * itemPerPage;
    var endIndex = startIndex + itemPerPage;
    if (items) {
      return items.slice(startIndex, endIndex);
    }
    return null;
  };

  /**
   * Effects
   *
   *
   */

  _react["default"].useEffect(function () {
    getRoles();
  }, [token]); // eslint-disable-line react-hooks/exhaustive-deps

  _react["default"].useEffect(function () {
    setCurrentPage(1);
  }, [searchTerm]);

  /**
   * Export
   *
   *
   */
  var states = {
    name: name,
    nameValid: nameValid,
    permissions: permissions,
    isReady: isReady,
    isFetching: isFetching,
    isAdd: isAdd,
    isInit: isInit,
    isUpdate: isUpdate,
    roles: roles,
    currentId: currentId,
    error: error,
    orderList: orderList,
    searchTerm: searchTerm,
    currentPage: currentPage,
    itemsPerPage: itemsPerPage
  };
  var actions = {
    changeName: changeName,
    validationName: validationName,
    changePermissions: changePermissions,
    setPermissions: setPermissions,
    selectAllPermissions: selectAllPermissions,
    deselectAllPermissions: deselectAllPermissions,
    validationButtonNext: validationButtonNext,
    setIsReady: setIsReady,
    onFetching: onFetching,
    onInit: onInit,
    returnInit: returnInit,
    onAdd: onAdd,
    goAdd: goAdd,
    onUpdate: onUpdate,
    offRoles: offRoles,
    add: add,
    update: update,
    getById: getById,
    goUpdate: goUpdate,
    sortByName: sortByName,
    setOrderList: setOrderList,
    setSearchTerm: setSearchTerm,
    filterByName: filterByName,
    setCurrentPage: setCurrentPage,
    getPaginated: getPaginated,
    deleteRoles: deleteRoles,
    handleNewRoles: handleNewRoles,
    handleUpdatedRoles: handleUpdatedRoles,
    handleDeletedRoles: handleDeletedRoles
  };
  return {
    states: states,
    actions: actions
  };
}