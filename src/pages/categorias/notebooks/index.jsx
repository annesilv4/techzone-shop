import { useState, useContext, useEffect } from 'react';
import { ProductContainer, TitleContainer, TitlePage, Description, GridProduct, CardProduct, ImageContainer, Content, CardDescription, CardFooter, Price, BtnCard, CardCategory, Modal, ModalContent, CloseBtn, DiscountBadge } from './style';
import HeaderComponents from '../../../components/header';
import Navigation from '../../../components/navigation';
import produtos from '../../../api/products/produtos.json';
import { CartContext } from '../../../context/cartContext';
import { UserContext } from '../../../context/userContext';
import { useOffers } from '../../../hooks/useOffers';

export default function NotebooksPage() {
     const [selectedImage, setSelectedImage] = useState(null);
     // NOVO: Estado para rastrear IDs de produtos já adicionados ao carrinho (isolado por usuário)
     const [addedProducts, setAddedProducts] = useState(new Set());
     const cartContext = useContext(CartContext);
     const userContext = useContext(UserContext);
     const { isOnOffer, getDiscount, getDiscountedPrice } = useOffers();

     // Filtra produtos da categoria notebooks
     const categoryProducts = produtos.filter(product => product.category === 'notebooks');

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

    const handleImageClick = (imageSrc) => {
        setSelectedImage(imageSrc);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    const handleAddToCart = (product) => {
        try {
            // Verifica se o produto está em oferta
            const onOffer = isOnOffer(product.id);
            // Calcula o preço com desconto se aplicável
            const finalPrice = onOffer ? getDiscountedPrice(product.price, product.id) : product.price;

            const cartProduct = {
                id: product.id,
                nome: product.name,
                descricao: product.description,
                preco: finalPrice,                   // Preço com desconto se houver
                imagem: product.image,
                precoOriginal: product.price,        // Preço original
                emOferta: onOffer                    // Flag indicando se está em oferta
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

            <ProductContainer>
                <TitleContainer>
                    <TitlePage>Notebooks</TitlePage>
                    <Description>Explore os melhores notebooks disponíveis no mercado. Desde modelos ultraportáteis até máquinas potentes para gaming e trabalho profissional.</Description>
                </TitleContainer>

                <GridProduct>
                    {categoryProducts.map(product => {
                        const onOffer = isOnOffer(product.id);
                        const discount = onOffer ? getDiscount(product.id) : 0;
                        const discountedPrice = getDiscountedPrice(product.price, product.id);

                        return (
                            <CardProduct key={product.id}>
                                {onOffer && <DiscountBadge>-{discount}%</DiscountBadge>}
                                <ImageContainer onClick={() => handleImageClick(product.image)}>
                                    <img src={product.image} alt={product.name} />
                                </ImageContainer>
                                <Content>
                                    <h3>{product.name}</h3>
                                    <CardDescription>{product.description}</CardDescription>
                                    <CardFooter>
                                        <CardCategory>{product.category}</CardCategory>
                                        <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'end', gap: '5px' }}>
                                            {onOffer && (
                                                <Price style={{ textDecoration: 'line-through', color: '#999', fontSize: '0.9rem', marginRight: '10px' }}>
                                                    {product.price.toLocaleString('pt-BR', {
                                                        style: 'currency',
                                                        currency: 'BRL'
                                                    })}
                                                </Price>
                                            )}
                                            <Price>
                                                {discountedPrice.toLocaleString('pt-BR', {
                                                    style: 'currency',
                                                    currency: 'BRL'
                                                })}
                                            </Price>
                                        </div>
                                    </CardFooter>
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

                {selectedImage && (
                    <Modal onClick={closeModal}>
                        <ModalContent onClick={e => e.stopPropagation()}>
                            <CloseBtn onClick={closeModal}>✕</CloseBtn>
                            <img src={selectedImage} alt="Imagem ampliada" />
                        </ModalContent>
                    </Modal>
                )}
            </ProductContainer>
        </>
    )
}
