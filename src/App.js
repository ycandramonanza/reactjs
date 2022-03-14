import logo from './logo.svg';
import { Routes, Route } from "react-router-dom";

import './App.css';
import Home from './Pages/Home';
import About from './Pages/About';
import Auth from './Pages/Auth';
// import Sidebar from './Pages/App';


function App() {
  return ( 
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Auth" element={<Auth />} />
        {/* <Route path='/sidebar' element={<Sidebar />} /> */}
    </Routes>
  );
}

export default App;
