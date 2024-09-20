import { MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

type Props = {};

const App = (props: Props) => {
  const position = L.latLng(15.8497, 74.4977); 

  const createCustomIcon = (placeholder: string) => {
    return L.divIcon({
      html: `<div>${placeholder}</div>`,
      className: "my-custom-pin",
      // iconSize: [30, 30],
      // iconAnchor: [15, 15]
    });
  };

  const markers = [
    {
      geolocation: L.latLng(15.8497, 74.4977),
      popup: "By sirdesai.exe",
      text: "Belgaum is best!",
    },
    {
      geolocation: L.latLng(15.828231163460496, 74.48235412540896),
      popup: "By sirdesai.exe",
      text: "Miheer stays here!",
    },
    {
      geolocation: L.latLng(15.826531, 74.497589),
      popup: "By sirdesai.exe",
      text: "Shubham lives here!",
    },
    {
      geolocation: L.latLng(15.83986453524527, 74.51026645110518),
      popup: "By sirdesai.exe",
      text: "Prathamesh coded this here!",
    },
  ];

  // Belgaum co-ordinates
  // 15.8497° N, 74.4977° E
  return (
    <MapContainer center={position} zoom={14} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {markers.map((marker, index) => (
        <Marker
          key={index}
          position={marker.geolocation}
          icon={createCustomIcon(marker.text)}
        >
          <Popup>{marker.popup}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default App;
