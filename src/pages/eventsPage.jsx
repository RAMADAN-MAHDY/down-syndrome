import React, { useEffect, useState } from "react";
import axios from "axios";
import SearchEvents from "../components/searchEvents";

export default function EventsPage() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function getEvents() {
        setLoading(true);
        setError(""); 
      try {
        const res = await axios.get(
          "https://down-syndrome-api.vercel.app/api/GetEvents"
        );
        setLoading(false);
        setEvents(res.data.events || []); 

      } catch (err) {
        console.error("Error fetching events:", err);
      }
    }
    getEvents();
  }, []);

   if (loading) {
    return <p>جاري التحميل...</p>;
  }


  if (error) {
    return <p style={{ color: "red" }}>{error}</p>;
  }

  return (
<>
<SearchEvents/>

 <div>
      <h1>قائمة الفعاليات</h1>
      
      {events.length > 0 ? (
        <ul>
          {events.map((event) => (
            <li key={event._id}>
              <h3>{event.title}</h3>
              <p>{event.type}</p>
              <small>{event.date}</small>
              <small>{event.time}</small>
            </li>
          ))}
        </ul>
        
      ) : (
        <p>لا توجد فعاليات متاحة</p>
      )}
    </div>

    
</>
   
  );
}
