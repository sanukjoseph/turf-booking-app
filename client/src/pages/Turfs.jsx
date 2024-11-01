import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../contexts/AuthContext";
import TurfCard from "../components/TurfCard";

function Turfs() {
  const [turfs, setTurfs] = useState([]);
//   const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchTurfs = async () => {
      const { data } = await axios.get("/api/turfs");
      setTurfs(data);
    };
    fetchTurfs();
  }, []);

  const handleBooking = async (turf) => {
    try {
      await axios.post("/api/bookings", { turfId: turf._id });
      alert("Booking successful!");
    // eslint-disable-next-line no-unused-vars
    } catch (_) {
      alert("Booking failed");
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Available Turfs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {turfs.map((turf) => (
          <TurfCard key={turf._id} turf={turf} onBook={handleBooking} />
        ))}
      </div>
    </div>
  );
}

export default Turfs;
