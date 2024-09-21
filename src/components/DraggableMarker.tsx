import { useCallback, useState } from "react";
import { Marker } from "react-leaflet";
import L from "leaflet";

type Props = {
  location: any;
};

const DraggableMarker = (props: Props) => {
  const [position, setPosition] = useState<any>(props.location);

  const handleMarkerClick = useCallback(() => {
    console.log("Marker clicked:", props.location);
  }, [props.location]);

  const handleMarkerDragEnd = useCallback((e: any) => {
    console.log("Marker dragged to:", e.target.getLatLng());
  }, []);

  return (
    <Marker
      position={position}
      draggable={true}
      eventHandlers={{
        click: handleMarkerClick,
        dragend: handleMarkerDragEnd,
      }}
    ></Marker>
  );
};

export default DraggableMarker;
