import foto from "/src/assets/imagem.jpg";

function Home() {
  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = "/CV_Willian.pdf"; // precisa estar em /public
    link.download = "Willian_Silvestre_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="flex min-h-screen items-center justify-center bg-gray-900 p-5">
      <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-10 md:px-10">
        {/* Texto */}
        <div>
          <h1 className="mb-4 text-4xl font-extrabold text-white leading-tight">
            Olá, eu sou{" "}
            <span className="text-green-400">Willian Silvestre</span>
            <br /> Desenvolvedor Full Stack
          </h1>
          <p className="mb-6 text-gray-300">
            Apaixonado por aprender e criar soluções web modernas e inovadoras.
            Com conhecimentos em React, Spring, Python e serviços em nuvem, já
            participei de projetos orientados a dados, como o primeiro
            mapeamento não governamental do autismo no Brasil.
          </p>
          <div className="flex gap-4">
            <a
              href="https://github.com/WillianSi"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-2xl bg-green-500 px-6 py-3 font-semibold text-white hover:bg-green-600 transition"
            >
              GitHub
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 .5C5.648.5.5 5.648.5 12c0 5.087 3.293 9.396 7.866 10.909.575.106.786-.25.786-.556 0-.273-.01-1.187-.015-2.153-3.2.695-3.877-1.543-3.877-1.543-.523-1.329-1.277-1.683-1.277-1.683-1.044-.713.08-.698.08-.698 1.154.081 1.761 1.184 1.761 1.184 1.025 1.755 2.691 1.248 3.345.955.104-.743.401-1.249.729-1.536-2.553-.291-5.238-1.277-5.238-5.686 0-1.257.449-2.286 1.183-3.093-.119-.292-.513-1.468.113-3.06 0 0 .965-.309 3.161 1.18a10.88 10.88 0 0 1 2.88-.387c.976.004 1.957.132 2.88.387 2.193-1.489 3.156-1.18 3.156-1.18.63 1.592.236 2.768.118 3.06.738.807 1.182 1.836 1.182 3.093 0 4.42-2.691 5.391-5.253 5.676.411.354.775 1.049.775 2.112 0 1.526-.014 2.754-.014 3.127 0 .31.207.669.792.555C20.713 21.39 24 17.083 24 12c0-6.352-5.148-11.5-11.5-11.5z" />
              </svg>
            </a>
            <button
              onClick={handleDownloadResume}
              className="flex items-center gap-2 rounded-2xl bg-white px-6 py-3 font-semibold text-gray-900 hover:bg-gray-200 transition"
            >
              Baixar Currículo
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 
                  1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Imagem */}
        <div className="flex justify-center">
          <img
            src={foto}
            alt="Willian Silvestre"
            className="rounded-full w-72 h-72 md:w-96 md:h-96 object-cover shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}

export default Home;