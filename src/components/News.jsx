import Card from './Card';
import styled from 'styled-components';

const NewsBox = styled.div`
    text-align: center;
    border: solid 1px;
`

const News = () => {
    return (
        <NewsBox>
            <h2>ニュース一覧</h2>
            <Card />
        </NewsBox>
    );
};

export default News;