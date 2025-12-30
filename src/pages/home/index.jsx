import HeaderComponents from "../../components/header";
import Navigation from "../../components/navigation";
import Banner from "../../components/banner";
import FooterComponents from "../../components/footer";
import Catalogo from "../../components/catalogo";

export default function HomePage() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <HeaderComponents />
            <Navigation />
            <main style={{ flex: 1 }}>
                <Banner />
                <Catalogo />
            </main>
            <FooterComponents />
        </div>
    )
}