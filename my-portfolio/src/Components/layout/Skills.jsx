import { useSelector, useDispatch } from "react-redux";
import { setCategory } from "../../Store/skillsSlice";
import { skillsData } from "../../Data/portfolioData";
import Badge from "../ui/Badges";

function Skills() {
  const dispatch = useDispatch();
  
  // 1. Read the active filter state from Redux
  const activeCategory = useSelector((state) => state.skills.activeCategory);

  // 2. Define the available filter tabs
  const categories = ["All", "Frontend", "Backend", "Tools"];

  // 3. Filter the skills array dynamically based on the Redux state
  const filteredSkills = activeCategory === "All"
    ? skillsData
    : skillsData.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="w-full bg-black text-white px-8 md:px-16 py-5 select-none">
      
      {/* Header */}
      <div className="text-center flex flex-col gap-2 mb-10">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Skills & Tech Stack</h2>
        <p className="text-zinc-400 text-xs md:text-sm">Filter through my tech stack using the tabs below</p>
      </div>

      {/* Filter Tabs Navigation */}
      <div className="flex justify-center items-center flex-wrap gap-3 mb-12 max-w-xl mx-auto">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => dispatch(setCategory(cat))}
            className={`px-4 py-1.5 rounded-full text-xs font-medium border transition-all duration-200 cursor-pointer
              ${activeCategory === cat 
                ? "bg-white text-black border-white font-semibold" 
                : "bg-zinc-900 text-zinc-400 border-zinc-800 hover:text-white hover:border-zinc-700"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Dynamic Skills Grid Grid Layout */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-4xl mx-auto">
        {filteredSkills.map((skill, index) => (
          <div 
            key={index} 
            className="flex items-center justify-center bg-[#121212] border border-zinc-800/80 p-4 rounded-xl text-center hover:border-zinc-700 transition duration-300"
          >
            <span className="text-sm font-medium text-zinc-200">{skill.name}</span>
          </div>
        ))}
      </div>

    </section>
  );
}

export default Skills;