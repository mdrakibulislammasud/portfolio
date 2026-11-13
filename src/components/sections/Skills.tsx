
import {
  SiC,
  SiCplusplus,
  SiJavascript,
  SiTypescript,
  SiPython,
  SiHtml5,
  SiCss,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiGit,
  SiGithub,
  SiVercel,
} from "react-icons/si";

import {
  FaCode,
  FaDatabase,
  FaShieldAlt,
  FaKey,
  FaServer,
  FaCubes,
  FaLayerGroup,
} from "react-icons/fa";

const skillGroups = [
  {
    number: "01",
    title: "Frontend Development",
    description:
      "Creating responsive, accessible, and engaging user interfaces.",
    skills: [
      { name: "HTML5", icon: SiHtml5 },
      { name: "CSS3", icon: SiCss },
      { name: "ES6", icon: SiJavascript },
      { name: "React.js", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
    ],
  },
  {
    number: "02",
    title: "Backend Development",
    description:
      "Building server-side applications and developing RESTful APIs.",
    skills: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express.js", icon: SiExpress },
      { name: "REST APIs", icon: FaCode },
    ],
  },
  {
    number: "03",
    title: "Database & Authentication",
    description:
      "Managing application data and implementing authentication systems.",
    skills: [
      { name: "MongoDB", icon: SiMongodb },
      { name: "SQL", icon: FaDatabase },
      { name: "DBMS", icon: FaServer },
      { name: "Better Auth", icon: FaShieldAlt },
      { name: "JWT", icon: FaKey },
    ],
  },
  {
    number: "04",
    title: "Programming Languages",
    description:
      "Working with programming languages to develop logical solutions and applications.",
    skills: [
      { name: "C", icon: SiC },
      { name: "C++", icon: SiCplusplus },
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Python", icon: SiPython },
    ],
  },
  {
    number: "05",
    title: "Computer Science Fundamentals",
    description:
      "Understanding core computer science concepts and programming principles.",
    skills: [
      { name: "OOP", icon: FaCubes },
      { name: "Data Structures", icon: FaLayerGroup },
    ],
  },
  {
    number: "06",
    title: "Development Tools",
    description:
      "Using modern development tools and version control workflows.",
    skills: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "VS Code", icon: FaCode },
      { name: "Vercel", icon: SiVercel },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <div className="skills-heading">
          <span className="skills-eyebrow">
            MY TECHNICAL EXPERTISE
          </span>

          <h2>
            Skills & <span>Technologies.</span>
          </h2>

          <p>
            Technologies and tools I use to build modern, reliable,
            and user-focused web applications.
          </p>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <article className="skill-card" key={group.number}>
              <div className="skill-card-top">
                <span className="skill-number">{group.number}</span>

                <span className="skill-mark" aria-hidden="true">
                  ↗
                </span>
              </div>

              <h3>{group.title}</h3>

              <p className="skill-description">
                {group.description}
              </p>

              <div className="skill-tags">
                {group.skills.map((skill) => {
                  const SkillIcon = skill.icon;

                  return (
                    <span className="skill-tag" key={skill.name}>
                      <SkillIcon aria-hidden="true" />
                      {skill.name}
                    </span>
                  );
                })}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
