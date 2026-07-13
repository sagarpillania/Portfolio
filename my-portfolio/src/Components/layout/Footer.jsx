import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-black text-zinc-500 border-t border-zinc-900/80 px-8 md:px-16 py-8 mt-16 select-none">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
        
        {/* Left: Copyright */}
        <div className="text-center sm:text-left">
          <p>&copy; {currentYear} Sagar Pillania. All rights reserved.</p>
        </div>

        {/* Right: Social Icon Links */}
        <div className="flex justify-center items-center gap-6 text-sm text-zinc-400">
          <a 
            href="https://github.com/sagarpillania" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-white transition"
          >
            <FaGithub />
          </a>
          <a 
            href="https://www.linkedin.com/in/sagar-pillania/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-white transition"
          >
            <FaLinkedin />
          </a>
          <a 
            href="https://leetcode.com/u/sagarpillania/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-white transition"
          >
            <SiLeetcode />
          </a>
        </div>
        
      </div>
    </footer>
  );
}

export default Footer;