/**
 * COMPONENTE: Catálogo (Home Page)
 * 
 * MODIFICAÇÕES:
 * - Importado hook useOffers para sistema de descontos
 * - Exibe badge de desconto em produtos em oferta
 * - Mostra preço original riscado
 * - Exibe preço com desconto
 * - Envia preço com desconto ao carrinho
 */

// Importa hooks do React para gerenciar estado
import { useEffect, useState, useContext } from 'react';
import styles from './styles.module.css';
// Importa a lista de produtos do arquivo JSON
import produtos from '../../api/products/produtos.json';
// Importa o contexto do carrinho
import { CartContext } from '../../context/cartContext';
// Importa o contexto do usuário
import { UserContext } from '../../context/userContext';
// MODIFICADO: Importado hook useOffers para sistema de descontos
import { useOffers } from '../../hooks/useOffers';

// Objeto que mapeia os IDs das categorias para seus nomes em português
const categoryNames = {
    acessorios: 'Acessórios',
    gamer: 'Gamer',
    notebooks: 'Notebooks',
    perifericos: 'Periféricos',
    smartphones: 'Smartphones',
    wearables: 'Wearables'
};

export default function Catalogo() {
     // Estado que armazena produtos agrupados por categoria
     const [productsByCategory, setProductsByCategory] = useState({});
     // Estado que armazena a imagem selecionada para exibir em modal (null = nenhuma selecionada)
     const [selectedImage, setSelectedImage] = useState(null);
     // NOVO: Estado para rastrear IDs de produtos já adicionados ao carrinho (isolado por usuário)
     const [addedProducts, setAddedProducts] = useState(new Set());
     // Contexto do carrinho
     const cartContext = useContext(CartContext);
     // Contexto do usuário para isolamento de dados
     const userContext = useContext(UserContext);
     // MODIFICADO: Hook de ofertas com funções para calcular descontos
     const { isOnOffer, getDiscount, getDiscountedPrice } = useOffers();

    // Hook que executa quando o componente monta
    useEffect(() => {
        // Agrupa os produtos por categoria usando reduce
        const grouped = produtos.reduce((acc, product) => {
            // Se a categoria ainda não existe no acumulador, cria um array vazio
            if (!acc[product.category]) {
                acc[product.category] = [];
            }
            // Adiciona o produto ao array da sua categoria
            acc[product.category].push(product);
            return acc;
        }, {});
        // Atualiza o estado com produtos agrupados
        setProductsByCategory(grouped);
    }, []); // [] significa que executa apenas uma vez na montagem

    // MODIFICADO: Hook para carregar produtos adicionados quando o usuário muda
    // Agora isolado por usuário usando userId na chave do localStorage
    useEffect(() => {
        const userId = userContext?.user?._id;
        
        if (userId) {
            // Usuário está logado - carrega seus produtos adicionados
            const savedAddedProducts = localStorage.getItem(`addedProducts_${userId}`);
            if (savedAddedProducts) {
                try {
                    setAddedProducts(new Set(JSON.parse(savedAddedProducts)));
                } catch (e) {
                    setAddedProducts(new Set());
                }
            } else {
                setAddedProducts(new Set());
            }
        } else {
            // Usuário não está logado - reseta produtos adicionados
            setAddedProducts(new Set());
        }
    }, [userContext?.user?._id]);

    // MODIFICADO: Hook para salvar produtos adicionados no localStorage quando mudam
    // Agora isolado por usuário
    useEffect(() => {
        const userId = userContext?.user?._id;
        if (userId) {
            localStorage.setItem(`addedProducts_${userId}`, JSON.stringify(Array.from(addedProducts)));
        }
    }, [addedProducts, userContext?.user?._id]);

    // Função chamada quando o usuário clica na imagem de um produto
    const handleImageClick = (imageSrc) => {
        // Armazena a URL da imagem clicada para exibir no modal
        setSelectedImage(imageSrc);
    };

    // Função chamada para fechar o modal de imagem ampliada
    const closeModal = () => {
        // Remove a imagem selecionada (fecha o modal)
        setSelectedImage(null);
    };

    /**
     * MODIFICADO: Função para adicionar um produto ao carrinho
     * 
     * Agora envia o preço com desconto quando o produto estiver em oferta
     * Inclui campos adicionais: precoOriginal e emOferta
     * NOVO: Marca o produto como adicionado para mudar cor do botão
     */
    const handleAddToCart = (product) => {
        try {
            // MODIFICADO: Verifica se o produto está em oferta usando hook useOffers
            const onOffer = isOnOffer(product.id);
            // MODIFICADO: Calcula o preço com desconto se aplicável
            const finalPrice = onOffer ? getDiscountedPrice(product.price, product.id) : product.price;

            // MODIFICADO: Agora inclui campos de desconto
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

                // NOVO: Marca o produto como adicionado ao carrinho
                setAddedProducts(prev => new Set(prev).add(product.id));
            } else {
                // Log de erro se o contexto não está disponível
                console.error('CartContext não disponível');
            }
        } catch (error) {
            // Captura e exibe qualquer erro que ocorra durante a adição
            console.error('Erro ao adicionar:', error);
        }
    };

    // Renderiza o catálogo completo com produtos agrupados por categoria
    return (
        <section id="catalogo" className={styles.catalogo}>
            {/* Cabeçalho do catálogo */}
            <div className={styles.header}>
                <h1>Conheça o Nosso Catálogo</h1>
                <p>Descubra os melhores produtos de tecnologia</p>
            </div>

            {/* Renderiza cada categoria com seus produtos */}
            {Object.keys(productsByCategory).map(category => (
                <div key={category} className={styles.categorySection}>
                    {/* Título da categoria em português */}
                    <h2 className={styles.categoryTitle}>{categoryNames[category]}</h2>
                    <div className={styles.grid}>
                        {/* Renderiza cada produto da categoria */}
                        {productsByCategory[category].map(product => {
                            const onOffer = isOnOffer(product.id);
                            const discount = onOffer ? getDiscount(product.id) : 0;
                            const discountedPrice = getDiscountedPrice(product.price, product.id);

                            return (
                                <div key={product.id} className={styles.card}>
                                    {/* Badge de desconto */}
                                    {onOffer && <div className={styles.discountBadge}>-{discount}%</div>}

                                    {/* Container da imagem com clique para abrir modal */}
                                    <div className={styles.imageContainer} onClick={() => handleImageClick(product.image)}>
                                        <img src={product.image} alt={product.name} />
                                    </div>
                                    <div className={styles.content}>
                                        {/* Informações do produto */}
                                        <h3>{product.name}</h3>
                                        <p className={styles.description}>{product.description}</p>
                                        <div className={styles.footer}>
                                            {/* Preço formatado em BRL */}
                                            <div className={styles.priceContainer}>
                                                {onOffer && (
                                                    <span className={styles.originalPrice}>
                                                        {product.price.toLocaleString('pt-BR', {
                                                            style: 'currency',
                                                            currency: 'BRL'
                                                        })}
                                                    </span>
                                                )}
                                                <span className={styles.price}>
                                                    {discountedPrice.toLocaleString('pt-BR', {
                                                        style: 'currency',
                                                        currency: 'BRL'
                                                    })}
                                                </span>
                                            </div>
                                        </div>
                                        {/* Botão para adicionar o produto ao carrinho */}
                                        {/* NOVO: Aplica classe btnAdded se o produto já foi adicionado */}
                                        <button
                                            className={`${styles.btn} ${addedProducts.has(product.id) ? styles.btnAdded : ''}`}
                                            onClick={() => handleAddToCart(product)}
                                            disabled={addedProducts.has(product.id)}
                                        >
                                            {addedProducts.has(product.id) ? 'Adicionado ao Carrinho' : 'Adicionar ao Carrinho'}
                                        </button>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            ))}

            {/* Modal que exibe a imagem ampliada quando uma imagem é clicada */}
            {selectedImage && (
                <div className={styles.modal} onClick={closeModal}>
                    <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
                        {/* Botão para fechar o modal */}
                        <button className={styles.closeBtn} onClick={closeModal}>✕</button>
                        {/* Imagem ampliada */}
                        <img src={selectedImage} alt="Imagem ampliada" />
                    </div>
                </div>
            )}
        </section>
    )
}