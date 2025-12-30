import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebook } from '@fortawesome/free-brands-svg-icons';
import styles from './styles.module.css';

export default function LoginPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email é obrigatório';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email inválido';
    }
    
    if (!formData.password) {
      newErrors.password = 'Senha é obrigatória';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleRememberMeChange = (e) => {
    setRememberMe(e.target.checked);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setLoading(true);
    
    try {
      // Simular chamada à API
      // Em produção, você enviaria para seu backend
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
          rememberMe: rememberMe
        })
      });

      if (response.ok) {
        // Simular sucesso
        alert('Login realizado com sucesso!');
        navigate('/');
      } else {
        setErrors({ submit: 'Email ou senha inválidos' });
      }
    } catch (error) {
      console.error('Erro:', error);
      setErrors({ submit: 'Erro ao conectar ao servidor' });
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = () => {
    // Implementar login com Google
    console.log('Login com Google');
    // Em produção, você usaria a biblioteca @react-oauth/google
  };

  const handleFacebookLogin = () => {
    // Implementar login com Facebook
    console.log('Login com Facebook');
    // Em produção, você usaria a biblioteca react-facebook-login
  };

  return (
    <div className={styles.container}>
      <div className={styles.formWrapper}>
        <h1 className={styles.title}>Bem-vindo de Volta</h1>
        <p className={styles.subtitle}>Faça login na sua conta TechZone</p>

        {errors.submit && (
          <div className={styles.errorAlert}>
            {errors.submit}
          </div>
        )}

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="seu@email.com"
              className={errors.email ? styles.inputError : ''}
            />
            {errors.email && (
              <span className={styles.errorMessage}>{errors.email}</span>
            )}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="password">Senha</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Sua senha"
              className={errors.password ? styles.inputError : ''}
            />
            {errors.password && (
              <span className={styles.errorMessage}>{errors.password}</span>
            )}
          </div>

          <div className={styles.formOptions}>
            <label className={styles.rememberMe}>
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={handleRememberMeChange}
              />
              <span>Lembrar-me</span>
            </label>
            <Link to="/forgot-password" className={styles.forgotPassword}>
              Esqueci minha senha
            </Link>
          </div>

          <button 
            type="submit" 
            className={styles.submitBtn}
            disabled={loading}
          >
            {loading ? 'Entrando...' : 'Fazer Login'}
          </button>
        </form>

        <div className={styles.divider}>
          <span>Ou faça login com</span>
        </div>

        <div className={styles.socialButtons}>
          <button 
            type="button" 
            className={styles.googleBtn}
            onClick={handleGoogleLogin}
          >
            <FontAwesomeIcon icon={faGoogle} />
            <span>Google</span>
          </button>

          <button 
            type="button" 
            className={styles.facebookBtn}
            onClick={handleFacebookLogin}
          >
            <FontAwesomeIcon icon={faFacebook} />
            <span>Facebook</span>
          </button>
        </div>

        <p className={styles.registerLink}>
          Não tem conta? <Link to="/register">Cadastre-se aqui</Link>
        </p>
      </div>
    </div>
  );
}
