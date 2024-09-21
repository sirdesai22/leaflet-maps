import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
// import createCustomMarkerIcon from "./hooks/createCustomIcon";
import { useEffect, useState } from "react";
import createUserMarkerIcon from "./hooks/createUserMarkerIcon";
import Navbar from "./components/Navbar";

const App = () => {
  // const position = L.latLng(15.8497, 74.4977);
  const [location, setLocation] = useState<L.LatLng>();
  console.log(location);

  const handleGetLocation = () => {
    if (!navigator.geolocation) {
      console.log("Geolocation is not supported by your browser");
      return;
    }

    navigator.geolocation.watchPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLocation(L.latLng(latitude, longitude));
        console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
      },
      (error) => {
        console.log(`Error: ${error.message}`);
      }
    );
  };

  useEffect(() => {
    handleGetLocation();
  }, []);

  // const markers = [
  //   {
  //     geolocation: L.latLng(15.8497, 74.4977),
  //     popup: "By sirdesai.exe",
  //     text: "Belgaum is best!",
  //   },
  //   {
  //     geolocation: L.latLng(15.828231163460496, 74.48235412540896),
  //     popup: "By sirdesai.exe",
  //     text: "Miheer stays here!",
  //   },
  //   {
  //     geolocation: L.latLng(15.826531, 74.497589),
  //     popup: "By sirdesai.exe",
  //     text: "Shubham lives here!",
  //   },
  //   {
  //     geolocation: L.latLng(15.83986453524527, 74.51026645110518),
  //     popup: "By sirdesai.exe",
  //     text: "Prathamesh coded this here!",
  //   },
  // ];

  // Belgaum co-ordinates
  // 15.8497° N, 74.4977° E
  if (!location) {
    <div>Loading...</div>;
  } else {
    return (
      <div className="">
        <Navbar />
        <MapContainer center={location} zoom={16} scrollWheelZoom={true}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {/* User marker  */}
          <Marker position={location} icon={createUserMarkerIcon()}></Marker>

          {/* {markers.map((marker, index) => (
          <Marker
            key={index}
            position={marker.geolocation}
            icon={createCustomMarkerIcon(marker.text)}
          >
            <Popup>{marker.popup}</Popup>
          </Marker>
        ))} */}
        </MapContainer>
      </div>
    );
  }
};

export default App;
