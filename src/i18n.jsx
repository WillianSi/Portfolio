// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import homePT from "./locales/pt/home.json";
import homeEN from "./locales/en/home.json";

import experiencePT from "./locales/pt/experience.json";
import experienceEN from "./locales/en/experience.json";

import voluntaryPT from "./locales/pt/voluntaryWork.json";
import voluntaryEN from "./locales/en/voluntaryWork.json";

import skillsPT from "./locales/pt/skills.json";
import skillsEN from "./locales/en/skills.json";

import portfolioPT from "./locales/pt/portfolio.json";
import portfolioEN from "./locales/en/portfolio.json";

// Detecta idioma inicial:
// 1) usa o salvo (localStorage)
// 2) senão, se qualquer idioma do navegador começar com "pt" -> "pt"
// 3) caso contrário, "en"
function detectInitialLang() {
  try {
    const saved = localStorage.getItem("lang");
    if (saved) return saved;
  } catch (_) {
    // ignore (SSR ou storage bloqueado)
  }

  const navLangs = (navigator.languages && navigator.languages.length
    ? navigator.languages
    : [navigator.language || "en"]
  ).map((l) => String(l || "").toLowerCase());

  return navLangs.some((l) => l.startsWith("pt")) ? "pt" : "en";
}

const resources = {
  pt: {
    home: homePT,
    experience: experiencePT,
    voluntaryWork: voluntaryPT,
    skills: skillsPT,
    portfolio: portfolioPT,
  },
  en: {
    home: homeEN,
    experience: experienceEN,
    voluntaryWork: voluntaryEN,
    skills: skillsEN,
    portfolio: portfolioEN,
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: detectInitialLang(),
    fallbackLng: "en",
    // garante que "pt-BR" ou "pt-PT" virem "pt" sem erro
    supportedLngs: ["pt", "en"],
    nonExplicitSupportedLngs: true,
    load: "languageOnly",
    ns: ["home", "experience", "voluntaryWork", "skills", "portfolio"],
    defaultNS: "home",
    interpolation: { escapeValue: false },
    // opcional: desativa warnings de chave faltando em dev
    // saveMissing: true,
  });

// Sincroniza <html lang> e persiste escolha
i18n.on("languageChanged", (lng) => {
  try {
    localStorage.setItem("lang", lng);
  } catch (_) {}
  if (typeof document !== "undefined") {
    document.documentElement.setAttribute("lang", lng);
  }
});

export default i18n;