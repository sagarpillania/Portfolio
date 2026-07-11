import Navbar from "./Components/layout/Navbar"
import Hero from "./Components/layout/Hero"
import Services from "./Components/layout/Services"
import About from "./Components/layout/About"
import Experience from "./Components/layout/Experience"
import Skills from "./Components/layout/Skills"
import { useEffect } from "react"
import { useState } from "react";
import TalkForm from "./Components/layout/TalkForm"

function App() {
    const [isOpen,setIsOpen]=useState(false);
    const [activeSection, setActiveSection]=useState("home");
    useEffect(()=>{
        // scrollbar flow to update the navbar as we scroll
        const sections=document.querySelectorAll('div[id]');
        const observer=new IntersectionObserver((entries)=>{
            entries.forEach((entry)=>{
                if(entry.isIntersecting){
                    setActiveSection(entry.target.id);
                }
            });
        },{threshold:0.6});

        sections.forEach((section)=>observer.observe(section));

        return ()=>{sections.forEach((section)=>observer.unobserve(section))}
    },[]);

    useEffect(()=>{
// MODAL form
        if(isOpen){
            document.body.style.overflow="hidden";
        }
        else{
            document.body.style.overflow="unset";
        }
        return ()=>{document.body.style.overflow="unset";};
    },[isOpen]);
    return(
        <div className="min-h-screen bg-black text-white relative">
            <Navbar activeSection={activeSection} onOpenForm={()=>setIsOpen(true)}/>
            <div id="home" className="scroll-mt-24"><Hero/></div>
            <div id="services" className="scroll-mt-24"><Services/></div>
            <div id="about" className="scroll-mt-24"><About/></div>
            <div id="experience" className="scroll-mt-24"><Experience/></div>
            <div id="skills" className="scroll-mt-24"><Skills/></div>
            {isOpen && (
                <div className="fixed inset-0 bg-black/60 backdrop-blur-md z-100 flex flex-col justify-center items-center p-4 ">
                    <div className="bg-[#0a0a0a] border border-zinc-800 w-full max-w-xl p-2 rounded-2xl relative">
                        <h2 className="text-xl font-bold text-white mb-6 text-center">Let's Build Something</h2>
                        <button onClick={()=> setIsOpen(false)} className="absolute top-2 right-2 text-zinc-500 hover:text-white text-sm transition cursor-pointer font-bold w-6 h-6 border border-white rounded-full">X</button>
                        <TalkForm/>
                    </div>
                </div>
            )}
        </div>
    )

}

export default App


//inset-0 is Tailwind shortcut syntax for setting top: 0, right: 0, bottom: 0, and left: 0