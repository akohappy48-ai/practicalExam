export default function Loader() {
  return (
    <div className="flex flex-col items-center justify-center p-12 gap-3">
      <div className="w-10 h-10 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin dark:border-slate-800 dark:border-t-indigo-400" />
      <p className="text-sm text-slate-500 dark:text-slate-400 animate-pulse font-medium">Loading users...</p>
    </div>
  );
}   