import {
  FaPython,
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaDatabase,
  FaAws,
  FaPhp,
  FaReact,
  FaDocker,
  FaLinux,
  FaGitAlt,
  FaAndroid,
  FaBootstrap,
} from "react-icons/fa";
import {
  SiMysql,
  SiFirebase,
  SiJavascript,
  SiSpring,
  SiC,
  SiFlutter,
  SiR,
  SiJoomla,
  SiTailwindcss,
} from "react-icons/si";
import { useEffect, useRef, useState } from "react";

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
    { name: "Tailwind", icon: <SiTailwindcss size={32} />, level: 30 },
    { name: "Bootstrap", icon: <FaBootstrap size={32} />, level: 50 },
  ];

  const carouselRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const carousel = carouselRef.current;
    let animationFrameId;
    const scrollSpeed = 0.5;

    const scroll = () => {
      if (!isPaused && carousel) {
        carousel.scrollLeft += scrollSpeed;
        if (carousel.scrollLeft >= carousel.scrollWidth / 2) {
          carousel.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    if (!expanded) {
      animationFrameId = requestAnimationFrame(scroll);
    }

    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused, expanded]);

  return (
    <section className="bg-gray-100 py-6 px-4 font-sans">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
          Linguagens & Tecnologias
        </h2>
        <p className="max-w-2xl mx-auto text-gray-600 mb-6">
          Aqui estão as linguagens e tecnologias que já utilizei ou com as quais tenho familiaridade. Estou sempre buscando aprender mais e evoluir minhas habilidades no desenvolvimento.
        </p>

        <div className="mb-6">
          <button
            onClick={() => setExpanded(!expanded)}
            className="px-4 py-2 bg-green-500 text-white font-semibold rounded-full hover:bg-green-600 transition"
          >
            {expanded ? "Recolher" : "Expandir tudo"}
          </button>
        </div>

        {expanded ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {skills.map((skill, index) => {
              const stage = getSkillStage(skill.level);
              return (
                <div
                  key={index}
                  className="bg-white border border-gray-300 rounded-lg p-4 flex flex-col items-center shadow hover:shadow-lg"
                >
                  <div className="mb-2 text-gray-700">{skill.icon}</div>
                  <p className="text-sm text-gray-700 mb-2">{skill.name}</p>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${stage.color}`}
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <p
                    className={`text-xs font-medium mt-1 ${stage.color.replace("bg", "text")}`}
                  >
                    {stage.label}
                  </p>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="relative overflow-hidden">
            <div className="pointer-events-none absolute left-0 top-0 h-full w-12 bg-gradient-to-r from-gray-100 to-transparent z-10"></div>
            <div className="pointer-events-none absolute right-0 top-0 h-full w-12 bg-gradient-to-l from-gray-100 to-transparent z-10"></div>

            <div
              ref={carouselRef}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              className="flex gap-6 overflow-x-scroll whitespace-nowrap cursor-grab no-scrollbar scroll-smooth"
              style={{ scrollBehavior: "auto" }}
            >
              <div className="flex gap-6 min-w-max">
                {[...skills, ...skills].map((skill, index) => {
                  const stage = getSkillStage(skill.level);
                  return (
                    <div
                      key={index}
                      className="bg-white border border-gray-300 rounded-lg p-4 flex flex-col items-center shadow hover:shadow-lg w-40 shrink-0"
                    >
                      <div className="mb-2 text-gray-700">{skill.icon}</div>
                      <p className="text-sm text-gray-700 mb-2">{skill.name}</p>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full ${stage.color}`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                      <p
                        className={`text-xs font-medium mt-1 ${stage.color.replace("bg", "text")}`}
                      >
                        {stage.label}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Skills;

