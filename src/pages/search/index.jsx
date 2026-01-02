import { useContext, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ProductContext } from '../../context/productContext';
import { CartContext } from '../../context/cartContext';
import HeaderComponents from '../../components/header';
import Style from './search.module.css';

export default function SearchPage() {
    const [searchParams] = useSearchParams();
    const cartContext = useContext(CartContext);
    const { productList } = useContext(ProductContext);
    const query = searchParams.get('q') || '';

    const results = useMemo(() => {
        if (!query.trim()) return [];
        return productList.filter(product =>
            product.name.toLowerCase().includes(query.toLowerCase()) ||
            product.category?.toLowerCase().includes(query.toLowerCase())
        );
    }, [query, productList]);

    const handleAddToCart = (product) => {
        try {
            // Mapeia os campos da API para o formato do carrinho
            // API: id, name, description, price, image
            // Carrinho: id, nome, descricao, preco, imagem
            const cartProduct = {
                id: product.id,                      // ID do produto (mantém igual)
                nome: product.name,                  // Nome do produto
                descricao: product.description,      // Descrição do produto
                preco: product.price,                // Preço do produto
                imagem: product.image                // URL da imagem do produto
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
            <div className={Style.searchContainer}>
                <h1>Resultados para "{query}"</h1>

                {results.length > 0 ? (
                    <div className={Style.resultsGrid}>
                        {results.map(product => (
                            <div key={product.id} className={Style.productCard}>
                                <div className={Style.imageContainer}>
                                    <img src={product.image} alt={product.name} />
                                </div>
                                <h3>{product.name}</h3>
                                <p className={Style.description}>{product.description}</p>
                                <div className={Style.footer}>
                                    <p className={Style.category}>{product.category}</p>
                                    <p className={Style.price}>
                                        {product.price.toLocaleString('pt-BR', {
                                            style: 'currency',
                                            currency: 'BRL'
                                        })}
                                    </p>
                                </div>
                                <button onClick={() => handleAddToCart(product)}>Adicionar ao Carrinho</button>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className={Style.noResults}>Nenhum produto encontrado para "{query}"</p>
                )}
            </div>
        </>
    );
}
