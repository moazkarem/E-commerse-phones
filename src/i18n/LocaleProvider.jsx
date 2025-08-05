import React, { createContext, useContext, useState, useEffect } from "react";
import { IntlProvider } from "react-intl";
import en from "../content/en.json";
import ar from "../content/ar.json";

const messages = { en, ar };
const defaultLocale = "en";

const LocaleContext = createContext({
  locale: defaultLocale,
  setLocale: () => {},
});

export const useLocale = () => useContext(LocaleContext);

export const LocaleProvider = ({ children }) => {
  const [locale, setLocale] = useState(() => {
    return localStorage.getItem("locale") || defaultLocale;
  });

  useEffect(() => {
    localStorage.setItem("locale", locale);
    document.documentElement.dir = locale === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = locale;
  }, [locale]);

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      <IntlProvider
        locale={locale}
        messages={messages[locale]}
        defaultLocale={defaultLocale}
        onError={() => null}
      >
        {children}
      </IntlProvider>
    </LocaleContext.Provider>
  );
};
