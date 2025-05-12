import React, { useState } from 'react';

const sections = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <div className="text-lg font-semibold">My Portfolio</div>
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
        <ul className="hidden md:flex space-x-8">
          {sections.map((sec) => (
            <li key={sec.id}>
              <a
                href={`#${sec.id}`}
                className="text-gray-700 hover:text-gray-900 font-medium"
              >
                {sec.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      {/* Mobile menu */}
      {menuOpen && (
        <ul className="md:hidden px-4 pb-4 space-y-2 bg-white">
          {sections.map((sec) => (
            <li key={sec.id}>
              <a
                href={`#${sec.id}`}
                className="block text-gray-700 hover:text-gray-900 font-medium"
                onClick={() => setMenuOpen(false)} // Close menu on click
              >
                {sec.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

const About: React.FC = () => (
  <section
    id="about"
    className="min-h-screen flex flex-col items-center justify-center bg-white pt-20"
  >
    <h2 className="text-4xl font-semibold text-gray-900 mb-4">About Me</h2>
    <div className="max-w-xl text-gray-700 text-center">
      {/* Insert your paragraphs here */}
      <p className="mb-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.
      </p>
      <p>
        Cras venenatis euismod malesuada. Etiam in nibh eu lacus commodo fermentum.
      </p>
    </div>
    <div className="mt-8">
      <img
        src="/path/to/portrait.jpg"
        alt="Portrait"
        className="w-48 h-auto rounded-lg object-cover"
      />
    </div>
  </section>
);

const Experience: React.FC = () => (
  <section
    id="experience"
    className="min-h-screen bg-gray-50 py-24"
  >
    <div className="container mx-auto">
      <h2 className="text-4xl font-semibold text-gray-900 mb-8 text-center">
        Internships & Experience
      </h2>
      <div className="space-y-12">
        {/* Repeat this block for each experience */}
        <div>
          <h3 className="text-2xl font-medium text-gray-800">Company Name</h3>
          <p className="text-gray-600">Role &mdash; Dates</p>
          <p className="mt-2 text-gray-700 max-w-2xl">
            Brief description of responsibilities and achievements.
          </p>
        </div>
      </div>
    </div>
  </section>
);

const Projects: React.FC = () => (
  <section
    id="projects"
    className="min-h-screen bg-white py-24"
  >
    <div className="container mx-auto">
      <h2 className="text-4xl font-semibold text-gray-900 mb-8 text-center">
        Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Repeat for each project */}
        <div className="border border-gray-200 p-6 rounded-lg hover:shadow-md">
          <h3 className="text-2xl font-medium text-gray-800 mb-2">Project Title</h3>
          <p className="text-gray-700 mb-4">
            Short project description or blurb.
          </p>
          <a
            href="#"
            className="text-gray-600 underline"
          >
            View Repository
          </a>
        </div>
      </div>
    </div>
  </section>
);

const Contact: React.FC = () => (
  <section
    id="contact"
    className="min-h-screen bg-gray-50 py-24"
  >
    <div className="container mx-auto text-center">
      <h2 className="text-4xl font-semibold text-gray-900 mb-8">
        Contact
      </h2>
      <div className="space-x-6 text-gray-700">
        <a href="https://github.com/yourusername" className="hover:text-gray-900">
          GitHub
        </a>
        <a href="/resume.pdf" className="hover:text-gray-900">
          Resume
        </a>
        <a href="https://linkedin.com/in/yourprofile" className="hover:text-gray-900">
          LinkedIn
        </a>
        <a href="mailto:youremail@example.com" className="hover:text-gray-900">
          Email
        </a>
      </div>
    </div>
  </section>
);

const App: React.FC = () => (
  <div className="scroll-smooth text-gray-800">
    <Navbar />
    <main>
      <About />
      <Experience />
      <Projects />
      <Contact />
    </main>
  </div>
);

export default App;
