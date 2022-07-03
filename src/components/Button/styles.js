import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { COLOR } from "styles";

const BUTTON = `
    display: inline-block;
    padding: 0.6rem 1rem;
    width: 100%;
    max-width: max-content;
    height: max-content;
    border-radius: 4px;
    font-weight: 600;
    font-size: 15px;

    @media screen and (max-width: 551px){
        font-size: 15px;
    }
`;

export const Button = styled.button`
    ${BUTTON}
    box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
    background-color: ${({ bg }) => bg || COLOR.PRIMARY};
    color: ${({ color }) => color || COLOR.WHITE};
    ${({ width }) => width && `max-width: ${width};`}
    ${({ height }) => height && `height: ${height};`}
    ${({ fontSize }) => fontSize && `font-size: ${fontSize};`}

    transition-property: transform, color, background-color;
    transition: ease 300ms;

    &:hover {
        cursor: pointer;
        background-color: ${COLOR.WHITE};
        color: ${COLOR.BLACK};
        transform: translateY(-2px);
        box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.2);
    }
`;

export const ButtonLink = styled(Link)`
    ${BUTTON}
    box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
    background-color: ${({ bg }) => bg || COLOR.PRIMARY};
    color: ${({ color }) => color || COLOR.WHITE};
    ${({ width }) => width && `max-width: ${width};`}
    ${({ height }) => height && `height: ${height};`}
    ${({ fontSize }) => fontSize && `font-size: ${fontSize};`}
    text-align:center;
    transition-property: transform, color, background-color;
    transition: ease 300ms;

    &:hover {
        cursor: pointer;
        background-color: ${COLOR.WHITE};
        color: ${COLOR.BLACK};
        transform: translateY(-3px);
        box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.2);
    }
`;

export const CartButtonContainer = styled.button`
    position: relative;
    width: 3rem;
    height: 3rem;
    background-color: ${COLOR.REACT};
    color: ${COLOR.WHITE};
    font-size: 2.8rem;
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

    transition-property: transform, background-color;
    transition: ease 300ms;

    &:hover {
        cursor: pointer;
        transform: translateY(-1px);
        background-color: ${COLOR.BLUE};
    }
`;

export const CartQuantity = styled.span`
    position: absolute;
    top: -0.5rem;
    right: -0.5rem;
    width: 1.25rem;
    height: 1.25rem;
    padding-top: 0.4px;
    border-radius: 50%;
    font-size: 13px;
    font-weight: 600;
    background-color: ${COLOR.RED};
`;

export const ButtonCloseDialog = styled.button`
    position: absolute;
    right: 0.2rem;
    top: 0.2rem;
    background-color: ${COLOR.PRIMARY};
    border-radius: 50%;
    padding-bottom: 0.1rem;
    width: 1.5rem;
    height: 1.5rem;

    &:hover {
        cursor: pointer;
        background-color: ${COLOR.PRIMARY}aa;
    }
`;

export const Remove = styled(Button)`
    opacity: 0.7;
    background-color: ${COLOR.BLACK};
    color: ${COLOR.WHITE};
    padding: 0.15rem 0.3rem;
    border-radius: 4px;
    font-size: 12px;
    position: absolute;
    top: 0.2rem;
    left: 0.2rem;

    &:hover {
        opacity: 1;
    }
`;
