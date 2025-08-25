import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// أيقونة صغيرة للماركر
const markerIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

export default function EventsMap({ events }) {
  if (!events || events.length === 0) return <p>لا توجد مواقع متاحة</p>;

  return (
    <MapContainer
      center={[30.0444, 31.2357]} // القاهرة كـ default
      zoom={6}
      scrollWheelZoom={true}
      style={{ height: "500px", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {events.map((event) => {
        const coords = event.location?.coordinates;
        if (!coords || coords.length < 2) return null;

        return (
          <Marker
            key={event._id}
            position={[coords[1], coords[0]]} // Leaflet بيحتاج [lat, lng]
            icon={markerIcon}
          >
            <Popup>
              <h3>{event.title}</h3>
              <p>النوع: {event.type}</p>
              <p>التاريخ: {event.date}</p>
              <p>الوقت: {event.time}</p>
            </Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
}
