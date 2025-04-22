
import { Briefcase, ExternalLink, Calendar } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { useState } from 'react';
import { Card, CardContent } from '../components/ui/card';

const ExperienceSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  
  const experiences = [
    {
      position: "Software Developer Intern",
      company: "Numetry Technologies",
      companyUrl: "https://www.linkedin.com/company/numetry-technologies/posts/?feedView=all",
      duration: "01/2025 - Present",
      description: "Built full-stack applications using MongoDB, Express, React, and Node.js. Designed and implemented secure authentication features. Developed interactive UI components with React.js.",
      technologies: ["MongoDB", "Express", "React", "Node.js", "Authentication"]
    },
    {
      position: "Java Spring Boot Intern",
      company: "SIBIC Business Incubator",
      companyUrl: "http://www.sibic.in/",
      duration: "07/2024 - 01/2025",
      description: "Developed and optimized RESTful APIs for web applications. Implemented Hibernate for efficient database interaction. Enhanced security features in web applications.",
      technologies: ["Java", "Spring Boot", "Hibernate", "RESTful APIs", "Security"]
    },
    {
      position: "Software Developer Intern",
      company: "Grapptech",
      companyUrl: "https://www.linkedin.com/company/grappltech/",
      duration: "07/2024 - 08/2024",
      description: "Full-stack web development with hands-on experience in HTML, CSS, and JavaScript.",
      technologies: ["HTML", "CSS", "JavaScript", "Full-stack"]
    },
    {
      position: "Student Intern",
      company: "Triplet's Services",
      companyUrl: "https://www.linkedin.com/company/triplet-s-services/",
      duration: "07/2023 - 08/2023",
      description: "Gained hands-on experience in designing complex queries, optimizing database performance, and managing data integrity.",
      technologies: ["SQL", "Database Optimization", "Data Management"]
    }
  ];

  return (
    <section id="experience" className="section-spacing">
      <div className="container mx-auto px-4">
        <SectionHeading title="Where I've Worked" />
        
        <div className="max-w-5xl mx-auto relative">
          {/* Timeline container */}
          <div className="flex flex-col md:flex-row">
            {/* Left column with timeline */}
            <div className="w-full md:w-1/6 relative mb-8 md:mb-0">
              {/* Timeline line */}
              <div className="absolute left-4 md:left-1/2 top-0 h-full w-1 bg-gradient-to-b from-portfolio-purple to-portfolio-purple-light/30 rounded-full"></div>
              
              {/* Timeline start and end decorations */}
              <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 -top-4 w-8 h-8 rounded-full bg-portfolio-purple/30 filter blur-md animate-pulse-glow"></div>
              <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 -bottom-4 w-8 h-8 rounded-full bg-portfolio-purple/20 filter blur-md animate-pulse-glow"></div>
            </div>
            
            {/* Right column with experiences */}
            <div className="w-full md:w-5/6 pl-8 md:pl-12">
              <div className="space-y-12">
                {experiences.map((exp, index) => (
                  <div 
                    key={index}
                    className="relative"
                  >
                    {/* Timeline dot - positioned absolutely relative to container */}
                    <div className="absolute left-[-33px] md:left-[-41px] top-0 w-5 h-5 rounded-full 
                      bg-portfolio-purple shadow-glow z-10 transition-all duration-300
                      ${hoveredIndex === index ? 'scale-125 bg-portfolio-purple-light' : ''}"
                    ></div>
                    
                    {/* Time period indicator */}
                    <div className="mb-3">
                      <div className="bg-portfolio-purple/10 px-4 py-2 rounded-full inline-flex items-center gap-2 
                        border border-portfolio-purple/20 animate-fade-in">
                        <Calendar size={16} className="text-portfolio-purple-light" />
                        <span className="text-gray-300 text-sm">{exp.duration}</span>
                      </div>
                    </div>
                    
                    {/* Card */}
                    <Card 
                      className={`bg-gradient-to-br from-gray-900 to-black border border-portfolio-purple/20 
                        transition-all duration-300 overflow-hidden animate-fade-in w-full
                        ${hoveredIndex === index ? 'transform -translate-y-2 shadow-glow' : 'shadow-md'}`}
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="h-1 bg-gradient-to-r from-portfolio-purple to-portfolio-purple-light"></div>
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h3 className="text-xl font-bold text-gradient">{exp.position}</h3>
                            <div className="flex items-center flex-wrap">
                              <a 
                                href={exp.companyUrl} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="text-portfolio-purple font-medium hover:text-portfolio-purple-light flex items-center gap-1 transition-colors duration-300"
                              >
                                {exp.company}
                                <ExternalLink size={14} />
                              </a>
                            </div>
                          </div>
                          <div className="hidden sm:flex bg-portfolio-purple/10 p-2 rounded-full">
                            <Briefcase size={18} className="text-portfolio-purple-light" />
                          </div>
                        </div>
                        
                        <p className="text-gray-300 mb-4 leading-relaxed">{exp.description}</p>
                        
                        <div className="flex flex-wrap gap-2 mt-auto">
                          {exp.technologies.map((tech, idx) => (
                            <span 
                              key={idx}
                              className="bg-portfolio-purple/20 text-portfolio-purple-light px-3 py-1 
                                rounded-full text-xs transition-all duration-300
                                hover:bg-portfolio-purple/40 hover:scale-105"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </CardContent>
                      <div className="absolute -top-10 -right-10 w-20 h-20 rounded-full bg-portfolio-purple/10 filter blur-xl"></div>
                      <div className="absolute -bottom-10 -left-10 w-24 h-24 rounded-full bg-portfolio-purple/5 filter blur-xl"></div>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
