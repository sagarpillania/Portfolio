
function Button({children,onClick}){

    return(
        <>
            <button onClick={onClick} className="flex items-center gap-2 border border-zinc-800 bg-mist-700 backdrop-blur-md py-2 px-4 rounded-lg text-sm font-medium text-white cursor-pointer hover:bg-zinc-800/50 transition">
            <span>{children}</span>
            </button>
        </>
    )
}
export default Button;