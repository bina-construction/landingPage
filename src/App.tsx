import React from "react";
import "./app.scss";
import { Route, Routes } from "react-router-dom";
// import AdminPanel from "lyatom-cms";
// import data from "./data/";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { HomeScreen, ProjectScreen, CguScreen } from "./components/screens/";

function App() {
  return (
    <>
      {/* <AdminPanel
        config={data}
        githubToken={process.env.REACT_APP_GH_TOKEN_PERSONAL!}
      /> */}

      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/home" element={<HomeScreen />} />
        <Route path="/cgu" element={<CguScreen />} />
        <Route path="/project" element={<ProjectScreen />} />
      </Routes>

      <ToastContainer />
    </>
  );
}

export default App;
