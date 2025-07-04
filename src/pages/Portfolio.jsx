import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import projects from "../data/projectsData";

function Portfolio() {
  const [showAll, setShowAll] = useState(false);

  const displayedProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section className="min-h-screen bg-gray-100 dark:bg-gray-900 py-16 px-6 font-sans">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800 dark:text-white">
          Portfólio
        </h2>

        <p className="max-w-2xl mx-auto text-base md:text-lg text-gray-600 dark:text-gray-300 mb-2">
          Explore abaixo alguns dos projetos que desenvolvi e estão disponíveis
          online. Clique para acessar e conhecer cada um deles.
        </p>

        <p className="max-w-2xl mx-auto text-sm text-yellow-700 dark:text-yellow-400 italic mb-10">
          ⚠ Aviso: Alguns projetos podem não funcionar corretamente ou demorar
          para carregar caso dependam de serviços externos (como APIs ou
          back-ends hospedados) que foram desativados ou estão temporariamente
          indisponíveis.
        </p>

        {/* Grade de Projetos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-6">
          {displayedProjects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-lg shadow hover:shadow-lg transition transform hover:scale-105 overflow-hidden flex flex-col"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 text-left flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-green-500">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mt-2">
                    {project.description}
                  </p>
                </div>
                {project.githubLinks?.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.githubLinks.map((repo, idx) => (
                      <a
                        key={idx}
                        href={repo.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-xs font-medium hover:bg-blue-200 dark:hover:bg-blue-800 transition"
                      >
                        <FaGithub className="w-4 h-4 mr-1" />
                        {repo.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </a>
          ))}
        </div>

        {/* Botão Ver mais / Ver menos */}
        {projects.length > 3 && (
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-6 py-2 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-full transition animate-pulse"
          >
            {showAll ? "Ver menos" : "Ver mais projetos"}
          </button>
        )}
      </div>
    </section>
  );
}

export default Portfolio;
