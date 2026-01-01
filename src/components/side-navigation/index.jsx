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
            <NavLink href="products" onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                // Fecha o dropdown quando outro link é clicado
                setOpenDropdown(null);
            }}>Produtos</NavLink>

            {/* Item de navegação com dropdown de categorias */}
            <NavItem onClick={() => setOpenDropdown(openDropdown === 'categorias' ? null : 'categorias')}>
                <NavLink href="" onClick={(e) => e.preventDefault()}>
                    Categorias
                    {/* Ícone que rotaciona quando o dropdown está aberto/fechado */}
                    <ChevronIcon icon={faChevronDown} $isOpen={openDropdown === 'categorias'} />
                </NavLink>

                {/* Menu dropdown com as categorias disponíveis */}
                <DropdownMenu $isOpen={openDropdown === 'categorias'}>
                    {/* Lista de categorias de produtos */}
                    <DropdownItem href="categorias/smartphones">Smartphones</DropdownItem>
                    <DropdownItem href="categorias/notebooks">Notebooks</DropdownItem>
                    <DropdownItem href="categorias/gamer">Gamer</DropdownItem>
                    <DropdownItem href="categorias/acessorios">Acessórios</DropdownItem>
                    <DropdownItem href="categorias/wearables">Wearables</DropdownItem>
                    <DropdownItem href="categorias/perifericos">Periféricos</DropdownItem>
                </DropdownMenu>
            </NavItem>

            {/* Link para a página de Ofertas/Promoções */}
            <NavLink href="offers" onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                // Fecha o dropdown quando outro link é clicado
                setOpenDropdown(null);
            }}>
                Ofertas
            </NavLink>
        </Nav>
    );
}
