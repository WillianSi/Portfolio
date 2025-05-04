function Education() {
  const education = [
    {
      institution: "Escola Municipal Padre Chiquito",
      degree: "Ensino Fundamental I",
      period: "2006 - 2012",
    },
    {
      institution: "Escola Estadual Nossa Senhora da Piedade",
      degree: "Ensino Fundamental II e Médio",
      period: "2013 - 2019",
    },
    {
      institution: "Instituto Federal do Sul de Minas - Campus Machado",
      degree: "Bacharelado em Sistemas de Informação",
      period: "2020 - 2023",
    },
    {
      institution: "Universidade Federal de Itajubá - UNIFEI",
      degree: "Mestrado em Ciência e Tecnologia da Computação",
      period: "2024 - Atualmente",
    },
  ];

  return (
    <section className="bg-gray-100 dark:bg-gray-900 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Minha Jornada Acadêmica
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-gray-700 dark:text-gray-300">
            Um resumo das etapas e instituições que formaram minha base acadêmica e profissional.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Timeline */}
          <ol className="relative border-l border-green-400 dark:border-green-500 ml-4">
            {education.map((item, index) => (
              <li key={index} className="mb-10 ml-6">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-green-400 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 2l8 4-8 4-8-4 8-4zm0 6l6 3-6 3-6-3 6-3zm0 6l4 2-4 2-4-2 4-2z" />
                  </svg>
                </span>
                <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                  {item.degree}
                </h3>
                <time className="block mb-2 text-sm font-normal leading-none text-gray-500 dark:text-gray-400">
                  {item.period}
                </time>
                <p className="text-base font-normal text-gray-700 dark:text-gray-300">
                  {item.institution}
                </p>
              </li>
            ))}
          </ol>

          {/* Decorative Unsplash Image */}
          <div className="flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1627556704302-624286467c65?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Ilustração Educacional"
              className="w-80 h-auto rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
