// Importações de estilos e componentes
import Style from './header.module.css';
import logo from '../../assets/techzone-logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons/faSearch';
import { faUser } from '@fortawesome/free-solid-svg-icons/faUser';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons/faShoppingCart';
import { faHistory } from '@fortawesome/free-solid-svg-icons/faHistory';
// Importações dos componentes estilizados
import { Header, Logo, Search, SearchIcon, User, Cart, CartBadge } from './styles';
// Importações do React Router
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
// Importações de hooks do React
import { useState, useEffect, useContext } from 'react';
// Importação do hook customizado para histórico de buscas
import { useSearchHistory } from '../../hooks/useSearchHistory';
// Importação do contexto do carrinho
import { CartContext } from '../../context/cartContext';

// Componente de cabeçalho com logo, busca, usuário e carrinho
export default function HeaderComponents() {
    // Estado do valor de busca digitado pelo usuário
    const [searchValue, setSearchValue] = useState('');
    // Hook para navegação entre páginas
    const navigate = useNavigate();
    // Hook para obter parâmetros de URL
    const [searchParams] = useSearchParams();
    // Hook customizado para gerenciar histórico de buscas
    const { history, addSearch } = useSearchHistory();
    // Estado para controlar visibilidade do histórico de buscas
    const [showHistory, setShowHistory] = useState(false);
    // Contexto do carrinho para acessar quantidade de produtos
    const cartContext = useContext(CartContext);
    // Quantidade de itens no carrinho (número de produtos, não o total)
    const cartCount = cartContext?.cart?.length || 0;

    // Hook que sincroniza o valor de busca com os parâmetros da URL
    // Quando a URL muda, atualiza o campo de busca
    useEffect(() => {
        // Obtém o parâmetro 'q' da URL (termo de busca)
        const query = searchParams.get('q');
        // Se houver termo de busca na URL, atualiza o estado
        if (query) {
            setSearchValue(query);
        }
    }, [searchParams]);

    // Função chamada quando o usuário pressiona Enter no campo de busca
    const handleSearch = (e) => {
        // Verifica se a tecla pressionada é Enter e se há texto
        if (e.key === 'Enter' && searchValue.trim()) {
            // Adiciona o termo ao histórico de buscas
            addSearch(searchValue);
            // Navega para a página de busca com o termo como parâmetro
            navigate(`/search?q=${encodeURIComponent(searchValue)}`);
            // Fecha o histórico de buscas
            setShowHistory(false);
        }
    };

    // Função chamada quando o usuário clica no ícone de busca
    const handleSearchIcon = () => {
        // Verifica se há texto no campo de busca
        if (searchValue.trim()) {
            // Adiciona o termo ao histórico de buscas
            addSearch(searchValue);
            // Navega para a página de busca com o termo como parâmetro
            navigate(`/search?q=${encodeURIComponent(searchValue)}`);
            // Fecha o histórico de buscas
            setShowHistory(false);
        }
    };

    // Função chamada quando o usuário clica em um termo do histórico de buscas
    const handleHistoryClick = (term) => {
        // Atualiza o campo de busca com o termo clicado
        setSearchValue(term);
        // Navega para a página de busca com o termo como parâmetro
        navigate(`/search?q=${encodeURIComponent(term)}`);
        // Fecha o histórico de buscas
        setShowHistory(false);
    };

    // Renderiza o cabeçalho da aplicação
    return (
        <Header>
            {/* Logo clicável que navega para a página inicial */}
            <Link to='/' className='header__logo'>
                <Logo src={logo} alt="TechZone" />
            </Link>

            {/* Seção de busca com input e histórico */}
            <div className={Style.header__search} style={{ position: 'relative' }}>
                {/* Campo de entrada para busca */}
                <Search
                    type="text"
                    placeholder='Buscar na TechZone'
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    onKeyDown={handleSearch}
                    onFocus={() => setShowHistory(true)}
                    onBlur={() => setTimeout(() => setShowHistory(false), 200)}
                />
                {/* Ícone de busca clicável */}
                <SearchIcon onClick={handleSearchIcon} style={{ cursor: 'pointer' }}>
                    <FontAwesomeIcon icon={faSearch} />
                </SearchIcon>

                {/* Dropdown com histórico de buscas */}
                {showHistory && (
                    <div className={Style.searchHistory}>
                        {/* Se há histórico, exibe os termos anteriores */}
                        {history.length > 0 ? (
                            <>
                                <div className={Style.historyTitle}>
                                    <FontAwesomeIcon icon={faHistory} /> Últimas buscas
                                </div>
                                {/* Lista dos termos de busca anterior */}
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
                            /* Mensagem quando não há histórico */
                            <div className={Style.emptyHistory}>
                                <FontAwesomeIcon icon={faHistory} /> Seu histórico de buscas aparecerá aqui
                            </div>
                        )}
                    </div>
                )}
            </div>

            {/* Seção de usuário com login e cadastro */}
            <User className='header__user'>
                <FontAwesomeIcon icon={faUser} />
                <p><a href="register">Entre</a> ou <a href="register">Se cadastre</a></p>
            </User>

            {/* Ícone do carrinho com badge mostrando quantidade de produtos */}
            <Cart as={Link} className='header__cart' to='/cart'>
                <FontAwesomeIcon icon={faShoppingCart} />
                {/* Badge com número de itens no carrinho */}
                <CartBadge>{cartCount}</CartBadge>
            </Cart>
        </Header>
    )
}