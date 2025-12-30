import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebook } from '@fortawesome/free-brands-svg-icons';
import HeaderComponents from '../../components/header';
import FooterComponents from '../../components/footer';
import {
  PageWrapper,
  Container,
  Wrapper,
  Section,
  VerticalDivider,
  Title,
  Subtitle,
  ErrorAlert,
  Form,
  FormGroup,
  Label,
  Input,
  ErrorMessage,
  FormOptions,
  RememberMeLabel,
  ForgotPasswordLink,
  SubmitBtn,
  Divider,
  DividerSpan,
  SocialButtons,
  GoogleBtn,
  FacebookBtn,
  LoginLink,
  RegisterLink,
  DemoParagraph
} from './styles';

export default function AuthPage() {
  const navigate = useNavigate();

  // Login
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });
  const [loginErrors, setLoginErrors] = useState({});
  const [loginLoading, setLoginLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  // Register
  const [registerData, setRegisterData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [registerErrors, setRegisterErrors] = useState({});
  const [registerLoading, setRegisterLoading] = useState(false);

  // Login Validation
  const validateLogin = () => {
    const newErrors = {};

    if (!loginData.email.trim()) {
      newErrors.email = 'Email é obrigatório';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(loginData.email)) {
      newErrors.email = 'Email inválido';
    }

    if (!loginData.password) {
      newErrors.password = 'Senha é obrigatória';
    }

    setLoginErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Register Validation
  const validateRegister = () => {
    const newErrors = {};

    if (!registerData.name.trim()) {
      newErrors.name = 'Nome é obrigatório';
    }

    if (!registerData.email.trim()) {
      newErrors.email = 'Email é obrigatório';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(registerData.email)) {
      newErrors.email = 'Email inválido';
    }

    if (!registerData.password) {
      newErrors.password = 'Senha é obrigatória';
    } else if (registerData.password.length < 6) {
      newErrors.password = 'Senha deve ter no mínimo 6 caracteres';
    }

    if (!registerData.confirmPassword) {
      newErrors.confirmPassword = 'Confirmação de senha é obrigatória';
    } else if (registerData.password !== registerData.confirmPassword) {
      newErrors.confirmPassword = 'As senhas não coincidem';
    }

    setRegisterErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Login Input Change
  const handleLoginInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData(prev => ({
      ...prev,
      [name]: value
    }));
    if (loginErrors[name]) {
      setLoginErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  // Register Input Change
  const handleRegisterInputChange = (e) => {
    const { name, value } = e.target;
    setRegisterData(prev => ({
      ...prev,
      [name]: value
    }));
    if (registerErrors[name]) {
      setRegisterErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleRememberMeChange = (e) => {
    setRememberMe(e.target.checked);
  };

  // Handle Login Submit
  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    if (!validateLogin()) {
      return;
    }

    setLoginLoading(true);

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: loginData.email,
          password: loginData.password,
          rememberMe: rememberMe
        })
      });

      if (response.ok) {
        alert('Login realizado com sucesso!');
        navigate('/');
      } else {
        setLoginErrors({ submit: 'Email ou senha inválidos' });
      }
    } catch (error) {
      console.error('Erro:', error);
      setLoginErrors({ submit: 'Erro ao conectar ao servidor' });
    } finally {
      setLoginLoading(false);
    }
  };

  // Handle Register Submit
  const handleRegisterSubmit = async (e) => {
    e.preventDefault();

    if (!validateRegister()) {
      return;
    }

    setRegisterLoading(true);

    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: registerData.name,
          email: registerData.email,
          password: registerData.password
        })
      });

      if (response.ok) {
        alert('Cadastro realizado com sucesso!');
        navigate('/');
      } else {
        setRegisterErrors({ submit: 'Erro ao cadastrar. Email já existe?' });
      }
    } catch (error) {
      console.error('Erro:', error);
      setRegisterErrors({ submit: 'Erro ao conectar ao servidor' });
    } finally {
      setRegisterLoading(false);
    }
  };

  return (
    <PageWrapper>
      <HeaderComponents />
      <Container>
        <Wrapper>
          {/* Login Section */}
          <Section>
            <Title>Bem-vindo de Volta</Title>
            <Subtitle>Faça login na sua conta TechZone</Subtitle>

            {loginErrors.submit && (
              <ErrorAlert>
                {loginErrors.submit}
              </ErrorAlert>
            )}

            <Form onSubmit={handleLoginSubmit}>
              <FormGroup>
                <Label htmlFor="login-email">Email</Label>
                <Input
                  type="email"
                  id="login-email"
                  name="email"
                  value={loginData.email}
                  onChange={handleLoginInputChange}
                  placeholder="seu@email.com"
                  hasError={!!loginErrors.email}
                />
                {loginErrors.email && (
                  <ErrorMessage>{loginErrors.email}</ErrorMessage>
                )}
              </FormGroup>

              <FormGroup>
                <Label htmlFor="login-password">Senha</Label>
                <Input
                  type="password"
                  id="login-password"
                  name="password"
                  value={loginData.password}
                  onChange={handleLoginInputChange}
                  placeholder="Sua senha"
                  hasError={!!loginErrors.password}
                />
                {loginErrors.password && (
                  <ErrorMessage>{loginErrors.password}</ErrorMessage>
                )}
              </FormGroup>

              <FormOptions>
                <RememberMeLabel>
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={handleRememberMeChange}
                  />
                  <span>Lembrar-me</span>
                </RememberMeLabel>
                <ForgotPasswordLink to="/forgot-password">
                  Esqueci minha senha
                </ForgotPasswordLink>
              </FormOptions>

              <SubmitBtn
                type="submit"
                disabled={loginLoading}
              >
                {loginLoading ? 'Entrando...' : 'Fazer Login'}
              </SubmitBtn>
            </Form>

            <Divider>
              <DividerSpan>Ou faça login com</DividerSpan>
            </Divider>

            <DemoParagraph>Botões só para demonstração</DemoParagraph>
            <SocialButtons>
              <GoogleBtn
                type="button"
              >
                <FontAwesomeIcon icon={faGoogle} />
                <span>Google</span>
              </GoogleBtn>

              <FacebookBtn
                type="button"
              >
                <FontAwesomeIcon icon={faFacebook} />
                <span>Facebook</span>
              </FacebookBtn>
            </SocialButtons>
          </Section>

          {/* Divider */}
          <VerticalDivider />

          {/* Register Section */}
          <Section>
            <Title>Criar Conta</Title>
            <Subtitle>Junte-se à comunidade TechZone</Subtitle>

            {registerErrors.submit && (
              <ErrorAlert>
                {registerErrors.submit}
              </ErrorAlert>
            )}

            <Form onSubmit={handleRegisterSubmit}>
              <FormGroup>
                <Label htmlFor="register-name">Nome Completo</Label>
                <Input
                  type="text"
                  id="register-name"
                  name="name"
                  value={registerData.name}
                  onChange={handleRegisterInputChange}
                  placeholder="Seu nome"
                  hasError={!!registerErrors.name}
                />
                {registerErrors.name && (
                  <ErrorMessage>{registerErrors.name}</ErrorMessage>
                )}
              </FormGroup>

              <FormGroup>
                <Label htmlFor="register-email">Email</Label>
                <Input
                  type="email"
                  id="register-email"
                  name="email"
                  value={registerData.email}
                  onChange={handleRegisterInputChange}
                  placeholder="seu@email.com"
                  hasError={!!registerErrors.email}
                />
                {registerErrors.email && (
                  <ErrorMessage>{registerErrors.email}</ErrorMessage>
                )}
              </FormGroup>

              <FormGroup>
                <Label htmlFor="register-password">Senha</Label>
                <Input
                  type="password"
                  id="register-password"
                  name="password"
                  value={registerData.password}
                  onChange={handleRegisterInputChange}
                  placeholder="Crie uma senha"
                  hasError={!!registerErrors.password}
                />
                {registerErrors.password && (
                  <ErrorMessage>{registerErrors.password}</ErrorMessage>
                )}
              </FormGroup>

              <FormGroup>
                <Label htmlFor="register-confirm">Confirmar Senha</Label>
                <Input
                  type="password"
                  id="register-confirm"
                  name="confirmPassword"
                  value={registerData.confirmPassword}
                  onChange={handleRegisterInputChange}
                  placeholder="Confirme sua senha"
                  hasError={!!registerErrors.confirmPassword}
                />
                {registerErrors.confirmPassword && (
                  <ErrorMessage>{registerErrors.confirmPassword}</ErrorMessage>
                )}
              </FormGroup>

              <SubmitBtn
                type="submit"
                disabled={registerLoading}
              >
                {registerLoading ? 'Cadastrando...' : 'Criar Conta'}
              </SubmitBtn>
            </Form>
          </Section>
        </Wrapper>
      </Container>
    </PageWrapper>
  );
}
