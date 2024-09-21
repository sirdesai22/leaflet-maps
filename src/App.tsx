import { MapContainer, Marker, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L, { LatLng } from "leaflet";
// import createCustomMarkerIcon from "./hooks/createCustomIcon";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import createUserMarkerIcon from "./hooks/createUserMarkerIcon";
import Navbar from "./components/Navbar";
import createCustomMarkerIcon from "./hooks/createCustomMarkerIcon";
import DraggableMarker from "./components/DraggableMarker";

const App = () => {
  // const position = L.latLng(15.8497, 74.4977);
  const [location, setLocation] = useState<L.LatLng>();
  // console.log(location);

  const handleGetLocation = () => {
    if (!navigator.geolocation) {
      console.log("Geolocation is not supported by your browser");
      return;
    }

    navigator.geolocation.watchPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLocation(L.latLng(latitude, longitude));
        // console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
      },
      (error) => {
        console.log(`Error: ${error.message}`);
      }
    );
  };

  useEffect(() => {
    handleGetLocation();
  }, []);

  const [marker, setMarker] = useState<LatLng | null>(null);
  const [savedLocations, setSavedLocations] = useState<LatLng[]>([]);

  const dropPin = () => {
    console.log("pin dropped");
    setMarker(location);
  };

  const handleMarkerDragEnd = useCallback((e: any) => {
    console.log("Marker dragged to:", e.target.getLatLng());
    setMarker(e.target.getLatLng());
  }, []);

  const savePin = () => {
    setSavedLocations([...savedLocations, marker]);
    setMarker(null); // Clear the current marker
  };

  // Belgaum co-ordinates
  // 15.8497° N, 74.4977° E
  if (!location) {
    <div>Loading...</div>;
  } else {
    return (
      <div className="">
        <Navbar dropPin={dropPin} savePin={savePin} />
        <MapContainer center={location} zoom={16} scrollWheelZoom={true}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {/* User marker  */}
          <Marker position={location} icon={createUserMarkerIcon()}></Marker>
          {marker && (
            <Marker
              position={marker}
              draggable={true}
              eventHandlers={
                {
                  // click: handleMarkerClick,
                  dragend: handleMarkerDragEnd,
                }
              }
            ></Marker>
          )}

          {savedLocations.map((pins, index) => (
            <Marker key={index} position={pins}></Marker>
          ))}
        </MapContainer>
      </div>
    );
  }
};

export default App;
