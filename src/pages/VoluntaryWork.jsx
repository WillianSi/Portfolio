import { FaGlobe, FaInstagram } from "react-icons/fa";

function VoluntaryWork() {
  const project = {
    organization: "MAB – Mapa Autismo Brasil",
    description:
      "Primeira plataforma independente de inteligência de dados sobre autismo no Brasil, dedicada à coleta, organização, análise e interpretação de informações sobre a população autista.",
    tasks:
      "Atuei na extração, tratamento e análise de dados, incluindo o cálculo da amostra sociodemográfica e o desenvolvimento de relatórios e dashboards para visualização e disseminação de resultados, gerando insights valiosos para embasar políticas públicas e promover inclusão.",
    image:
      "https://images.unsplash.com/photo-1560961911-ba7ef651a56c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    website: "https://www.mapaautismobrasil.com.br/",
    instagram: "https://www.instagram.com/mab.autismo/",
  };

  return (
    <section className="min-h-screen bg-gray-100 dark:bg-gray-900 py-16 px-6 font-sans">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800 dark:text-white">
          Trabalho Voluntário
        </h2>
        <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300 mb-10">
          Uma experiência transformadora que reforça meu compromisso com impacto
          social, aplicando dados e tecnologia para promover inclusão e gerar
          mudanças reais.
        </p>

        <div className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg shadow hover:shadow-lg transition-shadow overflow-hidden">
          <div
            className="h-56 w-full bg-cover bg-center"
            style={{ backgroundImage: `url(${project.image})` }}
          ></div>
          <div className="p-6 text-left">
            <h3 className="text-2xl font-semibold mb-2 text-green-500">
              {project.organization}
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
              >
                <FaGlobe />
              </a>
              <a
                href={project.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-500 hover:text-pink-700 text-xl"
                title="Instagram"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VoluntaryWork;
