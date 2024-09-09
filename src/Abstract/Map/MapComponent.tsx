import React, { useRef, useEffect, useState } from 'react';
import { Input } from '../Input';

declare global {
  interface Window {
    initMap: () => void;
  }
}

type MapComponentProps = {
  setPlace?: (
    value: {
      lat: number;
      lng: number;
      placeId: string;
      city?: string;
      state?: string;
      country?: string;
      route?: string;
      postalCode?: string;
      formattedAddress?: string;
    } | null
  ) => void;
};

export const MapComponent = ({ setPlace }: MapComponentProps) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null); // Referencia al input para autocompletar
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [geocoder, setGeocoder] = useState<google.maps.Geocoder | null>(null);
  const [marker, setMarker] = useState<google.maps.Marker | null>(null);
  const [autocomplete, setAutocomplete] =
    useState<google.maps.places.Autocomplete | null>(null);
  const [location, setLocation] = useState<string>('');
  const [response, setResponse] = useState<string>('');
  const [distance, setDistance] = useState<string>('');
  const [placeDetails, setPlaceDetails] = useState<{
    lat: number;
    lng: number;
    placeId: string;
    city?: string;
    state?: string;
    country?: string;
    route?: string;
    postalCode?: string;
    formattedAddress?: string;
  } | null>(null);

  const MAX_ZOOM = 17; // Nivel máximo de zoom que consideres adecuado
  const POINT_A = { lat: 10.666469, lng: -71.619609 }; // Punto inicial

  useEffect(() => {
    window.initMap = () => {
      if (mapRef.current) {
        const mapInstance = new google.maps.Map(mapRef.current, {
          zoom: MAX_ZOOM,
          center: POINT_A,
          mapTypeControl: false,
        });

        const geocoderInstance = new google.maps.Geocoder();
        setGeocoder(geocoderInstance);
        setMap(mapInstance);

        const markerInstance = new google.maps.Marker({
          map: mapInstance,
          position: POINT_A,
          draggable: true,
        });

        setMarker(markerInstance);

        // Inicializar Autocomplete
        if (inputRef.current) {
          const autocompleteInstance = new google.maps.places.Autocomplete(
            inputRef.current,
            {
              fields: ['geometry', 'formatted_address'],
              types: ['geocode'], // Puedes personalizar los tipos de lugares aquí
            }
          );

          setAutocomplete(autocompleteInstance);

          // Manejar la selección de un lugar desde el autocompletado
          autocompleteInstance.addListener('place_changed', () => {
            const place = autocompleteInstance.getPlace();

            if (!place.geometry || !place.geometry.location) {
              alert('No details available for the selected place.');
              return;
            }

            // Actualizar la dirección en el input
            setLocation(place.formatted_address || '');

            // Actualizar la posición del mapa y el marcador
            mapInstance.setCenter(place.geometry.location);
            mapInstance.setZoom(MAX_ZOOM); // Zoom máximo cuando se selecciona una ubicación
            markerInstance.setPosition(place.geometry.location);

            // Llamar a la función geocode con la nueva ubicación
            geocode({
              location: place.geometry.location.toJSON(), // Convertir a lat/lng object
            });

            // Calcular la distancia
            calculateDistance(POINT_A, place.geometry.location.toJSON());
          });
        }
      }
    };

    // Cargar el script de Google Maps con Autocomplete
    const googleMapsScript = document.createElement('script');
    googleMapsScript.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBmc5I-7-vXi-TJ3_oZnmpEYd1MYBxbVA8&callback=initMap&v=weekly&libraries=places&language=en`;
    googleMapsScript.async = true;
    googleMapsScript.defer = true;
    document.body.appendChild(googleMapsScript);

    // Limpiar el script cuando el componente se desmonte
    return () => {
      document.body.removeChild(googleMapsScript);
    };
  }, []);

  useEffect(() => {
    if (geocoder && map && marker && inputRef.current) {
      // Inicializar Autocomplete cuando geocoder, map y marker están disponibles
      const autocompleteInstance = new google.maps.places.Autocomplete(
        inputRef.current,
        {
          fields: ['geometry', 'formatted_address'],
          types: ['geocode'], // Puedes personalizar los tipos de lugares aquí
        }
      );

      // Manejar la selección de un lugar desde el autocompletado
      autocompleteInstance.addListener('place_changed', () => {
        const place = autocompleteInstance.getPlace();

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
          location: place.geometry.location.toJSON(), // Convertir a lat/lng object
        });

        // Calcular la distancia
        calculateDistance(POINT_A, place.geometry.location.toJSON());
      });

      // Añadir los listeners para clic en el mapa y arrastre del marcador
      map.addListener('click', (e: google.maps.MapMouseEvent) => {
        if (e.latLng) {
          const lat = e.latLng.lat();
          const lng = e.latLng.lng();
          console.log('Clic en mapa - Latitud:', lat, 'Longitud:', lng);

          geocode({ location: { lat, lng } });

          // Calcular la distancia
          calculateDistance(POINT_A, { lat, lng });
        }
      });

      marker.addListener('dragend', (e: google.maps.MapMouseEvent) => {
        if (e.latLng) {
          const lat = e.latLng.lat();
          const lng = e.latLng.lng();
          console.log('Arrastrado - Latitud:', lat, 'Longitud:', lng);

          geocode({ location: { lat, lng } });

          // Calcular la distancia
          calculateDistance(POINT_A, { lat, lng });
        }
      });
    }
  }, [geocoder, map, marker]);

  const geocode = (request: google.maps.GeocoderRequest) => {
    if (geocoder) {
      geocoder
        .geocode(request)
        .then((result) => {
          const { results } = result;
          if (map && marker && results[0]) {
            // Solo actualizar el marcador y la respuesta, no el centro del mapa
            marker.setPosition(results[0].geometry.location); // Mueve el marcador
            setResponse(JSON.stringify(result, null, 2));
            setLocation(results[0].formatted_address || '');

            // Extraer información importante
            const lat = results[0].geometry.location.lat();
            const lng = results[0].geometry.location.lng();
            const placeId = results[0].place_id;
            const formattedAddress = results[0].formatted_address || '';
            let city, state, country, route, postalCode;

            // Extraer ciudad, estado y país de address_components
            results[0].address_components.forEach((component) => {
              const types = component.types;
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

            const dataPlace = {
              lat,
              lng,
              placeId,
              city,
              state,
              country,
              route,
              postalCode,
              formattedAddress,
            };
            setPlaceDetails(dataPlace);
            if (setPlace) {
              setPlace(dataPlace);
            }
          }
        })
        .catch((error) => {
          alert('Error al geocodificar: ' + error);
        });
    }
  };

  const calculateDistance = (
    pointA: google.maps.LatLngLiteral,
    pointB: google.maps.LatLngLiteral
  ) => {
    const service = new google.maps.DistanceMatrixService();

    const request = {
      origins: [pointA],
      destinations: [pointB],
      travelMode: google.maps.TravelMode.DRIVING,
      unitSystem: google.maps.UnitSystem.METRIC,
    };

    service
      .getDistanceMatrix(request)
      .then((response) => {
        const distanceText = response.rows[0].elements[0].distance.text;
        setDistance(distanceText); // Mostrar distancia en UI
      })
      .catch((error) => {
        setDistance('Sin poder calcular distancia');
        // alert('Error al calcular la distancia: ' + error);
      });
  };

  const handleGeocodeAddress = () => {
    if (location && geocoder) {
      geocode({ address: location });
    }
  };

  return (
    <div>
      <div>
        <input
          ref={inputRef} // Referencia para el input de autocompletado
          type="text"
          placeholder="Introduce una dirección"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <button onClick={handleGeocodeAddress}>Buscar</button>
      </div>

      <div
        id="map"
        ref={mapRef}
        style={{ width: '100%', height: '500px', marginTop: '10px' }}
      ></div>
    </div>
  );
};
