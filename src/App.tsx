import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import ResponsiveHeader from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddImage from "./pages/AddImage";

function App() {
  return (
    <div className="App">
      <Router>
        <ResponsiveHeader />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addimage" element={<AddImage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
