import React from "react";
import "./app.scss";
import { Route, Routes } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { HomeScreen, ProjectScreen, CguScreen } from "./components/screens/";
import smoothscroll from "./lib/smoothscroll.js";

smoothscroll.polyfill();
function App() {
  return (
    <>
      <Routes>
        <Route path="*" element={<HomeScreen />} />
        <Route path="/cgu" element={<CguScreen />} />
        <Route path="/devis" element={<ProjectScreen />} />
      </Routes>

      <ToastContainer />
    </>
  );
}

export default App;
