import styles from './style.module.css';

export default function Banner() {
    // Função que faz o scroll suave até o elemento com ID 'catalogo'
    const handleScrollToCatalog = () => {
        const catalogElement = document.getElementById('catalogo'); // Localiza o elemento com ID 'catalogo'
        if (catalogElement) {
            // scrollIntoView com behavior 'smooth' faz um scroll suave até o elemento
            catalogElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className={styles.banner}>
            <div className={styles.content}>
                <h1>Bem-vindo à TechZone</h1>
                <p>Encontre os melhores produtos de tecnologia com os melhores preços</p>
                {/* Botão que dispara a função handleScrollToCatalog ao ser clicado */}
                <button className={styles.button} onClick={handleScrollToCatalog}>Ver Catálogo</button>
            </div>
        </section>
    )
}
