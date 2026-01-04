import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const Container = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: center;
  flex: 1;
  padding: 80px 100px;

  @media (max-width: 768px) {
    padding: 60px 50px;
  }

  @media (max-width: 480px) {
    padding: 40px 20px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  background: white;
  border-radius: 12px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  overflow: hidden;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Section = styled.div`
  flex: 1;
  padding: 50px 100px;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    padding: 40px 30px;
  }

  @media (max-width: 480px) {
    padding: 30px 20px;
  }
`;

export const VerticalDivider = styled.div`
  width: 2px;
  background: linear-gradient(180deg, transparent, #ddd, transparent);

  @media (max-width: 768px) {
    width: 100%;
    height: 1px;
  }
`;

export const Title = styled.h1`
  font-size: 28px;
  font-weight: bold;
  color: #333;
  margin-bottom: 8px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 24px;
  }

  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

export const Subtitle = styled.p`
  font-size: 14px;
  color: #666;
  text-align: center;
  margin-bottom: 30px;
`;

export const ErrorAlert = styled.div`
  background-color: #fee;
  color: #c33;
  padding: 12px;
  border-radius: 4px;
  margin-bottom: 20px;
  font-size: 14px;
  border-left: 4px solid #c33;
`;

export const Form = styled.form`
  margin-bottom: 20px;
`;

export const FormGroup = styled.div`
  margin-bottom: 16px;
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  font-weight: 500;
  color: #333;
  margin-bottom: 6px;
  font-size: 13px;
`;

export const Input = styled.input`
  padding: 11px;
  border: 2px solid ${props => props.hasError ? '#c33' : '#ddd'};
  border-radius: 4px;
  font-size: 14px;
  transition: all 0.3s ease;
  font-family: inherit;

  &:focus {
    outline: none;
    border-color: ${props => props.hasError ? '#c33' : '#667eea'};
    box-shadow: ${props => props.hasError ? '0 0 0 3px rgba(204, 51, 51, 0.1)' : '0 0 0 3px rgba(102, 126, 234, 0.1)'};
  }

  @media (max-width: 480px) {
    padding: 10px;
    font-size: 13px;
  }
`;

export const ErrorMessage = styled.span`
  color: #c33;
  font-size: 12px;
  margin-top: 4px;
`;

export const FormOptions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  font-size: 13px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
    align-items: flex-start;
  }
`;

export const RememberMeLabel = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: 6px;
  color: #666;
  user-select: none;

  input[type="checkbox"] {
    cursor: pointer;
    accent-color: #667eea;
  }
`;

export const ForgotPasswordLink = styled(Link)`
  color: #667eea;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
  font-size: 13px;

  &:hover {
    color: #764ba2;
  }
`;

export const SubmitBtn = styled.button`
  width: 100%;
  padding: 12px;
  background: #378dc9eb;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 5px 20px rgba(102, 126, 234, 0.4);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  @media (max-width: 480px) {
    font-size: 14px;
    padding: 11px;
  }
`;

export const Divider = styled.div`
  display: flex;
  align-items: center;
  margin: 16px 0;
  color: #999;
  font-size: 12px;

  &::before {
    content: '';
    flex: 1;
    height: 1px;
    background-color: #ddd;
    margin-right: 10px;
  }

  &::after {
    content: '';
    flex: 1;
    height: 1px;
    background-color: #ddd;
    margin-left: 10px;
  }
`;

export const DividerSpan = styled.span`
  flex: 1;
  text-align: center;
`;

export const SocialButtons = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 12px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const SocialButtonBase = styled.button`
  flex: 1;
  padding: 11px;
  border: 2px solid #ddd;
  background: white;
  border-radius: 4px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;

  @media (max-width: 768px) {
    span {
      display: none;
    }
  }
`;

export const GoogleBtn = styled(SocialButtonBase)`
  border-color: #4285f4;
  color: #4285f4;

  &:hover {
    border-color: #4285f4;
    background-color: rgba(66, 133, 244, 0.05);
  }

  svg {
    color: #4285f4;
  }
`;

export const FacebookBtn = styled(SocialButtonBase)`
  border-color: #1877f2;
  color: #1877f2;

  &:hover {
    border-color: #1877f2;
    background-color: rgba(24, 119, 242, 0.05);
  }

  svg {
    color: #1877f2;
  }
`;

export const SocialLink = styled.a`
  color: #667eea;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.3s ease;
  font-size: 13px;

  &:hover {
    color: #764ba2;
  }
`;

const AuthLink = styled.p`
  text-align: center;
  font-size: 13px;
  color: #666;
  margin-top: auto;

  a {
    color: #667eea;
    text-decoration: none;
    font-weight: 600;
    transition: color 0.3s ease;

    &:hover {
      color: #764ba2;
    }
  }
`;

export const LoginLink = styled(AuthLink)``;

export const RegisterLink = styled(AuthLink)``;

export const DemoParagraph = styled.p`
  text-align: center;
  font-size: 12px;
  color: #999;
  margin-bottom: 16px;
  font-style: italic;
`;
