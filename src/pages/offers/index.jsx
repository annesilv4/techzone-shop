import { useState, useContext, useEffect } from 'react';
import { OffersContainer, TitleContainer, TitlePage, Description, GridProduct, CardProduct, ImageContainer, Content, CardDescription, CardFooter, Price, BtnCard, CardCategory, Modal, ModalContent, CloseBtn, DiscountBadge } from './style';
import HeaderComponents from '../../components/header';
import Navigation from '../../components/navigation';
import produtos from '../../api/products/produtos.json';
import { CartContext } from '../../context/cartContext';
import { UserContext } from '../../context/userContext';
import { useOffers } from '../../hooks/useOffers'; // MODIFICADO: Importado hook useOffers para sistema de descontos

/**
 * PÁGINA: Ofertas
 * 
 * MODIFICAÇÕES:
 * - Exibe apenas produtos em oferta (25% mais baratos)
 * - Mostra badge com percentual de desconto
 * - Exibe preço original riscado
 * - Exibe preço com desconto destacado
 * - Envia preço com desconto ao carrinho
 */
export default function OffersPage() {
     // Estado que armazena a imagem selecionada para exibir em modal
     const [selectedImage, setSelectedImage] = useState(null);
     // NOVO: Estado para rastrear IDs de produtos já adicionados ao carrinho (isolado por usuário)
     const [addedProducts, setAddedProducts] = useState(new Set());
     // Contexto do carrinho
     const cartContext = useContext(CartContext);
     // Contexto do usuário para isolamento de dados
     const userContext = useContext(UserContext);
     // MODIFICADO: Hook de ofertas com funções de desconto
     const { getOfferedProductIds, getDiscount, getDiscountedPrice } = useOffers();

     // MODIFICADO: Filtra apenas os produtos em oferta usando IDs do hook
     const offeredProductIds = getOfferedProductIds();
     const offeredProducts = produtos.filter(p => offeredProductIds.includes(p.id));

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
        setSelectedImage(imageSrc);
    };

    // Função chamada para fechar o modal de imagem ampliada
    const closeModal = () => {
        setSelectedImage(null);
    };

    /**
     * MODIFICADO: Função para adicionar um produto ao carrinho
     * 
     * Agora envia o preço com desconto quando o produto estiver em oferta
     * Inclui campos adicionais: precoOriginal e emOferta
     * NOVO: Marca o produto como adicionado para mudar cor do botão
     * 
     * Dados enviados ao carrinho:
     * - preco: valor final (com desconto se aplicável)
     * - precoOriginal: preço antes do desconto
     * - emOferta: boolean indicando se tem desconto
     */
    const handleAddToCart = (product) => {
        try {
            // MODIFICADO: Verifica se o produto está em oferta
            const onOffer = offeredProductIds.includes(product.id);
            // MODIFICADO: Calcula o preço com desconto
            const finalPrice = getDiscountedPrice(product.price, product.id);

            // MODIFICADO: Inclui campos de desconto no objeto do carrinho
            const cartProduct = {
                id: product.id,
                nome: product.name,
                descricao: product.description,
                preco: finalPrice,                   // MODIFICADO: Preço com desconto (se houver)
                imagem: product.image,
                precoOriginal: product.price,        // NOVO: Preço original para referência
                emOferta: onOffer                    // NOVO: Flag indicando se está em oferta
            };

            if (cartContext && cartContext.addToCart) {
                cartContext.addToCart(cartProduct, 1);
                console.log('Produto adicionado com sucesso');
                
                // NOVO: Marca o produto como adicionado ao carrinho
                setAddedProducts(prev => new Set(prev).add(product.id));
            } else {
                console.error('CartContext não disponível');
            }
        } catch (error) {
            console.error('Erro ao adicionar:', error);
        }
    };

    return (
        <>
            <HeaderComponents />
            <Navigation />

            <OffersContainer>
                <TitleContainer>
                    <TitlePage>Ofertas Especiais</TitlePage>
                    <Description>Aproveite nossas melhores ofertas com descontos imperdíveis em produtos tecnológicos selecionados. Estoque limitado!</Description>
                </TitleContainer>

                <GridProduct>
                    {offeredProducts.map(product => {
                        const discount = getDiscount(product.id);
                        const discountedPrice = getDiscountedPrice(product.price, product.id);

                        return (
                            <CardProduct key={product.id}>
                                {/* Badge de desconto */}
                                <DiscountBadge>-{discount}%</DiscountBadge>

                                {/* Container da imagem */}
                                <ImageContainer onClick={() => handleImageClick(product.image)}>
                                    <img src={product.image} alt={product.name} />
                                </ImageContainer>
                                <Content>
                                    {/* Informações do produto */}
                                    <h3>{product.name}</h3>
                                    <CardDescription>{product.description}</CardDescription>
                                    <CardFooter>
                                        {/* Categoria e preço */}
                                        <CardCategory>{product.category}</CardCategory>
                                        <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'end', gap: '5px' }}>
                                            <Price style={{ textDecoration: 'line-through', color: '#999', fontSize: '0.9rem', marginRight: '10px' }}>
                                                {product.price.toLocaleString('pt-BR', {
                                                    style: 'currency',
                                                    currency: 'BRL'
                                                })}
                                            </Price>
                                            <Price>
                                                {discountedPrice.toLocaleString('pt-BR', {
                                                    style: 'currency',
                                                    currency: 'BRL'
                                                })}
                                            </Price>
                                        </div>
                                    </CardFooter>
                                    {/* Botão para adicionar ao carrinho */}
                                    {/* NOVO: Aplica classe isAdded se o produto já foi adicionado */}
                                    <BtnCard 
                                        onClick={() => handleAddToCart(product)}
                                        disabled={addedProducts.has(product.id)}
                                        isAdded={addedProducts.has(product.id)}
                                    >
                                        {addedProducts.has(product.id) ? 'Adicionado ao Carrinho' : 'Adicionar ao Carrinho'}
                                    </BtnCard>
                                </Content>
                            </CardProduct>
                        );
                    })}
                </GridProduct>

                {/* Modal que exibe a imagem ampliada */}
                {selectedImage && (
                    <Modal onClick={closeModal}>
                        <ModalContent onClick={e => e.stopPropagation()}>
                            <CloseBtn onClick={closeModal}>✕</CloseBtn>
                            <img src={selectedImage} alt="Imagem ampliada" />
                        </ModalContent>
                    </Modal>
                )}
            </OffersContainer>
        </>
    );
}