export default function Footer() {
  return (
    <footer className="bg-white dark:bg-black border-t border-black/10 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-600 dark:text-gray-300">© {new Date().getFullYear()} NeuroLearn. All rights reserved.</p>
        <div className="text-sm text-gray-600 dark:text-gray-300">
          Built with React, Tailwind, and an AI-first design.
        </div>
      </div>
    </footer>
  );
}
