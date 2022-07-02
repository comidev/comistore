import {
    ButtonBuy,
    FormButtons,
    FormShopping,
    ProductContainer,
    ProductDescription,
    ProductImg,
    ProductName,
    ProductPrice,
} from "./styles";
import useCart from "hooks/useCart";
import useAmount from "hooks/useCount";

export default function Product({ id, name, price, photoUrl, description }) {
    const { save } = useCart();
    const { amount, increment, decrement, reset } = useAmount();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (amount > 0) {
            const product = {
                productId: id,
                name,
                price,
                photoUrl,
                quantity: amount,
            };
            save(product);
            reset();
        }
    };

    return (
        <ProductContainer>
            <ProductImg>
                <img src={photoUrl} alt={name} />
            </ProductImg>
            <ProductName>{name}</ProductName>
            <ProductDescription>{description}</ProductDescription>
            <ProductPrice>
                Precio<span>${price}</span>
            </ProductPrice>
            <FormShopping onSubmit={handleSubmit}>
                <input type={"number"} value={amount} disabled />
                <FormButtons>
                    <button type={"button"} onClick={increment}>
                        +
                    </button>
                    <button type={"button"} onClick={decrement}>
                        -
                    </button>
                </FormButtons>
                <ButtonBuy type={"submit"}>Agregar</ButtonBuy>
            </FormShopping>
        </ProductContainer>
    );
}
