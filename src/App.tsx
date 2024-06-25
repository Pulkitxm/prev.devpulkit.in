import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import { useEffect } from "react";
import Lenis from "lenis";

export default function App() {
  useEffect(() => {
    const lenis = new Lenis();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => {
      lenis.destroy();
    };
  }, []);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}
