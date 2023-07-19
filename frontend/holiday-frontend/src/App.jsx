import "./App.css";
import LogIn from "./pages/LogIn/LogIn";
import HomePage from "./pages/HomePage/HomePage";
import Holidays from "./pages/Holidays/Holidays";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/holidays" element={<Holidays />} />
      </Routes>
    </Router>
  );
};

export default App;
