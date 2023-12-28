// eslint-disable-next-line no-unused-vars
import React from "react";
import "./app.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import NotePage from "./Pages/NotePage";
import CreateNew from "./Pages/CreateNew";
import BottomDock from "./components/BottomDock";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/note-page" element={<NotePage />} />
        <Route path="/create" element={<CreateNew />} />
      </Routes>
      <BottomDock />
    </Router>
  );
}

export default App;
