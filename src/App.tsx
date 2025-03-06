import ContentSection from "./components/ContentSection";
import NavBar from "./components/NavBar";

const Hero = () => {
  return (
    <section className="bg-indigo-700 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Hello, I'm a Developer</h1>
        <p className="text-xl md:text-2xl mb-8">Building amazing web experiences</p>
        <button className="bg-white text-indigo-700 px-6 py-3 rounded-lg font-medium hover:bg-indigo-50 transition">View My Work</button>
      </div>
    </section>
  );
};

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navigation */}
      <NavBar />

      {/* Hero Section */}
      <Hero />

      {/* Content Section */}
      <ContentSection />

      {/* Footer */}
      <footer className="bg-indigo-700 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center space-x-6 mb-4">
            {/* Social media icons */}
            {["GitHub", "LinkedIn", "Twitter"].map((social) => (
              <a key={social} href="#" className="hover:text-indigo-200 transition">
                {social}
              </a>
            ))}
          </div>
          <p>© {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
