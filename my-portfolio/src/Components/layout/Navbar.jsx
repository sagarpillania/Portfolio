import { useState } from "react";
import Button from "../ui/Buttons";
import { HiMenu, HiX } from "react-icons/hi"; // Install react-icons if you haven't already

function Navbar({ activeSection, onOpenForm }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isActive = (id) => activeSection === id;

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "services", label: "Services" },
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "skills", label: "Skills" },
  ];

  return (
    <>
      {/* Fixed Header Wrapper */}
      <div className="fixed top-0 left-0 w-full flex justify-between items-center p-6 text-white font-medium z-50 bg-black/80 backdrop-blur-md select-none">
        
        {/* Logo */}
        <div className="logo bg-[#121212] border border-zinc-800 py-2 px-4 rounded-full cursor-pointer hover:bg-zinc-800 transition">
          Sp
        </div>
        
        {/* Desktop Menu Capsule (Hidden on mobile) */}
        <div className="hidden md:flex sidebar justify-center items-center gap-6 border border-zinc-800 py-2 px-6 rounded-full bg-[#121212]/80 backdrop-blur-md text-sm text-zinc-400">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={isActive(link.id) ? "text-white border-b border-white pb-0.5" : "hover:text-white transition"}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Action Button & Hamburger Container */}
        <div className="flex items-center gap-4">
          <div className="hidden sm:block">
            <Button onClick={onOpenForm}>Let's Connect</Button>
          </div>

          {/* Hamburger Toggle (Visible on mobile only) */}
          <button 
            onClick={toggleMenu}
            className="md:hidden text-2xl text-zinc-400 hover:text-white transition cursor-pointer p-1"
          >
            {isMenuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      <div 
        className={`fixed inset-0 bg-black/95 z-40 flex flex-col justify-center items-center gap-8 transition-transform duration-300 ease-in-out md:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {navLinks.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            onClick={() => setIsMenuOpen(false)}
            className={`text-xl font-semibold tracking-wide ${
              isActive(link.id) ? "text-white border-b-2 border-white pb-1" : "text-zinc-400"
            }`}
          >
            {link.label}
          </a>
        ))}
        
        {/* Connect Button inside Drawer for small screens */}
        <div className="sm:hidden mt-4">
          <Button onClick={() => { setIsMenuOpen(false); onOpenForm(); }}>
            Let's Connect
          </Button>
        </div>
      </div>
    </>
  );
}

export default Navbar;