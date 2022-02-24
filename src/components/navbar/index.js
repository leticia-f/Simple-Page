import React from "react";
import './navbar.css';
import Logo from '../imagens/logo.png';
import styled from "styled-components";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <>
                <nav class="navbar navbar-expand-lg navbar-light">
                    <div class="container">
                        <LogoNavbar class="navbar-brand" src={Logo} />
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <a><Link to="/">Início</Link></a>
                                </li>
                                <li class="nav-item">
                                    <Link to="/">Personagens</Link>
                                </li>
                                <li class="nav-item">
                                    <Link to="/">Guias</Link>
                                </li>
                                <li class="nav-item">
                                    <Link to="/">Storyline</Link>
                                </li>
                                <li class="nav-item">
                                    <Link to="/favoritos">Eventos</Link>
                                </li>
                                <li class="nav-item">
                                    <Link to="/">Banners</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
        </>
    );
}

export default Navbar;

const LogoNavbar = styled.img`
    width: 230px;
    height: 115px;
    padding-top: 20px;
    padding-bottom: 20px;
    padding-right: 15px;
`;