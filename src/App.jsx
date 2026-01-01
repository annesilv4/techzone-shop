// Importações do React Router para gerenciamento de rotas
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importações das páginas do aplicativo
import HomePage from './pages/home';
import SearchPage from './pages/search';
import RegisterPage from './pages/register';
import CartPage from './pages/cart';

// Importação do contexto para gerenciar estado global de produtos
import { ProductProvider } from './context/productContext';

// Importação do contexto para gerenciar estado global do carrinho
import { CartProvider } from './context/cartContext';

// Importação do arquivo global de estilos CSS
import './global.css';

// Componente raiz da aplicação
export default function App() {
  return (
    <CartProvider>
      <ProductProvider>
        {/* Router configura o sistema de roteamento da aplicação */}
        <Router>
          {/* Routes define as rotas disponíveis */}
          <Routes>
            {/* Rota para a página inicial - caminho raiz '/' */}
            <Route path='/' element={<HomePage />} />

            {/* Rota para a página de busca */}
            <Route path='/search' element={<SearchPage />} />

            {/* Rota para o usuário criar conta na mesma página */}
            <Route path='/register' element={<RegisterPage />} />

            {/* Rota para o carrinho de compras */}
            <Route path='/cart' element={<CartPage />} />
          </Routes>
        </Router>
      </ProductProvider>
    </CartProvider>
  )
}
