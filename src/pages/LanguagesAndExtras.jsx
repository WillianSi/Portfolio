import {
    FaGlobeAmericas, FaGlobeEurope, FaPython, FaAws, FaProjectDiagram, FaLock, FaShieldAlt,
    FaNetworkWired, FaDocker, FaLinux, FaBalanceScale, FaTasks
  } from "react-icons/fa";
  
  function LanguagesAndCourses() {
    const languages = [
        { name: "Inglês", level: "Intermediário (B1)", icon: <FaGlobeAmericas size={40} className="text-blue-500" /> },
        { name: "Português", level: "Fluente", icon: <FaGlobeEurope size={40} className="text-green-500" /> },
    ];
  
    const courses = [
      { name: "PCAP: Programming Essentials in Python", icon: <FaPython size={40} className="text-yellow-500" /> },
      { name: "AWS Academy Cloud Foundations", icon: <FaAws size={40} className="text-orange-500" /> },
      { name: "Projetos ágeis com SCRUM", icon: <FaProjectDiagram size={40} className="text-purple-500" /> },
      { name: "Introduction to Cybersecurity", icon: <FaLock size={40} className="text-red-500" /> },
      { name: "Cybersecurity Essentials", icon: <FaShieldAlt size={40} className="text-red-500" /> },
      { name: "CCNA: Introduction to Networks", icon: <FaNetworkWired size={40} className="text-indigo-500" /> },
      { name: "Orquestração de contêineres com Docker", icon: <FaDocker size={40} className="text-blue-400" /> },
      { name: "NDG Linux Unhatched", icon: <FaLinux size={40} className="text-yellow-700" /> },
      { name: "Ética no desenvolvimento de sistemas", icon: <FaBalanceScale size={40} className="text-green-700" /> },
      { name: "Projetos de sistemas de TI", icon: <FaTasks size={40} className="text-pink-500" /> },
    ];
  
    return (
      <section className="min-h-screen bg-gray-100 dark:bg-gray-900 py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-800 dark:text-white">Idiomas</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {languages.map((lang, index) => (
                <div key={index} className="flex gap-4 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-xl items-center p-4 shadow hover:shadow-lg transition">
                  <div className="flex-shrink-0">
                    {lang.icon}
                  </div>
                  <div>
                    <p className="text-xl font-bold text-gray-800 dark:text-white">{lang.name}</p>
                    <p className="text-gray-500 dark:text-gray-300">{lang.level}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
  
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-800 dark:text-white">Cursos e Certificações</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {courses.map((course, index) => (
                <div key={index} className="flex gap-4 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-xl items-center p-4 shadow hover:shadow-lg transition">
                  <div className="flex-shrink-0">
                    {course.icon}
                  </div>
                  <div>
                    <p className="text-md font-semibold text-gray-800 dark:text-white">{course.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  export default LanguagesAndCourses;