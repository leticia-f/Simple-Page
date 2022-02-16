import './App.css';
import Navbar from './components/navbar';
import Home from "./components/home";
import Favoritos from "./components/favoritos";
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/favoritos" element={ <Favoritos/> } />
      </Routes>
    </>
  );
}

export default App;
