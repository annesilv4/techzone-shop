import { useState, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons/faTimes';
import { UserContext } from '../../context/userContext';
import { updateUser } from '../../api/users/apiUsers';
import {
  Overlay,
  ModalContainer,
  ModalHeader,
  CloseButton,
  ModalContent,
  FormGroup,
  Label,
  Input,
  FormButtons,
  SaveButton,
  CancelButton,
  LogoutButton,
  ErrorMessage,
  SuccessMessage
} from './styles';

export default function UserSettingsModal({ isOpen, onClose }) {
  const userContext = useContext(UserContext);
  const [formData, setFormData] = useState({
    name: userContext?.user?.name || '',
    email: userContext?.user?.email || ''
  });
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState({ type: '', text: '' });
  const [loading, setLoading] = useState(false);

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

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Nome é obrigatório';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email é obrigatório';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email inválido';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSave = async (e) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setLoading(true);
    setMessage({ type: '', text: '' });

    try {
      const updatedUser = await updateUser(userContext.user._id, {
        name: formData.name,
        email: formData.email,
        password: userContext.user.password
      });

      userContext.login(updatedUser);
      setMessage({ type: 'success', text: 'Perfil atualizado com sucesso!' });
      
      setTimeout(() => {
        onClose();
      }, 1500);
    } catch (error) {
      console.error('Erro ao atualizar perfil:', error);
      setMessage({ type: 'error', text: 'Erro ao atualizar perfil' });
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    if (confirm('Tem certeza que deseja sair?')) {
      userContext.logout();
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <>
      <Overlay onClick={onClose} />
      <ModalContainer>
        <ModalHeader>
          <h2>Configurações da Conta</h2>
          <CloseButton onClick={onClose}>
            <FontAwesomeIcon icon={faTimes} />
          </CloseButton>
        </ModalHeader>

        <ModalContent>
          <form onSubmit={handleSave}>
            <FormGroup>
              <Label htmlFor="name">Nome Completo</Label>
              <Input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                hasError={!!errors.name}
              />
              {errors.name && <ErrorMessage>{errors.name}</ErrorMessage>}
            </FormGroup>

            <FormGroup>
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                hasError={!!errors.email}
              />
              {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
            </FormGroup>

            {message.text && (
              message.type === 'success' ? (
                <SuccessMessage>{message.text}</SuccessMessage>
              ) : (
                <ErrorMessage>{message.text}</ErrorMessage>
              )
            )}

            <FormButtons>
              <SaveButton type="submit" disabled={loading}>
                {loading ? 'Salvando...' : 'Salvar Alterações'}
              </SaveButton>
              <CancelButton type="button" onClick={onClose}>
                Cancelar
              </CancelButton>
            </FormButtons>
          </form>

          <LogoutButton onClick={handleLogout}>
            Sair da Conta
          </LogoutButton>
        </ModalContent>
      </ModalContainer>
    </>
  );
}
