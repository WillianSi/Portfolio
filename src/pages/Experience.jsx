import { useState, useMemo } from "react";
import { useTranslation } from "react-i18next";
import Modal from "../components/Modal";
import { coverById, galleryById } from "../data/experienceImages";

function Experience() {
  const { t } = useTranslation("experience");
  const [selectedId, setSelectedId] = useState(null);
  const [previewImg, setPreviewImg] = useState(null);

  // pega array de experiências do JSON
  const experienceList = t("list", { returnObjects: true });

  // índice por id para lookup rápido
  const indexById = useMemo(() => {
    const idx = {};
    experienceList.forEach((e, i) => (idx[e.id] = i));
    return idx;
  }, [experienceList]);

  const selected =
    selectedId != null && indexById[selectedId] != null
      ? experienceList[indexById[selectedId]]
      : null;

  return (
    <section className="min-h-screen bg-gray-100 dark:bg-gray-900 py-16 px-6 font-sans">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800 dark:text-white">
          {t("title")}
        </h2>

        <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300 mb-10">
          {t("subtitle")}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {experienceList.map((exp) => (
            <div
              key={exp.id}
              onClick={() => setSelectedId(exp.id)}
              className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg shadow hover:shadow-lg transition-shadow hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer overflow-hidden"
            >
              {/* Top banner */}
              <div className="bg-green-600 text-white text-sm font-medium rounded-t-lg px-3 py-1">
                {t("ctaCard")}
              </div>

              {/* Imagem de capa */}
              <div
                className="h-40 w-full bg-cover bg-center"
                style={{ backgroundImage: `url(${coverById[exp.id] || ""})` }}
              />

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
        isOpen={!!selected}
        onClose={() => {
          setSelectedId(null);
          setPreviewImg(null);
        }}
        title={selected?.role}
      >
        {selected && (
          <div className="space-y-3">
            <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
              <span className="text-green-600 dark:text-green-400">
                {selected.company}
              </span>{" "}
              — {selected.period}
            </p>

            <p className="text-gray-700 dark:text-gray-300 text-justify mb-4">
              {selected.tasks}
            </p>

            <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-justify">
              {selected.details?.map((item, idx) => (
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

            {(galleryById[selected.id] ?? []).length > 0 && (
              <div className="pt-4">
                <h4 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-100">
                  {t("modal.galleryTitle")}
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {galleryById[selected.id].map((src, idx) => (
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
        )}
      </Modal>

      {/* Preview da imagem */}
      {previewImg && selected && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center">
          {/* Fechar */}
          <button
            onClick={() => setPreviewImg(null)}
            className="absolute top-4 right-4 text-white text-3xl font-bold hover:text-red-400"
            aria-label={t("modal.aria.close")}
          >
            ×
          </button>

          {/* Anterior */}
          <button
            onClick={() => {
              const gal = galleryById[selected.id] || [];
              const currentIndex = gal.indexOf(previewImg);
              const prevIndex = (currentIndex - 1 + gal.length) % gal.length;
              setPreviewImg(gal[prevIndex]);
            }}
            className="absolute left-4 text-white text-4xl font-bold hover:text-green-400"
            aria-label={t("modal.aria.prev")}
          >
            ‹
          </button>

          {/* Imagem */}
          <img
            src={previewImg}
            alt="Imagem ampliada"
            className="max-h-[90vh] max-w-[90vw] rounded-lg shadow-lg"
          />

          {/* Próxima */}
          <button
            onClick={() => {
              const gal = galleryById[selected.id] || [];
              const currentIndex = gal.indexOf(previewImg);
              const nextIndex = (currentIndex + 1) % gal.length;
              setPreviewImg(gal[nextIndex]);
            }}
            className="absolute right-4 text-white text-4xl font-bold hover:text-green-400"
            aria-label={t("modal.aria.next")}
          >
            ›
          </button>
        </div>
      )}
    </section>
  );
}

export default Experience;
