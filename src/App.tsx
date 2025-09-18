import { useState } from "react";
import Home from "./views/Home";
import Login from "./views/Login";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return isLoggedIn ? <Home /> : <Login />;
}

export default App;
