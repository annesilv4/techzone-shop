// Importações do React para criar e gerenciar contextos
import { createContext, useEffect, useState } from "react";

// Importação da lista de produtos do arquivo JSON
import products from '../api/products/produtos.json';

// Cria o contexto de produtos que será compartilhado em toda a aplicação
export const ProductContext = createContext();

// Componente Provider que envolve a aplicação e disponibiliza o contexto
export function ProductProvider({ children }) {
    // Estado que armazena a lista de todos os produtos disponíveis
    const [productList, setProductList] = useState([]);
    
    // NOTA: Estado de loading comentado para versões futuras
    // const [loading, setLoading] = useState(true);

    // Hook que executa quando o componente monta
    useEffect(() => {
        // SIMULANDO O CARREGAMENTO DA API
        // Em uma aplicação real, faria uma requisição fetch a um servidor
        // Aqui usamos setTimeout para simular latência de rede
        setTimeout(() => {
            // Carrega os produtos do arquivo JSON
            setProductList(products);
            
            // Quando implementar loading state, descomentar a linha abaixo
            // setLoading(false);
        }, 500); // 500ms de delay para simular requisição
    }, []); // Array vazio significa executa apenas na montagem do componente

    return (
        // Provider disponibiliza o valor para todos os componentes filhos
        <ProductContext.Provider value={{ productList }}>
            {children}
        </ProductContext.Provider>
    );
}