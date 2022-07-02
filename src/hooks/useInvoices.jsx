import { findAllByCustomerId } from "api/invoice";
import { getAuthInfo } from "api/user";
import { useEffect, useState } from "react";

export default function useInvoices() {
    const [invoices, setInvoices] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const token = window.localStorage.getItem("access_token");
        if (token) {
            setLoading(true);
            getAuthInfo(token)
                .then((res) => {
                    console.log(res);
                    const { customerId } = res;
                    return findAllByCustomerId(customerId);
                })
                .then((res) => {
                    setInvoices(res);
                })
                .finally(() => {
                    setLoading(false);
                });
        }
    }, []);

    return { loading, invoices };
}
