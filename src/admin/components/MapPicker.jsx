import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// 🟢 أيقونة الماركر المخصصة (بدل الافتراضية اللي ساعات مش بتظهر)
const markerIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
  iconSize: [30, 30],
});

// 🟢 مكوّن داخلي لتحديد الموقع بالضغط على الخريطة
function LocationMarker({ onSelect }) {
  const [position, setPosition] = useState(null);

  useMapEvents({
    click(e) {
      setPosition(e.latlng);
      onSelect(e.latlng); // نبعث الإحداثيات للأب
    },
  });

  return position ? <Marker position={position} icon={markerIcon} /> : null;
}

// 🟢 المكوّن الرئيسي
export default function MapPicker({ onLocationSelect }) {
  return (
    <div className="h-64 rounded-lg overflow-hidden border">
      <MapContainer
        center={[30.0444, 31.2357]} // القاهرة كمركز افتراضي
        zoom={13}
        className="h-full w-full"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
        />
        <LocationMarker onSelect={onLocationSelect} />
      </MapContainer>
    </div>
  );
}
