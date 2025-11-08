import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import AuthCTA from "./components/AuthCTA";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-black dark:text-white font-inter">
      <Navbar />
      <Hero />
      <Features />
      <AuthCTA />
      <Footer />
    </div>
  );
}

export default App;
