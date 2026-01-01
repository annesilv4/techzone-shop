// Importação da biblioteca de CSS-in-JS
import styled from '@emotion/styled';

// Componente estilizado para o header (cabeçalho) da aplicação
export const Header = styled.header`
        padding: 0 300px;
        background-color: #378dc9eb;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 20px;
    `

// Componente estilizado para a logo da TechZone
export const Logo = styled.img`
        width: 280px;
        height: 180px;
        cursor: pointer;
    `;

// Componente estilizado para o campo de entrada de busca
export const Search = styled.input`
        width: 500px;
        height: 47px;
        font-size: 16px;
        padding-left: 15px;
        border: none;
        outline: none;
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
    `;