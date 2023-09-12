import { Profiler, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Login from "./pages/Login/Login";
import { Route, Routes } from "react-router-dom";
import Users from "./components/Users/Users";
import Notification from "./components/Notification/Notification";
import Profile from "./components/Profile/Profile";
import Navbar from "./components/Navbar/Navbar";
import Guides from "./pages/Guides/Guides";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Guides />} />
          <Route path="notification" element={<Notification />} />
          <Route path="users" element={<Users />} />
          <Route path="profile" element={<Profile />} />
        </Route>
        <Route path="login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
