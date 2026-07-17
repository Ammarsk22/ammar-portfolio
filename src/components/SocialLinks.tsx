import { Github, Linkedin, Instagram, Mail } from 'lucide-react';

const SocialLinks = () => {
  return (
    <div className="flex items-center gap-6">
      {/* GitHub Link */}
      <a 
        href="https://github.com/Ammarsk22"
        target="_blank" 
        rel="noopener noreferrer"
        className="text-ink-soft hover:text-ink transition-colors duration-300"
        aria-label="GitHub"
      >
        <Github className="w-[22px] h-[22px] sm:w-6 sm:h-6" />
      </a>

      {/* LinkedIn Link */}
      <a 
        href="https://www.linkedin.com/in/skammar22/"
        target="_blank" 
        rel="noopener noreferrer"
        className="text-ink-soft hover:text-blue-500 transition-colors duration-300"
        aria-label="LinkedIn"
      >
        <Linkedin className="w-[22px] h-[22px] sm:w-6 sm:h-6" />
      </a>

      {/* Instagram Link */}
      <a 
        href="https://www.instagram.com/sk_ammar_22/"
        target="_blank" 
        rel="noopener noreferrer"
        className="text-ink-soft hover:text-pink-500 transition-colors duration-300"
        aria-label="Instagram"
      >
        <Instagram className="w-[22px] h-[22px] sm:w-6 sm:h-6" />
      </a>

      {/* Email Link */}
      <a 
        href="mailto:ammarsk200422@gmail.com"
        className="text-ink-soft hover:text-green-500 transition-colors duration-300"
        aria-label="Email"
      >
        <Mail className="w-[22px] h-[22px] sm:w-6 sm:h-6" />
      </a>
    </div>
  );
};

export default SocialLinks;