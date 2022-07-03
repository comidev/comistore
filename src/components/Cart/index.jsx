import { ButtonCart } from "components/Button";
import { Button, ButtonCloseDialog } from "components/Button/styles";
import { Dialog } from "components/Dialog";
import LoginForm from "components/LoginForm";
import ShoppingList from "components/ShoppingList";
import { H4 } from "components/Title";
import { COLOR } from "styles";
import { CartContainer, ButtonButContainer, ConfirmedContainer } from "./styles";
import useDialog from "hooks/useDialog";
import useCart from "hooks/useCart";
import { getToken, hasToken } from "services/token";

export default function Cart() {
    const { cart, remove, uploadInvoice, salesData } = useCart();
    const {
        dialogRef: modalLogin,
        open: openLogin,
        close: closeLogin,
    } = useDialog();

    const {
        dialogRef: modalConfirmed,
        open: openConfirmed,
        close: closeConfirmed,
    } = useDialog();

    const {
        dialogRef: modalShoppingList,
        open: openShoppingList,
        close: closeShoppingList,
    } = useDialog();

    const handleBuyButton = () => {
        if (hasToken()) {
            //TODO: COMPRAAA!!
            getToken().then((token) => {
                token &&
                    uploadInvoice(token).then(() => {
                        closeShoppingList();
                        openConfirmed();
                        setTimeout(() => {
                            closeConfirmed();
                        }, 3000);
                    });
            });
        } else {
            //TODO: GUARDAMOS EN EL LOCAL STORAGE
            const listShopping = JSON.stringify(cart);
            window.localStorage.setItem("listShopping", listShopping);
            openLogin();
            closeShoppingList();
        }
    };

    return (
        <CartContainer>
            {salesData.quantity > 0 && (
                <ButtonCart
                    onClick={openShoppingList}
                    quantity={salesData.quantity}
                />
            )}
            {/* //TODO: LISTA DE COMPRAS */}
            <Dialog ref={modalShoppingList}>
                <ButtonCloseDialog onClick={closeShoppingList}>✖</ButtonCloseDialog>
                <H4>¿Desea comprar los siguientes productos?</H4>
                <ShoppingList
                    cart={cart}
                    total={salesData.total}
                    onClickRemove={remove}
                />
                <ButtonButContainer onClick={handleBuyButton}>
                    <Button bg={COLOR.RED}>Comprar</Button>
                </ButtonButContainer>
            </Dialog>
            {/* //TODO: LOGIN */}
            <Dialog ref={modalLogin}>
                <ButtonCloseDialog onClick={closeLogin}>✖</ButtonCloseDialog>
                <LoginForm />
            </Dialog>
            <Dialog ref={modalConfirmed}>
                <ButtonCloseDialog onClick={closeConfirmed}>✖</ButtonCloseDialog>
                <ConfirmedContainer>Compra realizada ✅</ConfirmedContainer>
            </Dialog>
        </CartContainer>
    );
}
