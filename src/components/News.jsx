import Card from './Card';
import styled from 'styled-components';

const NewsBox = styled.div`
    text-align: center;
    border: solid 1px;
`

const CardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

const News = () => {
    return (
        <NewsBox>
            <h2>ニュース一覧</h2>
            <CardContainer>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </CardContainer>
        </NewsBox>
    );
};

export default News;
