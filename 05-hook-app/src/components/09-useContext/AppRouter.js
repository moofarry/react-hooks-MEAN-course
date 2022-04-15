import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AboutScreen } from "./AboutScreen";
import { HomeScreen } from "./HomeScreen";
import { LoginScreen } from "./LoginScreen";
import { NavBar } from "./NavBar";

export const AppRouter = () => {
  return (
    <Router>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/about" element={<AboutScreen />} />
          <Route path="/login" element={<LoginScreen />} />

          <Route path="*" element={<HomeScreen />} />
        </Routes>
      </div>
    </Router>
  );
};
