import React from "react";
import './navbar.css';
import Logo from '../imagens/logo.png';
import styled from "styled-components";

function Navbar() {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light">
                <div class="container">
                    <LogoNavbar class="navbar-brand" src={Logo} href="#" />
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Início</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Personagens</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Guias</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Storyline</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Eventos</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Banners</a>
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
    padding-right: 25px;
`;