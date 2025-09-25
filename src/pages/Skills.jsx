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
import { useTranslation } from "react-i18next";

function getSkillStage(level, t) {
  if (level >= 75) return { label: t("stage.advanced"), color: "bg-red-500" };
  if (level >= 40)
    return { label: t("stage.intermediate"), color: "bg-yellow-400" };
  return { label: t("stage.beginner"), color: "bg-green-500" };
}

function Skills() {
  const { t } = useTranslation("skills");

  // defina um id para cada skill
  const skills = [
    { id: "python", icon: <FaPython size={32} />, level: 50 },
    { id: "mysql", icon: <SiMysql size={32} />, level: 50 },
    { id: "java", icon: <FaJava size={32} />, level: 50 },
    { id: "html", icon: <FaHtml5 size={32} />, level: 50 },
    { id: "css", icon: <FaCss3Alt size={32} />, level: 50 },
    { id: "networks", icon: <FaDatabase size={32} />, level: 30 },
    { id: "php", icon: <FaPhp size={32} />, level: 30 },
    { id: "firebase", icon: <SiFirebase size={32} />, level: 30 },
    { id: "aws", icon: <FaAws size={32} />, level: 30 },
    { id: "javascript", icon: <SiJavascript size={32} />, level: 50 },
    { id: "react", icon: <FaReact size={32} />, level: 50 },
    { id: "spring", icon: <SiSpring size={32} />, level: 50 },
    { id: "docker", icon: <FaDocker size={32} />, level: 30 },
    { id: "c_family", icon: <SiC size={32} />, level: 50 },
    { id: "linux", icon: <FaLinux size={32} />, level: 50 },
    { id: "flutter", icon: <SiFlutter size={32} />, level: 30 },
    { id: "r", icon: <SiR size={32} />, level: 30 },
    { id: "joomla", icon: <SiJoomla size={32} />, level: 30 },
    { id: "git", icon: <FaGitAlt size={32} />, level: 50 },
    { id: "android", icon: <FaAndroid size={32} />, level: 30 },
    { id: "tailwind", icon: <SiTailwindcss size={32} />, level: 30 },
    { id: "bootstrap", icon: <FaBootstrap size={32} />, level: 50 },
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
          {t("title")}
        </h2>

        <p className="max-w-2xl mx-auto text-gray-600 mb-6">{t("subtitle")}</p>

        <div className="mb-6">
          <button
            onClick={() => setExpanded(!expanded)}
            className="px-4 py-2 bg-green-500 text-white font-semibold rounded-full hover:bg-green-600 transition"
          >
            {expanded ? t("buttons.collapse") : t("buttons.expand")}
          </button>
        </div>

        {expanded ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {skills.map((skill) => {
              const stage = getSkillStage(skill.level, t);
              return (
                <div
                  key={skill.id}
                  className="bg-white border border-gray-300 rounded-lg p-4 flex flex-col items-center shadow hover:shadow-lg"
                >
                  <div className="mb-2 text-gray-700">{skill.icon}</div>
                  <p className="text-sm text-gray-700 mb-2">
                    {t(`items.${skill.id}.name`)}
                  </p>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${stage.color}`}
                      style={{ width: `${skill.level}%` }}
                    />
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
        ) : (
          <div className="relative overflow-hidden">
            <div className="pointer-events-none absolute left-0 top-0 h-full w-12 bg-gradient-to-r from-gray-100 to-transparent z-10"></div>
            <div className="pointer-events-none absolute right-0 top-0 h-full w-12 bg-gradient-to-l from-gray-100 to-transparent z-10"></div>

            <div
              ref={carouselRef}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              className="flex gap-6 overflow-x-scroll whitespace-nowrap cursor-grab no-scrollbar"
              style={{ scrollBehavior: "auto" }}
            >
              <div className="flex gap-6 min-w-max">
                {[...skills, ...skills].map((skill, index) => {
                  const stage = getSkillStage(skill.level, t);
                  return (
                    <div
                      key={`${skill.id}-${index}`}
                      className="bg-white border border-gray-300 rounded-lg p-4 flex flex-col items-center shadow hover:shadow-lg w-40 shrink-0"
                    >
                      <div className="mb-2 text-gray-700">{skill.icon}</div>
                      <p className="text-sm text-gray-700 mb-2">
                        {t(`items.${skill.id}.name`)}
                      </p>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full ${stage.color}`}
                          style={{ width: `${skill.level}%` }}
                        />
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
        )}
      </div>
    </section>
  );
}

export default Skills;
