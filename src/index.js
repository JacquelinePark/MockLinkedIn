import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/navbar";
import Firstsection from "./components/firstsection";
import Articles from "./components/articles";
import Learning from "./components/learning";
import People from "./components/people";
import Jobs from "./components/jobs";
import Games from "./components/games";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <NavBar />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Firstsection/>}/>
        <Route path="/articles" element={<Articles />} />
        <Route path="/people" element={<People />} />
        <Route path="/learning" element={<Learning />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/games" element={<Games />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
