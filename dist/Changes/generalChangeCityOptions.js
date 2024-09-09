"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generalChangeCityOptions = void 0;
var _constants = require("../constants");
var generalChangeCityOptions = exports.generalChangeCityOptions = function generalChangeCityOptions(_ref) {
  var country = _ref.country,
    state = _ref.state,
    setCityDefault = _ref.setCityDefault,
    setCity = _ref.setCity,
    setCityOptions = _ref.setCityOptions,
    isReset = _ref.isReset;
  var newValueCity = [];
  if (_constants.Cities[0][country]) {
    if (Array.isArray(_constants.Cities[0][country][0][state])) {
      _constants.Cities[0][country][0][state].forEach(function (item) {
        Object.keys(item).forEach(function (key) {
          newValueCity.push({
            value: item[key],
            label: item[key]
          });
        });
      });
    }
  }
  if (isReset) {
    setCityDefault(_constants.CITY_DEFAULT);
    setCity(_constants.CITY_DEFAULT.value);
  } else {
    setCityDefault({
      label: 'Elija la ciudad',
      value: ''
    });
    setCity('');
  }
  setCityOptions(newValueCity);
};