import HeaderComponents from "../../components/header";
import Navigation from "../../components/navigation";
import FooterComponents from "../../components/footer";

export default function HomePage() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <HeaderComponents />
            <Navigation />
            <main style={{ flex: 1 }}></main>
            <FooterComponents />
        </div>
    )
}