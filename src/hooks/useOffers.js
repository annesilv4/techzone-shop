import produtos from '../api/products/produtos.json';

/**
 * HOOK CUSTOM: useOffers
 * 
 * Fornece funções utilitárias centralizadas para gerenciar o sistema de descontos/ofertas
 * Permite reutilizar a lógica de ofertas em qualquer componente ou página
 * 
 * Descontos são aplicados aos 25% de produtos com menores preços
 * Os descontos são consistentes por ID de produto (não mudam ao recarregar)
 */
export function useOffers() {
    /**
     * FUNÇÃO: getOfferedProductIds
     * Retorna array com IDs dos produtos em oferta (25% mais baratos)
     * 
     * Lógica:
     * 1. Cria cópia ordenada dos produtos por preço (mais baratos primeiro)
     * 2. Calcula 25% da quantidade total de produtos
     * 3. Retorna IDs apenas dos produtos que estão nesse 25%
     */
    const getOfferedProductIds = () => {
        const sorted = [...produtos].sort((a, b) => a.price - b.price);
        const cutoff = Math.ceil(sorted.length * 0.25);
        return sorted.slice(0, cutoff).map(p => p.id);
    };

    /**
     * FUNÇÃO: isOnOffer
     * Verifica se um produto específico está em oferta
     * 
     * Parâmetro: productId (ID do produto a verificar)
     * Retorno: boolean (true se está em oferta, false caso contrário)
     */
    const isOnOffer = (productId) => {
        const offeredIds = getOfferedProductIds();
        return offeredIds.includes(productId);
    };

    /**
     * FUNÇÃO: getDiscount
     * Retorna o percentual de desconto para um produto em oferta
     * 
     * Usa matemática com seed (ID do produto) para gerar desconto consistente
     * Desconto varia entre 15% e 25%
     * Sempre retorna o mesmo desconto para o mesmo produto ID
     */
    const getDiscount = (productId) => {
        // Multiplica ID por número primo para melhor distribuição de valores
        const seed = productId * 7919; // 7919 é número primo
        // Calcula desconto entre 15% e 25% (resto de 10 + 15)
        const discount = Math.floor((seed % 10) + 15);
        return discount;
    };

    /**
     * FUNÇÃO: getDiscountedPrice
     * Calcula e retorna o preço com desconto aplicado
     * 
     * Parâmetros:
     * - price: preço original do produto
     * - productId: ID do produto (para identificar se tem oferta)
     * 
     * Retorno: preço com desconto se estiver em oferta, caso contrário retorna preço original
     */
    const getDiscountedPrice = (price, productId) => {
        if (!isOnOffer(productId)) return price;
        const discount = getDiscount(productId);
        return price * (1 - discount / 100);
    };

    // Retorna todas as funções para serem usadas nos componentes
    return {
        getOfferedProductIds,
        isOnOffer,
        getDiscount,
        getDiscountedPrice
    };
}
