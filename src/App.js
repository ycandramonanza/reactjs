import logo from './logo.svg';
import { Routes, Route } from "react-router-dom";

import './App.css';
import Home from './Pages/Home';
import About from './Pages/About';
import Auth from './Pages/Auth';


function App() {
  return ( 
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Auth" element={<Auth />} />
    </Routes>
  );
}

export default App;
