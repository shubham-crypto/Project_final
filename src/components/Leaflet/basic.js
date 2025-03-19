import React, { useRef, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  FeatureGroup,
} from "react-leaflet";
import osm from "./osm-provider.js";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import cities from "./cities.json";
import useGeoLocation from "./useGeoLocation.js";
import { EditControl } from "react-leaflet-draw";
import "leaflet-draw/dist/leaflet.draw.css";
// import PrintControlDefault from "react-leaflet-easyprint";

// const PrintControl = withLeaflet(PrintControlDefault);

const markerIcon = new L.Icon({
  iconUrl: require("../../Resources/Images/markerIcon.png"),
  iconSize: [35, 45],
  iconAnchor: [17, 46],
  popupAnchor: [3, -46],
});

export default function BasicMap() {
  const [center, setCenter] = useState({
    lat: 23.76487381730088,
    lng: 86.41458686787293,
  });
  const ZOOM_LEVEL = 9;
  const mapRef = useRef();

  const _created = (e) => console.log(e);

  const location = useGeoLocation();

  const showMyLocation = () => {
    if (mapRef.current && location.loaded && !location.error) {
      console.log("Location found:", location.coordinates);
      mapRef.current.flyTo(
        [location.coordinates.lat, location.coordinates.lng],
        ZOOM_LEVEL,
        { animate: true, duration: 2 }
      );
    } else if (location.error) {
      alert(location.error.message);
    } else {
      alert("Location not found");
    }
  };

  return (
    <>
      <div className="row">
        <div className="col text-center">
          <MapContainer
            center={center}
            zoom={ZOOM_LEVEL}
            style={{ height: "80vh", width: "100%" }}
            ref={mapRef}
          >
            <FeatureGroup>
              <EditControl
                position="topleft"
                onCreated={_created}
                markerIcon={markerIcon}
                // draw={{ //used for showing and hiding editor tools
                //   rectangle: true,
                //   circle: true,
                //   polyline: true,
                //   polygon: true,
                //   marker: true,
                // }}
              />
            </FeatureGroup>

            <TileLayer
              url={osm.maptiler.url}
              attribution={osm.maptiler.attribution}
            />

            {location.loaded && !location.error && (
              <Marker
                icon={markerIcon}
                position={[location.coordinates.lat, location.coordinates.lng]}
              ></Marker>
            )}

            {cities.map((city, idx) => (
              <Marker
                key={idx}
                position={[city.lat, city.lng]}
                icon={markerIcon}
              >
                <Popup>
                  <b>
                    {city.city}, {city.country}
                  </b>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>
      <div className="row my-4">
        <div className="col-d flex justify-center">
          <button
            className="bg-yellow-500 hover:bg-yellow-400 flex justify-center text-white font-bold py-2 px-4 rounded"
            onClick={showMyLocation}
          >
            Locate Me
          </button>
        </div>
      </div>
    </>
  );
}
