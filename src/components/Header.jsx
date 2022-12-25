import styled from "styled-components";

const HeaderText = styled.div`
    font-size: 64px;
    font-family: Arial Black;
    color: #5f5f5f;
    text-align: center;
    padding-top: 10px;
    padding-bottom: 10px;
    margin: 30px;
`
const Header = () => {
    return (
        <HeaderText>MyNews</HeaderText>
    );
};

export default Header;
