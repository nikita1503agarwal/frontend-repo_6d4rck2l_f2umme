import { GraduationCap, Users, LogIn, Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [dark]);

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-black/30 bg-white/70 dark:bg-black/40 border-b border-black/10 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-blue-500 via-sky-400 to-purple-500 shadow-lg" />
          <span className="font-semibold tracking-tight text-gray-900 dark:text-white">
            NeuroLearn
          </span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-700 dark:text-gray-300">
          <a href="#features" className="hover:text-gray-900 dark:hover:text-white transition-colors">Features</a>
          <a href="#ai" className="hover:text-gray-900 dark:hover:text-white transition-colors">AI Assistant</a>
          <a href="#cta" className="hover:text-gray-900 dark:hover:text-white transition-colors">Get Started</a>
        </nav>
        <div className="flex items-center gap-2">
          <button
            aria-label="Toggle dark mode"
            onClick={() => setDark(v => !v)}
            className="inline-flex items-center justify-center h-9 w-9 rounded-md border border-black/10 dark:border-white/10 text-gray-700 dark:text-gray-300 hover:bg-black/5 dark:hover:bg-white/5"
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <a
            href="#student-login"
            className="hidden sm:inline-flex items-center gap-2 h-9 px-3 rounded-md border border-blue-500/30 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-500/10"
          >
            <GraduationCap size={18} /> Student
          </a>
          <a
            href="#teacher-login"
            className="inline-flex items-center gap-2 h-9 px-3 rounded-md bg-blue-600 text-white hover:bg-blue-700"
          >
            <Users size={18} /> Teacher <LogIn size={16} />
          </a>
        </div>
      </div>
    </header>
  );
}
