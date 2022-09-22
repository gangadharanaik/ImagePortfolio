import React from 'react';
import logo from './logo.svg';
import './App.scss';
import ResponsiveHeader from './components/Header';
import { BrowserRouter as Router, Routes , Route } from "react-router-dom";
import Home from './pages/Home';
import AddUpdateImage from './pages/AddImage';

function App() {
  return (
    <div className="App">
      
      <Router>
      <ResponsiveHeader />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/addimage" element={<AddUpdateImage/>} />
      </Routes>
    </Router>
        
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
    </div>
  );
}

export default App;
