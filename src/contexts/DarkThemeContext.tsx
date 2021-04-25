import { createContext, useState, ReactNode, useContext } from 'react';


type DarkPlayerContextData = {
  isDark: boolean;
  darkTheme: () => void;
}

type DarkPlayerContextProviderProps = {
  children: ReactNode;
}

export const PlayerContextDarkTheme = createContext({} as DarkPlayerContextData);


export function DarkThemeContextProvider({ children }: DarkPlayerContextProviderProps) {
  const [isDark, setIsDark] = useState(false);


  const darkTheme = () => {
    setIsDark(!isDark);
  }

  return (
    <PlayerContextDarkTheme.Provider
      value={{
        isDark,
        darkTheme,
      }}
    >
      { children}
    </PlayerContextDarkTheme.Provider>
  );
}

export const DarkUsePlayer = () => {
  return useContext(PlayerContextDarkTheme);
}