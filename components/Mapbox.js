import Map, { Marker, Popup } from "react-map-gl";
import { useState } from "react";
import getCenter from "geolib/es/getCenter";
import "mapbox-gl/dist/mapbox-gl.css";

function Mapbox({ searchResults }) {
  const [selectedLocation, setSelectedLocation] = useState({});

  // Transform the searchresults object into {latitude: 12.123123, longitude:12.123123}
  const coordinates = searchResults.map((result) => ({
    longitude: result.long,
    latitude: result.lat,
  }));
  // console.log(coordinates);

  const center = getCenter(coordinates);
  // console.log(center);

  const [viewport, setViewport] = useState({
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 11,
  });
  const [style, setStyle] = useState({
    width: "100%",
    height: "100%",
  });

  // console.log(selectedLocation);

  return (
    <Map
      mapStyle="mapbox://styles/nitin-007/cl5dg8r6n000l14plrl1ftwe7"
      mapboxAccessToken={process.env.mapbox_key}
      initialViewState={{ ...viewport }}
      style={{ ...style }}
      onMove={(evt) => setViewport(evt.viewState)}
    >
      {searchResults.map((result) => (
        <div key={result.long}>
          {/* {console.log(result.title)} */}
          <Marker
            longitude={result.long}
            latitude={result.lat}
            offset={[-20, -10]}
          >
            <p
              onClick={() => setSelectedLocation(result)}
              className="animate-bounce cursor-pointer text-2xl"
            >
              📌
            </p>
          </Marker>

          {/* Popup that should show if we click on a Marker */}
          {selectedLocation.long === result.long ? (
            <Popup
              onClose={() => setSelectedLocation({})}
              closeOnClick={false}
              latitude={result.lat}
              longitude={result.long}
            >
              {result.title}
            </Popup>
          ) : (
            false
          )}
        </div>
      ))}
    </Map>
  );
}

export default Mapbox;
