// Importação da biblioteca de CSS-in-JS
import styled from "@emotion/styled";

// Componente estilizado para o container principal do carrinho
export const CartContainer = styled.div`
  display: flex;
  gap: 30px;
  padding: 30px;
  width: 100%;

  /* Tablet (768px a 1024px) */
  @media (max-width: 1024px) {
    gap: 25px;
    padding: 25px;
  }

  /* Mobile (até 767px) */
  @media (max-width: 767px) {
    flex-direction: column;
    padding: 20px;
    gap: 20px;
  }

  /* Mobile pequeno (até 480px) */
  @media (max-width: 480px) {
    padding: 15px;
    gap: 15px;
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

  /* Tablet (768px a 1024px) */
  @media (max-width: 1024px) {
    font-size: 1.8rem;
    margin-bottom: 25px;
  }

  /* Mobile (até 767px) */
  @media (max-width: 767px) {
    font-size: 1.5rem;
    margin-bottom: 20px;
  }

  /* Mobile pequeno (até 480px) */
  @media (max-width: 480px) {
    font-size: 1.3rem;
    margin-bottom: 15px;
  }
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

  /* Tablet (768px a 1024px) */
  @media (max-width: 1024px) {
    padding: 50px 15px;

    h2 {
      font-size: 1.3rem;
      margin-bottom: 12px;
    }

    p {
      font-size: 0.95rem;
      margin-bottom: 25px;
    }

    a {
      padding: 10px 25px;
      font-size: 0.9rem;
    }
  }

  /* Mobile (até 767px) */
  @media (max-width: 767px) {
    padding: 40px 15px;

    h2 {
      font-size: 1.2rem;
    }

    p {
      font-size: 0.9rem;
      margin-bottom: 20px;
    }

    a {
      padding: 10px 20px;
      font-size: 0.85rem;
    }
  }

  /* Mobile pequeno (até 480px) */
  @media (max-width: 480px) {
    padding: 30px 10px;

    h2 {
      font-size: 1rem;
      margin-bottom: 10px;
    }

    p {
      font-size: 0.8rem;
      margin-bottom: 15px;
    }

    a {
      padding: 8px 16px;
      font-size: 0.8rem;
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

  /* Tablet (768px a 1024px) */
  @media (max-width: 1024px) {
    padding: 16px;
    gap: 16px;
  }

  /* Mobile (até 767px) */
  @media (max-width: 767px) {
    padding: 12px;
    gap: 10px;
    margin-bottom: 10px;
    border-radius: 6px;
    display: flex;
    align-items: center;
  }

  /* Mobile pequeno (até 480px) */
  @media (max-width: 480px) {
    padding: 10px;
    gap: 8px;
    margin-bottom: 10px;
    border-radius: 6px;
  }
`;

// Componente estilizado para a imagem do produto no carrinho
export const ItemImage = styled.img`
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 4px;
  flex-shrink: 0;

  /* Tablet (768px a 1024px) */
  @media (max-width: 1024px) {
    width: 100px;
    height: 100px;
  }

  /* Mobile (até 767px) */
  @media (max-width: 767px) {
    width: 80px;
    height: 80px;
    flex-shrink: 0;
  }

  /* Mobile pequeno (até 480px) */
  @media (max-width: 480px) {
    width: 70px;
    height: 70px;
  }
`;

// Componente estilizado para os detalhes do produto (nome, descrição, preço)
export const ItemDetails = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;

  /* Tablet (768px a 1024px) */
  @media (max-width: 1024px) {
    gap: 8px;
  }

  /* Mobile (até 767px) */
  @media (max-width: 767px) {
    gap: 5px;
  }

  /* Mobile pequeno (até 480px) */
  @media (max-width: 480px) {
    gap: 4px;
  }
`;

// Componente estilizado para o nome do produto
export const ItemName = styled.h3`
  font-size: 1.1rem;
  color: #333;
  margin: 0;

  /* Tablet (768px a 1024px) */
  @media (max-width: 1024px) {
    font-size: 1rem;
  }

  /* Mobile (até 767px) */
  @media (max-width: 767px) {
    font-size: 0.85rem;
  }

  /* Mobile pequeno (até 480px) */
  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

// Componente estilizado para a descrição do produto
export const ItemDescription = styled.p`
  font-size: 0.9rem;
  color: #666;
  margin: 0;
  display: none;

  /* Tablet (768px a 1024px) */
  @media (max-width: 1024px) {
    font-size: 0.85rem;
  }

  /* Mobile (até 767px) */
  @media (max-width: 767px) {
    display: none;
  }

  /* Mobile pequeno (até 480px) */
  @media (max-width: 480px) {
    display: none;
  }
`;

