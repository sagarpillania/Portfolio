import Button from "../ui/Buttons";
import { SiLeetcode } from "react-icons/si";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Hero() {
  return (
    <>
      {/* The section is our main container. 
        - px-8 md:px-16: adds nice side spacing.
        - pt-32: pushes the content down so the navbar doesn't cover it.
        - flex flex-col md:flex-row: stacks items vertically on mobile, splits side-by-side on desktop.
      */}
      <section className="min-h-96 w-full bg-black text-white flex flex-col md:flex-row items-center justify-around px-8 md:px-16 pt-32 pb-12 gap-8 select-none" id="home">
        
        {/* Left Box: The text details */}
        <div className="heroText flex flex-col gap-4 max-w-xl">
          <h3 className="text-zinc-400 text-lg font-medium">
            Hey, I am Sagar Pillania
          </h3>
          
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
            Full-Stack <br /> Developer
          </h2>
          
          <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
            Blending thoughtful, logical backend design with clean, responsive front-end execution 
            and scalable architecture to create web applications that look great and perform flawlessly
          </p>
          
          <div className="mt-2">
            {/* Using your custom variant="card" for the sharper corners here */}
            <a href="/SagarPillania_resume.pdf" download="SagarPillania_resume.pdf" className="inline-flex">
              <Button variant="card">
                Download CV
              </Button>
            </a>
          </div>
          <div className="flex justify-start items-start gap-8 ml-1 mt-2">
            <a href="https://github.com/sagarpillania" target="_blank" className="hover:text-white transition"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/sagar-pillania/" target="_blank" className="hover:text-white transition"><FaLinkedin /></a>
            <a href="https://leetcode.com/u/sagarpillania/" target="_blank" className="hover:text-white transition"> <SiLeetcode /></a>
          </div>
        </div>

        {/* Right Box: The image placeholder container */}
        <div className="heroPic w-64 h-78 md:w-70 md:h-94  rounded-2xl overflow-hidden mr-20">
          {
            <img src="src\Assets\Sagar.png" className="w-full h-full object-cover grayscale" />
          }
        </div>
        
      </section>
    </>
  );
}

export default Hero;