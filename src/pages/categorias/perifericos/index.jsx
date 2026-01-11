import { useState, useContext } from 'react';
import { ProductContainer, TitleContainer, TitlePage, Description, GridProduct, CardProduct, ImageContainer, Content, CardDescription, CardFooter, Price, BtnCard, CardCategory, Modal, ModalContent, CloseBtn, DiscountBadge } from './style';
import HeaderComponents from '../../../components/header';
import Navigation from '../../../components/navigation';
import produtos from '../../../api/products/produtos.json';
import { CartContext } from '../../../context/cartContext';
import { useOffers } from '../../../hooks/useOffers';

export default function PerifericosPage() {
    const [selectedImage, setSelectedImage] = useState(null);
    // NOVO: Estado para rastrear IDs de produtos já adicionados ao carrinho
    const [addedProducts, setAddedProducts] = useState(new Set());
    const cartContext = useContext(CartContext);
    const { isOnOffer, getDiscount, getDiscountedPrice } = useOffers();

    // Filtra produtos da categoria perifericos
    const categoryProducts = produtos.filter(product => product.category === 'perifericos');

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
                    <TitlePage>Periféricos</TitlePage>
                    <Description>Encontre os melhores periféricos para computador. Mouses, teclados, headsets e muito mais com as melhores marcas do mercado.</Description>
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
