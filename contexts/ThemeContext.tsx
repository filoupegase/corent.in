import { createContext, useState, useCallback, useEffect } from "react";
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
  // keep track of if/when the user has set their theme *on this site*
  const [preferredTheme, setPreferredTheme] = useLocalStorage<string>(themeStorageKey, undefined, { raw: true });
  // keep track of changes to the user's OS/browser dark mode setting
  const [systemTheme, setSystemTheme] = useState('')
  // hook into system `prefers-dark-mode` setting
  // https://web.dev/prefers-color-scheme/#the-prefers-color-scheme-media-query
  const isSystemDark = useMedia("(prefers-color-scheme: dark)");
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

  useEffect(() => {
    const systemResolved = isSystemDark ? "dark" : "light";

    setSystemTheme(systemResolved);

    if (!preferredTheme || !themeNames.includes(preferredTheme)) {
      changeTheme(systemResolved, false);
    }
  }, [changeTheme, themeNames, preferredTheme, isSystemDark]);

  useEffect(() => {
    const colorScheme = preferredTheme && ["light", "dark"].includes(preferredTheme) ? preferredTheme : systemTheme;

    document.documentElement.style?.setProperty("color-scheme", colorScheme);
  }, [preferredTheme, systemTheme]);

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
  );
};


if (process.env.NODE_ENV !== "production") {
  ThemeContext.displayName = "ThemeContext";
}
