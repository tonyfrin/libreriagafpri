"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatHours = exports.formatDate = exports.decimalFormatPriceConverter = exports.dayNames = exports.changeSelect = exports.changeMultipleObjectAttributesInput = exports.changeMultipleArrayStringSelect = exports.changeMultipleArrayStringInput = exports.changeInputText = exports.changeInputNumers = exports.addClass = void 0;
exports.formatPhoneNumber = formatPhoneNumber;
exports.gafpriFetch = gafpriFetch;
exports.getLastEntryDateAndCount = exports.getBase64 = exports.generatePermanentLink = void 0;
exports.getMimeTypeByExtension = getMimeTypeByExtension;
exports.isCustomErrorResponse = isCustomErrorResponse;
exports.scrollToTop = exports.removeClass = exports.removeAccentsAndSpecialChars = exports.isSelectDefaultArray = exports.isSelectDefault = exports.isErrorResponse = void 0;
exports.toTitleCase = toTitleCase;
exports.truncarTexto = truncarTexto;
exports.validationHidden = validationHidden;
exports.workDaysHoursToArray = exports.validationSelect = exports.validationInputPostcode = exports.validationInputPhone = exports.validationInputName = exports.validationInputEmail = exports.validationInput = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));
var _constants = require("../constants");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; } /* eslint-disable object-shorthand */
var addClass = exports.addClass = function addClass(element, className) {
  var input = document.getElementById(element);
  if (input && input.classList && !input.classList.contains(className)) {
    input.classList.add(className);
  }
};
var removeClass = exports.removeClass = function removeClass(element, className) {
  var input = document.getElementById(element);
  if (input && input.classList && input.classList.contains(className)) {
    input.classList.remove(className);
  }
};
var validationSelect = exports.validationSelect = function validationSelect(value, componentId) {
  if (value === '') {
    addClass(componentId, _constants.ALERT);
    return false;
  }
  removeClass(componentId, _constants.ALERT);
  return true;
};
function validationHidden(value, validate) {
  return validate.test(value);
}
var validationInput = exports.validationInput = function validationInput(value, match, componentId) {
  var required = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var valid = validationHidden(value, match);
  if (required && (!valid || !value)) {
    addClass(componentId, _constants.ALERT);
    return false;
  }
  if (value && valid) {
    removeClass(componentId, _constants.ALERT);
    return true;
  }
  if (!required && !value) {
    removeClass(componentId, _constants.ALERT);
    return true;
  }
  addClass(componentId, _constants.ALERT);
  return false;
};
var changeInputText = exports.changeInputText = function changeInputText(_ref) {
  var value = _ref.value,
    validation = _ref.validation,
    setValue = _ref.setValue;
  validation(value);
  setValue(value);
};
var changeInputNumers = exports.changeInputNumers = function changeInputNumers(value, validation, setValue) {
  var numericValue = typeof value === 'string' ? parseFloat(value) : value;
  var valid = validation(numericValue);
  if (valid) {
    setValue(value);
  }
};
function toTitleCase(str) {
  var exceptions = ['de', 'del', 'la', 'los', 'un'];
  return str.replace(/(^|\s|\.|,|&)([a-z\u00E0-\u00FF]+)/g, function (match, separator, word) {
    var lowerWord = word.toLowerCase();
    if (exceptions.includes(lowerWord)) {
      return separator + lowerWord;
    }
    return separator + lowerWord.charAt(0).toUpperCase() + lowerWord.slice(1);
  });
}
var changeSelect = exports.changeSelect = function changeSelect(_ref2) {
  var newValue = _ref2.newValue,
    validation = _ref2.validation,
    setDefault = _ref2.setDefault,
    setValue = _ref2.setValue;
  if (newValue != null) {
    var valid = validation("".concat(newValue.value));
    if (valid) {
      var newDefaulValue = {
        label: newValue.label,
        value: "".concat(newValue.value)
      };
      setDefault(newDefaulValue);
      if (typeof newValue.value === 'string' && setValue.length === 1) {
        setValue(newValue.value);
      } else if (typeof newValue.value === 'number' && setValue.length === 1) {
        setValue(newValue.value);
      } else if (typeof newValue.value === 'boolean' && setValue.length === 1) {
        setValue(newValue.value);
      } else if ((0, _typeof2["default"])(newValue.value) === 'object' && setValue.length === 1) {
        setValue(newValue.value);
      }
    }
  }
};
var changeMultipleArrayStringSelect = exports.changeMultipleArrayStringSelect = function changeMultipleArrayStringSelect(_ref3) {
  var newValue = _ref3.newValue,
    selectedOptions = _ref3.selectedOptions,
    validation = _ref3.validation,
    setValue = _ref3.setValue,
    setSelectedValue = _ref3.setSelectedValue;
  if (newValue != null) {
    var selectedOption = newValue.value;
    if (!selectedOptions.includes(selectedOption)) {
      var updatedOptions = [].concat((0, _toConsumableArray2["default"])(selectedOptions), [selectedOption]);
      var valid = validation(updatedOptions);
      if (valid) {
        setValue(updatedOptions);
        setSelectedValue('');
      }
    }
  }
};
var changeMultipleArrayStringInput = exports.changeMultipleArrayStringInput = function changeMultipleArrayStringInput(_ref4) {
  var newValue = _ref4.newValue,
    selectedOptions = _ref4.selectedOptions,
    validation = _ref4.validation,
    setValue = _ref4.setValue,
    setSelectedValue = _ref4.setSelectedValue;
  if (newValue != null) {
    var selectedOption = newValue;
    if (!selectedOptions.includes(selectedOption)) {
      var updatedOptions = [].concat((0, _toConsumableArray2["default"])(selectedOptions), [selectedOption]);
      var valid = validation(updatedOptions);
      if (valid) {
        setValue(updatedOptions);
        setSelectedValue('');
      }
    }
  }
};
var validationInputName = exports.validationInputName = function validationInputName(_ref5) {
  var name = _ref5.name,
    inputId = _ref5.inputId,
    setValid = _ref5.setValid,
    _ref5$required = _ref5.required,
    required = _ref5$required === void 0 ? true : _ref5$required;
  var valid = validationInput(name, /^[-a-zA-Z0-9áéíóúàèìòùÀÈÌÒÙÁÉÍÓÚñÑüÜ_,.&'@-\s]+$/, inputId, required);
  setValid(valid);
  return valid;
};
var validationInputPostcode = exports.validationInputPostcode = function validationInputPostcode(_ref6) {
  var value = _ref6.value,
    inputId = _ref6.inputId,
    setValid = _ref6.setValid,
    _ref6$required = _ref6.required,
    required = _ref6$required === void 0 ? true : _ref6$required;
  var valid = validationInput(value, /^[a-zA-Z0-9]+[a-zA-Z0-9áéíóúàèìòùÀÈÌÒÙÁÉÍÓÚñÑüÜ_#()\-.\s]+$/, inputId, required);
  setValid(valid);
  return valid;
};
var validationInputEmail = exports.validationInputEmail = function validationInputEmail(_ref7) {
  var value = _ref7.value,
    inputId = _ref7.inputId,
    setValid = _ref7.setValid,
    _ref7$required = _ref7.required,
    required = _ref7$required === void 0 ? true : _ref7$required;
  var valid = validationInput(value, /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, inputId, required);
  setValid(valid);
  return valid;
};
var validationInputPhone = exports.validationInputPhone = function validationInputPhone(_ref8) {
  var value = _ref8.value,
    inputId = _ref8.inputId,
    setValid = _ref8.setValid,
    _ref8$required = _ref8.required,
    required = _ref8$required === void 0 ? true : _ref8$required;
  var valid = validationInput(value, /^[0-9]{10,20}/, inputId, required);
  setValid(valid);
  return valid;
};
/* eslint-disable @typescript-eslint/no-explicit-any */
function gafpriFetch(_x) {
  return _gafpriFetch.apply(this, arguments);
}
/* eslint-enable @typescript-eslint/no-explicit-any */
function _gafpriFetch() {
  _gafpriFetch = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(_ref9) {
    var initMethod, _ref9$initApi, initApi, initRoute, initToken, initCredentials, functionFetching, functionSuccess, functionError, headers, options, resp;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          initMethod = _ref9.initMethod, _ref9$initApi = _ref9.initApi, initApi = _ref9$initApi === void 0 ? _constants.API_URL : _ref9$initApi, initRoute = _ref9.initRoute, initToken = _ref9.initToken, initCredentials = _ref9.initCredentials, functionFetching = _ref9.functionFetching, functionSuccess = _ref9.functionSuccess, functionError = _ref9.functionError;
          if (functionFetching !== undefined) {
            functionFetching();
          }
          headers = {
            'Content-Type': 'application/json'
          };
          if (initToken !== undefined) {
            headers = _objectSpread(_objectSpread({}, headers), {}, {
              Authorization: "Bearer ".concat(initToken.token)
            });
          }
          options = {
            method: initMethod,
            headers: headers,
            body: JSON.stringify(initCredentials)
          };
          _context2.next = 7;
          return fetch("".concat(initApi).concat(initRoute), options).then(function (response) {
            return response.json();
          }).then(function (data) {
            if (data.success) {
              if (functionSuccess !== undefined) {
                functionSuccess(data);
              }
            } else if (functionError !== undefined) {
              functionError(data);
            }
            return data;
          })["catch"](function (error) {
            if (functionError !== undefined) {
              functionError(error);
            }
            return error;
          });
        case 7:
          resp = _context2.sent;
          return _context2.abrupt("return", resp);
        case 9:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return _gafpriFetch.apply(this, arguments);
}
var isSelectDefault = exports.isSelectDefault = function isSelectDefault(obj) {
  if ((0, _typeof2["default"])(obj) !== 'object' || obj === null) {
    return false;
  }
  var selectDefaultCandidate = obj;
  return typeof selectDefaultCandidate.value === 'string' && typeof selectDefaultCandidate.label === 'string';
};
var isSelectDefaultArray = exports.isSelectDefaultArray = function isSelectDefaultArray(obj) {
  if (!Array.isArray(obj)) {
    return false;
  }
  return obj.every(isSelectDefault);
};
var getLastEntryDateAndCount = exports.getLastEntryDateAndCount = /*#__PURE__*/function () {
  var _ref10 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(service) {
    var response;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return fetch("".concat(_constants.API_URL).concat(service, "/date-and-count"));
        case 3:
          response = _context.sent;
          if (!response.ok) {
            _context.next = 8;
            break;
          }
          _context.next = 7;
          return response.json();
        case 7:
          return _context.abrupt("return", _context.sent);
        case 8:
          _context.next = 13;
          break;
        case 10:
          _context.prev = 10;
          _context.t0 = _context["catch"](0);
          // eslint-disable-next-line no-console
          console.error('Error fetching last entry date:', _context.t0);
        case 13:
          return _context.abrupt("return", null);
        case 14:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 10]]);
  }));
  return function getLastEntryDateAndCount(_x2) {
    return _ref10.apply(this, arguments);
  };
}();
var isErrorResponse = exports.isErrorResponse = function isErrorResponse(obj) {
  return (0, _typeof2["default"])(obj) === 'object' && obj !== null && 'error' in obj && 'message' in obj && 'statusCode' in obj && 'success' in obj;
};
function isCustomErrorResponse(obj) {
  var customErrorObj = obj;
  return typeof (customErrorObj === null || customErrorObj === void 0 ? void 0 : customErrorObj.statusCode) === 'number' && typeof (customErrorObj === null || customErrorObj === void 0 ? void 0 : customErrorObj.success) === 'boolean' && typeof (customErrorObj === null || customErrorObj === void 0 ? void 0 : customErrorObj.message) === 'string' && Array.isArray(customErrorObj === null || customErrorObj === void 0 ? void 0 : customErrorObj.errors) && customErrorObj.errors.every(function (error) {
    return typeof error.message === 'string' && typeof error.origin === 'string' && typeof error.path === 'string' && typeof error.type === 'string' && Array.isArray(error.validatorArgs) && typeof error.validatorKey === 'string' && (typeof error.validatorName === 'string' || error.validatorName === null) && typeof error.value === 'string' && (0, _typeof2["default"])(error.instance) === 'object' && error.instance !== null;
  });
}
function getMimeTypeByExtension(filename) {
  var _filename$split$pop;
  var extension = (_filename$split$pop = filename.split('.').pop()) === null || _filename$split$pop === void 0 ? void 0 : _filename$split$pop.toLowerCase();
  switch (extension) {
    case 'jpg':
    case 'jpeg':
      return 'image/jpeg';
    case 'png':
      return 'image/png';
    default:
      return null;
  }
}
function formatPhoneNumber(phoneNumber) {
  var countryCode = parseInt(phoneNumber.slice(0, phoneNumber.length - 10), 10).toString();
  var areaCode = phoneNumber.slice(phoneNumber.length - 10, phoneNumber.length - 7);
  var firstPart = phoneNumber.slice(phoneNumber.length - 7, phoneNumber.length - 4);
  var secondPart = phoneNumber.slice(phoneNumber.length - 4);
  return "+".concat(countryCode, " (").concat(areaCode, ") ").concat(firstPart, "-").concat(secondPart);
}
var getBase64 = exports.getBase64 = function getBase64(img, callback) {
  var reader = new FileReader();
  reader.addEventListener('load', function () {
    return callback(reader.result);
  });
  reader.readAsDataURL(img);
};
var changeMultipleObjectAttributesInput = exports.changeMultipleObjectAttributesInput = function changeMultipleObjectAttributesInput(_ref11) {
  var newValue = _ref11.newValue,
    selectedOptions = _ref11.selectedOptions,
    validation = _ref11.validation,
    setValue = _ref11.setValue;
  if (newValue != null) {
    // Verificar si el nombre del nuevo atributo ya existe en la lista
    var attributeExists = selectedOptions.some(function (attribute) {
      return attribute.name === newValue.name;
    });
    if (!attributeExists) {
      var valid = validation([newValue]);
      if (valid) {
        // Agregar el nuevo atributo solo si no existe en la lista
        var newAttributes = [].concat((0, _toConsumableArray2["default"])(selectedOptions), [newValue]);
        setValue(newAttributes);
      }
    }
  }
};
var removeAccentsAndSpecialChars = exports.removeAccentsAndSpecialChars = function removeAccentsAndSpecialChars(str) {
  var accentsMap = {
    á: 'a',
    é: 'e',
    í: 'i',
    ó: 'o',
    ú: 'u',
    ü: 'u',
    ñ: 'n',
    ç: 'c',
    ' ': '-',
    Á: 'A',
    É: 'E',
    Í: 'I',
    Ó: 'O',
    Ú: 'U',
    Ü: 'U',
    Ñ: 'N',
    Ç: 'C'
    // Puedes agregar más caracteres según tus necesidades
  };
  var normalizedString = str.replace(/[^\w\s]/gi, function (match) {
    return accentsMap[match] || match;
  });
  return normalizedString.toLowerCase();
};
var generatePermanentLink = exports.generatePermanentLink = function generatePermanentLink(name) {
  // Remueve acentos y caracteres especiales, y convierte a minúsculas
  var normalizedString = removeAccentsAndSpecialChars(name);

  // Reemplaza espacios con guiones
  var permanentLink = normalizedString.replace(/\s+/g, '-');
  return permanentLink;
};
var scrollToTop = exports.scrollToTop = function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};
var decimalFormatPriceConverter = exports.decimalFormatPriceConverter = function decimalFormatPriceConverter(str, dig, currencySymbol, currencyLocation) {
  var formatOptions = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {
    miles: ',',
    decimal: '.'
  };
  var data = 0;
  if (typeof str === 'number') {
    data = str;
  } else if (typeof str === 'string') {
    var sanitizedStr = str.replace(new RegExp("\\".concat(formatOptions.miles), 'g'), '').replace(formatOptions.decimal, '.');
    var check = parseFloat(sanitizedStr);
    if (!Number.isNaN(check)) {
      data = check;
    }
  }

  // Asegurarse de que haya siempre la cantidad deseada de decimales
  var fixedDecimal = data.toFixed(dig);

  // Formatear con separadores de miles y decimales
  var parts = fixedDecimal.split('.');
  var formattedNumber = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, formatOptions.miles) + (parts[1] ? formatOptions.decimal + parts[1] : ''); // Agregado manejo de casos sin decimales

  if (currencyLocation === 'left') {
    return "".concat(currencySymbol, " ").concat(formattedNumber);
  }
  return "".concat(formattedNumber, " ").concat(currencySymbol);
};
var formatDate = exports.formatDate = function formatDate(date) {
  var newDate = new Date(date);
  // Formatear la fecha
  var format = new Intl.DateTimeFormat('es-ES', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });
  return format.format(newDate);
};
function truncarTexto(texto, longitudMaxima) {
  if (texto.length <= longitudMaxima) {
    return texto;
  }
  return "".concat(texto.substring(0, longitudMaxima - 3), "...");
}
var dayNames = exports.dayNames = {
  1: 'Lunes',
  2: 'Martes',
  3: 'Miércoles',
  4: 'Jueves',
  5: 'Viernes',
  6: 'Sábado',
  7: 'Domingo'
};
var formatHours = exports.formatHours = function formatHours(hours) {
  var _hours$split$map = hours.split('-').map(function (hour) {
      return parseInt(hour, 10);
    }),
    _hours$split$map2 = (0, _slicedToArray2["default"])(_hours$split$map, 2),
    start = _hours$split$map2[0],
    end = _hours$split$map2[1];
  var formatHour = function formatHour(hour) {
    return "".concat(hour.toString().padStart(2, '0'), ":00");
  };
  return "de ".concat(formatHour(start), " a ").concat(formatHour(end));
};
var workDaysHoursToArray = exports.workDaysHoursToArray = function workDaysHoursToArray(workDaysHours) {
  return Object.entries(workDaysHours).map(function (_ref12) {
    var _ref13 = (0, _slicedToArray2["default"])(_ref12, 2),
      day = _ref13[0],
      hours = _ref13[1];
    var dayName = dayNames[parseInt(day, 10)];
    var formattedHours = formatHours(hours);
    return {
      day: parseInt(day, 10),
      hoursString: "".concat(dayName, " ").concat(formattedHours)
    };
  });
};