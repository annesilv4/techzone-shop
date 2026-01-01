// Importações necessárias para componentes estilizados
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { keyframes } from '@emotion/react';

// Função para evitar que props personalizadas (começando com $) sejam passadas ao DOM
const shouldForwardProp = (prop) => !prop.startsWith('$');

// Animação de slide down para o dropdown
export const slideDown = keyframes`
    from {
        opacity: 0;
        transform: translateY(-15px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`;

// Componente estilizado para o container de navegação lateral
export const Nav = styled.nav`
    background-color: #fff;
    border-right: 1px solid #e0e0e0;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 15px;
    width: 200px;
    min-height: 83vh;

    @media (max-width: 1024px) {
        width: 200px;
        padding: 15px;
    }

    @media (max-width: 768px) {
        width: 100%;
        height: auto;
        flex-direction: row;
        flex-wrap: wrap;
        position: relative;
    }
`;

// Componente estilizado para links de navegação na sidebar
export const NavLink = styled.a`
    color: #333;
    text-decoration: none;
    font-size: 15px;
    font-weight: 500;
    padding: 10px 15px;
    transition: all 0.3s;
    cursor: pointer;
    display: flex;
    gap: 5px;
    border-radius: 4px;

    &:hover {
        color: #667eea;
        background-color: #f0f0f0;
    }
`;

// Componente estilizado para itens de navegação com dropdown
export const NavItem = styled.div`
    position: relative;
    width: 100%;

    @media (max-width: 768px) {
        display: none;
    }
`;

// Componente estilizado para o menu dropdown (lista de categorias)
export const DropdownMenu = styled("div", { shouldForwardProp })`
    background-color: #f8f8f8;
    border-radius: 4px;
    display: ${props => props.$isOpen ? 'flex' : 'none'};
    flex-direction: column;
    animation: ${props => props.$isOpen ? slideDown : 'none'} 0.3s ease-in-out forwards;
    margin-top: 5px;
    width: 100%;
    padding: 8px 0;
    border: 1px solid #e0e0e0;
    align-self: center;
`;

// Componente estilizado para itens dentro do dropdown
export const DropdownItem = styled.a`
    display: block;
    color: #555;
    text-decoration: none;
    padding: 10px 15px;
    font-size: 14px;
    transition: all 0.3s;
    cursor: pointer;
    text-align: center;

    &:hover {
        color: #667eea;
        background-color: #e8e8ff;
        padding-left: 20px;
    }
`;

// Componente estilizado para o ícone chevron (seta) que rotaciona
export const ChevronIcon = styled(FontAwesomeIcon, { shouldForwardProp })`
    font-size: 12px;
    transform: ${props => props.$isOpen ? 'rotate(180deg)' : 'rotate(0deg)'};
    transition: transform 0.3s ease-in-out;
    color: ${props => props.$isOpen ? '#667eea' : '#333'};
`;