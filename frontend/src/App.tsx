import "./App.css";
import SearchPage from "./Pages/SearchPage";
import Navbar from "./Components/NavBar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default App;
