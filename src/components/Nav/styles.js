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
`;
export const NavMenu = styled.ul`
    display: flex;
    li {
        margin-left: 1rem;
    }
`;

export const MenuContainer = styled.div`
    display: flex;
    align-items: center;
`;

export const NavLink = styled(navLink)`
    font-size: 15px;
    font-weight: 500;
    color: ${COLOR.TEXT.BLACK};

    &:hover {
        color: ${COLOR.BLACK};
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

export const OptionsMenu = styled.ul`
    background-color: ${COLOR.WHITE2};
    border-bottom-right-radius: 0.4rem;
    border-bottom-left-radius: 0.4rem;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-top: transparent;
    position: absolute;
    top: 4rem;
    right: 0rem;
    ${({ move }) => (move ? "display: block;" : "display: none;")}

    li {
        padding: 0.5rem;
        border-top: 1px solid rgba(0, 0, 0, 0.1);
    }
`;

export const AvatarContainer = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    height: 4rem;
    margin-left: 1rem;
`;
