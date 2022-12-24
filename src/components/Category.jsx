import styled from "styled-components";

const Categorybox = styled.div`

`

const Selector = styled.select`

`

const Category = () => {
    return (
        <Categorybox>
            <div>カテゴリでフィルター</div>
            <select>
                <option default>カテゴリを選択</option>
                <option>テスト１</option>
                <option>テスト２</option>
                <option>テスト３</option>
                <option>テスト４</option>
            </select>
            <button>検索</button>
        </Categorybox>
    );
};

export default Category;
