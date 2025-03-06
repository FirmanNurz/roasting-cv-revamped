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

        {/* // TODO: Add PDF Viewer here */}
      </div>
    </section>
  );
};

export default ContentSection;
