import { useState, useEffect } from 'react';
import { mockUsers } from '../data/users';
import UserCard from '../components/UserCard';
import Loader from '../components/Loader';
import ErrorMessage from '../components/ErrorMessage';

export default function Users({ favorites, onToggleFavorite }) {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setUsers(mockUsers);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    document.title = `Users (${filteredUsers.length})`;
  }, [filteredUsers]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Team Members</h2>
          <p className="text-sm text-slate-500 dark:text-slate-400">Browse and search through all active members.</p>
        </div>

        <input
          type="text"
          placeholder="Search by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full sm:w-72 px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200 shadow-sm"
        />
      </div>

      {loading ? (
        <Loader />
      ) : filteredUsers.length === 0 ? (
        <ErrorMessage message="No users found matching your search." />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredUsers.map((user) => (
            <UserCard
              key={user.id}
              {...user}
              isFavorite={favorites.includes(user.id)}
              onToggleFavorite={onToggleFavorite}
            />
          ))}
        </div>
      )}
    </div>
  );
}