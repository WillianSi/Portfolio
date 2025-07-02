import { useEffect, useRef, useState } from "react";

function Modal({ isOpen, onClose, title, children }) {
  const scrollRef = useRef(null);
  const [showScrollHint, setShowScrollHint] = useState(false);

  useEffect(() => {
    const el = scrollRef.current;

    const checkScroll = () => {
      if (!el) return;
      const shouldShow =
        el.scrollHeight > el.clientHeight &&
        el.scrollTop < el.scrollHeight - el.clientHeight - 10;
      setShowScrollHint(shouldShow);
    };

    // Aguarda o conteúdo carregar para verificar corretamente
    const timeout = setTimeout(checkScroll, 100);

    el?.addEventListener("scroll", checkScroll);
    window.addEventListener("resize", checkScroll);

    return () => {
      clearTimeout(timeout);
      el?.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur bg-black/30">
      <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg max-w-2xl w-full mx-4 relative">
        {/* Cabeçalho */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-600">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            {title}
          </h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg w-8 h-8 flex items-center justify-center"
          >
            <span className="sr-only">Fechar modal</span>
            <svg
              className="w-3 h-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 14 14"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M1 1l6 6m0 0l6 6M7 7l6-6M7 7L1 13"
              />
            </svg>
          </button>
        </div>

        {/* Corpo com rolagem */}
        <div
          ref={scrollRef}
          className="p-4 md:p-5 space-y-4 max-h-[60vh] overflow-y-auto no-scrollbar relative"
        >
          {children}

          {showScrollHint && (
            <div className="sticky bottom-0 w-full flex justify-center mt-2 z-10">
              <button
                onClick={() => {
                  scrollRef.current?.scrollTo({
                    top: scrollRef.current.scrollHeight,
                    behavior: "smooth",
                  });
                }}
                className="focus:outline-none"
              >
                <svg
                  className="w-6 h-6 text-green-400 animate-bounce"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            </div>
          )}
        </div>

        {/* Rodapé */}
        <div className="flex items-center p-4 border-t border-gray-200 dark:border-gray-600 justify-end">
          <button
            onClick={onClose}
            className="bg-blue-700 hover:bg-blue-800 text-white px-5 py-2.5 rounded-lg text-sm font-medium"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
