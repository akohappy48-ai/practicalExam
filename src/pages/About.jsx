export default function About() {
  return (
    <div className="max-w-2xl mx-auto my-12 p-8 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/80 dark:border-slate-800/80 shadow-md">
      <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-4">About TeamDirectory</h2>
      <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
        TeamDirectory is a modern React application built using Vite, Tailwind CSS, and React Router.
      </p>
      <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
        It features client-side routing, state management with useState, lifecycle side effects with useEffect, dynamic dark mode support, and full interactive UI controls.
      </p>
    </div>
  );
}