import './App.css';
import Navbar from './components/navbar';
import Home from "./components/home";
import Favoritos from "./components/favoritos";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <>
      <Navbar/>
      <Home/>
      <Favoritos/>
    </>
  );
}

export default App;
