// Importações necessárias para criar o contexto e gerenciar estado
import { createContext, useState, useEffect, useContext } from 'react';
import { UserContext } from './userContext';

// Cria o contexto do carrinho que será compartilhado entre componentes
export const CartContext = createContext();

// Componente provedor do contexto que gerencia o estado global do carrinho
// MODIFICADO: Agora isola carrinho por usuário usando o userId como chave no localStorage
export function CartProvider({ children }) {
    // Acessa o contexto do usuário para obter o userId
    const userContext = useContext(UserContext);

    // Estado que armazena os produtos adicionados ao carrinho
    // MODIFICADO: Inicia vazio e será preenchido quando o usuário logar
    const [cart, setCart] = useState(() => {
        return [];
    });

    // MODIFICADO: Efeito para carregar/limpar carrinho quando usuário faz login/logout
    // Este useEffect é executado ANTES do de salvamento para evitar correr de dados
    useEffect(() => {
        const userId = userContext?.user?._id;
        
        if (userId) {
            // Usuário está logado - carrega o carrinho dele do localStorage
            // A chave é `cart_${userId}` para isolar dados por usuário
            const savedCart = localStorage.getItem(`cart_${userId}`);
            if (savedCart) {
                try {
                    setCart(JSON.parse(savedCart));
                } catch (e) {
                    // Se houver erro ao fazer parse, inicia com carrinho vazio
                    setCart([]);
                }
            } else {
                // Se não há carrinho salvo, inicia vazio
                setCart([]);
            }
            // Limpa carrinho anônimo (do usuário que não estava logado)
            localStorage.removeItem('cart');
        } else {
            // Usuário não está logado - carrinho vazio (dados já foram salvos)
            setCart([]);
        }
    }, [userContext?.user?._id]);

    // MODIFICADO: Efeito para salvar o carrinho sempre que há mudanças
    // Só salva se o usuário está logado (tem userId)
    useEffect(() => {
        const userId = userContext?.user?._id;
        if (userId) {
            // Salva o carrinho com chave específica do usuário: `cart_${userId}`
            // Desta forma cada usuário tem seu próprio carrinho no localStorage
            localStorage.setItem(`cart_${userId}`, JSON.stringify(cart));
        }
    }, [cart, userContext?.user?._id]);

    // Função para adicionar um produto ao carrinho
    // Se o produto já existe, incrementa a quantidade; caso contrário, adiciona novo
    const addToCart = (product, quantity = 1) => {
        setCart(prevCart => {
            // Verifica se o produto já existe no carrinho
            const existingItem = prevCart.find(item => item.id === product.id);

            // Se existe, incrementa a quantidade do produto
            if (existingItem) {
                return prevCart.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + quantity }
                        : item
                );
            }

            // Se não existe, adiciona o novo produto ao carrinho
            return [...prevCart, { ...product, quantity }];
        });
    };

    // Função para remover um produto do carrinho pelo ID
    const removeFromCart = (productId) => {
        setCart(prevCart => prevCart.filter(item => item.id !== productId));
    };

    // Função para atualizar a quantidade de um produto específico no carrinho
    // Se quantidade for <= 0, o produto é automaticamente removido
    const updateQuantity = (productId, quantity) => {
        // Remove o produto se a quantidade for menor ou igual a zero
        if (quantity <= 0) {
            removeFromCart(productId);
            return;
        }

        // Atualiza a quantidade do produto no carrinho
        setCart(prevCart =>
            prevCart.map(item =>
                item.id === productId
                    ? { ...item, quantity }
                    : item
            )
        );
    };

    // Função para limpar todo o carrinho
    const clearCart = () => {
        setCart([]);
    };

    // Calcula o subtotal (soma de todos os produtos * suas respectivas quantidades)
    const cartTotal = cart.reduce((total, item) => total + (item.preco * item.quantity), 0);
    // Define o valor do frete (R$ 10 se houver produtos, senão R$ 0)
    const shippingCost = cart.length > 0 ? 10 : 0;
    // Calcula o total final (subtotal + frete)
    const finalTotal = cartTotal + shippingCost;

    // Retorna o provedor do contexto com todos os valores e funções disponíveis
    return (
        <CartContext.Provider value={{
            cart,                  // Array com os produtos no carrinho
            addToCart,            // Função para adicionar produtos
            removeFromCart,       // Função para remover produtos
            updateQuantity,       // Função para atualizar quantidade
            clearCart,            // Função para limpar o carrinho
            cartTotal,            // Valor total dos produtos
            shippingCost,         // Valor do frete
            finalTotal            // Valor final (total + frete)
        }}>
            {children}
        </CartContext.Provider>
    );
}
