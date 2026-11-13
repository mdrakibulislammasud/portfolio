
import Image from "next/image";

const projects = [
  {
    number: "01",
    name: "Neighbourly",
    category: "FULL-STACK WEB APPLICATION",
    featured: true,
    image: "/images/projects/neighbourly.png",
    description:
      "A community-driven platform where people can create, discover, join, and manage social development events in their local areas.",
    technologies: [
      "Next.js",
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Better Auth",
    ],
    liveUrl: "https://neighbourly-client.vercel.app/",
    githubUrl:
      "https://github.com/mdrakibulislammasud/B14_A_08_Client",
  },
  {
    number: "02",
    name: "FitLog",
    category: "FITNESS & WORKOUT PLANNER",
    featured: false,
    image: "/images/projects/fitlog.png",
    description:
      "A fitness application that helps users explore workouts, build personal workout stacks, and organize their daily exercise plans.",
    technologies: [
      "Next.js",
      "TypeScript",
      "React",
      "Tailwind CSS",
    ],
    liveUrl: "https://fitlog-diligent3.vercel.app/",
    githubUrl: "https://github.com/mdrakibulislammasud/FitLog",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <div className="projects-heading">
          <span className="projects-eyebrow">
            SELECTED WORK
          </span>

          <h2>
            Featured Projects<span>.</span>
          </h2>

          <p>
            A selection of projects where I turn ideas into
            practical web experiences.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article
              key={project.number}
              className={`project-card ${
                project.featured ? "project-featured" : ""
              }`}
            >
              <div className="project-preview">
                <Image
                  src={project.image}
                  alt={`${project.name} website preview`}
                  fill
                  sizes="(max-width: 600px) 90vw, (max-width: 900px) 44vw, 570px"
                  className="project-preview-image"
                />

                <span className="project-number">
                  {project.number}
                </span>

                <span className="project-category">
                  {project.category}
                </span>

                {project.featured && (
                  <span className="project-featured-label">
                    FEATURED
                  </span>
                )}
              </div>

              <div className="project-content">
                <div className="project-title-row">
                  <h3>{project.name}</h3>
                  <span>{project.number}</span>
                </div>

                <p className="project-description">
                  {project.description}
                </p>

                <div className="project-technologies">
                  {project.technologies.map((technology) => (
                    <span key={technology}>
                      {technology}
                    </span>
                  ))}
                </div>

                <div className="project-actions">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link project-live-link"
                  >
                    Live Demo <span aria-hidden="true">↗</span>
                  </a>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    GitHub <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
