import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/only-logo.png';
// Interface untuk props Header
interface HeaderProps {
  scrollY: number;
}

const Header: React.FC<HeaderProps> = ({ scrollY }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Fungsi untuk smooth scroll ke section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start' 
      });
    }
    setIsMenuOpen(false); // Tutup mobile menu setelah klik
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrollY > 50 
        ? 'bg-slate-900/95 backdrop-blur-sm border-b border-purple-500/20' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo Section */}
          <div className="flex items-center space-x-2 cursor-pointer" 
               onClick={() => scrollToSection('home')}>
            <div className="w-20 h-20 rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-300">
            <img src={logo} alt="Logo" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white hover:text-purple-300 transition-colors">
                LINTARA
              </h1>
              <p className="text-xs text-purple-300">
                Lembaga Inovasi & Teknologi Nusantara
              </p>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-white hover:text-purple-300 transition-colors duration-300 font-medium cursor-pointer"
            >
              Beranda
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-white hover:text-purple-300 transition-colors duration-300 font-medium cursor-pointer"
            >
              Proyek
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-white hover:text-purple-300 transition-colors duration-300 font-medium cursor-pointer"
            >
              Tentang
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-white hover:text-purple-300 transition-colors duration-300 font-medium cursor-pointer"
            >
              Kontak
            </button>
            
            {/* CTA Button */}
            <a href='http://wa.me/6282258040148' target='_blank' className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold text-white hover:from-purple-500 hover:to-pink-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25">
              Hubungi Kami
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-purple-800/50 transition-colors duration-300"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${
        isMenuOpen 
          ? 'max-h-64 opacity-100' 
          : 'max-h-0 opacity-0'
      }`}>
        <div className="bg-slate-900/95 backdrop-blur-sm border-t border-purple-500/20">
          <div className="px-4 py-2 space-y-1">
            <button 
              onClick={() => scrollToSection('home')}
              className="block w-full text-left py-3 px-2 text-white hover:text-purple-300 hover:bg-purple-800/20 rounded-lg transition-colors duration-300"
            >
              Beranda
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="block w-full text-left py-3 px-2 text-white hover:text-purple-300 hover:bg-purple-800/20 rounded-lg transition-colors duration-300"
            >
              Proyek
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="block w-full text-left py-3 px-2 text-white hover:text-purple-300 hover:bg-purple-800/20 rounded-lg transition-colors duration-300"
            >
              Tentang
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left py-3 px-2 text-white hover:text-purple-300 hover:bg-purple-800/20 rounded-lg transition-colors duration-300"
            >
              Kontak
            </button>
            
            {/* Mobile CTA Button */}
            <div className="pt-2 pb-2">
              <button className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold text-white hover:from-purple-500 hover:to-pink-500 transition-all duration-300">
                Hubungi Kami
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;