import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./modules/shares/Navbar";
import Loginpage from "./modules/auth/Loginpage";
import Landingpage from "./modules/dashboard/Landingpage";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Loginpage />} />{" "}
          <Route path="/dashboard" element={<Landingpage />} />{" "}
        </Routes>
      </BrowserRouter>{" "}
    </div>
  );
}
