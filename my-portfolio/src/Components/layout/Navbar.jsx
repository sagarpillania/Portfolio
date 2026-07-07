import Button from "../ui/Buttons";
function Navbar() {
  return (
    // Fixed wrapper to make it float centered at the top
    <div className="fixed top-0 left-0 w-full flex justify-between items-center p-6 text-white font-medium z-50 bg-black/80 backdrop-blur-md select-none">
      
      {/* Logo */}
      <div className="logo bg-[#121212] border border-zinc-800 py-2 px-4 rounded-full cursor-pointer hover:bg-zinc-800 transition">
        Sp
      </div>
      
      {/* Menu Capsule */}
      <div className="sidebar flex justify-center items-center gap-6 border border-zinc-800 py-2 px-6 rounded-full bg-[#121212]/80 backdrop-blur-md text-sm text-zinc-400">
        <a href="#home" className="hover:text-white transition">Home</a>
        <a href="#services" className="hover:text-white transition">Services</a>
        {/* Underline class to match the screenshot's active tab */}
        <a href="#about" className="text-white border-b border-white pb-0.5">About</a>
        <a href="#skills" className="hover:text-white transition">Skills</a>
        <a href="#projects" className="hover:text-white transition">Experience</a>
      </div>
      <Button onClick={()=>alert("Let's talk clicked!")}>Let's Talk</Button>
    </div>
  );
}

export default Navbar;