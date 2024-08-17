"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "getItem", {
  enumerable: true,
  get: function get() {
    return _localStorage.getItem;
  }
});
Object.defineProperty(exports, "saveItem", {
  enumerable: true,
  get: function get() {
    return _localStorage.saveItem;
  }
});
var _localStorage = require("./localStorage");