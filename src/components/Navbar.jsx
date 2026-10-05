import { NavLink } from 'react-router-dom';

export default function Navbar({ favoritesCount, darkMode, setDarkMode }) {
  const navLinkStyle = ({ isActive }) =>
    `px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-300 ${
      isActive
        ? 'bg-indigo-100 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300 font-semibold shadow-inner'
        : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
    }`;

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/75 dark:bg-slate-900/75 border-b border-slate-200/80 dark:border-slate-800/80 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <span className="text-xl font-bold bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
            TeamDirectory
          </span>

          <div className="flex items-center gap-2 sm:gap-4">
            <NavLink to="/" className={navLinkStyle}>Home</NavLink>
            <NavLink to="/users" className={navLinkStyle}>Users</NavLink>
            <NavLink to="/about" className={navLinkStyle}>About</NavLink>

            <div className="px-3 py-1 bg-amber-100 text-amber-800 dark:bg-amber-950/80 dark:text-amber-300 text-xs font-bold rounded-full border border-amber-200 dark:border-amber-800/50 shadow-sm animate-pulse">
              Favorites: {favoritesCount}
            </div>

            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-300 transform active:rotate-12 cursor-pointer"
            >
              {darkMode ? '☀️' : '🌙'}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}