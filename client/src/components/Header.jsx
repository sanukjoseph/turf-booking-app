import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">
        <Link to="/">Turf Booking App</Link>
      </h1>
      <nav>
        {user ? (
          <>
            <Link to="/profile" className="mx-2">Profile</Link>
            <Link to="/turfs" className="mx-2">Turfs</Link>
            {user.role === "admin" && <Link to="/users" className="mx-2">Users</Link>}
            <button onClick={handleLogout} className="bg-red-500 px-4 py-2 rounded">
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="mx-2">Login</Link>
            <Link to="/register" className="mx-2">Register</Link>
          </>
        )}
      </nav>
    </header>
  );
}

export default Header;
