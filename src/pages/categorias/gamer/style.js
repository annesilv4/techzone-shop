import styled from "@emotion/styled";
import {
    responsiveProductContainer,
    responsiveTitlePage,
    responsiveGridProduct,
    responsiveImageContainer,
    responsiveContent,
    responsivePrice,
    responsiveBtnCard,
    responsiveDiscountBadge,
    responsiveCloseBtn,
} from "../mediaQueries";

export const ProductContainer = styled.div`
    padding: 60px 100px;
    background-color: #f5f5f5;
    min-height: 83vh;
    ${responsiveProductContainer}
`;

export const TitleContainer = styled.div`
    text-align: center;
    margin-bottom: 50px;
`;

export const TitlePage = styled.h1`
    font-size: 2.5rem; /* Tamanho grande */
    color: #333; /* Cor escura */
    margin-bottom: 10px; /* Espaçamento abaixo */
    ${responsiveTitlePage}
`;

export const Description = styled.p`
    font-size: 1.1rem; /* Tamanho médio */
    color: #666; /* Cor cinza média */
`;

export const CategorySection = styled.div`
    margin-bottom: 80px; /* Espaçamento entre categorias */
`;

export const GridProduct = styled.div`
    display: grid; /* Ativa layout em grid */
    grid-template-columns: repeat(
        auto-fill,
        minmax(250px, 1fr)
    ); /* Colunas automáticas de mín 250px */
    gap: 30px; /* Espaçamento entre itens */
    max-width: 1200px; /* Largura máxima do grid */
    margin: 0 auto; /* Centraliza o grid */
    ${responsiveGridProduct}
`;

export const CardProduct = styled.div`
    background-color: white; /* Fundo branco */
    border-radius: 8px; /* Cantos arredondados */
    overflow: hidden; /* Esconde conteúdo que sai da borda */
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1); /* Sombra sutil */
    transition: transform 0.3s ease, box-shadow 0.3s ease; /* Animações suaves */
    display: flex; /* Ativa flexbox */
    flex-direction: column; /* Organiza verticalmente */
    height: 100%;
    position: relative; /* Altura total do espaço */

    &:hover {
        transform: translateY(-5px); /* Move card 5px para cima */
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15); /* Aumenta sombra */
    }
`;

export const DiscountBadge = styled.div`
    position: absolute;
    top: 10px;
    right: 10px;
    background-color: #e74c3c;
    color: white;
    padding: 8px 12px;
    border-radius: 5px;
    font-weight: bold;
    font-size: 0.9rem;
    z-index: 10;
    ${responsiveDiscountBadge}
`;

export const ImageContainer = styled.div`
    width: 100%; /* Largura total */
    height: 200px; /* Altura fixa */
    overflow: hidden; /* Esconde imagem que ultrapassa */
    background-color: #f9f9f9; /* Fundo cinza muito claro */
    cursor: pointer; /* Cursor de mão ao passar */

    & img {
        width: 100%; /* Largura total */
        height: 100%; /* Altura total */
        object-fit: cover; /* Preenche sem distorcer */
        transition: transform 0.3s ease; /* Animação suave */
        transform: scale(1.05); /* Amplia 5% */
    }
    ${responsiveImageContainer}
`;

export const Content = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    flex: 1;

    & h3 {
        font-size: 1rem; /* Tamanho normal */
        color: #333; /* Cor escura */
        margin-bottom: 10px; /* Espaçamento abaixo */
        line-height: 1.4; /* Altura de linha */
        min-height: 2.8em; /* Altura mínima para 2 linhas */
    }
    ${responsiveContent}
`;

export const CardDescription = styled.p`
    font-size: 0.85rem; /* Tamanho pequeno */
    color: #666; /* Cor cinza */
    margin-bottom: 15px; /* Espaçamento abaixo */
    flex-grow: 1; /* Cresce para ocupar espaço */
    line-height: 1.4; /* Altura de linha */
