import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { mockUsers } from '../data/users';
import Button from '../components/Button';
import Loader from '../components/Loader';

export default function UserDetails() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      const foundUser = mockUsers.find((u) => u.id === parseInt(id));
      setUser(foundUser || null);
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [id]);

  useEffect(() => {
    if (user) {
      document.title = `${user.name} - Team Directory`;
    } else {
      document.title = 'User Details';
    }
  }, [user]);

  if (loading) return <Loader />;

  if (!user) {
    return (
      <div className="max-w-md mx-auto my-12 p-8 text-center bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-lg">
        <p className="text-4xl mb-4">🔍</p>
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">User Not Found</h3>
        <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">The team member you are looking for does not exist.</p>
        <Link to="/users">
          <Button variant="primary" className="w-full">Back to Users</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto my-12 p-8 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/80 dark:border-slate-800/80 shadow-xl relative overflow-hidden">
      <div className="h-28 -m-8 mb-6 bg-gradient-to-r from-indigo-500 to-purple-600" />
      
      <div className="relative flex justify-center -mt-20 mb-6">
        <div className="w-24 h-24 rounded-full bg-slate-900 text-white font-bold text-3xl flex items-center justify-center border-4 border-white dark:border-slate-900 shadow-xl">
          {user.name.charAt(0)}
        </div>
      </div>

      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">{user.name}</h2>
        <p className="text-indigo-600 dark:text-indigo-400 font-medium text-sm">{user.role}</p>
      </div>

      <div className="space-y-3 bg-slate-50 dark:bg-slate-800/50 p-4 rounded-2xl mb-8 border border-slate-100 dark:border-slate-800 text-sm">
        <div className="flex justify-between border-b border-slate-200 dark:border-slate-700/50 pb-2">
          <span className="text-slate-500 dark:text-slate-400">Email:</span>
          <span className="font-semibold text-slate-800 dark:text-slate-200">{user.email}</span>
        </div>
        <div className="flex justify-between border-b border-slate-200 dark:border-slate-700/50 pb-2">
          <span className="text-slate-500 dark:text-slate-400">Company:</span>
          <span className="font-semibold text-slate-800 dark:text-slate-200">{user.company}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-slate-500 dark:text-slate-400">User ID:</span>
          <span className="font-semibold text-slate-800 dark:text-slate-200">#{user.id}</span>
        </div>
      </div>

      <Link to="/users">
        <Button variant="secondary" className="w-full">
          ← Back to Users
        </Button>
      </Link>
    </div>
  );
}