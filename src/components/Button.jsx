export default function Button({ label, onClick, variant = 'primary', children, className = '' }) {
  const baseStyles = "px-4 py-2 rounded-xl font-medium transition-all duration-300 transform active:scale-95 shadow-sm hover:shadow-md flex items-center justify-center gap-2 cursor-pointer";
  
  const variants = {
    primary: "bg-indigo-600 text-white hover:bg-indigo-500 dark:bg-indigo-500 dark:hover:bg-indigo-400 hover:-translate-y-0.5",
    danger: "bg-rose-600 text-white hover:bg-rose-500 dark:bg-rose-500 dark:hover:bg-rose-400 hover:-translate-y-0.5",
    secondary: "bg-slate-200 text-slate-800 hover:bg-slate-300 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700 hover:-translate-y-0.5"
  };

  return (
    <button onClick={onClick} className={`${baseStyles} ${variants[variant] || variants.primary} ${className}`}>
      {label || children}
    </button>
  );
}