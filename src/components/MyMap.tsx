import React, { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { LatLngExpression } from "leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import { useMap } from "react-leaflet";

// Fix marker icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});
interface GlacierDetailsProps {
  glacier: Glacier | null;
}
type Glacier = {
  area: number;
  coordinates: {
    lat: number;
    lng: number;
  };
  description: string;
  elevation: number;
  glacier_images: {
    url: string;
    url_s: string;
    year: number;
    description: string;
  }[];
  id: string;
  name: string;
  region: string;
  status: string;
  threat_level: string;
  country: string;
  facts: string;
  fact2: string;
  fact3: string;
  factimg: string;
};
const defaultPosition: LatLngExpression = [27.7172, 85.324]; // Kathmandu

const RecenterMap: React.FC<{ position: LatLngExpression }> = ({
  position,
}) => {
  const map = useMap();
  useEffect(() => {
    map.setView(position, 15);
  }, [position]);
  return null;
};
const MyMap: React.FC<GlacierDetailsProps> = ({ glacier }) => {
  const position: LatLngExpression = glacier?.coordinates
    ? [glacier.coordinates.lat, glacier.coordinates.lng]
    : defaultPosition;

  return (
    <div className=" w-[400px] h-[400px] rounded-lg overflow-hidden shadow-lg hidden xl:block mt-[100px] ml-5">
      <MapContainer center={position} zoom={13} className="w-full h-full">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        <Marker position={position}>
          <RecenterMap position={position}></RecenterMap>
          <Popup>Kathmandu, Nepal</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MyMap;
