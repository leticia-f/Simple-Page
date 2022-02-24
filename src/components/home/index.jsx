import homeBackground from '../imagens/yae-miko.jpg';
import raidenshogun1 from '../imagens/raiden1.jpeg';
import raidenshogun2 from '../imagens/raiden2.jpeg';

import yaecarousel from '../imagens/carousel1yae.PNG';
import zhongcarousel from '../imagens/carousel2zhongli.PNG';
import yanfeicarousel from '../imagens/carousel3yanfei.PNG';
import dionacarousel from '../imagens/carousel4diona.PNG';
import diluccarousel from '../imagens/carousel5diluc.PNG';

import styled from "styled-components";
import './home.css';

const Home = () => {
    return (
        <>
            <body>

                <HomeImg src={homeBackground} />

                <br /><br /><br /><br /><br /><br />

                <div class="container">
                    <div class="ctnFlex">
                        <div class="op1">
                            <div id="topo">
                                <h1> Entre nesse Vasto Mundo Mágico de Aventura </h1>
                                <h2> O vasto continente "Teyvat", onde incontáveis criaturas se reproduziram
                                    e se reuniram, contém todos os fenômenos do céu e da terra. Este é um
                                    mundo onde os sete deuses governam e se encontram. Sob o céu desconhecido,
                                    vocês são um par de gêmeos viajantes, vindos de um outro mundo. Separados
                                    por deuses estranhos, você foi selado e adormeceu. Ao acordar novamente,
                                    o cenário entre o céu e a terra mudou completamente...</h2>
                            </div>
                        </div>
                        <div class="op2">
                            <Raiden2 id="imagem" src={raidenshogun2} />
                        </div>
                    </div>



                    <div class="ctnFlex">
                        <div class="op2">
                            <Raiden1 id="imagem" src={raidenshogun1} />
                        </div>
                        <div class="op1">
                            <div id="topo">
                                <h1> Disponível agora, versão 2.5: "O Florescer da Sakura" </h1>
                                <h2> <b> [Nova Personagem] </b> Yae Miko <br />
                                    <b> [Novo Evento] </b> Evento Temático da Versão, "Portal de Oferenda dos Três Reinos"<br />
                                    <b> [Novo Enredo] </b> Atualização da Missão Lendária<br />
                                    <b> [Nova Arma] </b> Prova de Kagura<br />
                                    <b> [Novo Monstro] </b> Narukami, Comandante da Catástrofe</h2>
                            </div>
                        </div>
                    </div>



                    <div id="carouselcenter">
                        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
                            </div>
                            <div class="carousel-inner">
                                <div class="carousel-item active d-flex justify-content-center" data-bs-interval="10000">
                                    <Yae1 src={yaecarousel} />
                                </div>
                                <div class="carousel-item d-flex justify-content-center" data-bs-interval="5000">
                                    <Zhong2 src={zhongcarousel} />
                                </div>
                                <div class="carousel-item d-flex justify-content-center" data-bs-interval="5000">
                                    <Yanfei3 src={yanfeicarousel} />
                                </div>
                                <div class="carousel-item d-flex justify-content-center" data-bs-interval="5000">
                                    <Diona4 src={dionacarousel} />
                                </div>
                                <div class="carousel-item d-flex justify-content-center" data-bs-interval="5000">
                                    <Diluc5 src={diluccarousel} />
                                </div>

                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>



                </div>

            </body>
        </>
    );
}

export default Home;

const HomeImg = styled.img`
    height: 100%;
    width: 100%;
`;

const Raiden1 = styled.img`
    width: 110%;
`;

const Raiden2 = styled.img`
    width: 110%;
`;

const Yae1 = styled.img`
    width: 80%;
`;

const Zhong2 = styled.img`
    width: 80%;
`;

const Yanfei3 = styled.img`
    width: 80%;
`;

const Diona4 = styled.img`
    width: 80%;
`;

const Diluc5 = styled.img`
    width: 80%;
`;