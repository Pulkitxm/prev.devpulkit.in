import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";

export default function App() {
  return (
    <div className="h-[100svh] w-screen">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}
