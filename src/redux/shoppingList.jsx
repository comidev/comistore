import { createSlice } from "@reduxjs/toolkit";

const token = window.localStorage.getItem("access_token");
let cartLoad = [];
if (token) {
    //* Recuperamos el carrito del localStorage
    const listShopping = window.localStorage.getItem("listShopping");
    if (listShopping) {
        cartLoad = JSON.parse(listShopping);
        //* Limpiamos el LocalStorage
        window.localStorage.removeItem("listShopping");
    }
}

const shoppingListSlice = createSlice({
    name: "Lista de Compras",
    initialState: cartLoad,
    reducers: {
        save(state, action) {
            const exists = state.find(
                (item) => item.productId === action.payload.productId
            );
            if (exists) {
                exists.quantity = action.payload.quantity;
            } else {
                state.push(action.payload);
            }
        },
        remove(state, action) {
            const index = state.findIndex(
                (item) => item.productId === action.payload
            );
            state.splice(index, 1);
        },
        clear(state, action) {
            state.splice(0, state.length);
        },
    },
});

export const { save, remove, clear } = shoppingListSlice.actions;
export default shoppingListSlice.reducer;
