import { useState, useEffect } from 'react';

export function useTheme() {
    const [theme, setTheme] = useState('dark'); // Establece el tema predeterminado

    useEffect(() => {
        const storedTheme = localStorage.getItem('theme'); // Intenta obtener el tema desde el almacenamiento local
        if (storedTheme) {
            setTheme(storedTheme); // Si se encuentra un tema almacenado, establece el tema actual
        } else {
            setTheme('dark'); // Si no se encuentra un tema almacenado, establece el tema predeterminado
        }
        document.body.classList.remove('load');
    }, []);

    // Función para cambiar el tema
    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
    };

    useEffect(() => {
        document.documentElement.dataset.bsTheme = theme;
        localStorage.setItem('theme', theme);
        console.log(theme);
        document.body.classList.remove('load');
    }, [theme]);

    return { theme, toggleTheme };
}