import styled from "@emotion/styled";
import { COLOR, CONTAINER } from "styles";

export const FooterStyles = styled.footer`
    margin-top: auto;
    box-shadow: 0px -1px 10px rgba(0, 0, 0, 0.08);
    background-color: ${COLOR.WHITE2};
    color: ${COLOR.TEXT.BLACK};
`;

export const FooterContainer = styled.section`
    ${CONTAINER};
`;

export const FooterBody = styled.section`
    display: flex;
    justify-content: space-around;
    padding: 2rem 0 3rem;
`;

export const FooterLink = styled.li`
    font-size: 15px;
    font-weight: 600;
    margin-bottom: 0.5rem;

    a {
        color: ${COLOR.TEXT.BLACK};

        :hover {
            color: ${COLOR.BLACK};
        }
    }
`;

export const FooterFooter = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 4rem;
    font-size: 14px;
    box-shadow: 0px -1px 0px rgba(0, 0, 0, 0.08);
`;
