import { createContext, useState, useEffect } from 'react';

export const UserContext = createContext();

export function UserProvider({ children }) {
    const [user, setUser] = useState(null);

    // Carrega usuário do localStorage ao montar
    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            try {
                setUser(JSON.parse(storedUser));
            } catch (error) {
                console.error('Erro ao carregar usuário:', error);
            }
        }
    }, []);

    // Função para fazer login
    const login = (userData) => {
        setUser(userData);
        localStorage.setItem('user', JSON.stringify(userData));
        window.dispatchEvent(new Event('userUpdated'));
    };

    // MODIFICADO: Função para fazer logout - remove apenas a sessão do usuário
    // IMPORTANTE: NÃO deleta carrinho, histórico ou pedidos. Dados ficam salvos com chave userId
    // Quando o usuário logar novamente, seus dados serão restaurados
    const logout = () => {
        // Remove apenas a informação do usuário logado
        localStorage.removeItem('user');
        // Reseta o estado do usuário
        setUser(null);
        // Dispara evento para outros componentes saberem que fez logout
        window.dispatchEvent(new Event('userUpdated'));
    };

    // Função para obter carrinho do usuário atual
    const getUserCart = () => {
        if (!user?._id) return [];
        const cart = localStorage.getItem(`cart_${user._id}`);
        return cart ? JSON.parse(cart) : [];
    };

    // Função para salvar carrinho do usuário atual
    const saveUserCart = (cartData) => {
        if (!user?._id) return;
        localStorage.setItem(`cart_${user._id}`, JSON.stringify(cartData));
    };

    // Função para obter histórico de buscas do usuário
    const getUserSearchHistory = () => {
        if (!user?._id) return [];
        const history = localStorage.getItem(`searchHistory_${user._id}`);
        return history ? JSON.parse(history) : [];
    };

    // Função para salvar histórico de buscas
    const saveUserSearchHistory = (history) => {
        if (!user?._id) return;
        localStorage.setItem(`searchHistory_${user._id}`, JSON.stringify(history));
    };

    // Função para obter pedidos do usuário
    const getUserOrders = () => {
        if (!user?._id) return [];
        const orders = localStorage.getItem(`orders_${user._id}`);
        return orders ? JSON.parse(orders) : [];
    };

    // Função para adicionar pedido
    const addUserOrder = (order) => {
        if (!user?._id) return;
        const orders = getUserOrders();
        orders.push(order);
        localStorage.setItem(`orders_${user._id}`, JSON.stringify(orders));
    };

    // Função para obter perfil do usuário
    const getUserProfile = () => {
        if (!user?._id) return null;
        const profile = localStorage.getItem(`profile_${user._id}`);
        return profile ? JSON.parse(profile) : user;
    };

    // Função para salvar perfil do usuário
    const saveUserProfile = (profileData) => {
        if (!user?._id) return;
        localStorage.setItem(`profile_${user._id}`, JSON.stringify(profileData));
    };

    return (
        <UserContext.Provider value={{
            user,
            login,
            logout,
            getUserCart,
            saveUserCart,
            getUserSearchHistory,
            saveUserSearchHistory,
            getUserOrders,
            addUserOrder,
            getUserProfile,
            saveUserProfile
        }}>
            {children}
        </UserContext.Provider>
    );
}
