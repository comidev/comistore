import Page404 from "components/404";
import ShoppingList from "components/ShoppingList";
import { Spinner } from "components/Spinner";
import { H2 } from "components/Title";
import useInvoices from "hooks/useInvoices";
import { Invoice, Invoices } from "./styles";

export default function MyShopping() {
    const { loading, invoices } = useInvoices();
    const token = window.localStorage.getItem("access_token");

    if (!token) {
        return <Page404 />;
    }

    return (
        <div>
            <H2>Mis compras</H2>
            <Invoices>
                {loading ? (
                    <Spinner />
                ) : (
                    invoices.map((item) => {
                        return (
                            <Invoice>
                                <ShoppingList
                                    cart={item.invoiceItems}
                                    total={item.total}
                                    date={item.description}
                                />
                            </Invoice>
                        );
                    })
                )}
            </Invoices>
        </div>
    );
}
