import { getAuthInfo } from "api/user";
import useUser from "hooks/useUser";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { COLOR } from "styles";
import MenuNoUser from "./MenuNoUser";
import MenuUser from "./MenuUser";
import NavUser from "./NavUser";
import { MenuContainer, NavLink, NavMenu } from "./styles";

const isActive = ({ isActive }) => (isActive ? { color: COLOR.BLACK } : {});

export default function Menu() {
    const { user, logout } = useUser();

    return (
        <MenuContainer>
            <NavMenu>
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
