import styled from "@emotion/styled";

export const Spinner = styled.div`
    aspect-ratio: 1;
    width: ${({ width }) => (width ? `${width}%` : "100%")};
    max-width: 3rem;
    margin: auto;
    border-radius: 50%;
    border: 7px solid #48e;
    border-left-color: transparent;
    animation: spinner 1s linear infinite;

    @keyframes spinner {
        0% {
            transform: rotate(0);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`;
