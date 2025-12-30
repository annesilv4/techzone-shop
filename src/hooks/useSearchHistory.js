import { useState, useEffect } from 'react';

export function useSearchHistory() {
    const [history, setHistory] = useState([]);

    useEffect(() => {
        const saved = localStorage.getItem('searchHistory');
        if (saved) {
            setHistory(JSON.parse(saved));
        }
    }, []);

    const addSearch = (query) => {
        if (!query.trim()) return;

        const newHistory = [
            query,
            ...history.filter(item => item !== query)
        ].slice(0, 5); // Mantém apenas as 5 últimas

        setHistory(newHistory);
        localStorage.setItem('searchHistory', JSON.stringify(newHistory));
    };

    const clearHistory = () => {
        setHistory([]);
        localStorage.removeItem('searchHistory');
    };

    return { history, addSearch, clearHistory };
}
