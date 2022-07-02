import styled from "@emotion/styled";

export const CartContainer = styled.div`
    position: fixed;
    top: 5rem;
    right: 13rem;
    z-index: 50;

    @media screen and (max-width: 1600px) {
        right: 1rem;
    }
`;

export const ButtonButContainer = styled.div`
    width: max-content;
    margin: 1rem auto;
`;

export const ConfirmedContainer = styled.div`
    height: 8rem;
    width: 100%;
    padding: 1rem 2rem;
    text-align: center;
    font-size: 2rem;
`;
