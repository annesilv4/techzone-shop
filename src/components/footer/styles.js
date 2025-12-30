import styled from '@emotion/styled';

export const Footer = styled.footer`
        background-color: #2c5aa0;
        color: #fff;
        padding: 60px 230px;
    `;

export const FooterContainer = styled.div`
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 40px;
    `;

export const FooterSection = styled.div`
        display: flex;
        flex-direction: column;
        gap: 15px;
    `;

export const SectionTitle = styled.h3`
        font-size: 16px;
        font-weight: 600;
        color: #ffc107;
        margin: 0 0 15px 0;
        border-bottom: 2px solid #ffc107;
        padding-bottom: 10px;
    `;

export const FooterLink = styled.a`
        color: #ccc;
        text-decoration: none;
        font-size: 14px;
        transition: color 0.3s;
        cursor: pointer;

        &:hover {
            color: #ffc107;
        }
    `;

export const ContactInfo = styled.div`
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

export const SocialIcons = styled.div`
        display: flex;
        gap: 15px;
        margin-top: 10px;
    `;

export const SocialLink = styled.a`
        color: #fff;
        font-size: 20px;
        transition: color 0.3s, transform 0.3s;
        cursor: pointer;

        &:hover {
            color: #ffc107;
            transform: scale(1.2);
        }
    `;

export const FooterBottom = styled.div`
        border-top: 1px solid rgba(255, 255, 255, 0.2);
        margin-top: 40px;
        padding-top: 30px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 13px;
        color: #999;
    `;

export const PaymentMethods = styled.div`
        display: flex;
        gap: 10px;
        align-items: center;
    `;

export const Badge = styled.span`
        background-color: #378dc9eb;
        padding: 5px 10px;
        border-radius: 4px;
        font-size: 12px;
    `;