import {expData} from "../../Data/portfolioData.js"
function Experience() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      {/* Section Header */}
      <div className="mb-12 text-center md:text-left">
        <p className="text-xs font-semibold tracking-widest text-zinc-500 uppercase mb-2">My Journey</p>
        <h2 className="text-3xl font-bold text-white tracking-tight">Professional Experience</h2>
        <p className="text-sm text-zinc-400 mt-2">Systems Engineer at TCS — Refactoring systems and optimizing workflows.</p>
      </div>

      {/* 2 Rows x 3 Columns Grid Card Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {expData.map((card, index) => (
          <div 
            key={index} 
            className="bg-[#0a0a0a] border border-zinc-800 p-6 rounded-2xl flex flex-col justify-between hover:border-zinc-700 transition duration-300 group"
          >
            <div>
              <div className="flex justify-between items-start gap-4 mb-4">
                <h3 className="text-base font-semibold text-white group-hover:text-zinc-200 transition">
                  {card.title}
                </h3>
                {card.metric && (
                    <span className="text-xs font-bold text-black bg-white px-2.5 py-1 rounded-full whitespace-nowrap">
                    {card.metric}
                    </span>
                )}
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                {card.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;