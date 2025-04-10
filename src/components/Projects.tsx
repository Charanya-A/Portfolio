import React from 'react';

const Projects: React.FC = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center px-4">
      <h2 className="text-3xl font-semibold mb-6">Projects</h2>
      <div className="grid gap-6 max-w-4xl w-full">
        <div className="p-4 border rounded-lg shadow hover:shadow-md transition">
          <h3 className="text-xl font-semibold">Project Title</h3>
          <p className="text-gray-600 mt-2">Brief description of the project goes here.</p>
          <a
            href="https://github.com/yourusername/project"
            className="text-indigo-500 mt-2 inline-block"
            target="_blank"
          >
            View Code →
          </a>
        </div>
        {/* Add more project cards here */}
      </div>
    </div>
  );
};

export default Projects;
