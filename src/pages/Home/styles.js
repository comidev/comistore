import styled from "@emotion/styled";
import { COLOR } from "styles";

export const HomeHeader = styled.header`
    display: flex;
    width: 100%;
    max-width: 30rem;
    margin: 3rem auto;
    align-items: center;
    justify-content: space-between;
`;

export const FormSearch = styled.form`
    display: flex;

    input {
        border-radius: 0.8rem;
        width: 100%;
        max-width: max-content;
        margin-right: 1rem;
        padding-left: 0.5rem;
        border: 1px solid ${COLOR.REACT};

        &:focus-within {
            border-color: transparent;
            box-shadow: 0px 0px 10px 0px ${COLOR.REACT};
        }
    }
`;

export const CategoriesItems = styled.ul`
    background-color: ${COLOR.WHITE2};
    width: 100%;
    height: min-content;
    text-align: center;
    border-top: 1px solid rgba(0, 0, 0, 0.05);
`;

export const CategoryItem = styled.button`
    color: ${COLOR.BLACK};
    font-weight: 600;
    padding: 0.5rem 0;
    display: inline-block;
    height: 100%;
    width: 100%;

    border: 1px solid rgba(0, 0, 0, 0.05);
    border-top: 0;

    &:hover {
        cursor: pointer;
        background-color: ${COLOR.TEXT.WHITE};
    }
`;

export const ProductsContainer = styled.section`
    display: flex;
    flex-wrap: wrap;
`;
