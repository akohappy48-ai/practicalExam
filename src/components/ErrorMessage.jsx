export default function ErrorMessage({ message }) {
  return (
    <div className="p-4 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900 text-rose-600 dark:text-rose-400 text-center text-sm font-medium">
      ⚠️ {message}
    </div>
  );
}