import React, {createContext, useContext, useEffect, useState} from 'react';
//import { loadConfigFromFile } from 'vite';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({children}) => {
     // Set the initial theme to dark if nothing is saved in localStorage
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme : 'dark'; // Default to dark mode
  });

    useEffect(()=>{
        document.body.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    },[theme]);

    const toogleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return(
    <ThemeContext.Provider value = {{theme, toogleTheme}}>
        {children}
    </ThemeContext.Provider>)
};