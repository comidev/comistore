import { API_URL } from "api";

const INVOICES = `${API_URL}/invoices`;

//TODO: Requiere token
export const saveInvoice = (invoice, token) => {
    return fetch(`${INVOICES}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(invoice),
    }).then((res) => {
        return res.json();
    });
};

export const findAllByCustomerId = (customerId, token) => {
    return fetch(`${INVOICES}/customer/${customerId}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    }).then((res) => {
        if (res.status === 204) return [];
        return res.json();
    });
};
