import { API_URL } from "api";

export const getCategories = () => {
    return fetch(`${API_URL}/categories`).then((res) => {
        return res.json();
    });
};
