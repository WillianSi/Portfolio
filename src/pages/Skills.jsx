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

    animationFrameId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused]);

  return (
    <section className="bg-gray-100 py-6 px-4 font-sans">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
          Linguagens & Tecnologias
        </h2>
        <p className="max-w-2xl mx-auto text-gray-600 mb-10">
          Aqui estão as linguagens e tecnologias que já utilizei ou com as quais
          tenho familiaridade. Estou sempre buscando aprender mais e evoluir
          minhas habilidades no desenvolvimento.
        </p>

        {/* Fades laterais */}
        <div className="relative overflow-hidden">
          <div className="pointer-events-none absolute left-0 top-0 h-full w-12 bg-gradient-to-r from-gray-100 to-transparent z-10"></div>
          <div className="pointer-events-none absolute right-0 top-0 h-full w-12 bg-gradient-to-l from-gray-100 to-transparent z-10"></div>

          {/* Carrossel com duplicação e controle de pausa */}
          <div
            ref={carouselRef}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className="flex gap-6 overflow-x-scroll whitespace-nowrap cursor-grab no-scrollbar scroll-smooth"
            style={{ scrollBehavior: "auto" }}
          >
            <button
              onClick={() => {
                if (carouselRef.current) {
                  const maxScroll = carouselRef.current.scrollWidth / 2;
                  const newScroll = carouselRef.current.scrollLeft - 200;
                  carouselRef.current.scrollLeft =
                    newScroll < 0 ? maxScroll + newScroll : newScroll;
                }
              }}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white rounded-full p-2 shadow"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-800"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.707 15.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L8.414 10l4.293 4.293a1 1 0 010 1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            <button
              onClick={() => {
                if (carouselRef.current) {
                  carouselRef.current.scrollLeft += 200;
                }
              }}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white rounded-full p-2 shadow"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-800"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 4.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414-1.414L11.586 10 7.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

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
                      className={`text-xs font-medium mt-1 ${stage.color.replace(
                        "bg",
                        "text"
                      )}`}
                    >
                      {stage.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
