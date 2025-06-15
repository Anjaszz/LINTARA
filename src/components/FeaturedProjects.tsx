import React, { useState } from 'react';
import { 
  ChevronRight, 
  Users, 
  Brain, 
  Leaf, 
  ExternalLink, 
  Github, 
  Calendar,
  TrendingUp,
  Award,
  Play,
  Star
} from 'lucide-react';

// Interface untuk data project
interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  thumbnail: string;
  category: string;
  technologies: string[];
  features: string[];
  status: 'completed' | 'in-progress' | 'planning';
  duration: string;
  teamSize: number;
  rating?: number;
  demoUrl?: string;
  githubUrl?: string;
  icon: React.ReactNode;
  gradient: string;
  bgGradient: string;
  year: string;
}

const FeaturedProjects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('all');

  // Data projects dengan thumbnail yang lebih realistis
  const projects: Project[] = [
    {
      id: 1,
      title: "Sistem Manajemen Seminar",
      subtitle: "Platform Event Management Terpadu",
      description: "Platform komprehensif untuk mengelola seminar dan acara akademik dengan fitur registrasi, pembayaran, dan sertifikat digital.",
      longDescription: "Sistem manajemen seminar yang dirancang khusus untuk institusi pendidikan dan organisasi profesional. Platform ini menyediakan solusi end-to-end mulai dari registrasi peserta, manajemen pembayaran, hingga distribusi sertifikat digital yang terverifikasi.",
      thumbnail: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&h=400&fit=crop&auto=format&q=80",
      category: "Web Application",
      technologies: ["Codeigniter 3", "MySQL", "Bootstrap", "JavaScript"],
      features: [
        "Registrasi online dengan payment gateway",
        "Dashboard admin untuk manajemen event",
        "Sistem sertifikat digital dengan QR verification",
        "Live streaming integration",
        "Analitik peserta real-time"
      ],
      status: "completed",
      duration: "6 bulan",
      teamSize: 4,
      rating: 4.8,
      demoUrl: "https://simaseminar.web.id",
      githubUrl: "https://github.com/Anjaszz",
      icon: <Users className="w-8 h-8" />,
      gradient: "from-blue-500 to-purple-600",
      bgGradient: "from-blue-500/20 to-purple-600/20",
      year: "2024"
    },
    {
      id: 2,
      title: "Sistem Pakar Deteksi Penyakit Daun Cabai",
      subtitle: "Expert System untuk Diagnosis Pertanian",
      description: "Sistem berbasis aturan untuk mendiagnosis penyakit pada tanaman cabai menggunakan metode forward chaining dan knowledge base.",
      longDescription: "Sistem pakar yang dikembangkan untuk membantu petani dalam mendiagnosis penyakit tanaman cabai secara akurat. Menggunakan knowledge base yang dikurasi oleh ahli pertanian dan metode inferensi forward chaining untuk memberikan diagnosis yang tepat.",
      thumbnail: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&h=400&fit=crop&auto=format&q=80",
      category: "Expert System",
      technologies: ["Html", "Tailwindcss","JavaScript", "Rule-Based Expert System","Forward Chaining AI"],
      features: [
        "Knowledge base penyakit cabai lengkap",
        "Metode forward chaining untuk inferensi",
        "Interface user-friendly untuk petani",
        "Rekomendasi treatment dan pencegahan",
        "Database gejala dan solusi terintegrasi"
      ],
      status: "completed",
      duration: "4 bulan",
      teamSize: 3,
      rating: 4.6,
      demoUrl: "https://www.sipedaci.my.id/",
      githubUrl: "https://github.com/Anjaszz",
      icon: <Brain className="w-8 h-8" />,
      gradient: "from-green-500 to-teal-600",
      bgGradient: "from-green-500/20 to-teal-600/20",
      year: "2025"
    },
    {
      id: 3,
      title: "AI-Powered Chili Disease Detection",
      subtitle: "Computer Vision untuk Deteksi Otomatis",
      description: "Aplikasi berbasis kecerdasan buatan yang menggunakan computer vision untuk deteksi penyakit cabai secara otomatis dan real-time.",
      longDescription: " web yang memanfaatkan deep learning dan computer vision untuk mendeteksi penyakit tanaman cabai hanya dengan mengambil foto daun. Sistem ini menggunakan Convolutional Neural Network (CNN) yang telah dilatih dengan ribuan gambar daun cabai.",
      thumbnail: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=600&h=400&fit=crop&auto=format&q=80",
      category: "AI/ML Application",
      technologies: ["Python", "Yolov11", "Flask","OpenCV"],
      features: [
        "Real-time image recognition",
        "CNN model dengan akurasi 95%+",
        "Mobile app untuk iOS dan Android",
        "Cloud-based processing",
        "Batch processing untuk multiple images"
      ],
      status: "in-progress",
      duration: "8 bulan",
      teamSize: 5,
      rating: 4.9,
      demoUrl: "https://chilinet.my.id/",
      githubUrl: "https://github.com/Anjaszz",
      icon: <Leaf className="w-8 h-8" />,
      gradient: "from-red-500 to-orange-600",
      bgGradient: "from-red-500/20 to-orange-600/20",
      year: "2025"
    }
  ];

  // Filter categories
  const categories = ['all', 'Web Application', 'Expert System', 'AI/ML Application'];

  // Filter projects based on active filter
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  // Get status badge color
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-500/20 text-green-300 border-green-500/30';
      case 'in-progress':
        return 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30';
      case 'planning':
        return 'bg-blue-500/20 text-blue-300 border-blue-500/30';
      default:
        return 'bg-gray-500/20 text-gray-300 border-gray-500/30';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'completed':
        return 'Selesai';
      case 'in-progress':
        return 'Dalam Pengembangan';
      case 'planning':
        return 'Perencanaan';
      default:
        return 'Unknown';
    }
  };

  return (
    <section id="projects" className="py-20 px-4 bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-purple-500/20 rounded-full text-purple-300 text-sm mb-6 backdrop-blur-sm border border-purple-500/30">
            <Award className="w-4 h-4 mr-2" />
            Portfolio Unggulan
          </div>
          <h2 className="text-4xl md:text-5xl font-bold pb-4 mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Proyek Unggulan
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            Koleksi inovasi teknologi yang telah kami kembangkan untuk memberikan solusi nyata 
            bagi berbagai kebutuhan industri dan masyarakat Indonesia.
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === category
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                    : 'bg-slate-800/50 text-slate-300 hover:bg-slate-700/50 border border-slate-600/50'
                }`}
              >
                {category === 'all' ? 'Semua' : category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group relative bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700/50 hover:border-purple-500/50 transition-all duration-500 hover:transform hover:scale-[1.02]"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Project Thumbnail */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.thumbnail} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                
                {/* Status Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 text-xs font-medium rounded-full border ${getStatusBadge(project.status)} backdrop-blur-sm`}>
                    {getStatusText(project.status)}
                  </span>
                </div>

                {/* Year Badge */}
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 text-xs font-medium bg-purple-500/20 text-purple-300 rounded-full border border-purple-500/30 backdrop-blur-sm">
                    {project.year}
                  </span>
                </div>

                {/* Play/Preview Button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="w-16 h-16 bg-purple-600/90 rounded-full flex items-center justify-center backdrop-blur-sm hover:bg-purple-500 transition-colors duration-300">
                    <Play className="w-8 h-8 text-white ml-1" />
                  </button>
                </div>

                {/* Project Icon */}
                <div className="absolute bottom-4 left-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${project.gradient} rounded-xl flex items-center justify-center text-white`}>
                    {project.icon}
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                {/* Category */}
                <div className="text-xs text-purple-300 font-medium mb-2">
                  {project.category}
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors line-clamp-2">
                  {project.title}
                </h3>
                <p className="text-sm text-purple-200 mb-3 font-medium">
                  {project.subtitle}
                </p>

                {/* Description */}
                <p className="text-slate-300 mb-4 text-sm leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="px-2 py-1 text-xs font-medium bg-slate-700/50 text-slate-300 rounded-md border border-slate-600/50"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 text-xs font-medium bg-purple-500/20 text-purple-300 rounded-md border border-purple-500/30">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>

                {/* Project Stats */}
                <div className="flex items-center justify-between mb-4 text-xs text-slate-400">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <Users className="w-3 h-3 mr-1" />
                      <span>{project.teamSize} orang</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-3 h-3 mr-1" />
                      <span>{project.duration}</span>
                    </div>
                  </div>
                  {project.rating && (
                    <div className="flex items-center">
                      <Star className="w-3 h-3 mr-1 text-yellow-400 fill-current" />
                      <span className="text-yellow-400">{project.rating}</span>
                    </div>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center justify-between">
                  <button 
                    onClick={() => setSelectedProject(selectedProject === project.id ? null : project.id)}
                    className="flex items-center text-purple-400 hover:text-purple-300 font-medium text-sm group-hover:translate-x-1 transition-all duration-300"
                  >
                    Lihat Detail
                    <ChevronRight className="ml-1 w-4 h-4" />
                  </button>
                  
                  <div className="flex items-center space-x-2">
                    {project.demoUrl && (
                      <a 
                        href={project.demoUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 bg-slate-700/50 rounded-lg hover:bg-purple-600 transition-colors duration-300"
                      >
                        <ExternalLink className="w-4 h-4 text-slate-300 hover:text-white" />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 bg-slate-700/50 rounded-lg hover:bg-gray-600 transition-colors duration-300"
                      >
                        <Github className="w-4 h-4 text-slate-300 hover:text-white" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Expanded Details */}
                {selectedProject === project.id && (
                  <div className="mt-6 pt-6 border-t border-slate-600/50 animate-fade-in">
                    <h4 className="font-semibold text-white mb-3">Deskripsi Lengkap</h4>
                    <p className="text-slate-300 text-sm mb-4 leading-relaxed">
                      {project.longDescription}
                    </p>
                    
                    <h4 className="font-semibold text-white mb-3">Fitur Utama</h4>
                    <ul className="space-y-2 mb-4">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start text-sm text-slate-300">
                          <TrendingUp className="w-3 h-3 mr-2 mt-0.5 text-purple-400 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex} 
                          className="px-2 py-1 text-xs font-medium bg-purple-500/20 text-purple-300 rounded-md border border-purple-500/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl p-8 border border-purple-500/30 backdrop-blur-sm">
            <h3 className="text-3xl font-bold text-white mb-4">
              Punya Ide Proyek?
            </h3>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
              Mari berkolaborasi untuk mewujudkan ide inovatif Anda menjadi solusi teknologi 
              yang berdampak positif bagi masyarakat.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a  href='http://wa.me/6282258040148' target='_blank'  className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold hover:from-purple-500 hover:to-pink-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25">
                Diskusi Proyek
              </a>
              <button className="px-8 py-4 border-2 border-purple-400 rounded-full font-semibold hover:bg-purple-400 hover:text-slate-900 transition-all duration-300">
                Lihat Semua Proyek
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;