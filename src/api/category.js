import { API_URL } from "api";

export const getCategories = () => {
    return fetch(`${API_URL}/categories`).then((res) => {
        if (!res.ok) console.log("getCategories is NOT ok!");
        return res.json();
    });
};
