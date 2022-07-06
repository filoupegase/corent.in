import { createContext } from "react";
import type { Context, PropsWithChildren } from "react";


export const ThemeContext: Context<{
  activeTheme: string;
  /** Update the theme manually and save to local storage. */
  setTheme: (theme: string) => void;
}> = createContext({
  activeTheme: "",
  setTheme: (_) => {
  },
});

export const ThemeProvider = ({
                                classNames, children
                              }: PropsWithChildren<{
  /** Mapping of theme name ("light", "dark") to the corresponding `<html>`'s class names. */
  classNames: {
    [themeName: string]: string;
  };
}>) => {
  return (
    <ThemeContext.Provider>
      { children }
    </ThemeContext.Provider>
  )
}
