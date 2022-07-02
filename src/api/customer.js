import { API_URL } from "api";

const CUSTOMERS = `${API_URL}/customers`;

export const getCountries = () => {
    return fetch(`${CUSTOMERS}/countries`).then((res) => {
        if (!res.ok) console.log("getCountries is NOT ok!");
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
        if (!res.ok) console.log("existsEmail is NOT ok!");
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
        if (!res.ok) console.log("saveCutomer is NOT ok!");
        return res.json();
    });
};
export const updateCustomer = (customer, customerId) => {
    return fetch(`${CUSTOMERS}/${customerId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(customer),
    }).then((res) => {
        if (!res.ok) {
            console.log("updateCustomer is NOT ok!");
            if (res.status === 401) return { passwordIncorrect: true };
            return res.json();
        }
        return { correct: true };
    });
};

export const getCustomerById = (customerId) => {
    return fetch(`${CUSTOMERS}/${customerId}`).then((res) => {
        if (!res.ok) console.log("getCustomerById is NOT ok!");
        return res.json();
    });
};
