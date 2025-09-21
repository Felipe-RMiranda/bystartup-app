import { useState } from "react";
import Home from "./views/Home";
import Login from "./views/Login";
import type { User } from "./types/User";
import "./App.css";

const defaultUser: User = {
  name: "User Defaulte",
  email: "",
  phone: "",
};

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<User>(defaultUser);

  const handleLogin = (data: { email: string; phone: string }) => {
    if (data.email && data.phone) {
      setUser({ name: "Admin", email: data.email, phone: data.phone });
      setIsLoggedIn(true);
    } else {
      alert("usuário invalido");
    }
  };

  const handleLogout = () => {
    setUser(defaultUser);
    setIsLoggedIn(false);
  };

  return isLoggedIn ? (
    <Home user={user} onLogout={handleLogout} />
  ) : (
    <Login onLogin={handleLogin} />
  );
}

export default App;
