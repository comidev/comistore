import useUser from "hooks/useUser";
import { COLOR } from "styles";
import MenuNoUser from "./MenuNoUser";
import MenuUser from "./MenuUser";
import NavUser from "./NavUser";
import { MenuButton, MenuContainer, NavLink, NavMenu } from "./styles";
import { AiOutlineMenu } from "react-icons/ai";
import { GrClose } from "react-icons/gr";
import { useState } from "react";

const isActive = ({ isActive }) => (isActive ? { color: COLOR.BLACK } : {});

export default function Menu() {
    const { user, logout } = useUser();
    const [showMenu, setShowMenu] = useState(false);

    const handleShow = () => setShowMenu(!showMenu);

    return (
        <MenuContainer>
            <NavMenu show={showMenu ? "si" : ""}>
                <li>
                    <NavLink style={isActive} to="home">
                        Inicio
                    </NavLink>
                </li>
                {user ? (
                    <MenuUser isActive={isActive} />
                ) : (
                    <MenuNoUser isActive={isActive} />
                )}
            </NavMenu>
            <MenuButton onClick={handleShow}>
                {showMenu ? <GrClose /> : <AiOutlineMenu />}
            </MenuButton>
            {user && (
                <NavUser
                    name={user.name}
                    username={user.username}
                    photoUrl={user.photoUrl}
                    isActive={isActive}
                    handleLogout={logout}
                />
            )}
        </MenuContainer>
    );
}
