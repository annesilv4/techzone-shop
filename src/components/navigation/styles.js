// Importações necessárias para componentes estilizados
import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { keyframes } from "@emotion/react";
import { Link } from "react-router-dom";

// Função para evitar que props personalizadas (começando com $) sejam passadas ao DOM
const shouldForwardProp = (prop) => !prop.startsWith("$");

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
  position: relative;
  z-index: 100;

  /* Tablet (768px a 1024px) */
  @media (max-width: 1024px) {
    padding: 0 60px;
    gap: 20px;
  }

  /* Mobile (até 767px) */
  @media (max-width: 767px) {
    padding: 10px 15px;
    flex-wrap: wrap;
    position: relative;
    justify-content: center;
    gap: 10px;
  }

  /* Mobile pequeno (até 480px) */
  @media (max-width: 480px) {
    padding: 8px 10px;
    gap: 8px;
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

  /* Tablet (768px a 1024px) */
  @media (max-width: 1024px) {
    font-size: 13px;
    padding: 12px 0;

    &:hover {
      padding-bottom: 9px;
    }
  }

  /* Mobile (até 767px) */
  @media (max-width: 767px) {
    font-size: 12px;
    padding: 8px 5px;

    &:hover {
      color: #ffc107;
      border-bottom: none;
      padding-bottom: 8px;
    }
  }

  /* Mobile pequeno (até 480px) */
  @media (max-width: 480px) {
    font-size: 11px;
    padding: 6px 3px;
  }
`;

// Componente estilizado para itens de navegação com dropdown
export const NavItem = styled.div`
  position: relative;

  /* Tablet e Mobile - sempre visível */
  @media (max-width: 1024px) {
    position: relative;
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
  z-index: 9999;
  display: ${(props) => (props.$isOpen ? "block" : "none")};
  animation: ${(props) => (props.$isOpen ? slideDown : "none")} 0.3s ease-in-out
    forwards;

  /* Tablet (768px a 1024px) */
  @media (max-width: 1024px) {
    min-width: 180px;
    left: -30%;
  }

  /* Mobile (até 767px) */
  @media (max-width: 767px) {
    position: absolute;
    min-width: 100%;
    background-color: #1a3559;
    box-shadow: none;
    border-radius: 0;
    margin-top: 5px;
    left: auto;
  }

  /* Mobile pequeno (até 480px) */
  @media (max-width: 480px) {
    margin-top: 3px;
  }
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

  /* Tablet (768px a 1024px) */
  @media (max-width: 1024px) {
    padding: 10px 15px;
    font-size: 12px;
  }

  /* Mobile (até 767px) */
  @media (max-width: 767px) {
    padding: 10px 12px;
    font-size: 11px;
    border-radius: 0;

    &:first-of-type {
      border-radius: 0;
    }

    &:last-of-type {
      border-radius: 0;
    }

    &:hover {
      background-color: #2d6fa8;
    }
  }

  /* Mobile pequeno (até 480px) */
  @media (max-width: 480px) {
    padding: 8px 10px;
    font-size: 10px;
  }
`;

// Componente estilizado para o ícone chevron (seta) que rotaciona
export const ChevronIcon = styled(FontAwesomeIcon, { shouldForwardProp })`
  font-size: 12px;
  transform: ${(props) => (props.$isOpen ? "rotate(180deg)" : "rotate(0deg)")};
  transition: transform 0.3s ease-in-out;
  color: ${(props) => (props.$isOpen ? "#ffc107" : "#fff")};

  /* Tablet (768px a 1024px) */
  @media (max-width: 1024px) {
    font-size: 11px;
  }

  /* Mobile (até 767px) */
  @media (max-width: 767px) {
    font-size: 10px;
  }

  /* Mobile pequeno (até 480px) */
  @media (max-width: 480px) {
    font-size: 9px;
  }
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

  /* Tablet (768px a 1024px) */
  @media (max-width: 1024px) {
    width: 120px;
    padding: 6px 10px;
    font-size: 12px;
  }

  /* Mobile (até 767px) */
  @media (max-width: 767px) {
    width: 100px;
    padding: 5px 8px;
    font-size: 11px;
  }

  /* Mobile pequeno (até 480px) */
  @media (max-width: 480px) {
    width: 80px;
    padding: 4px 6px;
    font-size: 10px;
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

  /* Tablet (768px a 1024px) */
  @media (max-width: 1024px) {
    margin-right: 80px;
    margin-left: 20px;
    flex: 0 0 auto;
    gap: 6px;
  }

  /* Mobile (até 767px) */
  @media (max-width: 767px) {
    display: none;
  }
`;
