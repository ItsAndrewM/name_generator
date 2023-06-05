import styled from "styled-components"

const Header = () => {
    return (
        <Wrapper>
            Header
        </Wrapper>
    );
}

const Wrapper = styled.div`
    min-height: 3em;
    background-color: black;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
`

export default Header;