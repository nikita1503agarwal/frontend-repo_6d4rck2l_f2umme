import Spline from "@splinetool/react-spline";

export default function Hero() {
  return (
    <section className="relative min-h-[70vh] md:min-h-[80vh] bg-neutral-950 text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/pDXeCthqjmzYX5Zk/scene.splinecode"
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-20 md:pt-28 pb-24">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight drop-shadow-[0_2px_12px_rgba(0,0,0,0.35)]">
            AI-Powered Adaptive Programming
          </h1>
          <p className="mt-4 text-lg md:text-xl text-white/85 drop-shadow-[0_1px_8px_rgba(0,0,0,0.35)]">
            Personalized learning paths, dual portals for students and teachers, and an integrated smart code assistant.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#student-login" className="inline-flex justify-center items-center h-11 px-5 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-medium">
              Start as Student
            </a>
            <a href="#teacher-login" className="inline-flex justify-center items-center h-11 px-5 rounded-md bg-white/95 text-gray-900 hover:bg-white">
              Start as Teacher
            </a>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent" />
    </section>
  );
}
