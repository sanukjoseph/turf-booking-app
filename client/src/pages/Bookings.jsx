/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import axios from "axios";

function Bookings() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      const { data } = await axios.get("/api/bookings");
      setBookings(data);
    };
    fetchBookings();
  }, []);

  const cancelBooking = async (bookingId) => {
    try {
      await axios.delete(`/api/bookings/${bookingId}`);
      setBookings((prev) => prev.filter((b) => b._id !== bookingId));
    } catch (error) {
      alert("Failed to cancel booking");
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Your Bookings</h1>
      {bookings.map((booking) => (
        <div key={booking._id} className="border p-4 rounded-md shadow-md mb-4">
          <p>Turf: {booking.turf.name}</p>
          <p>Date: {booking.date}</p>
          <button onClick={() => cancelBooking(booking._id)} className="bg-red-500 text-white px-4 py-2 mt-2 rounded">
            Cancel Booking
          </button>
        </div>
      ))}
    </div>
  );
}

export default Bookings;
