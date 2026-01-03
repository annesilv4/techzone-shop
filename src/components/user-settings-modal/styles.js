import styled from '@emotion/styled';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;

  @media (max-width: 768px) {
    background-color: rgba(0, 0, 0, 0.3);
  }
`;

export const ModalContainer = styled.div`
  position: absolute;
  top: calc(100% + 10px);
  left: -93px;
  right: 0;
  background: white;
  border-radius: 8px;
  width: 350px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  animation: slideDown 0.3s ease-out;
  z-index: 1000;
  max-height: 70vh;
  overflow-y: auto;

  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 768px) {
    position: fixed;
    top: 50%;
    right: 50%;
    left: auto;
    width: 90%;
    max-width: 100%;
    transform: translate(50%, -50%);
  }
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid #e0e0e0;

  h2 {
    margin: 0;
    font-size: 20px;
    color: #333;
  }
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #666;
  transition: color 0.2s;

  &:hover {
    color: #333;
  }
`;

export const ModalContent = styled.div`
  padding: 30px 20px;
`;

export const FormGroup = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  font-size: 14px;
  font-weight: 600;
  color: #333;
  margin-bottom: 8px;
`;

export const Input = styled.input`
  padding: 12px;
  border: 1px solid ${props => props.hasError ? '#e74c3c' : '#ddd'};
  border-radius: 4px;
  font-size: 14px;
  transition: border-color 0.2s;

  &:focus {
    outline: none;
    border-color: ${props => props.hasError ? '#e74c3c' : '#4CAF50'};
    box-shadow: 0 0 0 3px ${props => props.hasError ? 'rgba(231, 76, 60, 0.1)' : 'rgba(76, 175, 80, 0.1)'};
  }
`;

export const FormButtons = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;

export const SaveButton = styled.button`
  flex: 1;
  padding: 12px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover:not(:disabled) {
    background-color: #45a049;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export const CancelButton = styled.button`
  flex: 1;
  padding: 12px;
  background-color: #f0f0f0;
  color: #333;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #e0e0e0;
  }
`;

export const LogoutButton = styled.button`
  width: 100%;
  padding: 12px;
  background-color: #e74c3c;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #c0392b;
  }
`;

export const ErrorMessage = styled.span`
  color: #e74c3c;
  font-size: 12px;
  margin-top: 4px;
`;

export const SuccessMessage = styled.div`
  background-color: #d4edda;
  color: #155724;
  border: 1px solid #c3e6cb;
  padding: 12px;
  border-radius: 4px;
  margin-bottom: 15px;
  font-size: 14px;
`;
