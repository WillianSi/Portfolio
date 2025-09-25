import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { i18n } = useTranslation();

  const links = [
    { label: "Home", href: "#home" },
    { label: "Experience", href: "#experience" },
    { label: "Voluntary Work", href: "#voluntary-work" },
    { label: "Skills", href: "#skills" },
    { label: "Portfolio", href: "#portfolio" },
  ];

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("lang", lng);
  };

  return (
    <header className="bg-[#0f0f0f] backdrop-blur-md border-b border-gray-800 z-50 sticky top-0">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <a
          href="#home"
          className="text-xl font-extrabold bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-transparent bg-clip-text animate-gradient tracking-widest"
        >
          PORTFOLIO
        </a>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex space-x-6 text-sm font-medium items-center">
          {links.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="text-gray-300 hover:text-green-400 transition-colors duration-300"
            >
              {label}
            </a>
          ))}

          {/* Botão de idioma */}
          <div className="flex items-center gap-2 ml-6">
            <button
              onClick={() => changeLanguage("pt")}
              className={`px-2 py-1 rounded ${
                i18n.language === "pt" ? "bg-green-500 text-white" : "text-gray-300 hover:text-green-400"
              }`}
            >
              🇧🇷 PT
            </button>
            <button
              onClick={() => changeLanguage("en")}
              className={`px-2 py-1 rounded ${
                i18n.language === "en" ? "bg-green-500 text-white" : "text-gray-300 hover:text-green-400"
              }`}
            >
              🇺🇸 EN
            </button>
          </div>
        </nav>

        {/* Mobile Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-green-400 hover:text-green-500"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-[#111111] px-6 py-4 border-t border-gray-800">
          <nav className="flex flex-col space-y-4 text-sm font-medium">
            {links.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                className="text-gray-300 hover:text-green-400 transition-colors duration-300"
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </a>
            ))}

            {/* Botão de idioma no menu mobile */}
            <div className="flex gap-4 mt-4">
              <button
                onClick={() => {
                  changeLanguage("pt");
                  setMenuOpen(false);
                }}
                className={`px-3 py-1 rounded ${
                  i18n.language === "pt" ? "bg-green-500 text-white" : "text-gray-300 hover:text-green-400"
                }`}
              >
                PT 🇧🇷
              </button>
              <button
                onClick={() => {
                  changeLanguage("en");
                  setMenuOpen(false);
                }}
                className={`px-3 py-1 rounded ${
                  i18n.language === "en" ? "bg-green-500 text-white" : "text-gray-300 hover:text-green-400"
                }`}
              >
                EN 🇺🇸
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;