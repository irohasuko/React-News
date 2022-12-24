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
    width: 60%;
    font-size: 18px;
    background-color: lightgray;
    border-radius: 10px;
    margin-right: 10px;
    vertical-align: middle;
`

const StyledButton = styled.button`
    display: inline-block;
    width: 20%;
    background-color: blue;
    border-radius: 10px;
    color: white;
    border: none;
    vertical-align: middle;
    padding: 5px;
    margin: 5px;
    cursor: pointer;
`

const Category = () => {
    return (
        <Categorybox>
            <div>カテゴリでフィルター</div>
            <Selector>
                <option default>カテゴリを選択</option>
                <option>テスト１</option>
                <option>テスト２</option>
                <option>テスト３</option>
                <option>テスト４</option>
            </Selector>
            <StyledButton>検索</StyledButton>
        </Categorybox>
    );
};

export default Category;
