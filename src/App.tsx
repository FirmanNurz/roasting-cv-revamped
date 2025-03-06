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

const ContentSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">CV Analysis</h2>
        <div className="max-w-lg mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <h3 className="text-xl font-semibold text-indigo-700 mb-4">Upload your PDF here</h3>
            <p className="text-gray-600 mb-6">Upload your resume for a professional review and feedback</p>

            <div className="relative border-2 border-dashed border-indigo-300 rounded-lg p-8 text-center hover:border-indigo-500 transition-colors">
              <input type="file" accept=".pdf" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" aria-label="Upload your PDF" />
              <div className="flex flex-col items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 text-indigo-500 mb-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                  />
                </svg>
                <span className="text-indigo-600 font-medium">Click to upload or drag and drop</span>
                <span className="text-gray-500 text-sm mt-1">PDF files only (Max size: 5MB)</span>
              </div>
            </div>

            <button className="w-full bg-indigo-600 text-white py-3 rounded-lg mt-6 font-medium hover:bg-indigo-700 transition-colors">
              Analyze CV
            </button>
          </div>
        </div>
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
