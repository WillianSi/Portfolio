function Experience() {
    const experiences = [
      {
        company: "ML Software House",
        role: "Estagiário de Desenvolvimento Web",
        period: "Setembro/2022 - Dezembro/2022",
        tasks: "Estudo de tecnologias modernas de desenvolvimento de aplicações web, construção e manutenção de sistemas web em React e Spring.",
        image: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        company: "IF Sul de Minas Gerais - Campus Machado",
        role: "Estagiário de Manutenção de Sistemas Web",
        period: "Outubro/2022 - Abril/2023",
        tasks: "Manutenção e atualização das informações do site do campus Machado.",
        image: "https://plus.unsplash.com/premium_photo-1661877737564-3dfd7282efcb?q=80&w=2100&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        company: "MZZI Think Digital",
        role: "Desenvolvedor de Sistemas Web",
        period: "Julho/2023 - Janeiro/2025",
        tasks: "Desenvolvedor contratado por projeto, para construção e manutenção de sistemas web, incluindo reuniões para direcionamento e teste de usabilidade.",
        image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    ];
  
    return (
      <section className="min-h-screen bg-gray-100 dark:bg-gray-900 py-16 px-6 font-sans">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800 dark:text-white">
            Experiência Profissional
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300 mb-10">
          Um resumo das experiências que têm moldado minha trajetória como desenvolvedor, sempre guiado pelo aprendizado constante, aprimoramento técnico e compromisso em entregar soluções práticas e de qualidade.
          </p>
  
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg shadow hover:shadow-lg transition-shadow"
              >
                <div
                  className="h-40 w-full bg-cover bg-center rounded-t-lg"
                  style={{ backgroundImage: `url(${exp.image})` }}
                ></div>
                <div className="p-6 flex flex-col text-left">
                  <h3 className="text-lg font-semibold mb-1 text-green-500">{exp.role}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">{exp.company}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">{exp.period}</p>
                  <p className="text-sm text-gray-700 dark:text-gray-300">{exp.tasks}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  
  export default Experience;