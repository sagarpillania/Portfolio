function Badge({ children, variant = "outline" }) {
  // Base styles shared by all badges
  const baseStyle = "inline-flex items-center justify-center text-[11px] font-medium tracking-wide transition-all select-none";
  
  // Custom styles for different layouts
  const variantStyles = variant === "numbered"
    ? "bg-zinc-850 text-white w-7 h-7 rounded-lg font-bold mr-3 border border-zinc-800" // For "01", "02" blocks
    : "border border-zinc-500 bg-[#161616]/40 text-zinc-400 px-3 py-1.5 rounded-full w-full text-center hover:text-white hover:border-zinc-300"; // For Card tags

  return (
    <span className={`${baseStyle} ${variantStyles}`}>
      {children}
    </span>
  );
}

export default Badge;