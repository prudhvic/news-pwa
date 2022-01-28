import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Navbar from "./Navbar";
import Cinema from "./components/Cinema";
import Sports from "./components/Sports";
import Tech from "./components/Tech";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/sports" element={<Sports />} />

        <Route path="/cinema" element={<Cinema />} />
        <Route path="/technews" element={<Tech />} />
      </Routes>
    </>
  );
}

export default App;
