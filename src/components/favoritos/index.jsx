import yaeraiden from '../imagens/yae-ei.jpg';
import styled from "styled-components";

const Favoritos = () => {
    return (
        <>
            <HomeImg2 src={yaeraiden} />
        </>
    );
}

export default Favoritos;

const HomeImg2 = styled.img`
    height: 100%;
`;