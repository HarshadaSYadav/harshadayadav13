
import { Github, ExternalLink } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';

const ProjectsSection = () => {
  const projects = [
    {
      title: "Typing Speed Battle Game",
      description: "Built a fast-paced typing game using the MERN stack with real-time score tracking and dynamic word challenges.",
      image: "https://placehold.co/800x600/9370DB/FFFFFF?text=Typing+Battle+Game",
      technologies: ["MongoDB", "Express", "React", "Node.js", "Authentication"],
      github: "https://github.com/HarshadaSYadav/TypingSpeedBattle_Game.git",
      demo: "https://typing-speed-battle-game-frontend.vercel.app/"
    },
    {
      title: "Portfolio Website",
      description: "MERN stack-based personal portfolio showcasing projects and skills.",
      image: "https://placehold.co/800x600/9370DB/FFFFFF?text=Portfolio+Website",
      technologies: ["Javascript", "React", "Tailwind CSS"],
      github: "https://github.com/HarshadaSYadav",
      demo: "https://harshadayadav13.vercel.app/"
    },
    {
      title: "Student Marks Evaluation System",
      description: "The Student Mark Evaluation System is a Java-based web app to manage records, calculate grades, and generate performance reports efficiently.",
      image: "https://placehold.co/800x600/9370DB/FFFFFF?text=Marks+Evaluation",
      technologies: [ "Java","JSP", "CSS", "MySQL", "JDBC"],
      github: "https://github.com/HarshadaSYadav/Student_Mark_Evaluation_System.git",
      demo: "https://example.com"
    },
    {
      title: "College Fees Management System",
      description: "Desktop software for student registration, payment tracking, and financial reporting.",
      image: "https://placehold.co/800x600/9370DB/FFFFFF?text=Fees+Management",
      technologies: ["Java", "MySQL", "Hibernate", "Spring Boot", "JPA"],
      github: "https://github.com/HarshadaSYadav/CollegeFeesManagementSoftware.git",
      demo: "https://example.com"
    },
    {
      title: "Algorithm Visualizer",
      description: "Interactive web app for visualizing sorting and graph algorithms step by step.",
      image: "https://placehold.co/800x600/9370DB/FFFFFF?text=Algorithm+Visualizer",
      technologies: ["JavaScript", "HTML5", "CSS3", "Data Structures", "Algorithms"],
      github: "https://github.com/HarshadaSYadav/AlgorithmVisulizer.git",
      demo: "https://example.com"
    }
  ];

  return (
    <section id="projects" className="section-spacing">
      <div className="container mx-auto px-4">
        <SectionHeading title="My Innovation Lab" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-gray-900 to-portfolio-dark border border-gray-800 rounded-lg overflow-hidden hover:shadow-lg hover:shadow-portfolio-purple/20 transition-all"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, idx) => (
                    <span 
                      key={idx}
                      className="bg-portfolio-purple/20 text-portfolio-purple-light px-3 py-1 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-400 hover:text-portfolio-purple transition-colors"
                  >
                    <Github size={18} className="mr-1" />
                    <span>Code</span>
                  </a>
                  <a 
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-400 hover:text-portfolio-purple transition-colors"
                  >
                    <ExternalLink size={18} className="mr-1" />
                    <span>Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
