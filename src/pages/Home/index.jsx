import { Button, ButtonCloseDialog } from "components/Button/styles.js";
import Cart from "components/Cart";
import { Dialog } from "components/Dialog";
import Product from "components/Product";
import useCatalog from "hooks/useCatalog";
import useDialog from "hooks/useDialog";
import {
    CategoriesItems,
    CategoryItem,
    FormSearch,
    HomeHeader,
    ProductsContainer,
} from "./styles";

export default function Home() {
    const { products, categories, handleClickCategory, handleSubmit } = useCatalog();

    const {
        dialogRef: categoriesModal,
        open: openCategories,
        close: closeCategories,
    } = useDialog();

    const searchByCategory = (name = "") => {
        handleClickCategory(name);
        closeCategories();
    };

    return (
        <>
            <HomeHeader>
                <Button onClick={openCategories}>Categorias</Button>
                <Dialog ref={categoriesModal}>
                    <ButtonCloseDialog onClick={closeCategories}>
                        ✖
                    </ButtonCloseDialog>
                    <CategoriesItems>
                        <li>
                            <CategoryItem onClick={() => searchByCategory()}>
                                Todas las categorías
                            </CategoryItem>
                        </li>
                        {categories.map((item) => {
                            return (
                                <li key={item._id}>
                                    <CategoryItem
                                        onClick={() => searchByCategory(item.name)}>
                                        {item.name}
                                    </CategoryItem>
                                </li>
                            );
                        })}
                    </CategoriesItems>
                </Dialog>
                <FormSearch onSubmit={handleSubmit}>
                    <input placeholder="Buscar..." type={"search"} />
                    <Button type="submit">Buscar</Button>
                </FormSearch>
                <Cart />
            </HomeHeader>
            <ProductsContainer>
                {products.map((item) => {
                    return (
                        <Product
                            key={item._id}
                            id={item._id}
                            name={item.name}
                            description={item.description}
                            price={item.price}
                            photoUrl={item.photoUrl}
                        />
                    );
                })}
            </ProductsContainer>
        </>
    );
}
