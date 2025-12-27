import Style from './header.module.css';
import logo from '../../assets/techzone-logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons/faSearch';
import { faUser } from '@fortawesome/free-solid-svg-icons/faUser';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons/faShoppingCart';
import { Header, Logo, Search, SearchIcon, User, Cart, CartBadge } from './styles';

export default function HeaderComponents() {

    return (
        <Header>
            <div className='header__logo'>
                <Logo src={logo} alt="TechZone" />
            </div>

            <div className={Style.header__search}>
                <Search type="text" placeholder='Buscar na TechZone' />
                <SearchIcon><FontAwesomeIcon icon={faSearch} /></SearchIcon>
            </div>

            <User className='header__user'>
                <FontAwesomeIcon icon={faUser} />
                <p><a href="">Entre</a> ou <a href="">Se cadastre</a></p>
            </User>

            <Cart className='header__cart'>
                <FontAwesomeIcon icon={faShoppingCart} />
                <CartBadge>0</CartBadge>
            </Cart>
        </Header>
    )
}