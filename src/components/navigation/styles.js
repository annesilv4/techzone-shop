// Importações necessárias para componentes estilizados
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { keyframes } from '@emotion/react';
import { Link } from 'react-router-dom';

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

// Componente estilizado para o container de navegação principal
export const Nav = styled.nav`
        background-color: #2c5aa0;
        padding: 0 230px;
        display: flex;
        align-items: center;
        gap: 30px;

        @media (max-width: 1024px) {
            padding: 0 80px;
            gap: 20px;
        }

        @media (max-width: 768px) {
            padding: 0 20px;
            flex-wrap: wrap;
            position: relative;
        }
    `;

// Componente estilizado para links de navegação
export const NavLink = styled(Link)`
        color: #fff;
        text-decoration: none;
        font-size: 15px;
        font-weight: 500;
        padding: 15px 0;
        transition: color 0.3s;
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 5px;

        &:hover {
            color: #ffc107;
            border-bottom: 3px solid #ffc107;
            padding-bottom: 12px;
        }
    `;

// Componente estilizado para itens de navegação com dropdown
export const NavItem = styled.div`
        position: relative;

        @media (max-width: 768px) {
            display: none;
        }
    `;

// Componente estilizado para o menu dropdown (lista de categorias)
export const DropdownMenu = styled("div", { shouldForwardProp })`
        position: absolute;
        top: 100%;
        left: -50%;
        background-color: #1e4073;
        border-radius: 4px;
        min-width: 200px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
        z-index: 1000;
        display: ${props => props.$isOpen ? 'block' : 'none'};
        animation: ${props => props.$isOpen ? slideDown : 'none'} 0.3s ease-in-out forwards;
    `;

// Componente estilizado para itens dentro do dropdown
export const DropdownItem = styled(Link)`
        display: block;
        color: #fff;
        text-decoration: none;
        padding: 12px 20px;
        font-size: 14px;
        transition: background-color 0.3s;
        cursor: pointer;

        &:first-of-type {
            border-radius: 4px 4px 0 0;
        }

        &:last-of-type {
            border-radius: 0 0 4px 4px;
        }

        &:hover {
            background-color: #378dc9;
            color: #ffc107;
        }
    `;

// Componente estilizado para o ícone chevron (seta) que rotaciona
export const ChevronIcon = styled(FontAwesomeIcon, { shouldForwardProp })`
        font-size: 12px;
        transform: ${props => props.$isOpen ? 'rotate(180deg)' : 'rotate(0deg)'};
        transition: transform 0.3s ease-in-out;
        color: ${props => props.$isOpen ? '#ffc107' : '#fff'};
    `;

// Componente estilizado para o campo de entrada de CEP
export const CepInput = styled.input`
        padding: 8px 12px;
        border: none;
        border-radius: 4px;
        font-size: 14px;
        width: 140px;

        &:focus {
            outline: 2px solid #ffc107;
        }
    `;

// Componente estilizado para o container do CEP
export const CepContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    margin-right: 210px;
    margin-left: 133px;
    flex: 0 0 300px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    @media (max-width: 768px) {
        display: none;
    }
`;