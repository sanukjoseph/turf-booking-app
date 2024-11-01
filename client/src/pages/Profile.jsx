import { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import axios from "axios";

function Profile() {
  const { user, setUser } = useContext(AuthContext);
  const [name, setName] = useState(user?.name || "");
  const [email, setEmail] = useState(user?.email || "");

  const handleUpdate = async () => {
    try {
      const { data } = await axios.put("/api/users/profile", { name, email });
      setUser(data);
      alert("Profile updated successfully");
    } catch (error) {
      alert("Profile update failed");
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Profile</h1>
      <div className="space-y-4">
        <input
          type="text"
          className="border rounded-md p-2 w-full"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />
        <input
          type="email"
          className="border rounded-md p-2 w-full"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <button onClick={handleUpdate} className="bg-blue-600 text-white px-4 py-2 rounded">
          Update Profile
        </button>
      </div>
    </div>
  );
}

export default Profile;
