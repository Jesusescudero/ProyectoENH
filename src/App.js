import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Diagnostico from './Components/Diagnostico';
import Ciencia from './Components/Ciencia';
import Nosotros from './Components/Nosotros';
import Experimentos from './Components/Experimentos';
import Indicadores from './Components/Indicadores';
import Proyecto from './Components/Proyecto';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/diagnostico" element={<Diagnostico />} />
        <Route path="/ciencia" element={<Ciencia />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/experimentos" element={<Experimentos />} />
        <Route path="/indicadores" element={<Indicadores />} />
        <Route path="/proyecto" element={<Proyecto />} />
      </Routes>
    </Router>
  );
}


export default App;

