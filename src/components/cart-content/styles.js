// Importação da biblioteca de CSS-in-JS
import styled from '@emotion/styled';

// Componente estilizado para o container principal do carrinho
export const CartContainer = styled.div`
    display: flex;
    gap: 30px;
    padding: 30px;
    width: 100%;

    @media (max-width: 768px) {
        flex-direction: column;
        padding: 20px;
    }
`;

// Componente estilizado para a seção de itens do carrinho
export const CartItems = styled.div`
    flex: 1;
`;

// Componente estilizado para o título "Seu Carrinho"
export const CartTitle = styled.h1`
    font-size: 2rem;
    color: #333;
    margin-bottom: 30px;
`;

// Componente estilizado para a mensagem de carrinho vazio
export const EmptyCart = styled.div`
    text-align: center;
    padding: 60px 20px;
    color: #666;

    h2 {
        font-size: 1.5rem;
        margin-bottom: 15px;
    }

    p {
        font-size: 1rem;
        margin-bottom: 30px;
    }

    a {
        display: inline-block;
        background-color: #667eea;
        color: white;
        padding: 12px 30px;
        border-radius: 5px;
        text-decoration: none;
        transition: background-color 0.3s;

        &:hover {
            background-color: #764ba2;
        }
    }
`;

// Componente estilizado para cada item do carrinho
export const CartItemContainer = styled.div`
    background-color: #fff;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    padding: 20px;
    margin-bottom: 15px;
    display: flex;
    gap: 20px;
    align-items: flex-start;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

// Componente estilizado para a imagem do produto no carrinho
export const ItemImage = styled.img`
    width: 120px;
    height: 120px;
    object-fit: cover;
    border-radius: 4px;

    @media (max-width: 768px) {
        width: 100%;
        height: auto;
    }
`;

// Componente estilizado para os detalhes do produto (nome, descrição, preço)
export const ItemDetails = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

// Componente estilizado para o nome do produto
export const ItemName = styled.h3`
    font-size: 1.1rem;
    color: #333;
    margin: 0;
`;

// Componente estilizado para a descrição do produto
export const ItemDescription = styled.p`
    font-size: 0.9rem;
    color: #666;
    margin: 0;
`;

// Componente estilizado para o preço do produto
export const ItemPrice = styled.p`
    font-size: 1.2rem;
    color: #667eea;
    font-weight: bold;
    margin: 0;
`;

// Componente estilizado para os controles de quantidade (botões +/-)
export const QuantityControl = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    margin-top: 10px;

    button {
        background-color: #f0f0f0;
        border: none;
        width: 35px;
        height: 35px;
        border-radius: 4px;
        cursor: pointer;
        font-weight: bold;
        color: #333;
        transition: background-color 0.3s;

        &:hover {
            background-color: #e0e0e0;
        }
    }

    input {
        width: 73px;
        padding: 8px;
        border: 1px solid #e0e0e0;
        border-radius: 4px;
        text-align: center;
        font-size: 1rem;
    }
`;

// Componente estilizado para o botão de remover produto
export const RemoveButton = styled.button`
    background-color: #ff6b6b;
    color: white;
    border: none;
    padding: 8px 15px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 0.9rem;
    transition: background-color 0.3s;

    &:hover {
        background-color: #ff5252;
    }
`;

// Componente estilizado para o resumo do pedido (lado direito)
export const CartSummary = styled.div`
    width: 320px;
    background-color: #fff;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    padding: 25px;
    height: fit-content;
    position: sticky;
    top: 20px;

    @media (max-width: 768px) {
        width: 100%;
        position: static;
    }
`;

// Componente estilizado para o título do resumo
export const SummaryTitle = styled.h2`
    font-size: 1.3rem;
    color: #333;
    margin: 0 0 20px 0;
`;

// Componente estilizado para linhas do resumo (subtotal, frete)
export const SummaryRow = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
    font-size: 1rem;
    color: #666;

    strong {
        color: #333;
    }
`;

// Componente estilizado para o total final (com bordas de destaque)
export const SummaryTotal = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 20px 0;
    padding: 20px 0;
    border-top: 2px solid #e0e0e0;
    border-bottom: 2px solid #e0e0e0;
    font-size: 1.2rem;
    font-weight: bold;
    color: #333;
`;

// Componente estilizado para o botão "Finalizar Compra"
export const CheckoutButton = styled.button`
    width: 100%;
    background-color: #667eea;
    color: white;
    border: none;
    padding: 15px;
    border-radius: 5px;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
    margin-top: 20px;
    transition: background-color 0.3s;

    &:hover {
        background-color: #764ba2;
    }

    &:disabled {
        background-color: #ccc;
        cursor: not-allowed;
    }
`;

// Componente estilizado para o botão "Continuar Comprando"
export const ContinueShopping = styled.button`
    width: 100%;
    background-color: #f0f0f0;
    color: #667eea;
    border: 1px solid #667eea;
    padding: 12px;
    border-radius: 5px;
    font-size: 0.95rem;
    font-weight: bold;
    cursor: pointer;
    margin-top: 10px;
    transition: all 0.3s;

    &:hover {
        background-color: #667eea;
        color: white;
    }
`;
