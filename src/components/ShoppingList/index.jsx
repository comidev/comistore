import { ButtonRemove } from "components/Button";
import { getNow } from "services/dates";
import { COLOR } from "styles";
import {
    CartList,
    CartItem,
    CartItemImg,
    CartItemName,
    CartItemDetail,
    CartItemLabel,
} from "./styles";

export default function ShoppingList({ cart, total, onClickRemove, date }) {
    return (
        <div>
            <CartList>
                {cart.map((item, index) => {
                    return (
                        <CartItem key={index}>
                            {onClickRemove && (
                                <ButtonRemove
                                    onClick={() => onClickRemove(item.productId)}>
                                    Remover
                                </ButtonRemove>
                            )}
                            <CartItemImg>
                                <img src={item.photoUrl} alt="Imagen" />
                            </CartItemImg>
                            <div>
                                <CartItemName>
                                    {item.name.substring(0, 24) +
                                        (item.name.length > 24 ? " ..." : "")}
                                </CartItemName>
                                <CartItemDetail>
                                    <CartItemLabel>Cantidad</CartItemLabel>
                                    <span>{item.quantity}</span>
                                    <CartItemLabel>Precio</CartItemLabel>
                                    <span>$ {item.price}</span>
                                </CartItemDetail>
                            </div>
                        </CartItem>
                    );
                })}
            </CartList>
            <CartItemLabel fz="18px" bg={COLOR.SPRING}>
                Fecha: {date || getNow()}
            </CartItemLabel>
            <CartItemLabel fz="20px" bg={COLOR.WHITE} color={COLOR.BLACK}>
                Total: <strong>$ {total.toFixed(2)}</strong>
            </CartItemLabel>
        </div>
    );
}
