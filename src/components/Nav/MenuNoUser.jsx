import { NavLink } from "./styles";

export default function MenuNoUser(isActive) {
    return (
        <>
            <li>
                <NavLink style={isActive} to="register">
                    Registrarse
                </NavLink>
            </li>
            <li>
                <NavLink style={isActive} to="login">
                    Iniciar sesión
                </NavLink>
            </li>
        </>
    );
}
