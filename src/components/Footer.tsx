import React from 'react';
import { Code, Mail, Phone, MapPin, Heart,Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  // Social media links
  const socialLinks = [
    {
      name: 'Instagram',
      icon: <Instagram className="w-5 h-5" />,
      url: 'http://instagram.com/Lintara_id',
      color: 'hover:text-gray-300'
    },
    {
      name: 'Email',
      icon: <Mail className="w-5 h-5" />,
      url: 'mailto:info@lintara.id',
      color: 'hover:text-purple-300'
    },
    {
      name: 'Phone',
      icon: <Phone className="w-5 h-5" />,
      url: 'tel:+6285711297160',
      color: 'hover:text-green-300'
    }
  ];

  // Quick links
  const quickLinks = [
    { name: 'Beranda', href: '#home' },
    { name: 'Proyek', href: '#projects' },
    { name: 'Tentang', href: '#about' },
    { name: 'Kontak', href: '#contact' }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start' 
      });
    }
  };

  return (
    <footer className="bg-slate-900/50 border-t border-slate-700/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <Code className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">LINTARA</h3>
                <p className="text-sm text-purple-300">
                  Lembaga Inovasi & Teknologi Nusantara
                </p>
              </div>
            </div>
            <p className="text-slate-400 mb-4 max-w-md leading-relaxed">
              Mengembangkan solusi teknologi inovatif untuk memajukan Indonesia melalui 
              sistem manajemen modern, kecerdasan buatan, dan teknologi terdepan.
            </p>
            <div className="flex items-center text-slate-400 mb-2">
              <MapPin className="w-4 h-4 mr-2" />
              <span className="text-sm">Indonesia</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Menu Cepat</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-slate-400 hover:text-purple-300 transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Kontak</h4>
            <div className="space-y-3">
              <div className="flex items-center text-slate-400">
                <Mail className="w-4 h-4 mr-3 text-purple-400" />
                <span className="text-sm">info@lintara.id</span>
              </div>
              <div className="flex items-center text-slate-400">
                <Phone className="w-4 h-4 mr-3 text-green-400" />
                <span className="text-sm">+62 xxx-xxxx-xxxx</span>
              </div>
              <div className="flex items-center text-slate-400">
                <Instagram className="w-4 h-4 mr-3 text-gray-400" />
                <span className="text-sm">instagram.com/Lintara_id</span>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-slate-700/50">
          <div className="flex items-center space-x-4 mb-4 sm:mb-0">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-lg bg-slate-800/50 text-slate-400 ${social.color} transition-all duration-300 hover:scale-110 hover:bg-slate-700/50`}
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="flex flex-col sm:flex-row items-center text-center sm:text-left">
            <p className="text-sm text-slate-500 mb-2 sm:mb-0 sm:mr-4">
              © {currentYear} LINTARA. Semua hak dilindungi undang-undang.
            </p>
            <div className="flex items-center text-sm text-slate-500">
              <span>Dibuat dengan</span>
              <Heart className="w-4 h-4 mx-1 text-red-400 animate-pulse" />
              <span>untuk Indonesia</span>
            </div>
          </div>
        </div>

        {/* Back to Top Button */}
        <div className="text-center mt-8">
          <button
            onClick={() => scrollToSection('home')}
            className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-sm font-medium text-white hover:from-purple-500 hover:to-pink-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
          >
            Kembali ke Atas
            <Code className="w-4 h-4 ml-2" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;