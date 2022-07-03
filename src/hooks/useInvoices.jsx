import { findAllByCustomerId } from "api/invoice";
import { getAuthInfo } from "api/user";
import { useEffect, useState } from "react";
import { getToken, hasToken } from "services/token";

export default function useInvoices() {
    const [invoices, setInvoices] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (hasToken()) {
            setLoading(true);
            getToken().then((token) => {
                token &&
                    getAuthInfo(token)
                        .then((res) => {
                            const { customerId } = res;
                            return findAllByCustomerId(customerId, token);
                        })
                        .then((res) => {
                            setInvoices(res);
                        })
                        .finally(() => {
                            setLoading(false);
                        });
            });
        }
    }, []);

    return { loading, invoices };
}
