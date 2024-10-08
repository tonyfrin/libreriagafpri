"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generalChangePhotoWebSockets = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _uuid = require("uuid");
var _helpers = require("../helpers");
function resizeImage(file, maxWidth, maxHeight) {
  return new Promise(function (resolve, reject) {
    var img = document.createElement('img');
    var reader = new FileReader();
    reader.onload = function (event) {
      if (event.target && typeof event.target.result === 'string') {
        img.src = event.target.result;
      }
    };
    reader.onerror = reject;
    img.onload = function () {
      var canvas = document.createElement('canvas');
      var width = img.width,
        height = img.height;
      if (width > height) {
        if (width > maxWidth) {
          height *= maxWidth / width;
          width = maxWidth;
        }
      } else if (height > maxHeight) {
        width *= maxHeight / height;
        height = maxHeight;
      }
      canvas.width = width;
      canvas.height = height;
      var ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.drawImage(img, 0, 0, width, height);
        var dataUrl = canvas.toDataURL('image/jpeg', 0.7); // Ajusta la calidad de la imagen (0.7 en este caso)
        resolve(dataUrl);
      } else {
        reject(new Error('Failed to get canvas context'));
      }
    };
    reader.readAsDataURL(file);
  });
}
var generalChangePhotoWebSockets = exports.generalChangePhotoWebSockets = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_ref) {
    var e, setSubmitting, changeError, setPhoto, from, validation, ws, clientId, TIMEOUT_DURATION, timeoutId, handleTimeout, newFile, mimeType, resizedImageDataUrl, data;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          e = _ref.e, setSubmitting = _ref.setSubmitting, changeError = _ref.changeError, setPhoto = _ref.setPhoto, from = _ref.from, validation = _ref.validation;
          ws = new WebSocket('wss://uploadimagemicroservise-599d9ed3d216.herokuapp.com');
          clientId = (0, _uuid.v4)();
          TIMEOUT_DURATION = 10000; // 10 segundos
          handleTimeout = function handleTimeout() {
            changeError(['La solicitud ha tardado demasiado. Por favor, intenta de nuevo.']);
            setSubmitting(false);
            ws.close();
          };
          ws.onopen = function () {
            return null;
          };
          ws.onmessage = function (event) {
            clearTimeout(timeoutId);
            var receivedData = JSON.parse(event.data);
            if (receivedData.model === 'image' && receivedData.action === 'create' && receivedData.from === from) {
              if (receivedData.success) {
                var valid = validation ? validation(receivedData.cleanImageUrl) : true;
                if (valid) {
                  setPhoto(receivedData.cleanImageUrl);
                  setSubmitting(false);
                }
              } else {
                changeError([receivedData.data]);
                setSubmitting(false);
              }
            }
          };
          ws.onerror = function (error) {
            clearTimeout(timeoutId); // Limpiar el timeout si hay un error
            changeError(['Ocurrió un error con la conexión. Por favor, intenta de nuevo.', "".concat(error)]);
            setSubmitting(false);
          };
          ws.onclose = function () {
            clearTimeout(timeoutId);
          };
          newFile = e.target.files && e.target.files[0];
          if (newFile) {
            _context.next = 12;
            break;
          }
          return _context.abrupt("return");
        case 12:
          mimeType = (0, _helpers.getMimeTypeByExtension)(newFile.name);
          if (mimeType) {
            _context.next = 16;
            break;
          }
          changeError(['El archivo no es una imagen válida. Asegúrate de subir un archivo JPG, JPEG o PNG.']);
          return _context.abrupt("return");
        case 16:
          setSubmitting(true);
          _context.prev = 17;
          if (!(clientId !== '')) {
            _context.next = 24;
            break;
          }
          _context.next = 21;
          return resizeImage(newFile, 800, 800);
        case 21:
          resizedImageDataUrl = _context.sent;
          // Ajusta las dimensiones según sea necesario
          // Aquí ya tenemos el data URL de la imagen redimensionada, lo enviamos directamente
          data = {
            clientId: clientId,
            fileArrayBuffer: resizedImageDataUrl.split(',')[1],
            // Extraemos solo la parte base64
            from: from
          };
          ws.onopen = function () {
            ws.send(JSON.stringify(data));
            timeoutId = setTimeout(handleTimeout, TIMEOUT_DURATION); // Configurar el timeout después de enviar el mensaje
          };
        case 24:
          _context.next = 30;
          break;
        case 26:
          _context.prev = 26;
          _context.t0 = _context["catch"](17);
          changeError(['Error cargando la imagen']);
          setSubmitting(false);
        case 30:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[17, 26]]);
  }));
  return function generalChangePhotoWebSockets(_x) {
    return _ref2.apply(this, arguments);
  };
}();