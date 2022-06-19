import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Lobby from './components/Lobby';
import Home from './components/Home';
import SobreMi from './components/SobreMi';
import ProtectedRoutes from './components/ProtectedRoutes';
import Portafolio from './components/Portafolio';
import Contacto from './components/Contacto';

function App() {
  
  return (
   <HashRouter >  
    <div className="App">
      <Routes>
      <Route path="/" element={<Lobby/>} />
      <Route element={<ProtectedRoutes/>} />
      <Route path="/Home" element={<Home/>} />
      <Route path="/SobreMi" element={<SobreMi/>} />
      <Route path="/Portafolio" element={<Portafolio/>} />
      <Route path="/Contacto" element={<Contacto/>} />
      </Routes>
    </div>
    </HashRouter>
  );
}

export default App;
