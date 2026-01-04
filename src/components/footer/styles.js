// Importação da biblioteca de CSS-in-JS Emotion para criar componentes estilizados
import styled from "@emotion/styled";

// Componente Footer - container principal do rodapé com cor de fundo azul
export const Footer = styled.footer`
  background-color: #2c5aa0;
  color: #fff;
  padding: 60px 230px;

  /* Tablet (768px a 1024px) */
  @media (max-width: 1024px) {
    padding: 40px 60px;
  }

  /* Mobile (até 767px) - Esconde o footer em telas pequenas */
  @media (max-width: 767px) {
    display: none;
  }
`;

// Container do footer com layout de grid de 4 colunas
export const FooterContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr); // 4 colunas iguais
  gap: 40px; // Espaçamento entre colunas

  /* Tablet (768px a 1024px) - 2 colunas em tablet */
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
  }
`;

// Seção individual do footer com layout em coluna
export const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px; // Espaçamento entre itens
`;

// Título de cada seção do footer com cor amarela destaque
export const SectionTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: #ffc107; // Amarelo
  margin: 0 0 15px 0;
  border-bottom: 2px solid #ffc107; // Borda inferior amarela
  padding-bottom: 10px;

  /* Tablet (768px a 1024px) */
  @media (max-width: 1024px) {
    font-size: 14px;
    margin-bottom: 12px;
    padding-bottom: 8px;
  }
`;

// Link do footer com efeito hover
export const FooterLink = styled.a`
  color: #ccc; // Cinza claro
  text-decoration: none;
  font-size: 14px;
  transition: color 0.3s; // Transição suave de cor
  cursor: pointer;

  &:hover {
    color: #ffc107; // Muda para amarelo ao passar o mouse
  }

  /* Tablet (768px a 1024px) */
  @media (max-width: 1024px) {
    font-size: 12px;
  }
`;

// Container para informações de contato (telefone, email, etc)
export const ContactInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: #ccc;
  font-size: 14px;

  svg {
    color: #ffc107; // Ícones em amarelo
    width: 18px;
  }

  /* Tablet (768px a 1024px) */
  @media (max-width: 1024px) {
    font-size: 12px;
    gap: 8px;

    svg {
      width: 16px;
    }
  }
`;

// Container para ícones de redes sociais
export const SocialIcons = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 10px;
`;

// Link para redes sociais com efeito de escala ao hover
export const SocialLink = styled.a`
  color: #fff;
  font-size: 20px;
  transition: color 0.3s, transform 0.3s; // Transição de cor e escala
  cursor: pointer;

  &:hover {
    color: #ffc107; // Muda para amarelo
    transform: scale(1.2); // Aumenta tamanho em 20%
  }

  /* Tablet (768px a 1024px) */
  @media (max-width: 1024px) {
    font-size: 18px;
  }
`;

// Seção inferior do footer com informações de copyright e pagamento
export const FooterBottom = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.2); // Borda superior sutil
  margin-top: 40px;
  padding-top: 30px;
  display: flex;
  justify-content: space-between; // Distribui conteúdo nas extremidades
  align-items: center;
  font-size: 13px;
  color: #999;

  /* Tablet (768px a 1024px) */
  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 20px;
    margin-top: 30px;
    padding-top: 20px;
    font-size: 11px;
  }
`;

// Container para exibir métodos de pagamento aceitos
export const PaymentMethods = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;

  /* Tablet (768px a 1024px) */
  @media (max-width: 1024px) {
    gap: 8px;
  }
`;

// Badge/tag para destaque de informações (ex: "seguro", "certificado")
export const Badge = styled.span`
  background-color: #378dc9eb; // Azul semi-transparente
  padding: 5px 10px;
  border-radius: 4px;
  font-size: 12px;

  /* Tablet (768px a 1024px) */
  @media (max-width: 1024px) {
    padding: 4px 8px;
    font-size: 10px;
  }
`;
