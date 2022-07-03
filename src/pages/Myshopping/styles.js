import styled from "@emotion/styled";

export const Invoices = styled.section`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
    gap: 1rem;
`;

export const Invoice = styled.article`
    max-width: 20rem;
    margin-right: 1rem;
    margin-bottom: 1rem;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border-radius: 1.5rem;
    overflow: hidden;
`;
