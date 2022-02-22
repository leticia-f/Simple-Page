import homeBackground from '../imagens/yae-miko.jpg';
import styled from "styled-components";

const Home = () => {
    return (
        <>
            <HomeImg src={homeBackground}/>
            <h1 class="carousel-caption">Genshin</h1>
        </>
    );
}

export default Home;

const HomeImg = styled.img`
    height: 100%;
`;