import styled from "@emotion/styled";

/**
 * ESTILOS - PÁGINA DE OFERTAS
 * 
 * MODIFICAÇÕES:
 * - Adicionado DiscountBadge para mostrar percentual de desconto
 * - CardProduct com position: relative para badge posicionado absolutamente
 */

export const OffersContainer = styled.div`
    padding: 60px 100px;
    background-color: #f5f5f5;
`;

export const TitleContainer = styled.div`
    text-align: center;
    margin-bottom: 50px;
`;

export const TitlePage = styled.h1`
    font-size: 2.5rem;
    color: #333;
    margin-bottom: 10px;
`;

export const Description = styled.p`
    font-size: 1.1rem;
    color: #666;
`;

export const GridProduct = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 30px;
    max-width: 1200px;
    margin: 0 auto;
`;

/**
 * MODIFICADO: CardProduct
 * Adicionado position: relative para permitir badge de desconto posicionado absolutamente
 */
export const CardProduct = styled.div`
    background-color: white;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    display: flex;
    flex-direction: column;
    height: 100%;
    position: relative; /* MODIFICADO: Necessário para badge de desconto absoluto */

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
    }
`;

/**
 * NOVO: DiscountBadge
 * Badge vermelho no canto superior direito dos cards
 * Mostra o percentual de desconto (ex: -15%)
 */
export const DiscountBadge = styled.div`
    position: absolute; /* NOVO: Posicionado absolutamente no card */
    top: 10px; /* NOVO: 10px do topo */
    right: 10px; /* NOVO: 10px da direita */
    background-color: #e74c3c; /* NOVO: Cor vermelha para destacar */
    color: white; /* NOVO: Texto branco */
    padding: 8px 12px; /* NOVO: Espaçamento interno */
    border-radius: 5px; /* NOVO: Cantos arredondados */
    font-weight: bold; /* NOVO: Texto em negrito */
    font-size: 0.9rem; /* NOVO: Tamanho compacto */
    z-index: 10; /* NOVO: Fica acima de outros elementos */
`;

export const ImageContainer = styled.div`
    width: 100%;
    height: 200px;
    overflow: hidden;
    background-color: #f9f9f9;
    cursor: pointer;

    & img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.3s ease;
        transform: scale(1.05);
    }
`;

export const Content = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    flex: 1;

    & h3 {
        font-size: 1rem;
        color: #333;
        margin-bottom: 10px;
        line-height: 1.4;
        min-height: 2.8em;
    }
`;

export const CardDescription = styled.p`
    font-size: 0.85rem;
    color: #666;
    margin-bottom: 15px;
    flex-grow: 1;
    line-height: 1.4;
`;

export const CardFooter = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
    padding-top: 15px;
    border-top: 1px solid #eee;
`;

export const Price = styled.span`
    font-size: 1.3rem;
    color: #667eea;
    font-weight: bold;
`;

export const BtnCard = styled.button`
    background-color: #667eea;
    color: white;
    border: none;
    padding: 12px 20px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 0.95rem;
    font-weight: 600;
    transition: background-color 0.3s ease;
    width: 100%;

    &:hover {
        background-color: #764ba2;
    }
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
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    animation: fadeIn 0.3s ease;
`;

export const ModalContent = styled.div`
    position: relative;
    max-width: 90vw;
    max-height: 90vh;
    background-color: white;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);

    & img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        max-height: 85vh;
    }
`;

export const CloseBtn = styled.button`
    position: absolute;
    top: 15px;
    right: 15px;
    background-color: rgba(255, 255, 255, 0.9);
    border: none;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    font-size: 24px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color 0.3s ease;
    z-index: 1001;

    &:hover {
        background-color: white;
    }
`;