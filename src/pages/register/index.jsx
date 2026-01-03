import { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebook } from '@fortawesome/free-brands-svg-icons';
import HeaderComponents from '../../components/header';
import FooterComponents from '../../components/footer';
import { createUser, loginUser } from '../../api/users/apiUsers';
import { UserContext } from '../../context/userContext';
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

// MODIFICADO: Página de autenticação que integra login e registro
// Agora usa o UserContext para fazer login/registro
export default function AuthPage() {
  const navigate = useNavigate();
  // MODIFICADO: Acessa o contexto do usuário para chamar login após cadastro
  const userContext = useContext(UserContext);

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

  // MODIFICADO: Função para fazer login
  // Agora usa a API de usuários e o contexto para persistir dados
  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    if (!validateLogin()) {
      return;
    }

    setLoginLoading(true);

    try {
      // Chama a função loginUser da API que busca o usuário no banco de dados
      const user = await loginUser(loginData.email, loginData.password);

      if (user) {
        // MODIFICADO: Usa o método login do contexto para salvar dados do usuário
        // Isto vai disparar o evento 'userUpdated' e sincronizar carrinho/histórico
        userContext.login(user);
        alert('Login realizado com sucesso!');
        navigate('/');
      } else {
        setLoginErrors({ submit: 'Email ou senha inválidos' });
      }
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      setLoginErrors({ submit: 'Erro ao conectar ao servidor' });
    } finally {
      setLoginLoading(false);
    }
  };

  // MODIFICADO: Função para fazer registro de novo usuário
  // Cria o usuário na API e faz login automaticamente
  const handleRegisterSubmit = async (e) => {
    e.preventDefault();

    if (!validateRegister()) {
      return;
    }

    setRegisterLoading(true);

    try {
      // MODIFICADO: Chama a função createUser da API para criar novo usuário
      // A API retorna os dados do usuário criado, incluindo o _id
      const newUser = await createUser({
        name: registerData.name,
        email: registerData.email,
        password: registerData.password
      });

      // MODIFICADO: Usa o método login do contexto para fazer login automático
      // Isto salva o usuário no localStorage e dispara evento de sincronização
      userContext.login(newUser);
      alert('Cadastro realizado com sucesso!');
      navigate('/');
    } catch (error) {
      console.error('Erro ao cadastrar:', error);
      setRegisterErrors({ submit: 'Erro ao cadastrar. Email já existe?' });
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