`;

export const CardFooter = styled.div`
    display: flex; /* Ativa flexbox */
    justify-content: space-between; /* Espaço entre itens */
    align-items: center; /* Centraliza verticalmente */
    margin-bottom: 15px; /* Espaçamento abaixo */
    padding-top: 15px; /* Espaçamento interno acima */
    border-top: 1px solid #eee; /* Linha divisória leve */
`;

export const Price = styled.span`
    font-size: 1.3rem; /* Tamanho grande */
    color: #667eea; /* Cor roxo */
    font-weight: bold; /* Texto em negrito */
    ${responsivePrice}
`;

export const BtnCard = styled.button`
    /* MODIFICADO: Muda cor baseado no estado isAdded */
    background-color: ${props => props.isAdded ? '#27ae60' : '#6c757d'}; /* Verde se adicionado, cinza se não */
    color: white; /* Texto branco */
    border: none; /* Sem borda */
    padding: 12px 20px; /* Espaçamento interno */
    border-radius: 5px; /* Cantos arredondados */
    /* MODIFICADO: Cursor muda para not-allowed quando adicionado */
    cursor: ${props => props.isAdded ? 'not-allowed' : 'pointer'}; /* Cursor de mão ou desabilitado */
    font-size: 0.95rem; /* Tamanho pequeno */
    font-weight: 600; /* Texto mais bold */
    transition: background-color 0.3s ease; /* Animação suave */
    width: 100%; /* Largura total */

    &:hover {
        /* MODIFICADO: Hover também muda cor baseado no estado */
        background-color: ${props => props.isAdded ? '#229954' : '#6c757d'}; /* Verde mais escuro ou cinza mais escuro */
    }
    ${responsiveBtnCard}
`;

export const CardCategory = styled.p`
    font-size: 0.75rem;
    color: #fff;
    padding: 5px 8px;
    border-radius: 7px;
    background-color: #667eea;
    align-items: center;
`;

export const Modal = styled.div`
    position: fixed; /* Posição fixa na tela */
    top: 0; /* Canto superior */
    left: 0; /* Canto esquerdo */
    width: 100%; /* Largura total */
    height: 100%; /* Altura total */
    background-color: rgba(0, 0, 0, 0.8); /* Fundo preto semi-transparente */
    display: flex; /* Ativa flexbox */
    align-items: center; /* Centraliza verticalmente */
    justify-content: center; /* Centraliza horizontalmente */
    z-index: 1000; /* Fica acima de outros elementos */
    animation: fadeIn 0.3s ease; /* Animação de entrada */
`;

export const ModalContent = styled.div`
    position: relative; /* Posicionamento relativo para elementos filhos */
    max-width: 90vw; /* Máx 90% da largura da tela */
    max-height: 90vh; /* Máx 90% da altura da tela */
    background-color: white; /* Fundo branco */
    border-radius: 8px; /* Cantos arredondados */
    overflow: hidden; /* Esconde conteúdo que sai */
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3); /* Sombra forte */

    & img {
        width: 100%; /* Largura total */
        height: 100%; /* Altura total */
        object-fit: contain; /* Encaixa mantendo proporção */
        max-height: 85vh; /* Máxima altura */
    }
`;

export const CloseBtn = styled.button`
    position: absolute; /* Posição absoluta para overlay */
    top: 15px; /* 15px do topo */
    right: 15px; /* 15px da direita */
    background-color: rgba(255, 255, 255, 0.9); /* Branco semi-transparente */
    border: none; /* Sem borda */
    width: 40px; /* Largura fixa */
    height: 40px; /* Altura fixa (quadrado) */
    border-radius: 50%; /* Faz um círculo */
    font-size: 24px; /* Tamanho grande do X */
    cursor: pointer; /* Cursor de mão */
    display: flex; /* Ativa flexbox */
    align-items: center; /* Centraliza verticalmente */
    justify-content: center; /* Centraliza horizontalmente */
    transition: background-color 0.3s ease; /* Animação suave */
    z-index: 1001; /* Fica acima do modal */

    &:hover {
        background-color: white; /* Fica branco sólido */
    }
    ${responsiveCloseBtn}
`;