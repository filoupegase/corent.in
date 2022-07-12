import { createContext, useState, useCallback } from "react";
import { useLocalStorage, useMedia } from "react-use";
import type { Context, PropsWithChildren } from "react";
import { themeStorageKey } from '../lib/styles/stitches.config';


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
  const [preferredTheme, setPreferredTheme] = useLocalStorage<string>(themeStorageKey, undefined, { raw: true });
  const [systemTheme, setSystemTheme] = useState('')

  const themeNames = Object.keys(classNames);

  // updates the DOM and optionally saves the new theme to local storage
  const changeTheme = useCallback(
    (theme: string, updateStorage?: boolean) => {
      if (updateStorage) {
        setPreferredTheme(theme);
      }

      // remove all theme classes first to start fresh
      const all = Object.values(classNames);
      document.documentElement.classList.remove(...all);
      document.documentElement.classList.add(classNames[theme]);
    },
    [classNames, setPreferredTheme]
  );

  return (
    <ThemeContext.Provider
      value={ {
        activeTheme: preferredTheme && themeNames.includes(preferredTheme) ? preferredTheme : systemTheme,
        setTheme: useCallback(
          (theme: string) => {
            // enforce save to local storage
            changeTheme(theme, true);
          },
          [changeTheme]
        ),
      } }
    >
      { children }
    </ThemeContext.Provider>
  )
}
