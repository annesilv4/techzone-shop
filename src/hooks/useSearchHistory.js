import { useState, useEffect, useContext } from 'react';
import { UserContext } from '../context/userContext';

// Hook para gerenciar histórico de buscas por usuário
// O histórico é salvo no localStorage com chave `searchHistory_${userId}`
export function useSearchHistory() {
    // Acessa o contexto do usuário para obter o userId e funções de histórico
    const userContext = useContext(UserContext);
    // Estado que armazena o histórico de buscas
    const [history, setHistory] = useState([]);

    // Efeito para carregar histórico quando usuário faz login
    // Carrega do localStorage usando a chave específica do usuário
    useEffect(() => {
        if (userContext?.user?._id) {
            // Usa a função do contexto para obter o histórico
            const saved = userContext.getUserSearchHistory();
            setHistory(saved);
        } else {
            // Se não está logado, limpa o histórico
            setHistory([]);
        }
    }, [userContext?.user?._id, userContext]);

    // Efeito para salvar histórico sempre que mudar
    // Cada usuário tem seu próprio histórico no localStorage
    useEffect(() => {
        if (userContext?.user?._id && history.length > 0) {
            // Usa a função do contexto para salvar o histórico
            userContext.saveUserSearchHistory(history);
        }
    }, [history, userContext?.user?._id, userContext]);

    // Função para adicionar busca ao histórico
    // Só adiciona se o usuário está logado
    const addSearch = (query) => {
        if (!query.trim()) return;
        // Verifica se usuário está logado antes de adicionar
        if (!userContext?.user?._id) {
            console.warn('Usuário não logado. Histórico não será salvo.');
            return;
        }

        // Coloca a busca no início da lista e remove duplicatas
        const newHistory = [
            query,
            ...history.filter(item => item !== query)
        ].slice(0, 5); // Mantém apenas as 5 últimas buscas

        // Atualiza o estado (o useEffect acima salva no localStorage)
        setHistory(newHistory);
    };

    // Função para limpar histórico
    // Só funciona se usuário está logado
    const clearHistory = () => {
        if (!userContext?.user?._id) return;
        // Zera o histórico (limpa no localStorage também)
        setHistory([]);
        localStorage.removeItem(`searchHistory_${userContext.user._id}`);
    };

    return { history, addSearch, clearHistory };
}
