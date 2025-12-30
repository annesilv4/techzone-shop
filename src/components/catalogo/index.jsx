// Importa hooks do React para gerenciar estado
import { useEffect, useState } from 'react';
import styles from './styles.module.css';
// Importa a lista de produtos do arquivo JSON
import produtos from '../../api/products/produtos.json';

// Objeto que mapeia os IDs das categorias para seus nomes em português
const categoryNames = {
    acessorios: 'Acessórios',
    gamer: 'Gamer',
    notebooks: 'Notebooks',
    perifericos: 'Periféricos',
    smartphones: 'Smartphones',
    wearables: 'Wearables'
};

export default function Catalogo() {
    // Estado que armazena produtos agrupados por categoria
    const [productsByCategory, setProductsByCategory] = useState({});
    // Estado que armazena a imagem selecionada para exibir em modal (null = nenhuma selecionada)
    const [selectedImage, setSelectedImage] = useState(null);

    // Hook que executa quando o componente monta
    useEffect(() => {
        // Agrupa os produtos por categoria usando reduce
        const grouped = produtos.reduce((acc, product) => {
            // Se a categoria ainda não existe no acumulador, cria um array vazio
            if (!acc[product.category]) {
                acc[product.category] = [];
            }
            // Adiciona o produto ao array da sua categoria
            acc[product.category].push(product);
            return acc;
        }, {});
        // Atualiza o estado com produtos agrupados
        setProductsByCategory(grouped);
    }, []); // [] significa que executa apenas uma vez na montagem

    // Função chamada quando o usuário clica na imagem de um produto
    const handleImageClick = (imageSrc) => {
        // Armazena a URL da imagem clicada para exibir no modal
        setSelectedImage(imageSrc);
    };

    // Função chamada para fechar o modal de imagem ampliada
    const closeModal = () => {
        // Remove a imagem selecionada (fecha o modal)
        setSelectedImage(null);
    };

    return (
        <section id="catalogo" className={styles.catalogo}>
            <div className={styles.header}>
                <h1>Conheça o Nosso Catálogo</h1>
                <p>Descubra os melhores produtos de tecnologia</p>
            </div>

            {Object.keys(productsByCategory).map(category => (
                <div key={category} className={styles.categorySection}>
                    <h2 className={styles.categoryTitle}>{categoryNames[category]}</h2>
                    <div className={styles.grid}>
                        {productsByCategory[category].map(product => (
                            <div key={product.id} className={styles.card}>
                                <div className={styles.imageContainer} onClick={() => handleImageClick(product.image)}>
                                    <img src={product.image} alt={product.name} />
                                </div>
                                <div className={styles.content}>
                                    <h3>{product.name}</h3>
                                    <p className={styles.description}>{product.description}</p>
                                    <div className={styles.footer}>
                                        <span className={styles.price}>
                                            {product.price.toLocaleString('pt-BR', {
                                                style: 'currency',
                                                currency: 'BRL'
                                            })}
                                        </span>
                                    </div>
                                    <button className={styles.btn}>Adicionar ao Carrinho</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}

            {selectedImage && (
                <div className={styles.modal} onClick={closeModal}>
                    <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
                        <button className={styles.closeBtn} onClick={closeModal}>✕</button>
                        <img src={selectedImage} alt="Imagem ampliada" />
                    </div>
                </div>
            )}
        </section>
    )
}