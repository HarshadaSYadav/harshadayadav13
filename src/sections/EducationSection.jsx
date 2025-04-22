
import { GraduationCap, Award, Calendar, Bookmark } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { useState } from 'react';
import { Card, CardContent } from '../components/ui/card';

const EducationSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const education = [
    {
      degree: "Bachelor of Computer Science and Engineering",
      institution: "Nanasaheb Mahadik College of Engineering, Sangli",
      duration: "2021 - 2025",
      description: "Studying core computer science concepts including data structures, algorithms, database management systems, and software engineering principles.",
      gpa: "8.1 SGPA",
      achievements: ["Merit Scholarship"]
    },
    {
      degree: "HSC (12th Grade)",
      institution: "Vidyamandir Highschool and Junior College, Islampur",
      duration: "Completed in 2021",
      description: "Completed higher secondary education with focus on science and mathematics.",
      gpa: "96.67%",
      achievements: ["Science Stream"]
    },
    {
      degree: "SSC (10th Grade)",
      institution: "Islampur High School, Islampur",
      duration: "Completed in 2019",
      description: "Completed secondary education with excellence in mathematics and science subjects.",
      gpa: "91.40%",
      achievements: ["Academic Excellence"]
    }
  ];

  return (
    <section id="education" className="section-spacing bg-black/40">
      <div className="container mx-auto px-4">
        <SectionHeading title="My Learning Path" />
        
        <div className="max-w-4xl mx-auto space-y-8">
          {education.map((edu, index) => (
            <Card 
              key={index}
              className={`backdrop-blur-md bg-gradient-to-br from-gray-900/70 to-black/80 border-l-4 
                transition-all duration-300 overflow-hidden ${
                hoveredIndex === index ? 'border-l-portfolio-purple shadow-xl shadow-portfolio-purple/10 transform -translate-y-1' : 'border-l-portfolio-purple/40 shadow-md'
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <GraduationCap className={`text-portfolio-purple transition-all duration-300 ${
                        hoveredIndex === index ? 'scale-110' : ''
                      }`} size={22} />
                      <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">{edu.degree}</h3>
                    </div>
                    <p className="text-portfolio-purple-light font-medium">{edu.institution}</p>
                  </div>
                  <div className="flex items-center gap-2 bg-portfolio-purple/10 px-4 py-2 rounded-full text-sm">
                    <Calendar size={16} className="text-portfolio-purple-light" />
                    <span className="text-gray-300">{edu.duration}</span>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-4 leading-relaxed border-l-2 border-portfolio-purple/30 pl-4">{edu.description}</p>
                
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mt-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Award size={16} className="text-portfolio-purple-light" />
                      <span className="text-sm font-semibold text-gray-200">Achievements</span>
                    </div>
                    <ul className="flex flex-wrap gap-2">
                      {edu.achievements.map((achievement, idx) => (
                        <li 
                          key={idx} 
                          className="flex items-center gap-1.5 bg-portfolio-purple/10 px-3 py-1 rounded-full text-xs text-portfolio-purple-light"
                        >
                          <Bookmark size={12} />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-portfolio-purple/20 text-portfolio-purple-light px-4 py-2 rounded-full text-sm inline-block
                    border border-portfolio-purple/30 shadow-sm transition-all duration-300 hover:bg-portfolio-purple/30">
                    Result: <span className="font-semibold">{edu.gpa}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
