import styled from "styled-components";

const CardHeader = styled.div`
    background-color: lightgray;
    font-size: 20px;
    border: solid 1px;
    border-radius: 10px 10px 0px 0px;
`
const CardImg = styled.div`
    border-right: solid 1px;
    border-left: solid 1px;
`

const CardBody = styled.div`
    font-size: 15px;
    border: solid 1px;
`

const StyledCard = styled.div`
    width: 30%;
    margin: 5px;
`

const Card = () => {
    return (
        <StyledCard>
            <CardHeader>ヘッダー</CardHeader>
            <CardImg>画像</CardImg>
            <CardBody>ニュース概要</CardBody>
        </StyledCard>
    );
};

export default Card;