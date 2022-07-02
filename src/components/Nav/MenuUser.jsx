import { NavLink } from "./styles";

export default function MenuUser(isActive) {
    return (
        <>
            <li>
                <NavLink style={isActive} to="myshopping">
                    Mis compras
                </NavLink>
            </li>
        </>
    );
}
