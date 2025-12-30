// Importações do React Router para gerenciamento de rotas
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importações das páginas do aplicativo
import HomePage from './pages/home';
import SearchPage from './pages/search';
import RegisterPage from './pages/register';

// Importação do contexto para gerenciar estado global de produtos
import { ProductProvider } from './context/productContext';

// Importação do arquivo global de estilos CSS
import './global.css';

// Componente raiz da aplicação
export default function App() {
  return (
    // ProductProvider envolve toda a aplicação para disponibilizar o contexto de produtos
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
        </Routes>
      </Router>
    </ProductProvider>
  )
}
