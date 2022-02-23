import homeBackground from '../imagens/yae-miko.jpg';
import raidenshogun1 from '../imagens/raiden1.jpeg';
import styled from "styled-components";
import './home.css';

const Home = () => {
    return (
        <>
            <body>
                <HomeImg src={homeBackground} />
                <br /><br /><br /><br /><br /><br />
                <div class="container">
                    <div class="col-5">
                        <h1> Entre nesse Vasto Mundo Mágico de Aventura </h1> <br/>
                        <h2> O vasto continente "Teyvat", onde incontáveis criaturas se reproduziram e se reuniram, contém todos os fenômenos do céu e da terra. Este é um mundo onde os sete deuses governam e se encontram. Sob o céu desconhecido, vocês são um par de gêmeos viajantes, vindos de um outro mundo. Separados por deuses estranhos, você foi selado e adormeceu. Ao acordar novamente, o cenário entre o céu e a terra mudou completamente...</h2>
                    </div>
                    <div class="col-5">
                        <Raiden1 src={raidenshogun1}/>
                    </div>
                </div>
            </body>
        </>
    );
}

export default Home;

const HomeImg = styled.img`
    height: 100%;
`;

const Raiden1 = styled.img`
    width: 30%;
`;