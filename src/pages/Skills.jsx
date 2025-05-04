import {
  FaPython, FaJava, FaHtml5, FaCss3Alt, FaDatabase, FaAws, FaPhp, FaReact,
  FaDocker, FaLinux, FaGitAlt, FaAndroid
} from "react-icons/fa";
import {
  SiMysql, SiFirebase, SiJavascript, SiSpring, SiC, SiFlutter, SiR, SiJoomla,
} from "react-icons/si";

function getSkillStage(level) {
  if (level >= 75) return { label: "Avançado", color: "bg-red-500" };
  if (level >= 40) return { label: "Intermediário", color: "bg-yellow-400" };
  return { label: "Iniciante", color: "bg-green-500" };
}

function Skills() {
  const skills = [
    { name: "Python", icon: <FaPython size={32} />, level: 50 },
    { name: "MySQL", icon: <SiMysql size={32} />, level: 50 },
    { name: "Java", icon: <FaJava size={32} />, level: 50 },
    { name: "HTML", icon: <FaHtml5 size={32} />, level: 50 },
    { name: "CSS", icon: <FaCss3Alt size={32} />, level: 50 },
    { name: "Computer Networks", icon: <FaDatabase size={32} />, level: 30 },
    { name: "PHP", icon: <FaPhp size={32} />, level: 30 },
    { name: "Firebase", icon: <SiFirebase size={32} />, level: 30 },
    { name: "AWS", icon: <FaAws size={32} />, level: 30 },
    { name: "JavaScript", icon: <SiJavascript size={32} />, level: 50 },
    { name: "React", icon: <FaReact size={32} />, level: 50 },
    { name: "Spring", icon: <SiSpring size={32} />, level: 50 },
    { name: "Docker", icon: <FaDocker size={32} />, level: 30 },
    { name: "C / C#", icon: <SiC size={32} />, level: 50 },
    { name: "Linux", icon: <FaLinux size={32} />, level: 50 },
    { name: "Flutter", icon: <SiFlutter size={32} />, level: 30 },
    { name: "R", icon: <SiR size={32} />, level: 30 },
    { name: "Joomla", icon: <SiJoomla size={32} />, level: 30 },
    { name: "Git", icon: <FaGitAlt size={32} />, level: 50 },
    { name: "Android", icon: <FaAndroid size={32} />, level: 30 },
  ];

  return (
    <section className="min-h-screen bg-gray-100 py-16 px-6 font-sans">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
          Linguagens & Tecnologias
        </h2>
        <p className="max-w-2xl mx-auto text-gray-600 mb-10">
          Aqui estão as linguagens e tecnologias que já utilizei ou com as quais tenho familiaridade.
          Estou sempre buscando aprender mais e evoluir minhas habilidades no desenvolvimento.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {skills.map((skill, index) => {
            const stage = getSkillStage(skill.level);
            return (
              <div
                key={index}
                className="bg-white border border-gray-300 rounded-lg p-4 flex flex-col items-center shadow hover:shadow-lg transition-transform hover:scale-105 w-full"
              >
                <div className="mb-2 text-gray-700">{skill.icon}</div>
                <p className="text-sm text-gray-700 mb-2">{skill.name}</p>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full ${stage.color}`}
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <p className={`text-xs font-medium mt-1 ${stage.color.replace('bg', 'text')}`}>
                  {stage.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Skills;
