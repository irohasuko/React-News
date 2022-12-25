import styled from "styled-components";

const Categorybox = styled.div`
    text-align: center;
    border: solid 3px;
    border-radius: 10px;
    padding: 20px;
    margin: 10px 50px 10px 50px;
    background-color: #f2f2f2;
`

const Selector = styled.select`
    display: inline-block;
    width: 80%;
    text-align: center;
    font-size: 24px;
    background-color: lightgray;
    border-radius: 10px;
    margin-right: 10px;
    vertical-align: middle;
`

const Category = ({ setCategory }) => {
    const SECTIONS = [
        "home",
        "arts",
        "automobiles",
        "books",
        "business",
        "fashion",
        "food",
        "health",
        "insider",
        "magazine",
        "movies",
        "national",
        "nyregion",
        "obituaries",
        "opinion",
        "politics",
        "realestate",
        "science",
        "sports",
        "sundayreview",
        "technology",
        "theater",
        "tmagazine",
        "travel",
        "upshot",
        "world",
    ];

    const handleChange = (e) => {
        setCategory(e.target.value);
    }

    return (
        <Categorybox>
            <div>カテゴリでフィルター</div>
            <Selector onChange={handleChange}>
                {SECTIONS.map(section => (
                    <option key={section} value={section}>{section}</option>
                ))}
            </Selector>
        </Categorybox>
    );
};

export default Category;
