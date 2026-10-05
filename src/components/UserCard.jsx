import { Link } from 'react-router-dom';
import Button from './Button';

export default function UserCard({ id, name, email, company, isFavorite, onToggleFavorite }) {
  return (
    <div className="group relative bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div>
        <div className="flex justify-between items-start mb-4">
          <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold text-lg shadow-md group-hover:scale-110 transition-transform duration-300">
            {name.charAt(0)}
          </div>
          <button
            onClick={() => onToggleFavorite(id)}
            className="text-2xl transition-transform duration-200 active:scale-125 hover:scale-110 cursor-pointer"
          >
            {isFavorite ? '⭐' : '☆'}
          </button>
        </div>

        <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-200">
          {name}
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400 mb-1">{email}</p>
        <p className="text-xs font-semibold uppercase tracking-wider text-indigo-500 dark:text-indigo-400 mb-4">{company}</p>
      </div>

      <Link to={`/users/${id}`} className="mt-2">
        <Button variant="secondary" className="w-full text-xs py-2">
          View Details →
        </Button>
      </Link>
    </div>
  );
}