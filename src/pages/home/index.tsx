import Header from "../../components/header";
import Navigation from "../../components/navigation";
import Footer from "../../components/footer";

export default function HomePage() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Header />
            <Navigation />
            <main style={{ flex: 1 }}></main>
            <Footer />
        </div>
    )
}