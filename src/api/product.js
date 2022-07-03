import { API_URL } from "api";

export const getProducts = (
    { categoryName = "", name = "" } = { categoryName: "", name: "" }
) => {
    return fetch(
        `${API_URL}/products?categoryName=${categoryName}&name=${name}`
    ).then((res) => {
        if (!res.ok)
        if (res.status === 204) return [];
        return res.json();
    });
};
