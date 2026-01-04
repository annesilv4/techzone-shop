// Importação da biblioteca de CSS-in-JS
import styled from "@emotion/styled";

// Componente estilizado para o header (cabeçalho) da aplicação
export const Header = styled.header`
  padding: 0 300px;
  background-color: #378dc9eb;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;

  /* Tablet (768px a 1024px) */
  @media (max-width: 1024px) {
    padding: 0 27px;
    flex-wrap: wrap;
    gap: 15px;
  }

  /* Mobile (até 767px) */
  @media (max-width: 767px) {
    padding: 10px 15px;
    gap: 10px;
    justify-content: space-around;
  }

  /* Mobile pequeno (até 480px) */
  @media (max-width: 480px) {
    padding: 8px 10px;
    gap: 5px;
  }
`;

// Componente estilizado para a logo da TechZone
export const Logo = styled.img`
  width: 280px;
  height: 180px;
  cursor: pointer;

  /* Tablet (768px a 1024px) */
  @media (max-width: 1024px) {
    width: 158px;
    height: 105px;
  }

  /* Mobile (até 767px) */
  @media (max-width: 767px) {
    width: 100px;
    height: 60px;
  }

  /* Mobile pequeno (até 480px) */
  @media (max-width: 480px) {
    width: 80px;
    height: 60px;
  }
`;

// Componente estilizado para o campo de entrada de busca
export const Search = styled.input`
  width: 500px;
  height: 47px;
  font-size: 16px;
  padding-left: 15px;
  border: none;
  outline: none;

  /* Tablet (768px a 1024px) */
  @media (max-width: 1024px) {
    width: 300px;
    height: 40px;
    font-size: 14px;
  }

  /* Mobile (até 767px) */
  @media (max-width: 767px) {
    width: 150px;
    height: 36px;
    font-size: 12px;
    padding-left: 10px;
    flex: 1;
  }

  /* Mobile pequeno (até 480px) */
  @media (max-width: 480px) {
    width: 100%;
    height: 32px;
    font-size: 12px;
    padding-left: 8px;
  }
`;

// Componente estilizado para o ícone de busca (botão)
export const SearchIcon = styled.button`
  height: 48px;
  width: 50px;
  cursor: pointer;
  border: none;
  background-color: #fff;

  svg {
    transition: font-size 0.3s;
  }

  &:hover svg {
    font-size: 20px;
  }

  /* Tablet (768px a 1024px) */
  @media (max-width: 1024px) {
    height: 40px;
    width: 45px;
  }

  /* Mobile (até 767px) */
  @media (max-width: 767px) {
    height: 36px;
    width: 40px;

    svg {
      font-size: 14px;
    }

    &:hover svg {
      font-size: 16px;
    }
  }

  /* Mobile pequeno (até 480px) */
  @media (max-width: 480px) {
    height: 32px;
    width: 35px;

    svg {
      font-size: 12px;
    }
  }
`;

// Componente estilizado para a seção de usuário (login e cadastro)
export const User = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  svg {
    font-size: 30px;
    color: #fff;
  }

  p {
    margin: 0;
    color: #fff;
    font-size: 14px;
    font-weight: 500;
  }

  a {
    color: #fff;
    text-decoration: none;
    font-weight: 600;
    transition: opacity 0.3s;

    &:hover {
      opacity: 0.8;
      text-decoration: underline;
    }
  }

  /* Tablet (768px a 1024px) */
  @media (max-width: 1024px) {
    gap: 8px;

    svg {
      font-size: 24px;
    }

    p {
      font-size: 12px;
    }
  }

  /* Mobile (até 767px) */
  @media (max-width: 767px) {
    gap: 5px;
    flex-direction: column;
    text-align: center;

    svg {
      font-size: 20px;
    }

    p {
      font-size: 10px;
      margin: 0;
      line-height: 1.2;
    }

    a {
      font-size: 10px;
    }
  }

  /* Mobile pequeno (até 480px) */
  @media (max-width: 480px) {
    gap: 2px;

    svg {
      font-size: 16px;
      display: none
    }

    p {
      font-size: 9px;
    }
  }
`;

// Componente estilizado para o ícone do carrinho
export const Cart = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  position: relative;

  svg {
    font-size: 28px;
    color: #fff;
    transition: transform 0.3s;
  }

  &:hover svg {
    transform: scale(1.1);
  }

  /* Tablet (768px a 1024px) */
  @media (max-width: 1024px) {
    svg {
      font-size: 24px;
    }
  }

  /* Mobile (até 767px) */
  @media (max-width: 767px) {
    svg {
      font-size: 20px;
    }
  }

  /* Mobile pequeno (até 480px) */
  @media (max-width: 480px) {
    svg {
      font-size: 16px;
    }
  }
`;

// Componente estilizado para o badge (número) de itens no carrinho
export const CartBadge = styled.span`
  position: absolute;
  top: -8px;
  right: -8px;
  background-color: #378dc9eb;
  color: #fff;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: bold;
  border: 2px solid #fff;

  /* Tablet (768px a 1024px) */
  @media (max-width: 1024px) {
    width: 20px;
    height: 20px;
    font-size: 10px;
  }

  /* Mobile (até 767px) */
  @media (max-width: 767px) {
    width: 18px;
    height: 18px;
    font-size: 9px;
    top: -6px;
    right: -6px;
  }

  /* Mobile pequeno (até 480px) */
  @media (max-width: 480px) {
    width: 16px;
    height: 16px;
    font-size: 8px;
    top: -4px;
    right: -4px;
    border: 1px solid #fff;
  }
`;
