import './App.css';
import Navbar from './components/navbar';
import Home from "./components/home";
import Favoritos from "./components/favoritos";
import Rodapé from "./components/rodapé";
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/favoritos" element={ <Favoritos/> } />
      </Routes>
      <Rodapé/>
    </>
  );
}

export default App;
