import { createContext, useEffect, useState } from "react";
import products from '../api/products/produtos.json';

export const ProductContext = createContext();

export function ProductProvider({ children }) {
    const [productList, setProductList] = useState([]);
    // const [loading, setLoading] = useState(true);

    useEffect(() => {
        // SIMULANDO O CARREGAMENTO DA API
        setTimeout(() => {
            setProductList(products);
            // setLoading(false);
        }, 500);
    }, []);

    return (
        <ProductContext.Provider value={{ productList }}>
            {children}
        </ProductContext.Provider>
    );
}