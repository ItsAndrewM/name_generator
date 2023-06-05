import { styled } from "styled-components";
import Terminal from "./Terminal";

const Home = () => {
    return (
        <Wrapper>
            <Terminal />
        </Wrapper>
    );
}

const Wrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100vw;
max-width: 100vw;
min-height: 100vh;
`

export default Home;