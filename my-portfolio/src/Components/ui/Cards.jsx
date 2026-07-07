import Badge from "./Badges";

function Cards({title, description, tags=[]}){
    
    return(
        <>
        {/* Key structural fixes applied below:
          - h-full: Makes sure the card stretches to match the tallest card in the grid row.
          - justify-between: Pushes the top content block and bottom badges block as far apart as possible.
          - bg-zinc-900: Kept it dark to fit the premium mockup.
        */}
        <div className="text-zinc-300 bg-zinc-900 rounded-2xl border border-zinc-800/80 p-6 flex flex-col justify-between h-full gap-4">
            
            {/* Top Container: Groups your Title and Paragraph together */}
            <div className="flex flex-col gap-2">
                <h2 className="font-bold text-lg text-white tracking-tight">{title}</h2>
                {/* Cleaned up the heavy underline to match the sleek design */}
                <p className="font-light text-xs text-zinc-400 leading-relaxed">{description}</p>
            </div>

            {/* Bottom Container: Stays locked to the bottom edge */}
            <div className="flex flex-col gap-2 mt-auto border-gray-600 border-t pt-4">
                {tags.map((elem, idx) => {
                    return (
                        <div key={idx} className="w-fit">
                            <Badge>{elem}</Badge>
                        </div>
                    )
                })}
            </div>
        </div>
        </>
    )
}

export default Cards;