// Media Queries reutilizáveis para as categorias

export const responsiveProductContainer = `
    /* Media Query para Tablets (até 1024px) */
    @media (max-width: 1024px) {
        padding: 40px 50px;
    }

    /* Media Query para Mobile médio (481px até 768px) */
    @media (max-width: 768px) and (min-width: 481px) {
        padding: 30px 30px;
    }

    /* Media Query para Mobile pequeno (até 480px) */
    @media (max-width: 480px) {
        padding: 20px 15px;
    }
`;

export const responsiveTitlePage = `
    /* Media Query para Tablets (até 1024px) */
    @media (max-width: 1024px) {
        font-size: 2rem;
    }

    /* Media Query para Mobile médio (481px até 768px) */
    @media (max-width: 768px) and (min-width: 481px) {
        font-size: 1.75rem;
    }

    /* Media Query para Mobile pequeno (até 480px) */
    @media (max-width: 480px) {
        font-size: 1.5rem;
        margin-bottom: 8px;
    }
`;

export const responsiveGridProduct = `
    /* Media Query para Tablets (até 1024px) */
    @media (max-width: 1024px) {
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        gap: 20px;
    }

    /* Media Query para Mobile médio (481px até 768px) */
    @media (max-width: 768px) and (min-width: 481px) {
        grid-template-columns: repeat(auto-fill, minmax(170px, 1fr));
        gap: 15px;
    }

    /* Media Query para Mobile pequeno (até 480px) */
    @media (max-width: 480px) {
        grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
        gap: 10px;
    }
`;

export const responsiveImageContainer = `
    /* Media Query para Tablets (até 1024px) */
    @media (max-width: 1024px) {
        height: 180px;
    }

    /* Media Query para Mobile médio (481px até 768px) */
    @media (max-width: 768px) and (min-width: 481px) {
        height: 165px;
    }

    /* Media Query para Mobile pequeno (até 480px) */
    @media (max-width: 480px) {
        height: 150px;
    }
`;

export const responsiveContent = `
    /* Media Query para Tablets (até 1024px) */
    @media (max-width: 1024px) {
        padding: 15px;

        & h3 {
            font-size: 0.9rem;
        }
    }

    /* Media Query para Mobile médio (481px até 768px) */
    @media (max-width: 768px) and (min-width: 481px) {
        padding: 12px;

        & h3 {
            font-size: 0.85rem;
            margin-bottom: 8px;
        }
    }

    /* Media Query para Mobile pequeno (até 480px) */
    @media (max-width: 480px) {
        padding: 10px;

        & h3 {
            font-size: 0.8rem;
            min-height: auto;
        }
    }
`;

export const responsivePrice = `
    /* Media Query para Tablets (até 1024px) */
    @media (max-width: 1024px) {
        font-size: 1.1rem;
    }

    /* Media Query para Mobile médio (481px até 768px) */
    @media (max-width: 768px) and (min-width: 481px) {
        font-size: 1rem;
    }

    /* Media Query para Mobile pequeno (até 480px) */
    @media (max-width: 480px) {
        font-size: 0.9rem;
    }
`;

export const responsiveBtnCard = `
    /* Media Query para Tablets (até 1024px) */
    @media (max-width: 1024px) {
        padding: 10px 15px;
        font-size: 0.9rem;
    }

    /* Media Query para Mobile médio (481px até 768px) */
    @media (max-width: 768px) and (min-width: 481px) {
        padding: 8px 12px;
        font-size: 0.85rem;
    }

    /* Media Query para Mobile pequeno (até 480px) */
    @media (max-width: 480px) {
        padding: 8px 10px;
        font-size: 0.8rem;
    }
`;

export const responsiveDiscountBadge = `
    /* Media Query para Tablets (até 1024px) */
    @media (max-width: 1024px) {
        font-size: 0.85rem;
        padding: 6px 10px;
    }

    /* Media Query para Mobile médio (481px até 768px) */
    @media (max-width: 768px) and (min-width: 481px) {
        font-size: 0.8rem;
        padding: 5px 8px;
    }

    /* Media Query para Mobile pequeno (até 480px) */
    @media (max-width: 480px) {
        font-size: 0.75rem;
        padding: 4px 6px;
        top: 8px;
        right: 8px;
    }
`;

export const responsiveCloseBtn = `
    /* Media Query para Tablets (até 1024px) */
    @media (max-width: 1024px) {
        width: 35px;
        height: 35px;
        font-size: 20px;
    }

    /* Media Query para Mobile médio (481px até 768px) */
    @media (max-width: 768px) and (min-width: 481px) {
        width: 32px;
        height: 32px;
        font-size: 18px;
    }

    /* Media Query para Mobile pequeno (até 480px) */
    @media (max-width: 480px) {
        width: 28px;
        height: 28px;
        font-size: 16px;
        top: 10px;
        right: 10px;
    }
`;
