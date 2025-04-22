import { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Twitter, Send } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { useIsMobile } from '@/hooks/use-mobile';
import emailjs from 'emailjs-com';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const isMobile = useIsMobile();
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const serviceId = "service_fm3z76n";  // Your EmailJS service ID
    const templateId = "template_ow67mtt"; // Your EmailJS template ID
    const publicKey = "E56Tv35vLxA_OdcZF";   // Your EmailJS public key (you can get this from EmailJS)

    emailjs
      .send(serviceId, templateId, formData, publicKey)
      .then(
        (response) => {
          console.log("Email sent successfully:", response);
          toast({
            title: "Message sent!",
            description: "Thank you for your message. I'll get back to you soon.",
            variant: "success",
          });
          setFormData({ name: '', email: '', message: '' });
        },
        (error) => {
          console.error("Failed to send email:", error); // Log the error for debugging
          if (error.text === "Gmail_API: Invalid grant. Please reconnect your Gmail account") {
            toast({
              title: "Error",
              description: "Gmail account authorization expired. Please reconnect your Gmail account in EmailJS.",
              variant: "error",
            });
          } else {
            toast({
              title: "Error",
              description: "Failed to send your message. Please try again later.",
              variant: "error",
            });
          }
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };
  
  return (
    <section id="contact" className="py-16 md:py-24 overflow-hidden relative">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30 pointer-events-none"></div>
      <div className="absolute top-20 left-10 w-60 md:w-80 h-60 md:h-80 bg-portfolio-purple/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 right-10 w-40 md:w-60 h-40 md:h-60 bg-portfolio-purple/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        {/* Where to find me section */}
        <div className="text-center mb-16 md:mb-24">
          <SectionHeading title="Where to find me" />
          
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <a 
              href="http://linkedin.com/in/harshadayadav13" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 md:gap-3 px-4 md:px-6 py-3 bg-black/20 backdrop-blur-lg rounded-xl hover:bg-portfolio-purple/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-portfolio-purple/20 group"
            >
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-blue-600 flex items-center justify-center text-white transform group-hover:scale-110 transition-all">
                <Linkedin size={isMobile ? 16 : 20} />
              </div>
              <span className="text-xs md:text-base font-medium">Connect on LinkedIn</span>
            </a>
            
            <a 
              href="https://github.com/HarshadaSYadav" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 md:gap-3 px-4 md:px-6 py-3 bg-black/20 backdrop-blur-lg rounded-xl hover:bg-portfolio-purple/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-portfolio-purple/20 group"
            >
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gray-800 flex items-center justify-center text-white transform group-hover:scale-110 transition-all">
                <Github size={isMobile ? 16 : 20} />
              </div>
              <span className="text-xs md:text-base font-medium">Check repos on GitHub</span>
            </a>
            
            <a 
              href="https://x.com/HarshadaSY13" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 md:gap-3 px-4 md:px-6 py-3 bg-black/20 backdrop-blur-lg rounded-xl hover:bg-portfolio-purple/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-portfolio-purple/20 group"
            >
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-blue-400 flex items-center justify-center text-white transform group-hover:scale-110 transition-all">
                <Twitter size={isMobile ? 16 : 20} />
              </div>
              <span className="text-xs md:text-base font-medium">Follow on Twitter</span>
            </a>
          </div>
        </div>
        
        {/* Get in touch section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 md:mb-12">Get in Touch Now</h2>
          
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-16 md:mb-24">
            <div className="flex items-center gap-2 md:gap-3 px-4 md:px-6 py-3 bg-black/30 backdrop-blur-md rounded-xl border border-gray-800 w-full sm:w-auto">
              <Mail className="text-red-500 shrink-0" size={isMobile ? 18 : 22} />
              <span className="text-sm md:text-base truncate">harshadayadav13@gmail.com</span>
            </div>
            
            <div className="flex items-center gap-2 md:gap-3 px-4 md:px-6 py-3 bg-black/30 backdrop-blur-md rounded-xl border border-gray-800 w-full sm:w-auto">
              <Phone className="text-green-500 shrink-0" size={isMobile ? 18 : 22} />
              <span className="text-sm md:text-base">+91 8668823575</span>
            </div>
            
            <div className="flex items-center gap-2 md:gap-3 px-4 md:px-6 py-3 bg-black/30 backdrop-blur-md rounded-xl border border-gray-800 w-full sm:w-auto">
              <MapPin className="text-blue-400 shrink-0" size={isMobile ? 18 : 22} />
              <span className="text-sm md:text-base">Currently in Sangli, India</span>
            </div>
          </div>
        </div>
        
        {/* Contact form section */}
        <div className="flex flex-col-reverse lg:flex-row gap-8 items-center">
          {/* Left side - Image (order changed for mobile) */}
          <div className="w-full lg:w-1/2 mb-0 lg:mb-0">
            <div className="relative">
              <img 
                src="https://www.shutterstock.com/image-vector/get-touch-abstract-concept-vector-600nw-2385779407.jpg" 
                alt="Contact" 
                className="w-full max-w-sm mx-auto rounded-2xl"
              />
              <div className="absolute -inset-1 bg-portfolio-purple/10 rounded-2xl blur-lg -z-10"></div>
            </div>
          </div>
          
          {/* Right side - Form */}
          <div className="w-full lg:w-1/2">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center lg:text-left">Send me a message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6 max-w-md mx-auto lg:mx-0">
              <div>
                <Input 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="bg-black/20 border-gray-800 rounded-lg placeholder:text-gray-500 py-5 md:py-6"
                  required
                />
              </div>
              
              <div>
                <Input 
                  name="email" 
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="bg-black/20 border-gray-800 rounded-lg placeholder:text-gray-500 py-5 md:py-6"
                  required
                />
              </div>
              
              <div>
                <Textarea
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Enter your message"
                  className="bg-black/20 border-gray-800 rounded-lg placeholder:text-gray-500"
                  required
                ></Textarea>
              </div>
              
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-portfolio-purple hover:bg-portfolio-purple-light text-white py-3 md:py-4 h-auto text-sm md:text-base rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 md:h-5 md:w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <>
                    Send message 
                    <Send size={isMobile ? 14 : 16} className="group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
