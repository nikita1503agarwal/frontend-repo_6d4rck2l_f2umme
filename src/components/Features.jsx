import { Brain, LayoutDashboard, ShieldCheck, Code2, Sparkles } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Adaptive Learning Styles",
    desc: "Visual, auditory, and kinesthetic content automatically tailored after a quick quiz.",
  },
  {
    icon: LayoutDashboard,
    title: "Dual Dashboards",
    desc: "Separate experiences for students and teachers with progress and content management.",
  },
  {
    icon: Code2,
    title: "Practice Compiler",
    desc: "Run code in-browser and get instant AI feedback and improvement tips.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Auth",
    desc: "Email-based sign-in for students and teachers with role-based access.",
  },
  {
    icon: Sparkles,
    title: "Gamified Progress",
    desc: "Badges, XP, and unlockable tests to keep motivation high.",
  },
];

export default function Features() {
  return (
    <section id="features" className="bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
          Built for deep, personal learning
        </h2>
        <p className="mt-3 text-gray-600 dark:text-gray-300 max-w-2xl">
          Everything you need to learn faster and teach smarter, powered by AI and thoughtful design.
        </p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-xl border border-black/10 dark:border-white/10 p-5 bg-white dark:bg-neutral-900/60 hover:shadow-md transition-shadow">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-blue-500 via-sky-400 to-purple-500 text-white flex items-center justify-center">
                <Icon size={20} />
              </div>
              <h3 className="mt-4 font-semibold text-gray-900 dark:text-white">{title}</h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
