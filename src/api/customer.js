import { API_URL } from "api";

const CUSTOMERS = `${API_URL}/customers`;

export const getCountries = () => {
    return fetch(`${CUSTOMERS}/countries`).then((res) => {
        if (!res.ok)
        return res.json();
    });
};

export const existsEmail = (email) => {
    return fetch(`${CUSTOMERS}/validate/email`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
    }).then((res) => {
        if (!res.ok)
        return res.json();
    });
};
export const saveCutomer = (customer) => {
    return fetch(`${CUSTOMERS}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(customer),
    }).then((res) => {
        if (!res.ok)
        return res.json();
    });
};
//TODO: Requiere Token
export const updateCustomer = (customer, customerId, token) => {
    return fetch(`${CUSTOMERS}/${customerId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(customer),
    }).then((res) => {
        if (!res.ok) {
            if (res.status === 401) return { passwordIncorrect: true };
            return res.json();
        }
        return { correct: true };
    });
};

export const getCustomerById = (customerId, token) => {
    return fetch(`${CUSTOMERS}/${customerId}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    }).then((res) => {
        if (!res.ok)
        return res.json();
    });
};
