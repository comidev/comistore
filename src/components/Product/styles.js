import styled from "@emotion/styled";
import { COLOR } from "styles";

export const ProductContainer = styled.article`
    width: 100%;
    max-width: 25rem;
    margin-right: 2rem;
    margin-bottom: 2rem;
    padding: 0.5rem;
    border-radius: 6px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

export const ProductImg = styled.div`
    overflow: hidden;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
`;

export const ProductName = styled.p`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: ${COLOR.BLACK};
    font-weight: 600;
    height: 4.5rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    margin-bottom: 0.5rem;
`;

export const ProductDescription = styled.p`
    color: ${COLOR.TEXT.BLACK};
    font-weight: 600;
    height: 7.5rem;
    margin-bottom: 0.5rem;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

export const ProductPrice = styled.p`
    display: flex;
    justify-content: space-between;
    font-weight: 600;
    color: ${COLOR.BLACK};

    span {
        color: ${COLOR.SPRING};
    }
`;

export const FormShopping = styled.form`
    display: flex;
    justify-content: space-between;
    height: 3.5rem;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    margin-top: 0.5rem;
    padding-top: 0.5rem;

    input {
        text-align: center;
        font-size: 1.4rem;
        width: 3.5rem;
        padding: 0;
        padding-left: 0.7rem;
        border: 1px solid ${COLOR.TEXT.GRIS};
        border-radius: 6px;
        background-color: ${COLOR.TEXT.WHITE};
    }
`;

const FORM_BUTTONS = `
    border-radius: 6px;
    font-weight: 600;
    color: ${COLOR.WHITE};
`;

export const FormAmount = styled.div`
    display: flex;
    width: 100%;
    max-width: 8rem;
`;

export const FormButtons = styled.div`
    display: grid;
    gap: 0.1rem;
    margin: 0 0.3rem;
    width: 100%;
    max-width: 3rem;

    button {
        ${FORM_BUTTONS}
        font-size: 20px;
        height: 1.4rem;
        line-height: 0;
        background-color: ${COLOR.PRIMARY};

        &:hover {
            background-color: ${COLOR.PRIMARY}dd;
            cursor: pointer;
        }
    }
`;

export const ButtonBuy = styled.button`
    ${FORM_BUTTONS}
    min-width: 6rem;
    background-color: ${COLOR.SPRING};
    font-size: 1rem;
    padding: 0 1rem;

    &:hover {
        background-color: ${COLOR.SPRING}dd;
    }
`;
