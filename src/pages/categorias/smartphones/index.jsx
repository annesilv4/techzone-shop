import { useState, useContext } from 'react';
import { ProductContainer, TitleContainer, TitlePage, Description, GridProduct, CardProduct, ImageContainer, Content, CardDescription, CardFooter, Price, BtnCard, CardCategory, Modal, ModalContent, CloseBtn } from './style';
import HeaderComponents from '../../../components/header';
import produtos from '../../../api/products/produtos.json';
import { CartContext } from '../../../context/cartContext';

export default function SmartphonesPage() {
    const [selectedImage, setSelectedImage] = useState(null);
    const cartContext = useContext(CartContext);

    // Filtra produtos da categoria smartphones
    const categoryProducts = produtos.filter(product => product.category === 'smartphones');

    const handleImageClick = (imageSrc) => {
        setSelectedImage(imageSrc);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    const handleAddToCart = (product) => {
        try {
            const cartProduct = {
                id: product.id,
                nome: product.name,
                descricao: product.description,
                preco: product.price,
                imagem: product.image
            };

            if (cartContext && cartContext.addToCart) {
                cartContext.addToCart(cartProduct, 1);
                console.log('Produto adicionado com sucesso');
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

            <ProductContainer>
                <TitleContainer>
                    <TitlePage>Smartphones</TitlePage>
                    <Description>Conheça os smartphones mais modernos e inovadores do mercado. Dos principais fabricantes com tecnologia de ponta e preços competitivos.</Description>
                </TitleContainer>

                <GridProduct>
                    {categoryProducts.map(product => (
                        <CardProduct key={product.id}>
                            <ImageContainer onClick={() => handleImageClick(product.image)}>
                                <img src={product.image} alt={product.name} />
                            </ImageContainer>
                            <Content>
                                <h3>{product.name}</h3>
                                <CardDescription>{product.description}</CardDescription>
                                <CardFooter>
                                    <CardCategory>{product.category}</CardCategory>
                                    <Price>
                                        {product.price.toLocaleString('pt-BR', {
                                            style: 'currency',
                                            currency: 'BRL'
                                        })}
                                    </Price>
                                </CardFooter>
                                <BtnCard onClick={() => handleAddToCart(product)}>Adicionar ao Carrinho</BtnCard>
                            </Content>
                        </CardProduct>
                    ))}
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
