import React from 'react';
import { Github, Linkedin, Mail, Crown,Instagram } from 'lucide-react';

// Interface untuk data team member
interface TeamMember {
  id: number;
  name: string;
  position: string;
  description: string;
  image: string;
  social: {
    github?: string;
    linkedin?: string;
    email?: string;
    instagram?:string;
  };
  isFounder?: boolean;
}

const TeamSection: React.FC = () => {
  // Data team members
  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "Anjas Rani",
      position: "Founder & CEO",
      description: "",
      image: "https://chilinet.my.id/static/assets/anjas.png",
      social: {
        github: "https://github.com/Anjaszz",
        linkedin: "https://www.linkedin.com/in/anjas-rani-562396212/",
        email: "anjasrani44@gmail.com",
        instagram: "https://www.instagram.com/anjaszz_/"
      },
      isFounder: true
    },
    {
      id: 2,
      name: "Sari Dewi",
      position: "Lead Developer",
      description: "Expert dalam pengembangan web dan mobile applications",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face&auto=format&q=80",
      social: {
        github: "https://github.com/saridewi",
        linkedin: "https://linkedin.com/in/saridewi",
        email: "sari.dewi@lintara.id"
      }
    },
    {
      id: 3,
      name: "Budi Santoso",
      position: "AI Engineer",
      description: "Spesialis dalam machine learning dan artificial intelligence",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face&auto=format&q=80",
      social: {
        github: "https://github.com/budisantoso",
        linkedin: "https://linkedin.com/in/budisantoso",
        email: "budi.santoso@lintara.id"
      }
    },
    {
      id: 4,
      name: "Maya Putri",
      position: "UI/UX Designer",
      description: "Creative designer dengan passion untuk user experience",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face&auto=format&q=80",
      social: {
        github: "https://github.com/mayaputri",
        linkedin: "https://linkedin.com/in/mayaputri",
        email: "maya.putri@lintara.id"
      }
    },
    {
      id: 5,
      name: "Andi Pratama",
      position: "Backend Developer",
      description: "Expert dalam sistem backend dan database management",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face&auto=format&q=80",
      social: {
        github: "https://github.com/andipratama",
        linkedin: "https://linkedin.com/in/andipratama",
        email: "andi.pratama@lintara.id"
      }
    },
    {
      id: 6,
      name: "Lisa Anggraini",
      position: "Project Manager",
      description: "Koordinator proyek yang berpengalaman dalam agile methodology",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop&crop=face&auto=format&q=80",
      social: {
        github: "https://github.com/lisaanggraini",
        linkedin: "https://linkedin.com/in/lisaanggraini",
        email: "lisa.anggraini@lintara.id"
      }
    }
  ];

  // Pisahkan founder dan team members
  const founder = teamMembers.find(member => member.isFounder);
  const members = teamMembers.filter(member => !member.isFounder);

  return (
    <section id="team" className="py-20 px-4 bg-slate-800/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Tim Kami
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Bertemu dengan para ahli dan inovator yang membentuk masa depan teknologi Indonesia
          </p>
        </div>

        {/* Founder Section */}
        {founder && (
          <div className="mb-16">
            <div className="flex justify-center">
              <div className="relative group max-w-sm">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative bg-slate-800/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 text-center">
                  {/* Founder Badge */}
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="flex items-center space-x-1 bg-gradient-to-r from-yellow-500 to-orange-500 px-3 py-1 rounded-full text-xs font-bold text-white">
                      <Crown className="w-3 h-3" />
                      <span>FOUNDER</span>
                    </div>
                  </div>

                  {/* Profile Image */}
                  <div className="relative mb-6 mt-4">
                    <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-gradient-to-r from-purple-500 to-pink-500 shadow-2xl">
                      <img 
                        src={founder.image} 
                        alt={founder.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                      <Crown className="w-4 h-4 text-white" />
                    </div>
                  </div>

                  {/* Info */}
                  <h3 className="text-2xl font-bold text-white mb-2">{founder.name}</h3>
                  <p className="text-purple-300 font-semibold mb-4">{founder.position}</p>
                  <p className="text-slate-300 mb-6 leading-relaxed">{founder.description}</p>

                  {/* Social Links */}
                  <div className="flex justify-center space-x-4">
                    {founder.social.github && (
                      <a href={founder.social.github} target="_blank" rel="noopener noreferrer" 
                         className="p-2 bg-slate-700/50 rounded-lg hover:bg-purple-600 transition-colors duration-300">
                        <Github className="w-5 h-5 text-slate-300 hover:text-white" />
                      </a>
                    )}
                    {founder.social.linkedin && (
                      <a href={founder.social.linkedin} target="_blank" rel="noopener noreferrer"
                         className="p-2 bg-slate-700/50 rounded-lg hover:bg-blue-600 transition-colors duration-300">
                        <Linkedin className="w-5 h-5 text-slate-300 hover:text-white" />
                      </a>
                    )}
                    {founder.social.email && (
                      <a href={`mailto:${founder.social.email}`}
                         className="p-2 bg-slate-700/50 rounded-lg hover:bg-green-600 transition-colors duration-300">
                        <Mail className="w-5 h-5 text-slate-300 hover:text-white" />
                      </a>
                    )}
                     {founder.social.email && (
                       <a href={founder.social.instagram} target="_blank" rel="noopener noreferrer"
                       className="p-2 bg-slate-700/50 rounded-lg hover:bg-red-600 transition-colors duration-300">
                      <Instagram className="w-5 h-5 text-slate-300 hover:text-white" />
                    </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {members.map((member, index) => (
            <div key={member.id} 
                 className="group relative bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105"
                 style={{ animationDelay: `${index * 100}ms` }}>
              
              {/* Profile Image */}
              <div className="relative mb-4">
                <div className="w-20 h-20 mx-auto rounded-full overflow-hidden border-2 border-purple-500/30 group-hover:border-purple-500 transition-colors duration-300">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>

              {/* Info */}
              <div className="text-center">
                <h3 className="text-lg font-bold text-white mb-1 group-hover:text-purple-300 transition-colors">
                  {member.name}
                </h3>
                <p className="text-purple-300 text-sm font-medium mb-3">{member.position}</p>
                <p className="text-slate-400 text-xs mb-4 leading-relaxed">{member.description}</p>

                {/* Social Links */}
                <div className="flex justify-center space-x-2">
                  {member.social.github && (
                    <a href={member.social.github} target="_blank" rel="noopener noreferrer" 
                       className="p-1.5 bg-slate-700/50 rounded-md hover:bg-purple-600 transition-colors duration-300">
                      <Github className="w-4 h-4 text-slate-300 hover:text-white" />
                    </a>
                  )}
                  {member.social.linkedin && (
                    <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer"
                       className="p-1.5 bg-slate-700/50 rounded-md hover:bg-blue-600 transition-colors duration-300">
                      <Linkedin className="w-4 h-4 text-slate-300 hover:text-white" />
                    </a>
                  )}
                  {member.social.email && (
                    <a href={`mailto:${member.social.email}`}
                       className="p-1.5 bg-slate-700/50 rounded-md hover:bg-green-600 transition-colors duration-300">
                      <Mail className="w-4 h-4 text-slate-300 hover:text-white" />
                    </a>
                  )}
                   {member.social.linkedin && (
                    <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer"
                       className="p-1.5 bg-slate-700/50 rounded-md hover:bg-blue-600 transition-colors duration-300">
                      <Instagram className="w-4 h-4 text-slate-300 hover:text-white" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
};

export default TeamSection;