import { useState } from "react";
import { styled } from "styled-components";
import {
    adjectives
} from "../data/adjectives";

import { randomNum } from "../helpers/randomNum";
import Selector from "./Selector";

const Terminal = () => {
    const [adjective, setAdjective] = useState();
    const [noun, setNoun] = useState();
    const [choice, setChoice] = useState();

    const handleClick = e => {
        e.preventDefault();
        if (choice !== "Select from dropdown") {
            const index = randomNum(choice.length)
            const indexAdjective = randomNum(adjectives.length)
            let name = choice[index];
            console.log(choice)

            console.log(name[name.length - 1])
            if (name[name.length - 1].toLowerCase() !== "s") {
                console.log('s');
                name = name + "'s";
                console.log(name)
                setNoun(name);
                setAdjective(adjectives[indexAdjective]);
            }
            else {
                console.log(name)
                setNoun(name);
                setAdjective(adjectives[indexAdjective])
            }
        }
    }

    return (
        <Wrapper>
            <Container>
                <Selector setChoice={setChoice} />
                {noun && adjective &&
                    <P>The {adjective} {noun}</P>
                }
            </Container>
            <button onClick={handleClick}>generate</button>
        </Wrapper>
    );
}

const Container = styled.div`
width: 100%;
`

const P = styled.p`
    text-transform: capitalize;
`

const Wrapper = styled.div`
width: 50%;
min-height: 50%;
/* border: 1px solid red; */
`
export default Terminal;