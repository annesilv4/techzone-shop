import { useState, useEffect, useContext } from 'react';
import { ProductContainer, TitleContainer, TitlePage, Description, GridProduct, CardProduct, CategorySection, ImageContainer, Content, CardDescription, CardFooter, Price, BtnCard, CardCategory, Modal, ModalContent, CloseBtn, DiscountBadge } from './style';
import HeaderComponents from '../../components/header';
import Navigation from '../../components/navigation';
import produtos from '../../api/products/produtos.json';
import { CartContext } from '../../context/cartContext';
import { useOffers } from '../../hooks/useOffers';

export default function ProductPage() {
    // Objeto que mapeia os IDs das categorias para seus nomes em português
    const categoryNames = {
        acessorios: 'Acessórios',
        gamer: 'Gamer',
        notebooks: 'Notebooks',
        perifericos: 'Periféricos',
        smartphones: 'Smartphones',
        wearables: 'Wearables'
    };

    // Estado que armazena produtos agrupados por categoria
    const [productsByCategory, setProductsByCategory] = useState({});
    // Estado que armazena a imagem selecionada para exibir em modal (null = nenhuma selecionada)
    const [selectedImage, setSelectedImage] = useState(null);
    // Contexto do carrinho
    const cartContext = useContext(CartContext);
    // Hook de ofertas
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

    // Função para adicionar um produto ao carrinho
    // Transforma os dados do JSON da API para o formato esperado pelo contexto do carrinho
    const handleAddToCart = (product) => {
        try {
            // Verifica se o produto está em oferta
            const onOffer = isOnOffer(product.id);
            // Calcula o preço com desconto se aplicável
            const finalPrice = onOffer ? getDiscountedPrice(product.price, product.id) : product.price;

            // Mapeia os campos da API para o formato do carrinho
            // API: id, name, description, price, image
            // Carrinho: id, nome, descricao, preco, imagem
            const cartProduct = {
                id: product.id,                      // ID do produto (mantém igual)
                nome: product.name,                  // Nome do produto
                descricao: product.description,      // Descrição do produto
                preco: finalPrice,                   // Preço do produto (com desconto se houver)
                imagem: product.image,               // URL da imagem do produto
                precoOriginal: product.price,        // Preço original (para referência)
                emOferta: onOffer                    // Flag indicando se está em oferta
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
    };

    return (
        <>
            <HeaderComponents />
            <Navigation />

            <ProductContainer>
                <TitleContainer>
                    <TitlePage>Nossos Produtos</TitlePage>
                    <Description>Explore nossa coleção completa de produtos tecnológicos e encontre exatamente o que você procura. De eletrônicos até acessórios, temos tudo para você.</Description>
                </TitleContainer>

                {Object.keys(productsByCategory).map(category => (
                    <CategorySection key={category}>
                        <GridProduct>
                            {productsByCategory[category].map(product => {
                                const onOffer = isOnOffer(product.id);
                                const discount = onOffer ? getDiscount(product.id) : 0;
                                const discountedPrice = getDiscountedPrice(product.price, product.id);

                                return (
                                    <CardProduct key={product.id}>
                                        {/* Badge de desconto (se em oferta) */}
                                        {onOffer && <DiscountBadge>-{discount}%</DiscountBadge>}

                                        {/* Container da imagem com clique para abrir modal */}
                                        <ImageContainer onClick={() => handleImageClick(product.image)}>
                                            <img src={product.image} alt={product.name} />
                                        </ImageContainer>
                                        <Content>
                                            {/* Informações do produto */}
                                            <h3>{product.name}</h3>
                                            <CardDescription>{product.description}</CardDescription>
                                            <CardFooter>
                                                {/* Preço formatado em BRL */}
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
                                            {/* Botão para adicionar o produto ao carrinho */}
                                            <BtnCard onClick={() => handleAddToCart(product)}>Adicionar ao Carrinho</BtnCard>
                                        </Content>
                                    </CardProduct>
                                );
                            })}
                        </GridProduct>
                    </CategorySection>
                ))}

                {/* Modal que exibe a imagem ampliada quando uma imagem é clicada */}
                {selectedImage && (
                    <Modal onClick={closeModal}>
                        <ModalContent onClick={e => e.stopPropagation()}>
                            {/* Botão para fechar o modal */}
                            <CloseBtn onClick={closeModal}>✕</CloseBtn>
                            {/* Imagem ampliada */}
                            <img src={selectedImage} alt="Imagem ampliada" />
                        </ModalContent>
                    </Modal>
                )}
            </ProductContainer>
        </>
    )
}