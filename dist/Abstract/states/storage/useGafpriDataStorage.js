"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useGafpriDataStorage = useGafpriDataStorage;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
var _Context = require("../../../Context");
var _helpers = require("../../../helpers");
var _constants = require("../../../constants");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function useGafpriDataStorage(_ref) {
  var _items$data;
  var token = _ref.token;
  var _useState = (0, _react.useState)(false),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    isReady = _useState2[0],
    setIsReady = _useState2[1];
  var _useState3 = (0, _react.useState)({
      data: {
        items: (0, _Context.getItem)(_constants.STOTAGE_STORAGE, null)
      }
    }),
    _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
    items = _useState4[0],
    setItems = _useState4[1];
  var onIsReady = function onIsReady() {
    setIsReady(true);
  };
  var notReady = function notReady() {
    setIsReady(false);
  };

  // Manejo de la data de Currencies

  var getLastItem = (_items$data = items.data) !== null && _items$data !== void 0 && _items$data.items ? items.data.items.sort(function (a, b) {
    return new Date(b.posts.modifiedAt).getTime() - new Date(a.posts.modifiedAt).getTime();
  })[0] : null;
  var setDataStorage = function setDataStorage(newData) {
    (0, _Context.saveItem)(_constants.STOTAGE_STORAGE, newData.data.items);
  };
  var setData = function setData(newData) {
    setItems(newData);
    setDataStorage(newData);
  };
  var onItems = function onItems(newData) {
    setData(newData);
    onIsReady();
  };
  var offItems = function offItems() {
    setData({
      data: {
        items: null
      }
    });
    notReady();
  };
  var getItems = /*#__PURE__*/function () {
    var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
      var _items$data$items;
      var lastEntryDateAndCount, lastDate, count;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _helpers.getLastEntryDateAndCount)(_constants.STORAGE_ROUTE);
          case 2:
            lastEntryDateAndCount = _context.sent;
            lastDate = (getLastItem === null || getLastItem === void 0 ? void 0 : getLastItem.posts.modifiedAt) || null;
            count = ((_items$data$items = items.data.items) === null || _items$data$items === void 0 ? void 0 : _items$data$items.length) || 0;
            if (items.data.items === null || "".concat(lastEntryDateAndCount === null || lastEntryDateAndCount === void 0 ? void 0 : lastEntryDateAndCount.date) !== "".concat(lastDate) || "".concat(lastEntryDateAndCount === null || lastEntryDateAndCount === void 0 ? void 0 : lastEntryDateAndCount.count) !== "".concat(count)) {
              if (token) {
                (0, _helpers.gafpriFetch)({
                  initMethod: 'GET',
                  initRoute: _constants.STORAGE_ROUTE,
                  initToken: {
                    token: token
                  },
                  functionFetching: notReady,
                  functionSuccess: onItems
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
    return function getItems() {
      return _ref2.apply(this, arguments);
    };
  }();
  var handleNewItem = function handleNewItem(newItem) {
    setItems(function (prevState) {
      var newData = {
        data: {
          items: [].concat((0, _toConsumableArray2["default"])(prevState.data.items || []), [newItem])
        }
      };
      setDataStorage(newData);
      return newData;
    });
  };
  var handleUpdatedItem = function handleUpdatedItem(updatedStorage) {
    setItems(function (prevState) {
      var _prevState$data$items;
      var updatedItems = ((_prevState$data$items = prevState.data.items) === null || _prevState$data$items === void 0 ? void 0 : _prevState$data$items.map(function (storage) {
        return storage.postsId === updatedStorage.postsId ? updatedStorage : storage;
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
  var handleDeletedItem = function handleDeletedItem(_ref3) {
    var itemId = _ref3.itemId;
    setItems(function (prevState) {
      var _prevState$data$items2;
      var filteredItems = ((_prevState$data$items2 = prevState.data.items) === null || _prevState$data$items2 === void 0 ? void 0 : _prevState$data$items2.filter(function (storage) {
        return "".concat(storage.postsId) !== "".concat(itemId);
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
  function getById(id) {
    var _items$data$items2;
    return ((_items$data$items2 = items.data.items) === null || _items$data$items2 === void 0 ? void 0 : _items$data$items2.find(function (storage) {
      return storage.postsId === id;
    })) || null;
  }

  /**
   * Effects
   *
   *
   */

  _react["default"].useEffect(function () {
    getItems();
  }, [token]); // eslint-disable-line react-hooks/exhaustive-deps

  /**
   * Export
   *
   *
   */
  var states = {
    isReady: isReady,
    items: items
  };
  var actions = {
    setIsReady: setIsReady,
    getById: getById,
    offItems: offItems,
    handleNewItem: handleNewItem,
    handleUpdatedItem: handleUpdatedItem,
    handleDeletedItem: handleDeletedItem
  };
  return {
    states: states,
    actions: actions
  };
}