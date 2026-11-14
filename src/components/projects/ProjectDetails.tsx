
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { getProjectBySlug } from "@/data/projects";
import styles from "./ProjectDetails.module.css";

type ProjectDetailsProps = {
  slug: string;
};

export default function ProjectDetails({
  slug,
}: ProjectDetailsProps) {
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className={styles.page}>
      <div className={styles.content}>
        {/* Top Navigation */}
        <nav className={styles.topbar}>
          <Link href="/" className={styles.brand}>
            <span className={styles.brandMark}>&lt;/&gt;</span>
            <span>
              MASUD<span className={styles.brandDot}>.</span>
            </span>
          </Link>

          <div className={styles.topbarActions}>
            <Link href="/#projects" className={styles.backLink}>
              <span aria-hidden="true">←</span>
              Back to Portfolio
            </Link>
          </div>
        </nav>

        {/* Breadcrumb */}
        <div className={styles.breadcrumb}>
          <Link href="/">Home</Link>
          <span>/</span>
          <Link href="/#projects">Projects</Link>
          <span>/</span>
          <span>{project.name}</span>
        </div>

        {/* Project Hero */}
        <header className={styles.hero}>
          <div className={styles.heroCopy}>
            <span className={styles.eyebrow}>
              <span />
              PROJECT SHOWCASE
            </span>

            <h1 className={styles.title}>
              {project.name}
              <span>.</span>
            </h1>

            <p className={styles.lead}>
              {project.description}
            </p>

            <div className={styles.actions}>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.primaryAction}
              >
                Live Demo
                <span aria-hidden="true">↗</span>
              </a>

              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.secondaryAction}
              >
                Client GitHub
                <span aria-hidden="true">↗</span>
              </a>

              {project.serverGithubUrl && (
                <a
                  href={project.serverGithubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.secondaryAction}
                >
                  Server GitHub
                  <span aria-hidden="true">↗</span>
                </a>
              )}
            </div>
          </div>

          <aside className={styles.heroNote}>
            <span className={styles.noteIndex}>
              PROJECT / {project.number}
            </span>

            <p>{project.overview}</p>

            <span className={styles.noteMark} aria-hidden="true">
              ↗
            </span>
          </aside>
        </header>

        {/* Project Facts */}
        <section className={styles.facts}>
          <div className={styles.fact}>
            <span className={styles.factIndex}>01</span>
            <span className={styles.factLabel}>Category</span>
            <strong>{project.category}</strong>
          </div>

          <div className={styles.fact}>
            <span className={styles.factIndex}>02</span>
            <span className={styles.factLabel}>Technologies</span>
            <strong>{project.technologies.length}+</strong>
          </div>

          <div className={styles.fact}>
            <span className={styles.factIndex}>03</span>
            <span className={styles.factLabel}>Key Features</span>
            <strong>{project.features.length}+</strong>
          </div>

          <div className={styles.fact}>
            <span className={styles.factIndex}>04</span>
            <span className={styles.factLabel}>Project Type</span>
            <strong>Development</strong>
          </div>
        </section>

        {/* Project Preview */}
        <section className={styles.previewSection}>
          <div className={styles.sectionHeading}>
            <div>
              <span className={styles.sectionKicker}>
                01 / VISUAL OVERVIEW
              </span>
              <h2>Project Preview</h2>
            </div>

            <p>
              A closer look at the interface and visual experience.
            </p>
          </div>

          <div className={styles.preview}>
            <Image
              src={project.image}
              alt={`${project.name} project preview`}
              width={1440}
              height={900}
              priority
              className={styles.previewImage}
            />
          </div>
        </section>

        {/* Project Overview */}
        <section className={styles.overviewSection}>
          <div className={styles.sectionHeading}>
            <div>
              <span className={styles.sectionKicker}>
                02 / THE IDEA
              </span>
              <h2>About the Project</h2>
            </div>
          </div>

          <div className={styles.overviewCard}>
            <span className={styles.overviewQuote} aria-hidden="true">
              "
            </span>

            <p>{project.overview}</p>

            <span className={styles.overviewRule} />
          </div>
        </section>

        {/* Technologies */}
        <section className={styles.stackSection}>
          <div className={styles.sectionHeading}>
            <div>
              <span className={styles.sectionKicker}>
                03 / TOOLS & TECHNOLOGY
              </span>
              <h2>Technology Stack</h2>
            </div>

            <p>
              Technologies and tools used to build this project.
            </p>
          </div>

          <div className={styles.stack}>
            {project.technologies.map((technology, index) => (
              <div key={technology} className={styles.stackItem}>
                <small>
                  {String(index + 1).padStart(2, "0")}
                </small>
                {technology}
              </div>
            ))}
          </div>
        </section>

        {/* Features */}
        <section className={styles.featuresSection}>
          <div className={styles.sectionHeading}>
            <div>
              <span className={styles.sectionKicker}>
                04 / WHAT IT OFFERS
              </span>
              <h2>Key Features</h2>
            </div>

            <p>
              Main functionality and capabilities of the application.
            </p>
          </div>

          <div className={styles.featureGrid}>
            {project.features.map((feature, index) => (
              <article key={feature} className={styles.featureCard}>
                <span className={styles.featureNumber}>
                  FEATURE / {String(index + 1).padStart(2, "0")}
                </span>

                <span className={styles.featureArrow} aria-hidden="true">
                  ↗
                </span>

                <h3>{feature}</h3>
              </article>
            ))}
          </div>
        </section>

        {/* Challenges and Engineering */}
        <section className={styles.learningSection}>
          <div className={styles.sectionHeading}>
            <div>
              <span className={styles.sectionKicker}>
                05 / DEVELOPMENT PROCESS
              </span>
              <h2>Challenges & Learning</h2>
            </div>

            <p>
              Technical challenges and engineering decisions
              throughout development.
            </p>
          </div>

          <div className={styles.learningGrid}>
            <article className={styles.learningCard}>
              <span className={styles.cardLabel}>
                CHALLENGES FACED
              </span>

              <ul className={styles.detailList}>
                {project.challenges.map((challenge) => (
                  <li key={challenge}>{challenge}</li>
                ))}
              </ul>
            </article>

            <article className={styles.learningCard}>
              <span className={styles.cardLabel}>
                ENGINEERING FOCUS
              </span>

              <ul className={styles.detailList}>
                {project.engineeringFocus.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        {/* Future Improvements */}
        <section className={styles.roadmapSection}>
          <div className={styles.sectionHeading}>
            <div>
              <span className={styles.sectionKicker}>
                06 / THE ROAD AHEAD
              </span>
              <h2>Future Improvements</h2>
            </div>

            <p>
              Ideas and improvements planned for future development.
            </p>
          </div>

          <div className={styles.roadmap}>
            {project.futurePlans.map((plan, index) => (
              <div key={plan} className={styles.roadmapItem}>
                <span>
                  {String(index + 1).padStart(2, "0")}
                </span>

                <p>{plan}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Project Links */}
        <section className={styles.projectLinks}>
          <div>
            <span className={styles.sectionKicker}>
              EXPLORE THE PROJECT
            </span>

            <h2>Want to see it in action?</h2>

            <p>
              Explore the live application or check out the source code.
            </p>
          </div>

          <div className={styles.actions}>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.primaryAction}
            >
              Visit Live Project
              <span aria-hidden="true">↗</span>
            </a>

            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.secondaryAction}
            >
              View Source Code
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className={styles.footerCta}>
          <span>© {new Date().getFullYear()} MD MASUD RANA</span>

          <Link href="/#projects">
            Explore More Projects ↑
          </Link>
        </footer>
      </div>
    </main>
  );
}
