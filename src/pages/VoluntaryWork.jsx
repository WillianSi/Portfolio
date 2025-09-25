// src/pages/VoluntaryWork.jsx
import { useState } from "react";
import { FaGlobe, FaInstagram } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import Modal from "../components/Modal";

function VoluntaryWork() {
  const { t } = useTranslation("voluntaryWork");
  const [open, setOpen] = useState(false);

  // pega o objeto do projeto inteiro do JSON
  const project = t("project", { returnObjects: true });

  return (
    <section className="min-h-screen bg-gray-100 dark:bg-gray-900 py-16 px-6 font-sans">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800 dark:text-white">
          {t("title")}
        </h2>

        <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300 mb-10">
          {t("subtitle")}
        </p>

        <div
          onClick={() => setOpen(true)}
          className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg shadow hover:shadow-lg transition-shadow hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer overflow-hidden"
        >
          <div className="bg-green-600 text-white text-sm font-medium rounded-t-lg px-3 py-1">
            {t("ctaCard")}
          </div>

          <div
            className="h-56 w-full bg-cover bg-center"
            style={{ backgroundImage: `url(${project.image})` }}
          />

          <div className="p-6 text-left">
            <h3 className="text-2xl font-semibold mb-2 text-green-500">
              {project.company}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              {project.description}
            </p>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
              {project.tasks}
            </p>

            <div className="flex space-x-4">
              <a
                href={project.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700 text-xl"
                title="Website"
                onClick={(e) => e.stopPropagation()}
              >
                <FaGlobe />
              </a>
              <a
                href={project.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-500 hover:text-pink-700 text-xl"
                title="Instagram"
                onClick={(e) => e.stopPropagation()}
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <Modal isOpen={open} onClose={() => setOpen(false)} title={project.role}>
        <div className="space-y-4 text-justify text-gray-700 dark:text-gray-300">
          <p className="text-sm font-medium">
            <span className="text-green-600 dark:text-green-400">
              {project.company}
            </span>{" "}
            — {project.period}
          </p>

          <div className="space-y-3">
            <p>{project.intro}</p>
            <p>
              <span className="text-green-600 dark:text-green-400 font-semibold">
                {t("missionLabel", { defaultValue: "Missão:" })}
              </span>{" "}
              {project.mission}
            </p>
            {/* Se quiser exibir outras partes do projeto, descomente: */}
            {/* <p><b>Metodologia:</b> {project.methodology}</p>
            <p><b>Participantes:</b> {project.participants}</p>
            <p><b>Questionário:</b> {project.questionnaire}</p>
            <p><b>Resultados:</b> {project.results}</p> */}
          </div>

          <div className="space-y-2">
            <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
              {t("sections.activities")}
            </h4>
            <ul className="space-y-2">
              {(project.details || []).map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <svg
                    className="w-4 h-4 text-green-500 dark:text-green-400 mt-1 shrink-0"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {(project.gallery || []).length > 0 && (
            <div>
              <h4 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-100">
                {t("sections.gallery")}
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {project.gallery.map((src, idx) => (
                  <img
                    key={idx}
                    src={src}
                    alt={`Foto ${idx + 1}`}
                    className="rounded-lg object-cover w-full h-32 hover:scale-105 transition-transform duration-200"
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </Modal>
    </section>
  );
}

export default VoluntaryWork;
