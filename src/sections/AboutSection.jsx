import SectionHeading from '../components/SectionHeading';
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="section-spacing">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-2">A Snapshot of Me</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Left column with description */}
          <div className="md:col-span-5">
            <div className="space-y-6">
              <p className="text-gray-300 text-lg">
                Passionate Software Developer skilled in Java Spring Boot, Hibernate, and web
                development. Experienced in building scalable applications with a focus on clean
                code and performance.
              </p>
              <p className="text-gray-300 text-lg">
                Beyond backend development, I am expanding my skill set to include the MERN
                stack, exploring how to create dynamic and responsive web applications with
                React, Node.js, Express, and MongoDB.
              </p>
              <p className="text-gray-300 text-lg">
                Seeking opportunities to contribute and grow in a dynamic environment.
              </p>
              
              <div className="pt-6 space-y-4">
                <div className="flex items-center gap-4">
                  <Mail size={20} className="text-portfolio-purple" />
                  <span>harshadayadav13@gmail.com</span>
                </div>
                <div className="flex items-center gap-4">
                  <Phone size={20} className="text-portfolio-purple" />
                  <span>+91 8668823575</span>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin size={20} className="text-portfolio-purple" />
                  <span>Sangli, Maharastra</span>
                </div>
                <div className="flex items-center gap-4">
                  <Linkedin size={20} className="text-portfolio-purple" />
                  <a href="https://www.linkedin.com/in/harshadayadav13" target="_blank" rel="noopener noreferrer" className="hover:underline">
                    LinkedIn Profile
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <Github size={20} className="text-portfolio-purple" />
                  <a href="https://github.com/HarshadaSYadav" target="_blank" rel="noopener noreferrer" className="hover:underline">
                    GitHub Profile
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right column with skills boxes */}
          <div className="md:col-span-7">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Box 1 */}
              <div className="bg-black/40 backdrop-blur-sm p-6 rounded-lg border border-gray-800">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-portfolio-purple/20 flex items-center justify-center text-portfolio-purple">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 12.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h16a2 2 0 0 0 2-2v-1.5"/>
                      <path d="M22 12.5h-4a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h4"/>
                      <path d="m9 16 3-8 3 8"/>
                      <path d="M9 12h6"/>
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-center mb-3">Problem Solving</h3>
                <p className="text-gray-400 text-center">
                  Expert in developing efficient solutions for complex technical challenges
                </p>
              </div>
              
              {/* Box 2 */}
              <div className="bg-black/40 backdrop-blur-sm p-6 rounded-lg border border-gray-800">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-portfolio-purple/20 flex items-center justify-center text-portfolio-purple">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                      <circle cx="9" cy="7" r="4"/>
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-center mb-3">Team Work</h3>
                <p className="text-gray-400 text-center">
                  Collaborative team player with excellent communication skills
                </p>
              </div>
              
              {/* Box 3 */}
              <div className="bg-black/40 backdrop-blur-sm p-6 rounded-lg border border-gray-800">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-portfolio-purple/20 flex items-center justify-center text-portfolio-purple">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M6 18h8"/>
                      <path d="M15 12h.01"/>
                      <path d="M18 10h.01"/>
                      <path d="M21.12 8.38a3 3 0 0 0-1.04-1.04L13 2.92a3 3 0 0 0-2 0L4.92 7.34a3 3 0 0 0-1.04 1.04A2.94 2.94 0 0 0 3 10a3.1 3.1 0 0 0 1.03 2.32c.58.55 1.3.85 1.97.85h10a5.25 5.25 0 0 1 0 10.5H7"/>
                      <path d="M4 21h1.55a2.5 2.5 0 0 0 2.45-2.06 3.36 3.36 0 0 0-.1-1.44"/>
                      <path d="M9 14c-.86-.9-1.92-1.5-3-1.5-2.76 0-5 2.24-5 5M22 19v3"/>
                      <path d="M19 21h6"/>
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-center mb-3">Innovation</h3>
                <p className="text-gray-400 text-center">
                  Always exploring new technologies and methodologies
                </p>
              </div>
              
              {/* Box 4 */}
              <div className="bg-black/40 backdrop-blur-sm p-6 rounded-lg border border-gray-800">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-portfolio-purple/20 flex items-center justify-center text-portfolio-purple">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="16 18 22 12 16 6"/>
                      <polyline points="8 6 2 12 8 18"/>
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-center mb-3">Clean Code</h3>
                <p className="text-gray-400 text-center">
                  Advocate for maintainable and well-documented code
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
