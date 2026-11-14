import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";
import styles from "./Projects.module.css";

export default function Projects() {
  return (
    <section id="projects" className={styles["projects-section"]}>
      <div className={styles["projects-container"]}>
        <div className={styles["projects-heading"]}>
          <span className={styles["projects-eyebrow"]}>SELECTED WORK</span>
          <h2>
            Featured Projects<span>.</span>
          </h2>
          <p>
            A selection of projects where I turn ideas into practical web
            experiences.
          </p>
        </div>

        <div className={styles["projects-grid"]}>
          {projects.map((project) => (
            <article className={styles["project-card"]} key={project.slug}>
              <div className={styles["project-preview"]}>
                <Image
                  src={project.image}
                  alt={`${project.name} website preview`}
                  fill
                  sizes="(max-width: 600px) 90vw, (max-width: 900px) 44vw, 570px"
                  className={styles["project-preview-image"]}
                />
                <span className={styles["project-number"]}>
                  {project.number}
                </span>
                <span className={styles["project-category"]}>
                  {project.category}
                </span>
                {project.featured && (
                  <span className={styles["project-featured-label"]}>
                    FEATURED
                  </span>
                )}
              </div>

              <div className={styles["project-content"]}>
                <div className={styles["project-title-row"]}>
                  <h3>{project.name}</h3>
                  <span>{project.number}</span>
                </div>
                <p className={styles["project-description"]}>
                  {project.description}
                </p>
                <div className={styles["project-technologies"]}>
                  {project.technologies.slice(0, 6).map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>
                <div className={styles["project-actions"]}>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles["project-link"]} ${styles["project-live-link"]}`}
                  >
                    Live Demo <span aria-hidden="true">↗</span>
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles["project-link"]}
                  >
                    GitHub <span aria-hidden="true">↗</span>
                  </a>
                  <Link
                    href={`/projects/${project.slug}`}
                    className={styles["project-link"]}
                  >
                    View Details <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
