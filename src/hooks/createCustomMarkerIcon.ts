import L from "leaflet";

const createCustomMarkerIcon = (placeholder: string) => {
    return L.divIcon({
        html: `<div>${placeholder}</div>`,
        className: "my-custom-pin",
        // iconSize: [30, 30],
        // iconAnchor: [15, 15]
    });
};

export default createCustomMarkerIcon;