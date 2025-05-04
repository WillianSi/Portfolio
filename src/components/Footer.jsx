function Footer() {
    const openInNewTab = (url) => {
      window.open(url, '_blank', 'noopener,noreferrer');
    };
  
    return (
      <footer className="w-full border-t border-gray-800 py-6 mt-10 bg-[#0f0f0f]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Redes sociais */}
          <div className="flex gap-6">
            <button
              onClick={() => openInNewTab('https://www.instagram.com/willian.silvestre._/')}
              className="text-gray-400 hover:text-green-400 transition-colors duration-300 text-sm"
            >
              Instagram
            </button>
            <button
              onClick={() => openInNewTab('https://www.linkedin.com/in/willian-silvestre-3439b1236')}
              className="text-gray-400 hover:text-green-400 transition-colors duration-300 text-sm"
            >
              LinkedIn
            </button>
          </div>
  
          {/* Direitos autorais */}
          <div className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Willian Silvestre
          </div>
        </div>
      </footer>
    );
  }
  
  export default Footer;
  