import styled from "styled-components";

const HeaderText = styled.header`
    font-size: 64px;
    font-family: Arial Black;
    color: #5f5f5f;
    text-align: center;
    padding-top: 10px;
    padding-bottom: 10px;
`
const Header = () => {
    return (
        <HeaderText>MyNews</HeaderText>
    );
};

export default Header;
