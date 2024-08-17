"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useGafpriSubPagesProducts = useGafpriSubPagesProducts;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = require("react");
function useGafpriSubPagesProducts() {
  var _useState = (0, _react.useState)(true),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    isGeneral = _useState2[0],
    setIsGeneral = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
    isPrice = _useState4[0],
    setIsPrice = _useState4[1];
  var _useState5 = (0, _react.useState)(false),
    _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
    isCatalog = _useState6[0],
    setIsCatalog = _useState6[1];
  var _useState7 = (0, _react.useState)(false),
    _useState8 = (0, _slicedToArray2["default"])(_useState7, 2),
    isInventory = _useState8[0],
    setIsInventory = _useState8[1];
  var _useState9 = (0, _react.useState)(false),
    _useState10 = (0, _slicedToArray2["default"])(_useState9, 2),
    isShip = _useState10[0],
    setIsShip = _useState10[1];
  var _useState11 = (0, _react.useState)(false),
    _useState12 = (0, _slicedToArray2["default"])(_useState11, 2),
    isAttributes = _useState12[0],
    setIsAttributes = _useState12[1];
  var _useState13 = (0, _react.useState)(false),
    _useState14 = (0, _slicedToArray2["default"])(_useState13, 2),
    isAdvanced = _useState14[0],
    setIsAdvanced = _useState14[1];
  var onGeneral = function onGeneral() {
    setIsGeneral(true);
    setIsPrice(false);
    setIsCatalog(false);
    setIsInventory(false);
    setIsShip(false);
    setIsAttributes(false);
    setIsAdvanced(false);
  };
  var onPrice = function onPrice() {
    setIsGeneral(false);
    setIsPrice(true);
    setIsCatalog(false);
    setIsInventory(false);
    setIsShip(false);
    setIsAttributes(false);
    setIsAdvanced(false);
  };
  var onCatalog = function onCatalog() {
    setIsGeneral(false);
    setIsPrice(false);
    setIsCatalog(true);
    setIsInventory(false);
    setIsShip(false);
    setIsAttributes(false);
    setIsAdvanced(false);
  };
  var onInventory = function onInventory() {
    setIsGeneral(false);
    setIsPrice(false);
    setIsCatalog(false);
    setIsInventory(true);
    setIsShip(false);
    setIsAttributes(false);
    setIsAdvanced(false);
  };
  var onShip = function onShip() {
    setIsGeneral(false);
    setIsPrice(false);
    setIsCatalog(false);
    setIsInventory(false);
    setIsShip(true);
    setIsAttributes(false);
    setIsAdvanced(false);
  };
  var onAttributes = function onAttributes() {
    setIsGeneral(false);
    setIsPrice(false);
    setIsCatalog(false);
    setIsInventory(false);
    setIsShip(false);
    setIsAttributes(true);
    setIsAdvanced(false);
  };
  var onAdvanced = function onAdvanced() {
    setIsGeneral(false);
    setIsPrice(false);
    setIsCatalog(false);
    setIsInventory(false);
    setIsShip(false);
    setIsAttributes(false);
    setIsAdvanced(true);
  };

  /**
   * Export
   *
   *
   */
  var states = {
    isGeneral: isGeneral,
    isPrice: isPrice,
    isCatalog: isCatalog,
    isInventory: isInventory,
    isShip: isShip,
    isAttributes: isAttributes,
    isAdvanced: isAdvanced
  };
  var actions = {
    onGeneral: onGeneral,
    onPrice: onPrice,
    onCatalog: onCatalog,
    onInventory: onInventory,
    onShip: onShip,
    onAttributes: onAttributes,
    onAdvanced: onAdvanced
  };
  return {
    states: states,
    actions: actions
  };
}