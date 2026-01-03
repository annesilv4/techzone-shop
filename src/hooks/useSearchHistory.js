import { useState, useEffect, useContext } from 'react';
import { UserContext } from '../context/userContext';

// MODIFICADO: Hook para gerenciar histórico de buscas por usuário
// O histórico é salvo no localStorage com chave `searchHistory_${userId}`
export function useSearchHistory() {
    // Acessa o contexto do usuário para obter o userId
    const userContext = useContext(UserContext);
    // Estado que armazena o histórico de buscas
    const [history, setHistory] = useState([]);

    // MODIFICADO: Efeito para carregar histórico quando usuário faz login
    // Carrega do localStorage usando a chave específica do usuário
    useEffect(() => {
        if (userContext?.user?._id) {
            // Tenta carregar histórico com chave `searchHistory_${userId}`
            const saved = localStorage.getItem(`searchHistory_${userContext.user._id}`);
            if (saved) {
                setHistory(JSON.parse(saved));
            } else {
                // Se não há histórico salvo, inicia vazio
                setHistory([]);
            }
        }
    }, [userContext?.user?._id]);

    // MODIFICADO: Efeito para salvar histórico sempre que mudar
    // Cada usuário tem seu próprio histórico no localStorage
    useEffect(() => {
        if (userContext?.user?._id) {
            // Salva com chave específica do usuário: `searchHistory_${userId}`
            localStorage.setItem(`searchHistory_${userContext.user._id}`, JSON.stringify(history));
        }
    }, [history, userContext?.user?._id]);

    // MODIFICADO: Efeito para limpar estado quando faz logout
    // O histórico não é deletado do localStorage, só o estado é zerado
    useEffect(() => {
        if (!userContext?.user?._id) {
            // Limpa apenas o estado (dados no localStorage são preservados)
            setHistory([]);
        }
    }, [userContext?.user?._id]);

    // MODIFICADO: Função para adicionar busca ao histórico
    // Só adiciona se o usuário está logado
    const addSearch = (query) => {
        if (!query.trim()) return;
        // Verifica se usuário está logado antes de adicionar
        if (!userContext?.user?._id) return;

        // Coloca a busca no início da lista e remove duplicatas
        const newHistory = [
            query,
            ...history.filter(item => item !== query)
        ].slice(0, 5); // Mantém apenas as 5 últimas buscas

        // Atualiza o estado (o useEffect acima salva no localStorage)
        setHistory(newHistory);
    };

    // MODIFICADO: Função para limpar histórico
    // Só funciona se usuário está logado
    const clearHistory = () => {
        if (!userContext?.user?._id) return;
        // Zera o histórico (o useEffect acima atualiza o localStorage)
        setHistory([]);
    };

    return { history, addSearch, clearHistory };
}
