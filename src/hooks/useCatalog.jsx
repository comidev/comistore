import { getCategories } from "api/category";
import { getProducts } from "api/product";
import { useEffect, useState } from "react";

export default function useCatalog() {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [categoryNameCurrent, setCategoryNameCurrent] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const [{ value: name }] = e.target;
        getProducts({ name: name, categoryName: categoryNameCurrent }).then(
            (res) => {
                setProducts(res);
            }
        );
    };

    const handleClickCategory = (name) => {
        setCategoryNameCurrent(name);
        getProducts({ categoryName: name }).then((res) => {
            setProducts(res);
        });
    };

    useEffect(() => {
        getProducts().then((res) => {
            setProducts(res);
        });

        getCategories().then((res) => {
            setCategories(res);
        });
    }, []);

    return {
        products,
        categories,
        handleSubmit,
        handleClickCategory,
    };
}
