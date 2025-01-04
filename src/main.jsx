import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import ArtistPage from "./ArtistPage";
import FanPage from "./FanPage";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/artist" element={<ArtistPage />} />
        <Route path="/artist-page" element={<ArtistPage />} />
        <Route path="/fan-page/:presaveId" element={<FanPage />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
