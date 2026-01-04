// Importações de hooks e bibliotecas necessárias para o componente
import { useContext, useState } from 'react';
import { CartContext } from '../../context/cartContext';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons/faTrash';
import { faTimes } from '@fortawesome/free-solid-svg-icons/faTimes';

// Função auxiliar para formatar valores monetários em formato brasileiro (BRL)
const formatPrice = (value) => {
    return value.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });
};

// Importações dos componentes estilizados
import {
    CartContainer,
    CartItems,
    CartTitle,
    EmptyCart,
    CartItemContainer,
    ItemImage,
    ItemDetails,
    ItemName,
    ItemDescription,
    ItemPrice,
    QuantityControl,
    RemoveButton,
    CartSummary,
    SummaryTitle,
    SummaryRow,
    SummaryTotal,
    CheckoutButton,
    ContinueShopping,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    SummaryToggleButton
} from './styles';

// Componente que exibe o conteúdo do carrinho de compras
export default function CartContent() {
    // Estado para controlar a visibilidade do modal
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    // Obtém o contexto do carrinho para acessar os produtos e funções
    const context = useContext(CartContext);

    // Verifica se o contexto foi corretamente fornecido
    if (!context) {
        return <EmptyCart><h2>Seu carrinho está vazio</h2></EmptyCart>;
    }

    // Desestrutura as funções e dados do contexto
    const { cart, updateQuantity, removeFromCart, cartTotal, shippingCost, finalTotal } = context;
    // Hook para navegação entre páginas
    const navigate = useNavigate();
    
    // Componente renderizável do resumo do pedido
    const SummaryContent = () => (
        <>
            <SummaryTitle>Resumo do Pedido</SummaryTitle>

            {/* Mostra o subtotal (soma de todos os produtos) */}
            <SummaryRow>
                <span>Subtotal:</span>
                <strong>{formatPrice(cartTotal)}</strong>
            </SummaryRow>
            
            {/* Mostra o valor do frete */}
            <SummaryRow>
                <span>Frete:</span>
                <strong>{formatPrice(shippingCost)}</strong>
            </SummaryRow>

            {/* Mostra o valor total (subtotal + frete) */}
            <SummaryTotal>
                <span>Total:</span>
                <span>{formatPrice(finalTotal)}</span>
            </SummaryTotal>

            {/* Botão para prosseguir para o checkout */}
            <CheckoutButton onClick={() => navigate('/checkout')}>
                Finalizar Compra
            </CheckoutButton>

            {/* Botão para voltar às compras */}
            <ContinueShopping onClick={() => navigate('/')}>
                Continuar Comprando
            </ContinueShopping>
        </>
    );

    // Renderiza mensagem de carrinho vazio se não houver produtos
    if (cart.length === 0) {
        return (
            <CartContainer>
                <CartItems>
                    <CartTitle>Seu Carrinho</CartTitle>
                    <EmptyCart>
                        <h2>Seu carrinho está vazio</h2>
                        <p>Adicione produtos ao carrinho para continuar comprando</p>
                        <a href="/">Continuar comprando</a>
                    </EmptyCart>
                </CartItems>
            </CartContainer>
        );
    }

    // Renderiza o carrinho com todos os produtos
    return (
        <CartContainer>
            <CartItems>
                <CartTitle>Seu Carrinho</CartTitle>

                {/* Lista todos os produtos no carrinho */}
                {cart.map(item => (
                    <CartItemContainer key={item.id}>
                        {/* Imagem do produto */}
                        <ItemImage src={item.imagem} alt={item.nome} />

                        <ItemDetails>
                             {/* Informações do produto: nome, descrição e preço */}
                             <ItemName>{item.nome}</ItemName>
                             <ItemDescription>{item.descricao}</ItemDescription>
                             {/* Mostra preço original riscado se está em oferta */}
                             {item.emOferta && (
                                 <ItemPrice style={{ textDecoration: 'line-through', color: '#999', fontSize: '0.9rem', marginBottom: '5px' }}>
                                     {formatPrice(item.precoOriginal)}
                                 </ItemPrice>
                             )}
                             <ItemPrice style={{ color: item.emOferta ? '#27ae60' : '#667eea' }}>
                                 {formatPrice(item.preco)}
                                 {item.emOferta && <span style={{ marginLeft: '5px', fontSize: '0.8rem' }}>(com desconto)</span>}
                             </ItemPrice>

                            {/* Controles para ajustar quantidade do produto */}
                            <QuantityControl>
                                 {/* Botão para diminuir quantidade */}
                                 <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                                     −
                                 </button>
                                 {/* Campo para digitar a quantidade diretamente */}
                                 <input
                                     type="number"
                                     value={item.quantity}
                                     onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) || 1)}
                                     min="1"
                                 />
                                 {/* Botão para aumentar quantidade */}
                                 <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                                     +
                                 </button>
                                 {/* Mostra o subtotal do produto (preço * quantidade) */}
                                 <span style={{ marginLeft: '10px', fontWeight: 'bold' }}>
                                     Subtotal: {formatPrice(item.preco * item.quantity)}
                                 </span>
                             </QuantityControl>
                         </ItemDetails>

                         {/* Botão para remover produto do carrinho */}
                         <RemoveButton onClick={() => removeFromCart(item.id)}>
                             <FontAwesomeIcon icon={faTrash} /> Remover
                         </RemoveButton>
                     </CartItemContainer>
                 ))}
                 
                 {/* Botão para abrir resumo em modal (mobile) */}
                 <SummaryToggleButton onClick={() => setIsModalOpen(true)}>
                     Ver Resumo do Pedido
                 </SummaryToggleButton>
             </CartItems>

            {/* Seção lateral com resumo do pedido (desktop) */}
            <CartSummary>
                <SummaryContent />
            </CartSummary>
            
            {/* Modal para resumo do pedido (mobile) */}
            {isModalOpen && (
                <ModalOverlay onClick={() => setIsModalOpen(false)}>
                    <ModalContent onClick={(e) => e.stopPropagation()}>
                        <ModalHeader>
                            <ModalCloseButton onClick={() => setIsModalOpen(false)}>
                                <FontAwesomeIcon icon={faTimes} />
                            </ModalCloseButton>
                        </ModalHeader>
                        <ModalBody>
                            <SummaryContent />
                        </ModalBody>
                    </ModalContent>
                </ModalOverlay>
            )}
        </CartContainer>
    );
}
