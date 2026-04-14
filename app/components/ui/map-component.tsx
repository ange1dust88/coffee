"use client";

import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

delete (L.Icon.Default.prototype as any)._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

const cities = [
  {
    name: "Warsaw",
    position: [52.2297, 21.0122],
  },
  {
    name: "Kraków",
    position: [50.0647, 19.945],
  },
  {
    name: "Katowice",
    position: [50.2649, 19.0238],
  },
  {
    name: "Kielce",
    position: [50.8661, 20.6286],
  },
];

export default function MapComponent() {
  return (
    <div className="w-full h-full z-10">
      <MapContainer
        center={[51.2, 19]}
        zoom={7}
        scrollWheelZoom={false}
        className="w-full h-full rounded-3xl"
      >
        <TileLayer
          attribution="Tiles &copy; Esri"
          url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}"
        />

        {cities.map((city) => (
          <Marker key={city.name} position={city.position as [number, number]}>
            <Popup>
              <b>{city.name}</b>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
