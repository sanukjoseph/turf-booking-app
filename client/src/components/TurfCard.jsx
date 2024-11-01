/* eslint-disable react/prop-types */
function TurfCard({ turf, onBook }) {
  return (
    <div className="border p-4 rounded-md shadow-md">
      <h2 className="text-lg font-semibold">{turf.name}</h2>
      <p>Location: {turf.location}</p>
      <p>Price per Hour: {turf.pricePerHour}</p>
      <button onClick={() => onBook(turf)} className="bg-green-500 text-white px-4 py-2 mt-2 rounded">
        Book Now
      </button>
    </div>
  );
}

export default TurfCard;
