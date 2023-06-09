import { useState } from "react";
import { styled } from "styled-components";
import {
    adjectives
} from "../data/adjectives";
import { nouns } from "../data/nouns";
import { randomNum } from "../helpers/randomNum";
import Selector from "./Selector";

const Terminal = () => {
    const [adjective, setAdjective] = useState();
    const [noun, setNoun] = useState();
    const [choice, setChoice] = useState();

    const handleClick = e => {
        e.preventDefault();
        const indexNoun = randomNum(nouns.length)
        const indexAdjective = randomNum(adjectives.length)
        setAdjective(adjectives[indexAdjective])
        setNoun(nouns[indexNoun])
    }

    return (
        <Wrapper>
            <Container>
                <Selector setChoice={setChoice} />
                {noun && adjective &&
                    <p>{adjective} {noun}</p>
                }
            </Container>
            <button onClick={handleClick}>generate</button>
        </Wrapper>
    );
}

const Container = styled.div`
width: 100%;
`

const Wrapper = styled.div`
width: 50%;
min-height: 50%;
border: 1px solid red;
`
export default Terminal;