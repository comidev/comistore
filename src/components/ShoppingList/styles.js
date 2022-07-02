import styled from "@emotion/styled";
import { COLOR } from "styles";

export const CartList = styled.ul`
    margin: 0 auto;
    height: 23rem;
    overflow-y: auto;
    font-weight: 600;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
`;

export const CartItem = styled.li`
    position: relative;
    display: grid;
    grid-template-columns: 4fr 5fr;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-top: 0;
`;

export const CartItemImg = styled.div`
    border-right: 1px solid rgba(0, 0, 0, 0.1);
`;

export const CartItemName = styled.div``;

export const CartItemDetail = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    span {
        border-top: 1px solid rgba(0, 0, 0, 0.1);
    }
`;

export const CartItemLabel = styled.span`
    display: inline-block;
    width: 100%;
    background-color: ${({ bg }) => (bg ? bg : COLOR.PRIMARY)};
    color: ${({ color }) => (color ? color : COLOR.WHITE)};
    text-align: center;
    ${({ fz }) => fz && `font-size: ${fz};`}
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-top: 0;
`;
