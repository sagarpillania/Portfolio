import Badge from "../ui/Badges";

function About({onOpenForm}){

    return(
        <>
        <div className="select-none">
            <div className="flex justify-center items-center flex-col gap-2 mt-4 text-white max-w-full mx-auto">
                <h1 className="text-3xl font-bold">About Me</h1>
                <p className="text-xs ml-6 text-center leading-5 pr-4 font-semibold">I hold a Master of Computer Applications (MCA) from Chandigarh University and currently work as a Systems Engineer at TCS. Beyond the terminal, I am an avid traveler and a regular on the basketball court. I enjoy exploring new perspectives, whether finding the best routes on a journey or executing strategic plays on the court. If you are looking for a reliable companion—whether it is to explore new places or to team up, build, and solve complex system problems.
                <br />
                    <button 
                        onClick={onOpenForm} 
                        className="mt-4 text-white underline hover:text-zinc-300 font-bold text-lg transition cursor-pointer inline-block"
                    >
                        Let’s connect.
                    </button>
                </p>
                
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto mt-10">
                
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
            <div className=" flex text-white justify-center items-center px-6 text-m mt-8 gap-4 flex-wrap sm:flex-nowrap">
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