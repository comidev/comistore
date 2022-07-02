import Logo from "components/Logo";
import Menu from "./Menu";
import { HeaderContainer, NavContainer } from "./styles";

export default function Nav() {
    return (
        <HeaderContainer>
            <NavContainer>
                <Logo />
                <Menu />
            </NavContainer>
        </HeaderContainer>
    );
}
