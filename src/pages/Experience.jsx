import { useState } from "react";
import Modal from "../components/Modal";
import experiencesData from "../data/experiencesData";

function Experience() {
  const [selectedId, setSelectedId] = useState(null);
  const [previewImg, setPreviewImg] = useState(null);

  const experienceList = Object.values(experiencesData);

  const selected = selectedId ? experiencesData[selectedId] : null;

  return (
    <section className="min-h-screen bg-gray-100 dark:bg-gray-900 py-16 px-6 font-sans">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800 dark:text-white">
          Experiência Profissional
        </h2>
        <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300 mb-10">
          Um resumo das experiências que têm moldado minha trajetória como
          desenvolvedor, sempre guiado pelo aprendizado constante, aprimoramento
          técnico e compromisso em entregar soluções práticas e de qualidade.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {experienceList.map((exp) => (
            <div
              key={exp.id}
              onClick={() => setSelectedId(exp.id)}
              className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg shadow hover:shadow-lg transition-shadow hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer overflow-hidden"
            >
              {/* Top banner verde */}
              <div className="bg-green-600 text-white text-sm font-medium rounded-t-lg px-3 py-1">
                Clique e saiba mais
              </div>

              {/* Imagem */}
              <div
                className="h-40 w-full bg-cover bg-center"
                style={{ backgroundImage: `url(${exp.image})` }}
              ></div>

              {/* Conteúdo */}
              <div className="p-6 flex flex-col text-left">
                <h3 className="text-lg font-semibold mb-1 text-green-500">
                  {exp.role}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">
                  {exp.company}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">
                  {exp.period}
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <Modal
        isOpen={selected !== null}
        onClose={() => setSelectedId(null)}
        title={selected?.role}
      >
        <div className="space-y-3">
          <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
            <span className="text-green-600 dark:text-green-400">
              {selected?.company}
            </span>{" "}
            — {selected?.period}
          </p>
          <p className="text-gray-700 dark:text-gray-300 text-justify mb-4">
            {selected?.tasks}
          </p>

          <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-justify">
            {selected?.details?.map((item, idx) => (
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

          {selected?.gallery?.length > 0 && (
            <div className="pt-4">
              <h4 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-100">
                Galeria
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {selected.gallery.map((src, idx) => (
                  <img
                    key={idx}
                    src={src}
                    alt={`Foto ${idx + 1}`}
                    className="rounded-lg object-cover w-full h-32 hover:scale-105 transition-transform duration-200"
                    onClick={() => setPreviewImg(src)}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </Modal>

      {previewImg && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center">
          {/* Botão Fechar */}
          <button
            onClick={() => setPreviewImg(null)}
            className="absolute top-4 right-4 text-white text-3xl font-bold hover:text-red-400"
            aria-label="Fechar"
          >
            ×
          </button>

          {/* Botão anterior */}
          <button
            onClick={() => {
              const currentIndex = selected.gallery.indexOf(previewImg);
              const prevIndex =
                (currentIndex - 1 + selected.gallery.length) %
                selected.gallery.length;
              setPreviewImg(selected.gallery[prevIndex]);
            }}
            className="absolute left-4 text-white text-4xl font-bold hover:text-green-400"
            aria-label="Imagem anterior"
          >
            ‹
          </button>

          {/* Imagem ampliada */}
          <img
            src={previewImg}
            alt="Imagem ampliada"
            className="max-h-[90vh] max-w-[90vw] rounded-lg shadow-lg"
          />

          {/* Botão próximo */}
          <button
            onClick={() => {
              const currentIndex = selected.gallery.indexOf(previewImg);
              const nextIndex = (currentIndex + 1) % selected.gallery.length;
              setPreviewImg(selected.gallery[nextIndex]);
            }}
            className="absolute right-4 text-white text-4xl font-bold hover:text-green-400"
            aria-label="Próxima imagem"
          >
            ›
          </button>
        </div>
      )}
    </section>
  );
}

export default Experience;
