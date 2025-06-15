import React from 'react';
import { 
  Zap, 
  Shield, 
  Users, 
  Lightbulb, 
  Clock, 
  Trophy, 
  HeartHandshake, 
  TrendingUp,
  CheckCircle,
  Star
} from 'lucide-react';

// Interface untuk data keunggulan
interface WhyUsFeature {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  bgColor: string;
  stats?: string;
}

const WhyUsSection: React.FC = () => {
  // Data keunggulan utama
  const mainFeatures: WhyUsFeature[] = [
    {
      id: 1,
      title: "Inovasi Terdepan",
      description: "Kami menggunakan teknologi terbaru dan pendekatan inovatif untuk menciptakan solusi yang revolusioner dan berkelanjutan.",
      icon: <Lightbulb className="w-8 h-8" />,
      color: "text-yellow-400",
      bgColor: "from-yellow-500/20 to-orange-500/20",
      stats: "50+ Inovasi"
    },
    {
      id: 2,
      title: "Tim Expert",
      description: "Didukung oleh tim ahli berpengalaman dengan keahlian mendalam di berbagai bidang teknologi dan industri.",
      icon: <Users className="w-8 h-8" />,
      color: "text-blue-400",
      bgColor: "from-blue-500/20 to-cyan-500/20",
      stats: "10+ Expert"
    },
    {
      id: 3,
      title: "Keamanan Terjamin",
      description: "Menerapkan standar keamanan tinggi dan best practices untuk melindungi data dan sistem dari berbagai ancaman.",
      icon: <Shield className="w-8 h-8" />,
      color: "text-green-400",
      bgColor: "from-green-500/20 to-emerald-500/20",
      stats: "99.9% Uptime"
    },
    {
      id: 4,
      title: "Performa Optimal",
      description: "Fokus pada kecepatan, efisiensi, dan skalabilitas untuk memberikan pengalaman pengguna yang luar biasa.",
      icon: <Zap className="w-8 h-8" />,
      color: "text-purple-400",
      bgColor: "from-purple-500/20 to-pink-500/20",
      stats: "3x Lebih Cepat"
    }
  ];

  // Data benefits tambahan
  const additionalBenefits = [
    {
      icon: <Clock className="w-5 h-5" />,
      title: "Delivery Tepat Waktu",
      description: "Komitmen untuk menyelesaikan proyek sesuai timeline yang disepakati"
    },
    {
      icon: <Trophy className="w-5 h-5" />,
      title: "Track Record Terbukti",
      description: "Pengalaman sukses dalam berbagai proyek teknologi skala besar"
    },
    {
      icon: <HeartHandshake className="w-5 h-5" />,
      title: "Dukungan 24/7",
      description: "Tim support yang siap membantu kapan saja Anda membutuhkan"
    },
    {
      icon: <TrendingUp className="w-5 h-5" />,
      title: "Skalabilitas Tinggi",
      description: "Solusi yang dapat berkembang seiring pertumbuhan bisnis Anda"
    }
  ];

  // Data testimonial singkat
  const quickTestimonials = [
    {
      rating: 5,
      text: "Solusi AI terbaik untuk deteksi penyakit tanaman",
      author: "PT. Agro Indonesia"
    },
    {
      rating: 5,
      text: "Sistem manajemen yang sangat membantu operasional",
      author: "Universitas Teknologi"
    },
    {
      rating: 5,
      text: "Tim yang profesional dan hasil memuaskan",
      author: "Startup Digital"
    }
  ];

  return (
    <section id="why-us" className="py-20 px-4 bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-purple-500/20 rounded-full text-purple-300 text-sm mb-6 backdrop-blur-sm border border-purple-500/30">
            <Star className="w-4 h-4 mr-2" />
            Keunggulan Kami
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Kenapa Memilih Kami?
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Berkomitmen memberikan solusi teknologi terbaik dengan kualitas world-class 
            dan pelayanan yang memuaskan untuk setiap klien.
          </p>
        </div>

        {/* Main Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {mainFeatures.map((feature, index) => (
            <div 
              key={feature.id}
              className="group relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-500 hover:transform hover:scale-105"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.bgColor} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              <div className="relative z-10">
                {/* Icon & Stats */}
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${feature.bgColor} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <div className={feature.color}>
                      {feature.icon}
                    </div>
                  </div>
                  {feature.stats && (
                    <div className="text-right">
                      <div className="text-2xl font-bold text-purple-400">{feature.stats}</div>
                      <div className="text-xs text-slate-400">Achievement</div>
                    </div>
                  )}
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover Effect Arrow */}
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex items-center text-purple-400 font-medium">
                    <span>Pelajari Lebih Lanjut</span>
                    <CheckCircle className="ml-2 w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Benefits */}
        <div className="bg-slate-800/30 rounded-2xl p-8 mb-16 border border-slate-700/50">
          <h3 className="text-2xl font-bold text-center text-white mb-8">
            Benefit Tambahan yang Anda Dapatkan
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalBenefits.map((benefit, index) => (
              <div 
                key={index}
                className="flex items-start space-x-3 p-4 bg-slate-700/30 rounded-xl hover:bg-slate-700/50 transition-colors duration-300"
              >
                <div className="flex-shrink-0 w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                  <div className="text-purple-400">
                    {benefit.icon}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">{benefit.title}</h4>
                  <p className="text-sm text-slate-300">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats & Testimonials */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Stats */}
          <div>
            <h3 className="text-3xl font-bold text-white mb-8">Pencapaian Kami</h3>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-xl border border-purple-500/30">
                <div className="text-3xl font-bold text-purple-400 mb-2">100%</div>
                <div className="text-slate-300">Client Satisfaction</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-xl border border-blue-500/30">
                <div className="text-3xl font-bold text-blue-400 mb-2">10+</div>
                <div className="text-slate-300">Projects Completed</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-green-600/20 to-emerald-600/20 rounded-xl border border-green-500/30">
                <div className="text-3xl font-bold text-green-400 mb-2">24/7</div>
                <div className="text-slate-300">Support Available</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-yellow-600/20 to-orange-600/20 rounded-xl border border-yellow-500/30">
                <div className="text-3xl font-bold text-yellow-400 mb-2">3+</div>
                <div className="text-slate-300">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Quick Testimonials */}
          <div>
            <h3 className="text-3xl font-bold text-white mb-8">Kata Mereka</h3>
            <div className="space-y-4">
              {quickTestimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className="p-6 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-purple-500/50 transition-colors duration-300"
                >
                  {/* Rating Stars */}
                  <div className="flex items-center mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-slate-300 mb-3 italic">"{testimonial.text}"</p>
                  <div className="text-sm text-purple-300 font-medium">
                    — {testimonial.author}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl p-8 border border-purple-500/30 backdrop-blur-sm">
            <h3 className="text-3xl font-bold text-white mb-4">
              Siap Memulai Proyek Bersama?
            </h3>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
              Mari diskusikan kebutuhan Anda dan temukan solusi teknologi terbaik 
              untuk mengembangkan bisnis Anda ke level selanjutnya.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href='http://wa.me/6282258040148' target='_blank'  className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold hover:from-purple-500 hover:to-pink-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25">
                Konsultasi Gratis
              </a>
              <button className="px-8 py-4 border-2 border-purple-400 rounded-full font-semibold hover:bg-purple-400 hover:text-slate-900 transition-all duration-300">
                Lihat Portfolio
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;