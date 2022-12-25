import styled from "styled-components";

const CardHeader = styled.div`
    background-color: lightgray;
    font-size: 20px;
    padding: 5%;
    border: solid 1px;
    border-radius: 10px 10px 0px 0px;
`
const CardImg = styled.img`
    width: 100%;
`

const CardBody = styled.div`
    font-size: 15px;
    padding: 5%;
    border: solid 1px;
    margin-top: -10px;
`

const StyledCard = styled.a`
    width: 30%;
    margin: 5px;
    text-decoration: none;
    color: black;
    border: none;
`

const Card = ({ news }) => {
    console.log(news);
    const imgUrl = '0' in news.multimedia ? news.multimedia[0].url : `${process.env.PUBLIC_URL}/logo192.png`;
    return (
        <StyledCard href={news.url}>
            <CardHeader>{news.title}</CardHeader>
            <CardImg src={imgUrl}></CardImg>
            <CardBody>{news.abstract}</CardBody>
        </StyledCard>
    );
};

export default Card;
