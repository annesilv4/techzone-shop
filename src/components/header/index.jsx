import Style from './header.module.css';
import logo from '../../assets/techzone-logo.png';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons/faSearch';
import { faUser } from '@fortawesome/free-solid-svg-icons/faUser';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons/faShoppingCart';

export default function Header() {

    const Header = styled.header`
        padding: 0 300px;
        background-color: #378dc9eb;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 20px;
    `

    const Logo = styled.img`
        width: 280px;
        height: 180px;
    `;

    const Search = styled.input`
        width: 500px;
        height: 47px;
        font-size: 16px;
        padding-left: 15px;
        border: none;
        outline: none;
    `;

    const SearchIcon = styled.button`
        height: 48px;
        width: 50px;
        cursor: pointer;
        border: none;
        background-color: #fff;

        svg {
            transition: font-size 0.3s;
        }

        &:hover svg {
            font-size: 20px;
        }
    `;

    const User = styled.div`
        display: flex;
        align-items: center;
        gap: 10px;

        svg {
            font-size: 30px;
            color: #fff;
        }

        p {
            margin: 0;
            color: #fff;
            font-size: 14px;
            font-weight: 500;
        }

        a {
            color: #fff;
            text-decoration: none;
            font-weight: 600;
            transition: opacity 0.3s;

            &:hover {
                opacity: 0.8;
                text-decoration: underline;
            }
        }
    `;

    const Cart = styled.div`
        display: flex;
        align-items: center;
        gap: 5px;
        cursor: pointer;
        position: relative;

        svg {
            font-size: 28px;
            color: #fff;
            transition: transform 0.3s;
        }

        &:hover svg {
            transform: scale(1.1);
        }
    `;

    const CartBadge = styled.span`
        position: absolute;
        top: -8px;
        right: -8px;
        background-color: #378dc9eb;
        color: #fff;
        border-radius: 50%;
        width: 24px;
        height: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 12px;
        font-weight: bold;
    `;

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