import homeBackground from '../imagens/yae-miko.jpg';
import raidenshogun1 from '../imagens/raiden1.jpeg';
import raidenshogun2 from '../imagens/raiden2.jpeg';
import styled from "styled-components";
import './home.css';

const Home = () => {
    return (
        <>
            <body>
                <HomeImg src={homeBackground} />
                <h3 class="carousel-caption"> When the Sakura Blooms </h3>

                <br /><br /><br /><br /><br /><br />

                <div class="container">
                    <div class="col-6" id="texto">
                        <div id='centro'>
                            <h1> Entre nesse Vasto Mundo Mágico de Aventura </h1> <br />
                            <h2> O vasto continente "Teyvat", onde incontáveis criaturas se reproduziram
                                e se reuniram, contém todos os fenômenos do céu e da terra. Este é um
                                mundo onde os sete deuses governam e se encontram. Sob o céu desconhecido,
                                vocês são um par de gêmeos viajantes, vindos de um outro mundo. Separados
                                por deuses estranhos, você foi selado e adormeceu. Ao acordar novamente,
                                o cenário entre o céu e a terra mudou completamente...</h2>
                        </div>
                    </div>
                    <div class="col-6">
                        <Raiden2 id="imagem" src={raidenshogun2} />
                    </div>
                </div>

                <br /><br /><br /><br />

                <div class="container">
                    <div class="col-6">
                        <Raiden1 id="imagem" src={raidenshogun1} />
                    </div>
                    <div class="col-6" id="texto">
                        <div id='centro'>
                            <div id="centroteste">
                                <h1> Disponível agora, versão 2.5: "O Florescer da Sakura" </h1> <br />
                                <h2> <b> [Nova Personagem] </b> Yae Miko <br />
                                    <b> [Novo Evento] </b> Evento Temático da Versão, "Portal de Oferenda dos Três Reinos"<br />
                                    <b> [Novo Enredo] </b> Atualização da Missão Lendária<br />
                                    <b> [Nova Arma] </b> Prova de Kagura<br />
                                    <b> [Novo Monstro] </b> Narukami, Comandante da Catástrofe</h2>
                            </div>
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