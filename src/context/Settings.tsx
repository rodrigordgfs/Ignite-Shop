import { ReactNode, createContext, useState } from "react";

interface ISettingsContext {
  isDrawerMenuOpen: boolean;
  toogleDrawerMenu: () => void;
}

interface ISettingsContextProps {
  children: ReactNode;
}

export const SettingsContext = createContext({} as ISettingsContext);

export function SettingsContextProvider({ children }: ISettingsContextProps) {
  const [isDrawerMenuOpen, setIsDrawerMenuOpen] = useState<boolean>(false);

  function toogleDrawerMenu() {
    setIsDrawerMenuOpen((prevState) => !prevState);
  }

  return (
    <SettingsContext.Provider
      value={{
        isDrawerMenuOpen,
        toogleDrawerMenu,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
}
