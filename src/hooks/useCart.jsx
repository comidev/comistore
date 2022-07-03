import { saveInvoice } from "api/invoice";
import { getAuthInfo } from "api/user";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove as Remove, save as Save, clear } from "redux/shoppingList";
import { getNow } from "services/dates";

export default function useCart() {
    const cart = useSelector((state) => state.shoppingList);
    const dispatch = useDispatch();
    const [salesData, setSalesData] = useState({ quantity: 0, total: 0 });

    const remove = (productId) => dispatch(Remove(productId));
    const save = (product) => dispatch(Save(product));

    const uploadInvoice = (token) => {
        return getAuthInfo(token).then((res) => {
            const { customerId } = res;
            const date = getNow();

            const invoiceItems = [];
            cart.forEach(({ productId, quantity }) => {
                invoiceItems.push({ productId, quantity });
            });

            const invoice = { description: date, customerId, invoiceItems };
            dispatch(clear());
            return saveInvoice(invoice, token);
        });
    };

    useEffect(() => {
        let quantity = 0;
        let total = 0;
        cart.forEach((item) => {
            quantity += item.quantity;
            total += item.quantity * item.price;
        });
        setSalesData({ quantity, total });
    }, [cart]);

    return { cart, remove, save, uploadInvoice, salesData };
}
