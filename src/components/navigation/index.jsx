import styled from '@emotion/styled';
import { useState, useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons/faChevronDown';
import { keyframes } from '@emotion/react';

const slideDown = keyframes`
    from {
        opacity: 0;
        transform: translateY(-15px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`;

const Nav = styled.nav`
        background-color: #2c5aa0;
        padding: 0 230px;
        display: flex;
        align-items: center;
        gap: 30px;

        @media (max-width: 1024px) {
            padding: 0 80px;
            gap: 20px;
        }

        @media (max-width: 768px) {
            padding: 0 20px;
            flex-wrap: wrap;
            position: relative;
        }
    `;

const NavLink = styled.a`
        color: #fff;
        text-decoration: none;
        font-size: 15px;
        font-weight: 500;
        padding: 15px 0;
        transition: color 0.3s;
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 5px;

        &:hover {
            color: #ffc107;
            border-bottom: 3px solid #ffc107;
            padding-bottom: 12px;
        }
    `;

const NavItem = styled.div`
        position: relative;

        @media (max-width: 768px) {
            display: none;
        }
    `;

const DropdownMenu = styled.div`
        position: absolute;
        top: 100%;
        left: -50%;
        background-color: #1e4073;
        border-radius: 4px;
        min-width: 200px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
        z-index: 1000;
        display: ${props => props.isOpen ? 'block' : 'none'};
        animation: ${props => props.isOpen ? slideDown : 'none'} 0.3s ease-in-out forwards;
    `;

const DropdownItem = styled.a`
        display: block;
        color: #fff;
        text-decoration: none;
        padding: 12px 20px;
        font-size: 14px;
        transition: background-color 0.3s;
        cursor: pointer;

        &:first-of-type {
            border-radius: 4px 4px 0 0;
        }

        &:last-of-type {
            border-radius: 0 0 4px 4px;
        }

        &:hover {
            background-color: #378dc9;
            color: #ffc107;
        }
    `;

const ChevronIcon = styled(FontAwesomeIcon)`
        font-size: 12px;
        transform: ${props => props.isOpen ? 'rotate(180deg)' : 'rotate(0deg)'};
        transition: transform 0.3s ease-in-out;
        color: ${props => props.isOpen ? '#ffc107' : '#fff'};
    `;

const CepInput = styled.input`
        padding: 8px 12px;
        border: none;
        border-radius: 4px;
        font-size: 14px;
        width: 140px;

        &:focus {
            outline: 2px solid #ffc107;
        }
    `;

const CepContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    margin-right: 340px;
    margin-left: 133px;

    @media (max-width: 768px) {
        display: none;
    }
`;

export default function Navigation() {
    const [cep, setCep] = useState('');
    const [openDropdown, setOpenDropdown] = useState(null);
    const [address, setAddress] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleCepChange = useCallback((e) => {
        let value = e.target.value.replace(/\D/g, '');

        if (value.length > 5) {
            value = value.slice(0, 5) + '-' + value.slice(5, 8);
        }

        setCep(value);

        // Busca endereço quando CEP tem 8 dígitos
        if (value.replace('-', '').length === 8) {
            fetchAddress(value.replace('-', ''));
        }
    }, []);

    const fetchAddress = useCallback(async (cepValue) => {
        setLoading(true);
        try {
            const response = await fetch(`https://viacep.com.br/ws/${cepValue}/json/`);
            const data = await response.json();

            if (data.erro) {
                setAddress(null);
                alert('CEP não encontrado');
            } else {
                setAddress(data);
            }
        } catch (error) {
            console.error('Erro ao buscar CEP:', error);
            setAddress(null);
        } finally {
            setLoading(false);
        }
    }, []);

    return (
        <Nav>
            <CepContainer>
                <CepInput value={cep} onChange={handleCepChange} maxLength={9} type="text" placeholder="Digite seu CEP" />
                {loading && <span style={{ color: '#fff', fontSize: '12px' }}>Buscando...</span>}
                {address && (
                    <div style={{ color: '#fff', fontSize: '14px' }}>
                        - {address.localidade}, {address.uf}
                    </div>
                )}
            </CepContainer>

            <NavLink href="" onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setOpenDropdown(null);
            }}>Produtos</NavLink>

            <NavItem onClick={() => setOpenDropdown(openDropdown === 'categorias' ? null : 'categorias')}>
                <NavLink href="" onClick={(e) => e.preventDefault()}>
                    Categorias
                    <ChevronIcon icon={faChevronDown} isOpen={openDropdown === 'categorias'} />
                </NavLink>
                <DropdownMenu isOpen={openDropdown === 'categorias'}>
                    <DropdownItem href="">Smartphones</DropdownItem>
                    <DropdownItem href="">Notebooks</DropdownItem>
                    <DropdownItem href="">Gamer</DropdownItem>
                    <DropdownItem href="">Acessórios</DropdownItem>
                    <DropdownItem href="">Wearables</DropdownItem>
                </DropdownMenu>
            </NavItem>

            <NavLink href="" onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setOpenDropdown(null);
            }}>
                Ofertas
            </NavLink>
        </Nav>
    );
}
