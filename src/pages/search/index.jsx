/**
 * PÁGINA: Busca de Produtos
 * 
 * MODIFICAÇÕES:
 * - Importado hook useOffers para sistema de descontos
 * - Exibe badge de desconto em produtos em oferta
 * - Mostra preço original riscado
 * - Exibe preço com desconto
 * - Envia preço com desconto ao carrinho
 */

import { useContext, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ProductContext } from '../../context/productContext';
import { CartContext } from '../../context/cartContext';
import HeaderComponents from '../../components/header';
import Navigation from '../../components/navigation';
import Style from './search.module.css';
import { useOffers } from '../../hooks/useOffers'; // MODIFICADO: Hook para sistema de descontos

export default function SearchPage() {
    const [searchParams] = useSearchParams();
    const cartContext = useContext(CartContext);
    const { productList } = useContext(ProductContext);
    // MODIFICADO: Hook de ofertas para calcular descontos nos resultados de busca
    const { isOnOffer, getDiscount, getDiscountedPrice } = useOffers();
    const query = searchParams.get('q') || '';

    const results = useMemo(() => {
        if (!query.trim()) return [];
        return productList.filter(product =>
            product.name.toLowerCase().includes(query.toLowerCase()) ||
            product.category?.toLowerCase().includes(query.toLowerCase())
        );
    }, [query, productList]);

    /**
     * MODIFICADO: Função para adicionar um produto ao carrinho
     * 
     * Agora envia o preço com desconto quando o produto estiver em oferta
     * Inclui campos adicionais: precoOriginal e emOferta
     */
    const handleAddToCart = (product) => {
        try {
            // MODIFICADO: Verifica se o produto está em oferta
            const onOffer = isOnOffer(product.id);
            // MODIFICADO: Calcula o preço com desconto se aplicável
            const finalPrice = onOffer ? getDiscountedPrice(product.price, product.id) : product.price;

            // MODIFICADO: Inclui campos de desconto no objeto do carrinho
            // Mapeia os campos da API para o formato do carrinho
            // API: id, name, description, price, image
            // Carrinho: id, nome, descricao, preco, imagem, precoOriginal, emOferta
            const cartProduct = {
                id: product.id,                      // ID do produto (mantém igual)
                nome: product.name,                  // Nome do produto
                descricao: product.description,      // Descrição do produto
                preco: finalPrice,                   // MODIFICADO: Preço com desconto (se houver)
                imagem: product.image,               // URL da imagem do produto
                precoOriginal: product.price,        // NOVO: Preço original para referência
                emOferta: onOffer                    // NOVO: Flag indicando se está em oferta
            };

            // Logs para debug (verificar contexto e dados do produto)
            console.log('CartContext:', cartContext);
            console.log('Produto:', cartProduct);

            // Valida se o contexto está disponível e possui a função addToCart
            if (cartContext && cartContext.addToCart) {
                // Adiciona o produto ao carrinho com quantidade inicial de 1
                cartContext.addToCart(cartProduct, 1);
                console.log('Produto adicionado com sucesso');
            } else {
                // Log de erro se o contexto não está disponível
                console.error('CartContext não disponível');
            }
        } catch (error) {
            // Captura e exibe qualquer erro que ocorra durante a adição
            console.error('Erro ao adicionar:', error);
        }
    }

    return (
        <>
            <HeaderComponents />
            <Navigation />
            <div className={Style.searchContainer}>
                <h1>Resultados para "{query}"</h1>

                {results.length > 0 ? (
                    <div className={Style.resultsGrid}>
                        {results.map(product => {
                            const onOffer = isOnOffer(product.id);
                            const discount = onOffer ? getDiscount(product.id) : 0;
                            const discountedPrice = getDiscountedPrice(product.price, product.id);

                            return (
                                <div key={product.id} className={Style.productCard}>
                                    {onOffer && <div className={Style.discountBadge}>-{discount}%</div>}
                                    <div className={Style.imageContainer}>
                                        <img src={product.image} alt={product.name} />
                                    </div>
                                    <h3>{product.name}</h3>
                                    <p className={Style.description}>{product.description}</p>
                                    <div className={Style.footer}>
                                        <p className={Style.category}>{product.category}</p>
                                        <div className={Style.priceContainer}>
                                            {onOffer && (
                                                <p className={Style.originalPrice}>
                                                    {product.price.toLocaleString('pt-BR', {
                                                        style: 'currency',
                                                        currency: 'BRL'
                                                    })}
                                                </p>
                                            )}
                                            <p className={Style.price}>
                                                {discountedPrice.toLocaleString('pt-BR', {
                                                    style: 'currency',
                                                    currency: 'BRL'
                                                })}
                                            </p>
                                        </div>
                                    </div>
                                    <button onClick={() => handleAddToCart(product)}>Adicionar ao Carrinho</button>
                                </div>
                            );
                        })}
                    </div>
                ) : (
                    <p className={Style.noResults}>Nenhum produto encontrado para "{query}"</p>
                )}
            </div>
        </>
    );
}
