import styled from "@emotion/styled";

export const ProductContainer = styled.div`
    padding: 60px 100px;
    background-color: #f5f5f5;
`;

export const TitleContainer = styled.div`
    text-align: center;
    margin-bottom: 50px;
`;

export const TitlePage = styled.h1`
    font-size: 2.5rem; /* Tamanho grande */
    color: #333; /* Cor escura */
    margin-bottom: 10px; /* Espaçamento abaixo */
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
`;

export const CardProduct = styled.div`
    background-color: white; /* Fundo branco */
    border-radius: 8px; /* Cantos arredondados */
    overflow: hidden; /* Esconde conteúdo que sai da borda */
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1); /* Sombra sutil */
    transition: transform 0.3s ease, box-shadow 0.3s ease; /* Animações suaves */
    display: flex; /* Ativa flexbox */
    flex-direction: column; /* Organiza verticalmente */
    height: 100%; /* Altura total do espaço */

    &:hover {
        transform: translateY(-5px); /* Move card 5px para cima */
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15); /* Aumenta sombra */
    }
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
    }
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
`;

export const BtnCard = styled.button`
    background-color: #667eea; /* Fundo roxo */
    color: white; /* Texto branco */
    border: none; /* Sem borda */
    padding: 12px 20px; /* Espaçamento interno */
    border-radius: 5px; /* Cantos arredondados */
    cursor: pointer; /* Cursor de mão */
    font-size: 0.95rem; /* Tamanho pequeno */
    font-weight: 600; /* Texto mais bold */
    transition: background-color 0.3s ease; /* Animação suave */
    width: 100%; /* Largura total */

    &:hover {
        background-color: #764ba2; /* Roxo mais escuro */
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