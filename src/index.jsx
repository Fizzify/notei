import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import NoteDetails from "./routes/NoteDetails";
import NotFound from "./routes/NotFound";
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
