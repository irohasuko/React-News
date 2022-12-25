import styled from "styled-components";
import { useState } from "react";

const CardHeader = styled.div`
    background-color: lightgray;
    font-size: 20px;
    border: solid 1px;
    border-radius: 10px 10px 0px 0px;
`
const CardImg = styled.img`
    border-right: solid 1px;
    border-left: solid 1px;
    width: 100%;
`

const CardBody = styled.div`
    font-size: 15px;
    border: solid 1px;
`

const StyledCard = styled.div`
    width: 30%;
    margin: 5px;
`

const Card = ({ news }) => {
    console.log(news.media);
    const imgUrl = '0' in news.media ? news.media[0]["media-metadata"][2].url : '';
    return (
        <StyledCard>
            <CardHeader>{news.title}</CardHeader>
            <CardImg src={imgUrl}></CardImg>
            <CardBody>{news.abstract}</CardBody>
        </StyledCard>
    );
};

export default Card;
