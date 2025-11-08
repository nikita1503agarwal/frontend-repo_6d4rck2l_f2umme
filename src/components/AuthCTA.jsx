import { ArrowRight, GraduationCap, Users } from "lucide-react";

export default function AuthCTA() {
  return (
    <section id="cta" className="bg-gradient-to-b from-white to-blue-50 dark:from-black dark:to-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-6 items-stretch">
          <div className="rounded-2xl p-6 md:p-8 border border-black/10 dark:border-white/10 bg-white dark:bg-neutral-900/60">
            <h3 id="student-login" className="text-xl font-semibold text-gray-900 dark:text-white">Student Portal</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              Log in to take the learning style quiz, access tailored content, and unlock tests by completing exercises.
            </p>
            <a
              href="#"
              className="mt-6 inline-flex items-center gap-2 h-11 px-5 rounded-md bg-blue-600 text-white hover:bg-blue-700"
            >
              <GraduationCap size={18} /> Log in as Student <ArrowRight size={16} />
            </a>
          </div>
          <div className="rounded-2xl p-6 md:p-8 border border-black/10 dark:border-white/10 bg-white dark:bg-neutral-900/60">
            <h3 id="teacher-login" className="text-xl font-semibold text-gray-900 dark:text-white">Teacher Portal</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              Manage materials by learning style, monitor progress, and provide personalized feedback.
            </p>
            <a
              href="#"
              className="mt-6 inline-flex items-center gap-2 h-11 px-5 rounded-md bg-purple-600 text-white hover:bg-purple-700"
            >
              <Users size={18} /> Log in as Teacher <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
