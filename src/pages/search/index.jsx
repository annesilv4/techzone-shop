import { useContext, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ProductContext } from '../../context/productContext';
import HeaderComponents from '../../components/header';
import Style from './search.module.css';

export default function SearchPage() {
    const [searchParams] = useSearchParams();
    const { productList } = useContext(ProductContext);
    const query = searchParams.get('q') || '';

    const results = useMemo(() => {
        if (!query.trim()) return [];
        return productList.filter(product =>
            product.name.toLowerCase().includes(query.toLowerCase()) ||
            product.category?.toLowerCase().includes(query.toLowerCase())
        );
    }, [query, productList]);

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
                                <button>Adicionar ao Carrinho</button>
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
