import { API_URL } from "api";

const INVOICES = `${API_URL}/invoices`;

export const saveInvoice = (invoice) => {
    return fetch(`${INVOICES}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(invoice),
    }).then((res) => {
        if (!res.ok) console.log("saveInvoice is NOT ok!");
        return res.json();
    });
};

export const findAllByCustomerId = (customerId) => {
    return fetch(`${INVOICES}/customer/${customerId}`).then((res) => {
        if (!res.ok) console.log("saveInvoice is NOT ok!");
        if (res.status === 204) return [];
        return res.json();
    });
};
