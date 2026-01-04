// Importações dos componentes necessários para a página do carrinho
import HeaderComponents from "../../components/header";
import Navigation from "../../components/navigation";
import SideNavigation from "../../components/side-navigation";
import CartContent from "../../components/cart-content";
import { useState, useEffect } from "react";

// Componente da página do carrinho de compras
export default function CartPage() {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);

    // Hook para detectar mudanças no tamanho da tela
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 767);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        // Container principal com altura total da viewport (100vh) e flexbox vertical
        <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
            {/* Cabeçalho da aplicação */}
            <HeaderComponents />
            
            {/* Navegação principal (visível em mobile) */}
            {isMobile && <Navigation />}
            
            {/* Container principal com navegação lateral e conteúdo do carrinho */}
            <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
                {/* Navegação lateral (sidebar) - oculta em mobile */}
                {!isMobile && <SideNavigation />}
                
                {/* Área principal com conteúdo do carrinho */}
                <main style={{ flex: 1, overflow: 'auto' }}>
                    {/* Componente que exibe os itens do carrinho e resumo do pedido */}
                    <CartContent />
                </main>
            </div>
        </div>
    )
}