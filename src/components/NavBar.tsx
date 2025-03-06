const NavBar = () => {
  return (
    <nav className="bg-white shadow-sm py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-indigo-600">My Portfolio</h1>
        <div className="space-x-4">
          <a href="#about" className="text-gray-600 hover:text-indigo-600">
            About
          </a>
          <a href="#projects" className="text-gray-600 hover:text-indigo-600">
            Projects
          </a>
          <a href="#skills" className="text-gray-600 hover:text-indigo-600">
            Skills
          </a>
          <a href="#contact" className="text-gray-600 hover:text-indigo-600">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
