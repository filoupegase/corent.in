import { createContext, useCallback, useEffect, useMemo, useState } from "react";
import Script from "next/script";
import useLocalStorage from "../_common/hooks/useLocalStorage";
import useMedia from "../_common/hooks/useMedia";
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
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-empty-function
  setTheme: (_) => {},
});

// provider used once in _app.tsx to wrap entire app
export const ThemeProvider = ({
  classNames,
  storageKey = "theme",
  children,
}: PropsWithChildren<{
  /** Mapping of theme name ("light", "dark") to the corresponding `<html>`'s class names. */
  classNames: {
    [themeName: string]: string;
  };
  /** Key to use when saving preferred theme to local storage. Defaults to "theme". */
  storageKey?: string;
}>) => {
  // keep track of if/when the user has set their theme *on this site*
  const [preferredTheme, setPreferredTheme] = useLocalStorage(storageKey);
  // keep track of changes to the user's OS/browser dark mode setting
  const [systemTheme, setSystemTheme] = useState("");
  // hook into system `prefers-dark-mode` setting
  // https://web.dev/prefers-color-scheme/#the-prefers-color-scheme-media-query
  const isSystemDark = useMedia("(prefers-color-scheme: dark)");

  // get the theme names (light, dark) via passed-in classnames' keys
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

  // listen for changes in OS preference
  useEffect(() => {
    // translate boolean to theme string
    const systemResolved = isSystemDark ? "dark" : "light";

    // keep track of the system theme whether or not we override it manually
    setSystemTheme(systemResolved);

    // only actually change the theme if preference is unset (and *don't* save new theme to storage)
    if (!preferredTheme || !themeNames.includes(preferredTheme)) {
      changeTheme(systemResolved, false);
    }
  }, [changeTheme, themeNames, preferredTheme, isSystemDark]);

  // color-scheme handling (tells browser how to render built-in elements like forms, scrollbars, etc.)
  useEffect(() => {
    // only "light" and "dark" are valid here
    // https://web.dev/color-scheme/#the-color-scheme-css-property
    const colorScheme = preferredTheme && ["light", "dark"].includes(preferredTheme) ? preferredTheme : systemTheme;

    document.documentElement.style?.setProperty("color-scheme", colorScheme);
  }, [preferredTheme, systemTheme]);

  const providerValues = useMemo(
    () => ({
      activeTheme: preferredTheme && themeNames.includes(preferredTheme) ? preferredTheme : systemTheme,
      setTheme: (theme: string) => {
        // force save to local storage
        changeTheme(theme, true);
      },
    }),
    [changeTheme, preferredTheme, systemTheme, themeNames]
  );

  return (
    <>
      <Script id="restore-theme" strategy="beforeInteractive">
        {`(function(){try{var e=document.documentElement,t=e.classList,a=[${Object.values(classNames)
          .map((cn) => `"${cn}"`)
          .join(
            ","
          )}],o="undefined"!=typeof Storage?window.localStorage.getItem("${storageKey}"):null,c=(o&&"dark"===o)??window.matchMedia("(prefers-color-scheme: dark)").matches?1:0;t.remove(...a),t.add(a[c]||""),e.style.colorScheme=1==c?"dark":"light"}catch(e){}})()`}
      </Script>

      <ThemeContext.Provider value={providerValues}>{children}</ThemeContext.Provider>
    </>
  );
};

if (process.env.NODE_ENV !== "production") {
  ThemeContext.displayName = "ThemeContext";
}
