import { createContext } from "react";
import type { Context, PropsWithChildren } from "react";


export const ThemeContext: Context<{
  /**
   * If the user's theme preference is unset, this returns whether the system preference resolved to "light" or "dark".
   * If the user's theme preference is set, the preference is returned instead, regardless of their system's theme.
   */
  activeTheme: string;
  /** Update the theme manually and save to local storage. */
  setTheme: (theme: string) => void;
}> = createContext({
  activeTheme: "",
  setTheme: (_) => {
  },
});

export const ThemeProvider = ({
                                classNames,
                                children
                              }: PropsWithChildren<{
  /** Mapping of theme name ("light", "dark") to the corresponding `<html>`'s class names. */
  classNames: {
    [themeName: string]: string;
  };
}>) => {
  return (
    <ThemeContext.Provider
      value={ {} }
    >
      { children }
    </ThemeContext.Provider>
  )
}
