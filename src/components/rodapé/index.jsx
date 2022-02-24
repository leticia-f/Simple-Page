import './rodapé.css';
import React from "react";
import styled from "styled-components";
import LogoMihoyo from '../imagens/logo-mihoyo.png';

const Rodapé = () => {
    return (
        <>
            <div>
                <div class="text-center py-5" id="rodapé">
                    <HoyoVerse src={LogoMihoyo}/>
                    <p id="copyright"> Copyright © COGNOSPHERE. All Rights Reserved. </p>
                </div>
            </div>
        </>
    );
}

export default Rodapé;

const HoyoVerse = styled.img`
    width: 320px;
    padding-bottom: 20px;
`;