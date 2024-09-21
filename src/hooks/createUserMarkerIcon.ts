import L from "leaflet";

const createUserMarkerIcon = () => {
    return L.divIcon({
        html: `<div></div>`,
        className: "my-user-pin",
        iconSize: [20, 20],
        // iconAnchor: [15, 15]
    });
};

export default createUserMarkerIcon;