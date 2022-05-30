import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import NoteDetails from "./components/NoteDetails";
import NotFound from "./components/NotFound";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/notes/:uuid" element={<NoteDetails />} />
      <Route path="/404" element={<NotFound />} />
      <Route path="*" element={<Navigate to="/404" replace />} />
    </Routes>
  </BrowserRouter>
);
