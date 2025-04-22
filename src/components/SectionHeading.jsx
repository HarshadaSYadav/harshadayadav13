
const SectionHeading = ({ title }) => {
  return (
    <div className="text-center mb-16 relative">
      <h2 className="text-4xl md:text-5xl font-bold inline-block relative animate-fade-in">
        {title}
        <span className="absolute -bottom-3 left-0 w-full h-1.5 bg-gradient-to-r from-portfolio-purple to-portfolio-purple-light rounded-full"></span>
        {/* Add decorative particles */}
        <span className="absolute -right-8 -top-6 w-6 h-6 rounded-full bg-portfolio-purple/20 animate-floating"></span>
        <span className="absolute -left-10 top-0 w-4 h-4 rounded-full bg-portfolio-purple/10 animate-floating" style={{ animationDelay: '0.5s' }}></span>
      </h2>
      <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-14 h-14 opacity-10">
        <div className="w-full h-full rounded-full bg-portfolio-purple animate-pulse"></div>
      </div>
      {/* Add a subtle glow */}
      <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-64 h-2 bg-portfolio-purple/20 filter blur-xl rounded-full"></div>
    </div>
  );
};

export default SectionHeading;
