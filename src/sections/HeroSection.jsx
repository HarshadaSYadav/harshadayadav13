import { useState, useEffect } from 'react';
import { Download } from 'lucide-react';

const HeroSection = () => {
  const [subtitleIndex, setSubtitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);
  
  const subtitles = [
    'Java Developer',
    'Web Developer',
    'Software Developer'
  ];

  useEffect(() => {
    const subtitle = subtitles[subtitleIndex];
    const currentLength = displayText.length;
    
    const handleTyping = () => {
      if (!isDeleting && currentLength === subtitle.length) {
        // Once the full word is typed, wait and then start deleting
        setTypingSpeed(1500); // Pause before deleting
        setIsDeleting(true);
        return;
      }
      
      if (isDeleting && currentLength === 0) {
        // Once fully deleted, move to the next word
        setIsDeleting(false);
        setTypingSpeed(150);
        setSubtitleIndex((prevIndex) => (prevIndex + 1) % subtitles.length);
        return;
      }
      
      // Set typing speed
      const speed = isDeleting ? 100 : 150;
      setTypingSpeed(speed);
      
      // Update the displayed text
      const nextText = isDeleting
        ? subtitle.substring(0, currentLength - 1)
        : subtitle.substring(0, currentLength + 1);
      
      setDisplayText(nextText);
    };
    
    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [subtitleIndex, displayText, isDeleting, typingSpeed, subtitles]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-20">
      <div className="container mx-auto px-4 text-center">
        <div className="animate-fade-in">
          <h2 className="text-2xl md:text-3xl mb-4">Hello!</h2>
          <div className="flex flex-col md:flex-row items-center justify-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2 md:mb-0">I'm </h1>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold ml-2 name-gradient">
              Harshada Yadav
            </h1>
          </div>
          <h3 className="text-2xl md:text-3xl my-6 h-10">
            <span className="typing-text">{displayText}</span>
            <span className="typing-cursor">|</span>
          </h3>
          <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto mb-12">
            Building scalable applications with clean code and modern technologies
          </p>
          <a 
            href="/harshada shashank yadav resume (3).pdf" // Ensure this path matches the file in the public folder
            download 
            className="inline-flex items-center bg-portfolio-purple hover:bg-portfolio-purple-light text-white font-medium py-3 px-6 rounded-lg transition-colors"
          >
            <Download className="mr-2" size={20} />
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
