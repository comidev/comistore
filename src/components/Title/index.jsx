import styled from "@emotion/styled";

const TitleDefault = `
    text-align: center;
    margin: 0;
`;

export const H1 = styled.h1`
    ${TitleDefault}
    font-size: calc(1.25vw + 1.25vh + 1.8rem);
    font-weight: 800;
    margin-bottom: 2rem;
`;

export const H2 = styled.h2`
    ${TitleDefault}
    font-size: calc(1vw + 1vh + 1.3rem);
    font-weight: 700;
    margin-bottom: 1.7rem;
`;

export const H3 = styled.h3`
    ${TitleDefault}
    font-size: calc(0.8vw + 0.8vh + 1.1rem);
    font-weight: 600;
    margin-bottom: 1.5rem;
`;

export const H4 = styled.h4`
    ${TitleDefault}
    font-size: 1.5rem;
    font-weight: 500;
    margin-bottom: 1.2rem;
`;
