import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import image4 from "../assets/image4.png";
import image5 from "../assets/image5.png";
import image6 from "../assets/image6.png";
import image7 from "../assets/image7.png";
import image8 from "../assets/image8.png";
import image9 from "../assets/image9.png";
import image10 from "../assets/image10.png";
import image11 from "../assets/image11.png";
import image12 from "../assets/image12.png";
import image13 from "../assets/image13.png";
import image14 from "../assets/image14.png";

function Portfolio() {
  const projects = [
    {
      title: "Movie Catalog",
      description: "Um site em React que exibe catálogos de filmes conectados à API do IMDb, permitindo buscar, explorar e visualizar detalhes dos filmes.",
      image: image1,
      link: "https://remarkable-jelly-0caca3.netlify.app/",
    },
    {
      title: "Análise de Imagens da Copa 2022",
      description: "Aplicação React que analisa imagens relacionadas à Copa do Mundo de 2022 no Catar, trazendo insights visuais, informações extraídas.",
      image: image2,
      link: "https://analizedeimagemsdacopa2022.netlify.app/",
    },
    {
      title: "Zaila Chat",
      description: "Um chatbot moderno desenvolvido em React, integrado com serviços de IA via Hugging Face e hospedado na Render, oferecendo respostas inteligentes, reconhecimento de voz e leitura em tempo real.",
      image: image3,
      link: "https://zaila-chat.vercel.app/",
    },
    {
      title: "React Blog com Axios",
      description: "Um blog construído em React usando Vite, consumindo dados da API pública JSONPlaceholder via Axios para exibir posts e informações dinâmicas.",
      image: image4,
      link: "https://sage-belekoy-76bd85.netlify.app/",
    },
    {
      title: "Gestão de Custos de Projetos",
      description: "Aplicação React para gerenciar e acompanhar os custos de projetos, permitindo adicionar projetos, definir orçamentos, acompanhar gastos de forma prática e intuitiva.",
      image: image5,
      link: "https://merry-paletas-a33c1e.netlify.app/",
    },
    {
      title: "Quiz de Programação",
      description: "Aplicação desenvolvida em React com Vite que oferece quizzes interativos sobre HTML, CSS e JavaScript, permitindo escolher categorias e testar conhecimentos.",
      image: image6,
      link: "https://qiuz-react-curso.netlify.app/",
    },
    {
      title: "Análise de Flores",
      description: "Aplicação web interativa baseada em um modelo treinado no Teachable Machine para identificar diferentes tipos de flores a partir de imagens da camera do usuário.",
      image: image7,
      link: "https://flores-peach-xi.vercel.app/",
    },
    {
      title: "Análise de Folhas",
      description: "Aplicação web que usa um modelo do Teachable Machine (Google) para classificar e analisar imagens de folhas.",
      image: image8,
      link: "https://folhas.vercel.app/",
    },
    {
      title: "FarmGest - Consulta de Medicamentos",
      description: "Aplicação em React para gestão de medicamentos de uma farmácia popular. Permite que a população consulte os remédios disponíveis usando login simples (ex.: user@gmail.com / senha: 123456).",
      image: image9,
      link: "https://farm-gest-usuario.vercel.app/",
    },
    {
      title: "FarmGest - Painel Administrativo",
      description: "Painel administrativo em React para a gestão interna da farmácia popular, permitindo o cadastro, atualização e remoção de medicamentos. Acesso via login admin (ex.: admin@gmail.com / senha: 123456).",
      image: image10,
      link: "https://farmgest-turvolandia-dashboard.vercel.app/",
    },
    {
      title: "Canal de Denúncias Interno (Admin)",
      description: "Aplicativo React para gestão interna de denúncias anônimas em uma empresa. Permite aos administradores adicionar usuários, visualizar denúncias e gerenciar o sistema. Acesso via login admin (ex.: admin@gmail.com / senha: 123456).",
      image: image11,
      link: "https://canal-de-denuncias.vercel.app/",
    },
    {
      title: "Canal de Denúncias Interno (Usuário)",
      description: "Aplicativo React para envio anônimo de denúncias internas. Usuários podem registrar uma denúncia e recebem um login/senha gerados automaticamente para acompanhar o andamento sem revelar identidade.",
      image: image12,
      link: "https://canal-de-denucia.vercel.app/",
    },
    {
      title: "Escolachek (Chamada Escolar)",
      description: "Aplicativo React integrado ao Firebase para controle de chamadas escolares. Permite marcar presença de alunos, gerar relatórios e acompanhar frequência. Acesso via login simples (ex.: user@gmail.com / senha: 123456).",
      image: image13,
      link: "https://escola-check.vercel.app/",
    },
    {
      title: "RuralGest (Gestão Rural)",
      description: "Aplicativo web em PHP com banco MySQL para gerenciamento financeiro de propriedades rurais. Permite registrar receitas, despesas, serviços e notas fiscais. Acesso via login simples (ex.: user@gmail.com / senha: 123456).",
      image: image14,
      link: "http://ruralgest.infinityfreeapp.com/",
    },
  ];

  return (
    <section className="min-h-screen bg-gray-100 dark:bg-gray-900 py-16 px-6 font-sans">
      <div className="max-w-7xl mx-auto text-center">
      <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800 dark:text-white">
    Portfólio
  </h2>
  
  <p className="max-w-2xl mx-auto text-base md:text-lg text-gray-600 dark:text-gray-300 mb-2">
    Explore abaixo alguns dos projetos que desenvolvi e estão disponíveis online.
    Clique para acessar e conhecer cada um deles.
  </p>
  
  <p className="max-w-2xl mx-auto text-sm text-yellow-700 dark:text-yellow-400 italic mb-10">
    ⚠ Aviso: Alguns projetos podem não funcionar corretamente caso dependam de
    serviços externos (como APIs ou back-ends hospedados) que foram desativados
    ou estão temporariamente indisponíveis.
  </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-lg shadow hover:shadow-lg transition transform hover:scale-105 overflow-hidden"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 text-left">
                <h3 className="text-lg font-semibold text-green-500">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300 mt-2">
                  {project.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
