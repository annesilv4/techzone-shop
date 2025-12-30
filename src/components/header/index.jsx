import Style from './header.module.css';
import logo from '../../assets/techzone-logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons/faSearch';
import { faUser } from '@fortawesome/free-solid-svg-icons/faUser';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons/faShoppingCart';
import { faHistory } from '@fortawesome/free-solid-svg-icons/faHistory';
import { Header, Logo, Search, SearchIcon, User, Cart, CartBadge } from './styles';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useSearchHistory } from '../../hooks/useSearchHistory';

export default function HeaderComponents() {
    const [searchValue, setSearchValue] = useState('');
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const { history, addSearch } = useSearchHistory();
    const [showHistory, setShowHistory] = useState(false);

    useEffect(() => {
        const query = searchParams.get('q');
        if (query) {
            setSearchValue(query);
        }
    }, [searchParams]);

    const handleSearch = (e) => {
        if (e.key === 'Enter' && searchValue.trim()) {
            addSearch(searchValue);
            navigate(`/search?q=${encodeURIComponent(searchValue)}`);
            setShowHistory(false);
        }
    };

    const handleSearchIcon = () => {
        if (searchValue.trim()) {
            addSearch(searchValue);
            navigate(`/search?q=${encodeURIComponent(searchValue)}`);
            setShowHistory(false);
        }
    };

    const handleHistoryClick = (term) => {
        setSearchValue(term);
        navigate(`/search?q=${encodeURIComponent(term)}`);
        setShowHistory(false);
    };

    return (
        <Header>
            <div className='header__logo'>
                <Logo src={logo} alt="TechZone" />
            </div>

            <div className={Style.header__search} style={{ position: 'relative' }}>
                <Search 
                    type="text" 
                    placeholder='Buscar na TechZone'
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    onKeyDown={handleSearch}
                    onFocus={() => setShowHistory(true)}
                    onBlur={() => setTimeout(() => setShowHistory(false), 200)}
                />
                <SearchIcon onClick={handleSearchIcon} style={{ cursor: 'pointer' }}>
                    <FontAwesomeIcon icon={faSearch} />
                </SearchIcon>

                {showHistory && (
                    <div className={Style.searchHistory}>
                        {history.length > 0 ? (
                            <>
                                <div className={Style.historyTitle}>
                                    <FontAwesomeIcon icon={faHistory} /> Últimas buscas
                                </div>
                                {history.map((term, index) => (
                                    <div 
                                        key={index}
                                        className={Style.historyItem}
                                        onMouseDown={() => handleHistoryClick(term)}
                                    >
                                        <FontAwesomeIcon icon={faHistory} /> {term}
                                    </div>
                                ))}
                            </>
                        ) : (
                            <div className={Style.emptyHistory}>
                                <FontAwesomeIcon icon={faHistory} /> Seu histórico de buscas aparecerá aqui
                            </div>
                        )}
                    </div>
                )}
            </div>

            <User className='header__user'>
                <FontAwesomeIcon icon={faUser} />
                <p><a href="register">Entre</a> ou <a href="register">Se cadastre</a></p>
            </User>

            <Cart as={Link} className='header__cart' to='/cart'>
                <FontAwesomeIcon icon={faShoppingCart} />
                <CartBadge>0</CartBadge>
            </Cart>
        </Header>
    )
}