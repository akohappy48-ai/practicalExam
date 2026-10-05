    import { Link } from 'react-router-dom';
import Button from '../components/Button';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <h1 className="text-6xl font-black text-indigo-600 dark:text-indigo-400 mb-2">404</h1>
      <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-4">Page Not Found</h2>
      <p className="text-slate-500 dark:text-slate-400 mb-6 max-w-sm">
        Oops! The page you are looking for doesn't exist or has been moved.
      </p>
      <Link to="/">
        <Button variant="primary">Return Home</Button>
      </Link>
    </div>
  );
}