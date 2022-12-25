import styled from "styled-components";

const CardHeader = styled.div`
    background-color: lightgray;
    font-size: 20px;
    padding: 5%;
    border: solid 1px;
    border-radius: 10px 10px 0px 0px;
`
const CardImg = styled.img`
    border: solid 1px;
    width: 99%;
`

const CardBody = styled.div`
    font-size: 15px;
    padding: 5%;
    border: solid 1px;
    margin-top: -10px;
`

const StyledCard = styled.div`
    width: 30%;
    margin: 5px;
`

const Card = ({ news }) => {
    const imgUrl = '0' in news.media ? news.media[0]["media-metadata"][2].url : `${process.env.PUBLIC_URL}/logo192.png`;
    return (
        <StyledCard>
            <CardHeader>{news.title}</CardHeader>
            <CardImg src={imgUrl}></CardImg>
            <CardBody>{news.abstract}</CardBody>
        </StyledCard>
    );
};

export default Card;
