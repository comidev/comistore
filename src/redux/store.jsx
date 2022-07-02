import { configureStore } from "@reduxjs/toolkit";
import shoppingListReducer from "./shoppingList";

export const store = configureStore({
    reducer: {
        shoppingList: shoppingListReducer,
    },
});
