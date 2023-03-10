import { useState, useEffect } from 'react';
import Card from './Card';
import Loading from './Loading';
import styled from 'styled-components';
import axios from 'axios';

const NewsBox = styled.div`
    text-align: center;
    padding-top: 20px;
    margin: 5%;
    border: solid 1px;
`

const CardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

const News = ({ category, isLoading, setIsLoading }) => {
    const url = process.env.REACT_APP_NewsURL + category + '.json?api-key=' + process.env.REACT_APP_NewsKey;
    const [news, setNews] = useState([]);
    useEffect(() => {
        setIsLoading(true);
        axios.get(url).then((res) => {
            setNews(res.data.results);
            setIsLoading(false);
        });
    }, [url]);

    return (
        <NewsBox>
            <h2>ニュース一覧</h2>
            {
                isLoading ?
                    <Loading />
                    :
                    <CardContainer>
                        {news.map(newsData => (
                            <Card key={newsData.uri} news={newsData} />
                        ))}
                    </CardContainer>
            }
        </NewsBox>
    );
};

export default News;
