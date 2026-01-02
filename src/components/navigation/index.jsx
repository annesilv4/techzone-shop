// Importações de hooks do React para gerenciar estado e callbacks otimizados
import { useState, useCallback } from 'react';

// Importação do ícone de seta para indicar dropdowns
import { faChevronDown } from '@fortawesome/free-solid-svg-icons/faChevronDown';

// Importação dos componentes styled do arquivo de estilos
import { Nav, CepContainer, CepInput, ChevronIcon, NavLink, NavItem, DropdownMenu, DropdownItem } from './styles';

// Componente de navegação secundária com busca de CEP e filtro de categorias
export default function Navigation() {
    // Estado para armazenar o CEP digitado pelo usuário
    const [cep, setCep] = useState('');

    // Estado para controlar qual dropdown está aberto (null = nenhum aberto)
    const [openDropdown, setOpenDropdown] = useState(null);

    // Estado para armazenar os dados de endereço buscados via API
    const [address, setAddress] = useState(null);

    // Estado para controlar o loading da busca de CEP
    const [loading, setLoading] = useState(false);

    // Função para tratar a mudança no input de CEP com formatação automática
    const handleCepChange = useCallback((e) => {
        // Remove todos os caracteres que não são números
        let value = e.target.value.replace(/\D/g, '');

        // Formata o CEP com hífen: XXXXX-XXX
        if (value.length > 5) {
            value = value.slice(0, 5) + '-' + value.slice(5, 8);
        }

        // Atualiza o estado com o novo valor
        setCep(value);

        // Busca o endereço na API ViaCEP quando o CEP está completo (8 dígitos)
        if (value.replace('-', '').length === 8) {
            fetchAddress(value.replace('-', ''));
        }
    }, []);

    // Função assíncrona para buscar endereço na API ViaCEP usando o CEP
    const fetchAddress = useCallback(async (cepValue) => {
        setLoading(true);
        try {
            // Faz a requisição à API pública ViaCEP
            const response = await fetch(`https://viacep.com.br/ws/${cepValue}/json/`);
            const data = await response.json();

            // Verifica se a API retornou erro (CEP inválido)
            if (data.erro) {
                setAddress(null);
                alert('CEP não encontrado');
            } else {
                // Armazena os dados do endereço encontrado
                setAddress(data);
            }
        } catch (error) {
            // Trata erros de conexão ou parsing
            console.error('Erro ao buscar CEP:', error);
            setAddress(null);
        } finally {
            // Para o indicador de loading
            setLoading(false);
        }
    }, []);

    return (
        <Nav>
            {/* Seção de busca de CEP */}
            <CepContainer>
                {/* Input para o usuário digitar o CEP com limite de 9 caracteres (XXXXX-XXX) */}
                <CepInput
                    value={cep}
                    onChange={handleCepChange}
                    maxLength={9}
                    type="text"
                    placeholder="Digite seu CEP"
                />

                {/* Indicador de loading enquanto busca o endereço */}
                {loading && <span style={{ color: '#fff', fontSize: '12px' }}>Buscando...</span>}

                {/* Exibe o endereço encontrado quando a busca retorna resultado */}
                {address && (
                    <div
                        style={{ color: '#fff', fontSize: '14px' }}
                        title={`Enviar para ${address.localidade}, ${address.uf}`}
                    >
                        - Enviar para {address.localidade}, {address.uf}
                    </div>
                )}
            </CepContainer>

            {/* Link para navegação de Produtos */}
            <NavLink to="/products" onClick={(e) => {
                e.stopPropagation();
                // Fecha qualquer dropdown aberto ao clicar em outro link
                setOpenDropdown(null);
            }}>Produtos</NavLink>

            {/* Item de navegação com dropdown de categorias */}
            <NavItem onClick={() => setOpenDropdown(openDropdown === 'categorias' ? null : 'categorias')}>
                <NavLink to="/categorias" onClick={(e) => e.preventDefault()}>
                    Categorias
                    {/* Ícone que rotaciona quando o dropdown está aberto/fechado */}
                    <ChevronIcon icon={faChevronDown} $isOpen={openDropdown === 'categorias'} />
                </NavLink>

                {/* Menu dropdown com as categorias de produtos disponíveis */}
                <DropdownMenu $isOpen={openDropdown === 'categorias'}>
                    <DropdownItem to="/categorias/smartphones">Smartphones</DropdownItem>
                    <DropdownItem to="/categorias/notebooks">Notebooks</DropdownItem>
                    <DropdownItem to="/categorias/gamer">Gamer</DropdownItem>
                    <DropdownItem to="/categorias/acessorios">Acessórios</DropdownItem>
                    <DropdownItem to="/categorias/wearables">Wearables</DropdownItem>
                    <DropdownItem to="/categorias/perifericos">Periféricos</DropdownItem>
                </DropdownMenu>
            </NavItem>

            {/* Link para navegação de Ofertas */}
            <NavLink to="/offers" onClick={(e) => {
                e.stopPropagation();
                // Fecha qualquer dropdown aberto ao clicar em outro link
                setOpenDropdown(null);
            }}>
                Ofertas
            </NavLink>
        </Nav>
    );
}
