import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

function Dashboard() {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <h1>Welcome, {user ? user.name : "User"}</h1>
    </div>
  );
}

export default Dashboard;