// Componente estilizado para o preço do produto
export const ItemPrice = styled.p`
  font-size: 1.2rem;
  color: #667eea;
  font-weight: bold;
  margin: 0;

  /* Tablet (768px a 1024px) */
  @media (max-width: 1024px) {
    font-size: 1.1rem;
  }

  /* Mobile (até 767px) */
  @media (max-width: 767px) {
    font-size: 0.9rem;
  }

  /* Mobile pequeno (até 480px) */
  @media (max-width: 480px) {
    font-size: 0.85rem;
  }
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

  /* Tablet (768px a 1024px) */
  @media (max-width: 1024px) {
    gap: 8px;
    margin-top: 8px;

    button {
      width: 32px;
      height: 32px;
      font-size: 0.9rem;
    }

    input {
      width: 65px;
      padding: 6px;
      font-size: 0.9rem;
    }
  }

  /* Mobile (até 767px) */
  @media (max-width: 767px) {
    gap: 4px;
    margin-top: 5px;

    button {
      width: 26px;
      height: 26px;
      font-size: 0.75rem;
    }

    input {
      width: 50px;
      padding: 4px;
      font-size: 0.75rem;
    }
  }

  /* Mobile pequeno (até 480px) */
  @media (max-width: 480px) {
    gap: 3px;
    margin-top: 4px;

    button {
      width: 24px;
      height: 24px;
      font-size: 0.7rem;
    }

    input {
      width: 45px;
      padding: 3px;
      font-size: 0.7rem;
    }
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

  /* Tablet (768px a 1024px) */
  @media (max-width: 1024px) {
    padding: 7px 12px;
    font-size: 0.85rem;
  }

  /* Mobile (até 767px) */
  @media (max-width: 767px) {
    padding: 5px 10px;
    font-size: 0.7rem;
  }

  /* Mobile pequeno (até 480px) */
  @media (max-width: 480px) {
    padding: 4px 8px;
    font-size: 0.65rem;
    border-radius: 3px;
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

  /* Tablet (768px a 1024px) */
  @media (max-width: 1024px) {
    width: 300px;
    padding: 20px;
  }

  /* Mobile (até 767px) */
  @media (max-width: 767px) {
    display: none;
  }

  /* Mobile pequeno (até 480px) */
  @media (max-width: 480px) {
    display: none;
  }
`;

// Componente estilizado para o título do resumo
export const SummaryTitle = styled.h2`
  font-size: 1.3rem;
  color: #333;
  margin: 0 0 20px 0;

  /* Tablet (768px a 1024px) */
  @media (max-width: 1024px) {
    font-size: 1.2rem;
    margin-bottom: 16px;
  }

  /* Mobile (até 767px) */
  @media (max-width: 767px) {
    font-size: 1.1rem;
    margin-bottom: 15px;
  }

  /* Mobile pequeno (até 480px) */
  @media (max-width: 480px) {
    font-size: 1rem;
    margin-bottom: 12px;
  }
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

  /* Tablet (768px a 1024px) */
  @media (max-width: 1024px) {
    margin-bottom: 12px;
    font-size: 0.95rem;
  }

  /* Mobile (até 767px) */
  @media (max-width: 767px) {
    margin-bottom: 12px;
    font-size: 0.9rem;
  }

  /* Mobile pequeno (até 480px) */
  @media (max-width: 480px) {
    margin-bottom: 10px;
    font-size: 0.85rem;
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

  /* Tablet (768px a 1024px) */
  @media (max-width: 1024px) {
    margin: 16px 0;
    padding: 16px 0;
    font-size: 1.1rem;
  }

  /* Mobile (até 767px) */
  @media (max-width: 767px) {
    margin: 15px 0;
    padding: 15px 0;
    font-size: 1rem;
  }

  /* Mobile pequeno (até 480px) */
  @media (max-width: 480px) {
    margin: 12px 0;
    padding: 12px 0;
    font-size: 0.95rem;
  }
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

  /* Tablet (768px a 1024px) */
  @media (max-width: 1024px) {
    padding: 12px;
    font-size: 0.95rem;
    margin-top: 16px;
  }

  /* Mobile (até 767px) */
  @media (max-width: 767px) {
    padding: 12px;
    font-size: 0.9rem;
    margin-top: 15px;
  }

  /* Mobile pequeno (até 480px) */
  @media (max-width: 480px) {
    padding: 10px;
    font-size: 0.85rem;
    margin-top: 12px;
    border-radius: 4px;
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

  /* Tablet (768px a 1024px) */
  @media (max-width: 1024px) {
    padding: 10px;
    font-size: 0.9rem;
    margin-top: 8px;
  }

  /* Mobile (até 767px) */
  @media (max-width: 767px) {
    padding: 10px;
    font-size: 0.85rem;
    margin-top: 8px;
  }

  /* Mobile pequeno (até 480px) */
  @media (max-width: 480px) {
    padding: 8px;
    font-size: 0.8rem;
    margin-top: 6px;
    border-radius: 4px;
  }
`;

// Componente estilizado para o overlay do modal
export const ModalOverlay = styled.div`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: flex-end;
  z-index: 1000;

  /* Mobile (até 767px) */
  @media (max-width: 767px) {
    display: flex;
  }

  /* Mobile pequeno (até 480px) */
  @media (max-width: 480px) {
    display: flex;
  }
`;

// Componente estilizado para o conteúdo do modal
export const ModalContent = styled.div`
  background-color: #fff;
  border-radius: 12px 12px 0 0;
  width: 100%;
  max-height: 80vh;
  overflow-y: auto;
  animation: slideUp 0.3s ease-out;

  @keyframes slideUp {
    from {
      transform: translateY(100%);
    }
    to {
      transform: translateY(0);
    }
  }

  /* Mobile pequeno (até 480px) */
  @media (max-width: 480px) {
    border-radius: 12px 12px 0 0;
  }
`;

// Componente estilizado para o header do modal
export const ModalHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 16px 20px;
  border-bottom: 1px solid #e0e0e0;
`;

// Componente estilizado para o botão de fechar modal
export const ModalCloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #666;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  transition: all 0.3s;

  &:hover {
    background-color: #f0f0f0;
    color: #333;
  }
`;

// Componente estilizado para o body do modal
export const ModalBody = styled.div`
  padding: 20px;
`;

// Componente estilizado para o botão de toggle do resumo (mobile)
export const SummaryToggleButton = styled.button`
  display: none;
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

  /* Mobile (até 767px) */
  @media (max-width: 767px) {
    display: block;
  }

  /* Mobile pequeno (até 480px) */
  @media (max-width: 480px) {
    padding: 12px;
    font-size: 0.95rem;
    margin-top: 15px;
    border-radius: 4px;
  }
`;
