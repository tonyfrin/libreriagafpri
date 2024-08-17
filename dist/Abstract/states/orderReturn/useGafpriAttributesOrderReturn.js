"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useGafpriAttributesOrderReturn = useGafpriAttributesOrderReturn;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = require("react");
var _Changes = require("../../../Changes");
function useGafpriAttributesOrderReturn(_ref) {
  var useProductItems = _ref.useProductItems;
  var _useState = (0, _react.useState)(0),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    orderPostsId = _useState2[0],
    setOrderPostsId = _useState2[1];
  var _useState3 = (0, _react.useState)(''),
    _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
    note = _useState4[0],
    setNote = _useState4[1];
  var _useState5 = (0, _react.useState)(null),
    _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
    entity = _useState6[0],
    setEntity = _useState6[1];
  var infoReset = function infoReset() {
    setOrderPostsId(0);
    setNote('');
    setEntity(null);
    useProductItems.actions.infoReset();
  };
  var changeNote = function changeNote(value) {
    (0, _Changes.generalChangeNote)({
      value: value,
      setValue: setNote
    });
  };

  /**
   * Export
   *
   *
   */
  var states = {
    orderPostsId: orderPostsId,
    note: note,
    entity: entity
  };
  var actions = {
    infoReset: infoReset,
    setOrderPostsId: setOrderPostsId,
    changeNote: changeNote,
    setEntity: setEntity
  };
  return {
    states: states,
    actions: actions
  };
}