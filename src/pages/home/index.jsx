// Importações dos componentes que fazem parte da página
import HeaderComponents from "../../components/header";
import Navigation from "../../components/navigation";
import Banner from "../../components/banner";
import FooterComponents from "../../components/footer";
import Catalogo from "../../components/catalogo";

// Componente da página inicial da loja TechZone
export default function HomePage() {
    return (
        // Container principal com layout flexbox em coluna e altura mínima de 100vh
        // Isso garante que o footer fique no rodapé mesmo com pouco conteúdo
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            {/* Cabeçalho da página com logo e informações da loja */}
            <HeaderComponents />
            
            {/* Navegação secundária com filtros de CEP e menu de categorias */}
            <Navigation />
            
            {/* Conteúdo principal que cresce para preencher espaço disponível */}
            <main style={{ flex: 1 }}>
                {/* Banner de boas-vindas com chamada para ação */}
                <Banner />
                
                {/* Catálogo de produtos organizados por categoria */}
                <Catalogo />
            </main>
            
            {/* Rodapé da página com informações de contato e links */}
            <FooterComponents />
        </div>
    )
}