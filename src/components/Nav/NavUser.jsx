import Avatar from "components/Avatar";
import { useState } from "react";
import { AvatarContainer, ButtonLogut, NavLink, OptionsMenu } from "./styles";

export default function NavUser({
    name,
    username,
    photoUrl,
    handleLogout,
    isActive,
}) {
    const [showOptions, setShowOptions] = useState(false);
    const handleClick = () => setShowOptions(!showOptions);

    return (
        <AvatarContainer>
            <Avatar
                name={name}
                username={username}
                photoUrl={photoUrl}
                onClick={handleClick}
            />
            <OptionsMenu move={showOptions ? "mover" : ""}>
                <li>
                    <NavLink style={isActive} to="edit">
                        Editar perfil
                    </NavLink>
                </li>
                <li>
                    <ButtonLogut onClick={handleLogout}>Cerrar sesión</ButtonLogut>
                </li>
            </OptionsMenu>
        </AvatarContainer>
    );
}
