import { useState } from 'react';
import { Menu, X } from 'lucide-react';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { label: 'Home', href: '#home' },
    { label: 'Experience', href: '#experience' },
    { label: 'Voluntary Work', href: '#voluntary-work' },
    { label: 'Skills', href: '#skills' },
    // { label: 'Education', href: '#education' },
    // { label: 'Languages & Extras', href: '#languages' },
    { label: 'Portfolio', href: '#portfolio' },
  ];

  return (
    <header className="bg-[#0f0f0f] backdrop-blur-md border-b border-gray-800 z-50 sticky top-0">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="text-xl font-extrabold bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-transparent bg-clip-text animate-gradient tracking-widest">
          PORTFOLIO
        </a>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex space-x-6 text-sm font-medium">
          {links.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="text-gray-300 hover:text-green-400 transition-colors duration-300"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Mobile Button */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden text-green-400 hover:text-green-500">
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
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;