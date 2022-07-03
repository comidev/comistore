import styled from "@emotion/styled";
import { NavLink as navLink } from "react-router-dom";
import { COLOR, CONTAINER } from "styles";

export const HeaderContainer = styled.header`
    position: fixed;
    height: 4rem;
    display: flex;
    align-items: center;
    width: 100%;
    box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.05);
    background-color: ${COLOR.WHITE};
    z-index: 100;
`;

export const NavContainer = styled.nav`
    ${CONTAINER}
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 551px) {
        justify-content: center;
    }
`;

export const MenuContainer = styled.div`
    display: flex;
    align-items: center;
`;

export const MenuButton = styled.button`
    display: none;
    position: absolute;

    right: 0.3rem;
    width: 2.5rem;
    height: 2.5rem;
    font-size: 2rem;
    line-height: 0;
    cursor: pointer;
    border-radius: 50%;

    &:hover {
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }

    @media screen and (max-width: 551px) {
        display: inline-block;
    }
`;

export const NavMenu = styled.ul`
    display: flex;
    li {
        margin-left: 1rem;
    }

    @media screen and (max-width: 551px) {
        position: absolute;
        top: 4rem;
        right: -9rem;
        flex-direction: column;
        border: 1px solid rgba(0, 0, 0, 0.1);
        border-bottom: 0;
        background-color: ${COLOR.WHITE};

        ${({ show }) => (show ? "right: 1rem;" : "right: -9rem;")}

        li {
            margin-left: 0;
            padding: 0.5rem 1rem;
            border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        }

        transition: right ease 300ms;
    }
`;

export const NavLink = styled(navLink)`
    font-size: 15px;
    font-weight: 500;
    color: ${COLOR.TEXT.BLACK};

    &:hover {
        color: ${COLOR.BLACK};
    }
`;

export const AvatarContainer = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    height: 4rem;
    margin-left: 1rem;

    @media screen and (max-width: 551px) {
        position: absolute;
        left: 0;
    }
`;

export const OptionsMenu = styled.ul`
    background-color: ${COLOR.WHITE};
    border-bottom-right-radius: 0.4rem;
    border-bottom-left-radius: 0.4rem;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-top: transparent;
    position: absolute;
    top: 4rem;
    right: 0rem;
    ${({ move }) => (move ? "display: block;" : "display: none;")}

    @media screen and (max-width: 551px) {
        width: 10rem;
        left: 0;
    }

    li {
        padding: 0.5rem;
        border-top: 1px solid rgba(0, 0, 0, 0.1);
    }
`;

export const ButtonLogut = styled.button`
    font-size: 15px;
    font-weight: 500;
    color: ${COLOR.TEXT.BLACK};

    &:hover {
        color: ${COLOR.BLACK};
    }
`;
