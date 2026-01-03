// Importações de hooks do React para gerenciar estado
import { useState } from 'react';

// Importações de ícones do FontAwesome
import { faChevronDown } from '@fortawesome/free-solid-svg-icons/faChevronDown';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons/faShoppingCart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Importação dos componentes estilizados
import { Nav, ChevronIcon, NavLink, NavItem, DropdownMenu, DropdownItem } from './styles';

// Componente de navegação lateral com menu de produtos e categorias
export default function SideNavigation() {

    // Estado para rastrear qual dropdown está aberto ('categorias' ou null)
    const [openDropdown, setOpenDropdown] = useState(null);

    return (
        <Nav>
            {/* Link para a página de Produtos */}
            <NavLink to="/products" onClick={() => {
                // Fecha o dropdown quando outro link é clicado
                setOpenDropdown(null);
            }}>Produtos</NavLink>

            {/* Item de navegação com dropdown de categorias */}
            <NavItem onClick={() => setOpenDropdown(openDropdown === 'categorias' ? null : 'categorias')}>
                <NavLink to="" onClick={(e) => e.preventDefault()}>
                    Categorias
                    {/* Ícone que rotaciona quando o dropdown está aberto/fechado */}
                    <ChevronIcon icon={faChevronDown} $isOpen={openDropdown === 'categorias'} />
                </NavLink>

                {/* Menu dropdown com as categorias disponíveis */}
                <DropdownMenu $isOpen={openDropdown === 'categorias'}>
                    {/* Lista de categorias de produtos */}
                    <DropdownItem to="/categorias/smartphones">Smartphones</DropdownItem>
                    <DropdownItem to="/categorias/notebooks">Notebooks</DropdownItem>
                    <DropdownItem to="/categorias/gamer">Gamer</DropdownItem>
                    <DropdownItem to="/categorias/acessorios">Acessórios</DropdownItem>
                    <DropdownItem to="/categorias/wearables">Wearables</DropdownItem>
                    <DropdownItem to="/categorias/perifericos">Periféricos</DropdownItem>
                </DropdownMenu>
            </NavItem>

            {/* Link para a página de Ofertas/Promoções */}
            <NavLink to="/offers" onClick={() => {
                // Fecha o dropdown quando outro link é clicado
                setOpenDropdown(null);
            }}>
                Ofertas
            </NavLink>
        </Nav>
    );
}
