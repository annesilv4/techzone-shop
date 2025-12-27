import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { Footer, FooterContainer, FooterSection, SectionTitle, FooterLink, ContactInfo, SocialIcons, SocialLink, FooterBottom, PaymentMethods, Badge } from './styles';

export default function Footer() {
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
