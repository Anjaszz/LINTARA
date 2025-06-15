import React, { useState, useEffect } from 'react';
import {  Instagram, Mail, Phone } from 'lucide-react';
import Header from './components/Header';
import Footer from './components/Footer';
import TeamSection from './components/Team';
import WhyUsSection from './components/WhyUsSection';
import FeaturedProjects from './components/FeaturedProjects';
import logo from './assets/only-logo.png';
import HeroSection from './components/HeroSeection';

const LintaraLanding: React.FC = () => {
 
  const [scrollY, setScrollY] = useState(0);




  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  const stats = [
    { number: "10+", label: "Proyek Selesai" },
    { number: "50+", label: "Pengguna Aktif" },
    { number: "3", label: "Teknologi Utama" },
    { number: "100%", label: "Inovasi" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800 text-white overflow-hidden">
      {/* Navigation */}
      <Header scrollY={scrollY} />

      {/* Hero Section */}
      <HeroSection />

      {/* Stats Section */}
      <section className="py-16 bg-slate-800/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">{stat.number}</div>
                <div className="text-slate-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

            {/* About Section */}
      <section id="about" className="py-20 px-4 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Tentang LINTARA
              </h2>
              <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                LINTARA (Lembaga Inovasi dan Teknologi Nusantara) adalah organisasi yang berdedikasi 
                untuk mengembangkan solusi teknologi inovatif yang dapat memberikan dampak positif 
                bagi kemajuan Indonesia.
              </p>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                Kami fokus pada pengembangan sistem manajemen modern, aplikasi berbasis kecerdasan 
                buatan, dan teknologi terdepan lainnya yang dapat membantu berbagai sektor industri 
                dan masyarakat Indonesia.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a  href='http://wa.me/6282258040148' target='_blank'  className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold hover:from-purple-500 hover:to-pink-500 transition-all duration-300">
                  Diskusi Proyek
                </a>
                <button className="px-6 py-3 border border-purple-400 rounded-lg font-semibold hover:bg-purple-400 hover:text-slate-900 transition-all duration-300">
                  Pelajari Lebih Lanjut
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-80 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-purple-500/30">
              <img src={logo} alt="Logo" />
              </div>
            </div>
          </div>
        </div>
      </section>

     


      {/* Projects Section */}
      <FeaturedProjects />



      <TeamSection />
      <WhyUsSection />

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Mari Berkolaborasi
          </h2>
          <p className="text-lg text-slate-300 mb-12 max-w-2xl mx-auto">
            Tertarik untuk berkolaborasi atau ingin mengetahui lebih lanjut tentang proyek-proyek kami? 
            Jangan ragu untuk menghubungi tim LINTARA.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center p-6 bg-slate-800/50 rounded-xl border border-slate-700/50">
              <Mail className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-slate-400">info@lintara.id</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-slate-800/50 rounded-xl border border-slate-700/50">
              <Phone className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="font-semibold mb-2">Telepon</h3>
              <p className="text-slate-400">+62 857-1129-7160</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-slate-800/50 rounded-xl border border-slate-700/50">
              <Instagram className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="font-semibold mb-2">Instagram</h3>
              <p className="text-slate-400">instagram.com/lintara</p>
            </div>
          </div>
          
          <a  href='http://wa.me/6282258040148' target='_blank'  className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold hover:from-purple-500 hover:to-pink-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25">
            Hubungi Kami Sekarang
          </a>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default LintaraLanding;