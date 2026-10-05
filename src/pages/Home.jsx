import { Link } from 'react-router-dom';
import Button from '../components/Button';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4">
      <div className="inline-block p-3 bg-indigo-100 dark:bg-indigo-950/60 rounded-2xl mb-4 text-3xl animate-bounce">
        👥
      </div>
      <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mb-4 tracking-tight">
        Welcome to <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">TeamDirectory</span>
      </h1>
      <p className="text-slate-600 dark:text-slate-400 max-w-lg mb-8 text-base sm:text-lg">
        Manage your team members, filter by name, save your favorite profiles, and explore details seamlessly.
      </p>
      <Link to="/users">
        <Button variant="primary" className="text-base px-6 py-3">
          Explore Team Directory →
        </Button>
      </Link>
    </div>
  );
}