import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import ScrollAmount from "./components/ScrollAmount";

export default function App() {
  return (
    <div className="bg-black dark">
      <NavBar />
      <ScrollAmount />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}
