"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MapComponent = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var MapComponent = exports.MapComponent = function MapComponent(_ref) {
  var setPlace = _ref.setPlace,
    keyApi = _ref.keyApi;
  console.log('keyApi', keyApi);
  var mapRef = (0, _react.useRef)(null);
  var inputRef = (0, _react.useRef)(null); // Referencia al input para autocompletar
  var _useState = (0, _react.useState)(null),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    map = _useState2[0],
    setMap = _useState2[1];
  var _useState3 = (0, _react.useState)(null),
    _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
    geocoder = _useState4[0],
    setGeocoder = _useState4[1];
  var _useState5 = (0, _react.useState)(null),
    _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
    marker = _useState6[0],
    setMarker = _useState6[1];
  var _useState7 = (0, _react.useState)(null),
    _useState8 = (0, _slicedToArray2["default"])(_useState7, 2),
    autocomplete = _useState8[0],
    setAutocomplete = _useState8[1];
  var _useState9 = (0, _react.useState)(''),
    _useState10 = (0, _slicedToArray2["default"])(_useState9, 2),
    location = _useState10[0],
    setLocation = _useState10[1];
  var _useState11 = (0, _react.useState)(''),
    _useState12 = (0, _slicedToArray2["default"])(_useState11, 2),
    response = _useState12[0],
    setResponse = _useState12[1];
  var _useState13 = (0, _react.useState)(''),
    _useState14 = (0, _slicedToArray2["default"])(_useState13, 2),
    distance = _useState14[0],
    setDistance = _useState14[1];
  var _useState15 = (0, _react.useState)(null),
    _useState16 = (0, _slicedToArray2["default"])(_useState15, 2),
    placeDetails = _useState16[0],
    setPlaceDetails = _useState16[1];
  var MAX_ZOOM = 17; // Nivel máximo de zoom que consideres adecuado
  var POINT_A = {
    lat: 10.666469,
    lng: -71.619609
  }; // Punto inicial

  (0, _react.useEffect)(function () {
    window.initMap = function () {
      if (mapRef.current) {
        var mapInstance = new google.maps.Map(mapRef.current, {
          zoom: MAX_ZOOM,
          center: POINT_A,
          mapTypeControl: false
        });
        var geocoderInstance = new google.maps.Geocoder();
        setGeocoder(geocoderInstance);
        setMap(mapInstance);
        var markerInstance = new google.maps.Marker({
          map: mapInstance,
          position: POINT_A,
          draggable: true
        });
        setMarker(markerInstance);

        // Inicializar Autocomplete
        if (inputRef.current) {
          var autocompleteInstance = new google.maps.places.Autocomplete(inputRef.current, {
            fields: ['geometry', 'formatted_address'],
            types: ['geocode']
          });
          autocompleteInstance.addListener('place_changed', function () {
            var place = autocompleteInstance.getPlace();
            if (!place.geometry || !place.geometry.location) {
              alert('No details available for the selected place.');
              return;
            }

            // Actualizar la dirección en el input
            setLocation(place.formatted_address || '');

            // Actualizar la posición del mapa y el marcador
            mapInstance.setCenter(place.geometry.location);
            mapInstance.setZoom(MAX_ZOOM);
            markerInstance.setPosition(place.geometry.location);

            // Llamar a la función geocode con la nueva ubicación
            geocode({
              location: place.geometry.location.toJSON()
            });

            // Calcular la distancia
            calculateDistance(POINT_A, place.geometry.location.toJSON());
          });
        }
      }
    };

    // Verifica si el script de Google Maps ya está en el DOM
    if (!document.querySelector("script[src*=\"https://maps.googleapis.com/maps/api/js?key=".concat(keyApi, "\"]"))) {
      var googleMapsScript = document.createElement('script');
      googleMapsScript.src = "https://maps.googleapis.com/maps/api/js?key=".concat(keyApi, "&v=weekly&libraries=places&language=en");
      googleMapsScript.async = true;
      googleMapsScript.defer = true;
      document.body.appendChild(googleMapsScript);
      googleMapsScript.onload = function () {
        window.initMap();
      };
    } else {
      // Si el script ya está cargado, llama a initMap directamente
      window.initMap();
    }

    // Limpiar el script cuando el componente se desmonte
    return function () {
      var scriptElement = document.querySelector("script[src*=\"https://maps.googleapis.com/maps/api/js?key=".concat(keyApi, "\"]"));
      if (scriptElement) {
        document.body.removeChild(scriptElement);
      }
    };
  }, [keyApi]);
  (0, _react.useEffect)(function () {
    if (geocoder && map && marker && inputRef.current) {
      // Inicializar Autocomplete cuando geocoder, map y marker están disponibles
      var autocompleteInstance = new google.maps.places.Autocomplete(inputRef.current, {
        fields: ['geometry', 'formatted_address'],
        types: ['geocode'] // Puedes personalizar los tipos de lugares aquí
      });

      // Manejar la selección de un lugar desde el autocompletado
      autocompleteInstance.addListener('place_changed', function () {
        var place = autocompleteInstance.getPlace();
        if (!place.geometry || !place.geometry.location) {
          alert('No details available for the selected place.');
          return;
        }

        // Actualizar la dirección en el input
        setLocation(place.formatted_address || '');

        // Actualizar la posición del mapa y el marcador
        map.setCenter(place.geometry.location);
        map.setZoom(MAX_ZOOM); // Zoom máximo cuando se selecciona una ubicación
        marker.setPosition(place.geometry.location);

        // Llamar a la función geocode con la nueva ubicación
        geocode({
          location: place.geometry.location.toJSON() // Convertir a lat/lng object
        });

        // Calcular la distancia
        calculateDistance(POINT_A, place.geometry.location.toJSON());
      });

      // Añadir los listeners para clic en el mapa y arrastre del marcador
      map.addListener('click', function (e) {
        if (e.latLng) {
          var lat = e.latLng.lat();
          var lng = e.latLng.lng();
          console.log('Clic en mapa - Latitud:', lat, 'Longitud:', lng);
          geocode({
            location: {
              lat: lat,
              lng: lng
            }
          });

          // Calcular la distancia
          calculateDistance(POINT_A, {
            lat: lat,
            lng: lng
          });
        }
      });
      marker.addListener('dragend', function (e) {
        if (e.latLng) {
          var lat = e.latLng.lat();
          var lng = e.latLng.lng();
          console.log('Arrastrado - Latitud:', lat, 'Longitud:', lng);
          geocode({
            location: {
              lat: lat,
              lng: lng
            }
          });

          // Calcular la distancia
          calculateDistance(POINT_A, {
            lat: lat,
            lng: lng
          });
        }
      });
    }
  }, [geocoder, map, marker]);
  var geocode = function geocode(request) {
    if (geocoder) {
      geocoder.geocode(request).then(function (result) {
        var results = result.results;
        if (map && marker && results[0]) {
          // Solo actualizar el marcador y la respuesta, no el centro del mapa
          marker.setPosition(results[0].geometry.location); // Mueve el marcador
          setResponse(JSON.stringify(result, null, 2));
          setLocation(results[0].formatted_address || '');

          // Extraer información importante
          var lat = results[0].geometry.location.lat();
          var lng = results[0].geometry.location.lng();
          var placeId = results[0].place_id;
          var formattedAddress = results[0].formatted_address || '';
          var city, state, country, route, postalCode;

          // Extraer ciudad, estado y país de address_components
          results[0].address_components.forEach(function (component) {
            var types = component.types;
            if (types.includes('locality')) {
              city = component.long_name;
            }
            if (types.includes('administrative_area_level_1')) {
              state = component.long_name;
            }
            if (types.includes('country')) {
              country = component.long_name;
            }
            if (types.includes('route')) {
              route = component.long_name;
            }
            if (types.includes('postal_code')) {
              postalCode = component.long_name;
            }
          });
          var dataPlace = {
            lat: lat,
            lng: lng,
            placeId: placeId,
            city: city,
            state: state,
            country: country,
            route: route,
            postalCode: postalCode,
            formattedAddress: formattedAddress
          };
          setPlaceDetails(dataPlace);
          if (setPlace) {
            setPlace(dataPlace);
          }
        }
      })["catch"](function (error) {
        alert('Error al geocodificar: ' + error);
      });
    }
  };
  var calculateDistance = function calculateDistance(pointA, pointB) {
    var service = new google.maps.DistanceMatrixService();
    var request = {
      origins: [pointA],
      destinations: [pointB],
      travelMode: google.maps.TravelMode.DRIVING,
      unitSystem: google.maps.UnitSystem.METRIC
    };
    service.getDistanceMatrix(request).then(function (response) {
      var distanceText = response.rows[0].elements[0].distance.text;
      setDistance(distanceText); // Mostrar distancia en UI
    })["catch"](function (error) {
      setDistance('Sin poder calcular distancia');
      // alert('Error al calcular la distancia: ' + error);
    });
  };
  var handleGeocodeAddress = function handleGeocodeAddress() {
    if (location && geocoder) {
      geocode({
        address: location
      });
    }
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      margin: '15px 0px'
    }
  }, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("input", {
    style: {
      width: '80%',
      border: '2px solid #eaeaea',
      padding: '8px 19px',
      textAlign: 'left',
      outline: '0',
      borderRadius: '6px',
      backgroundColor: '#fff',
      fontSize: '15px',
      fontWeight: '300',
      color: '#8D8D8D',
      boxSizing: 'border-box'
    },
    ref: inputRef // Referencia para el input de autocompletado
    ,
    type: "text",
    placeholder: "Introduce una direcci\xF3n",
    value: location,
    onChange: function onChange(e) {
      return setLocation(e.target.value);
    }
  }), /*#__PURE__*/_react["default"].createElement("button", {
    style: {
      marginLeft: '10px',
      backgroundColor: 'rgb(7, 178, 231)',
      fontSize: '16px',
      borderRadius: '0.25rem',
      padding: '0.375rem 0.75rem',
      userSelect: 'none',
      textAlign: 'center',
      textDecoration: 'none',
      verticalAlign: 'middle',
      display: 'inlineBlock',
      fontWeight: '400',
      lineHeight: '1.5',
      color: '#ffffff',
      cursor: 'pointer',
      boxShadow: '0 1px 6px 0 #20212447'
    },
    onClick: handleGeocodeAddress
  }, "Buscar")), /*#__PURE__*/_react["default"].createElement("div", {
    id: "map",
    ref: mapRef,
    style: {
      width: '100%',
      height: '500px',
      marginTop: '10px'
    }
  }));
};