import { useState, useEffect } from 'react';
import Card from './Card';
import styled from 'styled-components';
import axios from 'axios';

const NewsBox = styled.div`
    text-align: center;
    border: solid 1px;
`

const CardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

const News = ({ category }) => {
    const url = process.env.REACT_APP_NewsURL + category + '.json?api-key=' + process.env.REACT_APP_NewsKey;
    const [news, setNews] = useState([]);
    useEffect(() => {
        axios.get(url).then((res) => {
            setNews(res.data.results);
        });
    }, []);

    return (
        <NewsBox>
            <h2>ニュース一覧</h2>
            <CardContainer>
                {news.map(newsData => (
                    <Card key={newsData.id} news={newsData} />
                ))}
            </CardContainer>
        </NewsBox>
    );
};

export default News;
