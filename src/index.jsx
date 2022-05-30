import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import NoteDetails from "./components/NoteDetails";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/notes/:uuid" element={<NoteDetails />} />
    </Routes>
  </BrowserRouter>
);
