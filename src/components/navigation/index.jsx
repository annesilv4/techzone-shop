import { useState, useCallback } from 'react';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons/faChevronDown';
import { Nav, CepContainer, CepInput, ChevronIcon, NavLink, NavItem, DropdownMenu, DropdownItem } from './styles';

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
