// Importações dos componentes necessários para a página do carrinho
import HeaderComponents from "../../components/header";
import SideNavigation from "../../components/side-navigation";
import CartContent from "../../components/cart-content";

// Componente da página do carrinho de compras
export default function CartPage() {
    return (
        // Container principal com altura total da viewport (100vh) e flexbox vertical
        <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
            {/* Cabeçalho da aplicação */}
            <HeaderComponents />
            {/* Container principal com navegação lateral e conteúdo do carrinho */}
            <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
                {/* Navegação lateral (sidebar) */}
                <SideNavigation />
                {/* Área principal com conteúdo do carrinho */}
                <main style={{ flex: 1, overflow: 'auto' }}>
                    {/* Componente que exibe os itens do carrinho e resumo do pedido */}
                    <CartContent />
                </main>
            </div>
        </div>
    )
}