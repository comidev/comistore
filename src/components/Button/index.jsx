import { CartButtonContainer, CartQuantity, Remove } from "./styles";
import { AiOutlineShoppingCart } from "react-icons/ai";

export const ButtonCart = ({ onClick, quantity }) => {
    return (
        <CartButtonContainer onClick={onClick}>
            <AiOutlineShoppingCart />
            <CartQuantity>{quantity}</CartQuantity>
        </CartButtonContainer>
    );
};

export const ButtonRemove = ({ onClick, children }) => {
    return <Remove onClick={onClick}>{children}</Remove>;
};
