"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getItem = getItem;
exports.saveItem = void 0;
function hasWindow() {
  return typeof window !== 'undefined';
}
function getItem(itemName, initialValue) {
  if (!hasWindow()) {
    return initialValue;
  }
  var localStorageItem = window.localStorage.getItem(itemName);
  var parsedItem;
  if (!localStorageItem) {
    window.localStorage.setItem(itemName, JSON.stringify(initialValue));
    parsedItem = initialValue;
  } else {
    parsedItem = JSON.parse(localStorageItem);
  }
  return parsedItem;
}
var saveItem = exports.saveItem = function saveItem(itemName, newItem) {
  if (hasWindow()) {
    var stringifiedItem = JSON.stringify(newItem);
    window.localStorage.setItem(itemName, stringifiedItem);
  }
};