import styled from "@emotion/styled";
import logo from "images/logo.png";
import { NavLink } from "react-router-dom";

const LogoContainer = styled(NavLink)`
    max-width: ${({ width }) => `${width || 10}rem`};
    width: 100%;
    transition: transform ease 300ms;

    &:hover {
        transform: scale(105%);
    }
`;

export default function Logo({ width }) {
    return (
        <LogoContainer to={"home"} width={width}>
            <img src={logo} alt="logo" />
        </LogoContainer>
    );
}
