import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
    const Footer = styled.footer`
        background-color: #2c5aa0;
        color: #fff;
        padding: 60px 230px;
        margin-top: 80px;
    `;

    const FooterContainer = styled.div`
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 40px;
    `;

    const FooterSection = styled.div`
        display: flex;
        flex-direction: column;
        gap: 15px;
    `;

    const SectionTitle = styled.h3`
        font-size: 16px;
        font-weight: 600;
        color: #ffc107;
        margin: 0 0 15px 0;
        border-bottom: 2px solid #ffc107;
        padding-bottom: 10px;
    `;

    const FooterLink = styled.a`
        color: #ccc;
        text-decoration: none;
        font-size: 14px;
        transition: color 0.3s;
        cursor: pointer;

        &:hover {
            color: #ffc107;
        }
    `;

    const ContactInfo = styled.div`
        display: flex;
        align-items: center;
        gap: 10px;
        color: #ccc;
        font-size: 14px;

        svg {
            color: #ffc107;
            width: 18px;
        }
    `;

    const SocialIcons = styled.div`
        display: flex;
        gap: 15px;
        margin-top: 10px;
    `;

    const SocialLink = styled.a`
        color: #fff;
        font-size: 20px;
        transition: color 0.3s, transform 0.3s;
        cursor: pointer;

        &:hover {
            color: #ffc107;
            transform: scale(1.2);
        }
    `;

    const FooterBottom = styled.div`
        border-top: 1px solid rgba(255, 255, 255, 0.2);
        margin-top: 40px;
        padding-top: 30px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 13px;
        color: #999;
    `;

    const PaymentMethods = styled.div`
        display: flex;
        gap: 10px;
        align-items: center;
    `;

    const Badge = styled.span`
        background-color: #378dc9eb;
        padding: 5px 10px;
        border-radius: 4px;
        font-size: 12px;
    `;

    return (
        <Footer>
            <FooterContainer>
                <FooterSection>
                    <SectionTitle>Sobre TechZone</SectionTitle>
                    <FooterLink href="">Quem somos</FooterLink>
                    <FooterLink href="">Nossa história</FooterLink>
                    <FooterLink href="">Sustentabilidade</FooterLink>
                    <FooterLink href="">Carreiras</FooterLink>
                </FooterSection>

                <FooterSection>
                    <SectionTitle>Compra e Devolução</SectionTitle>
                    <FooterLink href="">Como comprar</FooterLink>
                    <FooterLink href="">Frete e Envio</FooterLink>
                    <FooterLink href="">Devolução e Troca</FooterLink>
                    <FooterLink href="">Garantia</FooterLink>
                </FooterSection>

                <FooterSection>
                    <SectionTitle>Atendimento</SectionTitle>
                    <FooterLink href="">Central de Ajuda</FooterLink>
                    <FooterLink href="">FAQ</FooterLink>
                    <FooterLink href="">Rastrear Pedido</FooterLink>
                    <FooterLink href="">Contato</FooterLink>
                </FooterSection>

                <FooterSection>
                    <SectionTitle>Contato</SectionTitle>
                    <ContactInfo>
                        <FontAwesomeIcon icon={faPhone} />
                        <span>(11) 3000-0000</span>
                    </ContactInfo>
                    <ContactInfo>
                        <FontAwesomeIcon icon={faEnvelope} />
                        <span>suporte@techzone.com</span>
                    </ContactInfo>
                    <ContactInfo>
                        <FontAwesomeIcon icon={faMapMarkerAlt} />
                        <span>São Paulo, SP</span>
                    </ContactInfo>
                    <SocialIcons>
                        <SocialLink href="" title="Facebook">
                            <FontAwesomeIcon icon={faFacebook} />
                        </SocialLink>
                        <SocialLink href="" title="Instagram">
                            <FontAwesomeIcon icon={faInstagram} />
                        </SocialLink>
                        <SocialLink href="" title="Twitter">
                            <FontAwesomeIcon icon={faTwitter} />
                        </SocialLink>
                        <SocialLink href="" title="LinkedIn">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </SocialLink>
                    </SocialIcons>
                </FooterSection>
            </FooterContainer>

            <FooterBottom>
                <div>© 2025 TechZone. Todos os direitos reservados.</div>
                <PaymentMethods>
                    <span>Formas de Pagamento:</span>
                    <Badge>Cartão</Badge>
                    <Badge>PIX</Badge>
                    <Badge>Boleto</Badge>
                </PaymentMethods>
            </FooterBottom>
        </Footer>
    );
}
