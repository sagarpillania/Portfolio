import Badge from "../ui/Badges";

function About(){

    return(
        <>
        <div className="select-none">
            <div className="flex justify-center items-center flex-col gap-2 mt-4 text-white">
                <h1 className="text-3xl">About Me</h1>
                <p className="text-xs ml-6 text-center leading-5 pr-4 font-semibold">I'm a full-stack developer passionate about crafting clean, secure, and responsive digital experiences. 
                I focus on turning complex backend logic into seamless user interfaces by understanding system goals, 
                optimizing database structures, and ensuring smooth performance across devices.
                </p>
                <h3 className="text-xl mt-4 mb-3 font-semibold">My Approach </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
                
                {/* Block 01 */}
                <div className="flex items-center bg-[#121212] border border-zinc-800/60 p-2 rounded-xl">
                    <Badge variant="numbered">01</Badge>
                    <p className="text-sm font-medium text-zinc-300">Understand architecture & goals</p>
                </div>

                {/* Block 02 */}
                <div className="flex items-center bg-[#121212] border border-zinc-800/60 p-2 rounded-xl">
                    <Badge variant="numbered">02</Badge>
                    <p className="text-sm font-medium text-zinc-300">Build robust APIs & layouts</p>
                </div>

                {/* Block 03 */}
                <div className="flex items-center bg-[#121212] border border-zinc-800/60 p-2 rounded-xl">
                    <Badge variant="numbered">03</Badge>
                    <p className="text-sm font-medium text-zinc-300">Deliver scalable systems</p>
                </div>
            </div>
            <div className=" flex text-white justify-center items-center px-6 text-m mt-4 gap-4">
                <div className="flex flex-col border-gray-600 border-r pr-3 ">
                    <h3 className="text-center">02</h3>
                    <p className="text-sm">Years of Experience</p>
                </div>
                <div className="flex flex-col border-gray-600 border-r pr-4">
                    <h3 className="text-center">05+</h3>
                    <p className="text-sm">Modules Shipped</p>
                </div>
                <div className="flex flex-col ">
                    <h3 className="text-center">Scale</h3>
                    <p className="text-sm">Enterprise Grade</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default About;