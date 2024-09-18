import { createContext, ReactNode, useContext } from "react";
import useCurrentTheme from "../Hooks/useCurrentTheme";
import { ThemeContextType } from "../util/types";

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

export function useThemeContext() {
  const theme = useContext(ThemeContext);
  if (theme === undefined) {
    throw new Error("theme problem go fix it");
  }
  return theme;
}

export default function ThemeContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const { currentTheme: theme, changeTheme } = useCurrentTheme();
  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
