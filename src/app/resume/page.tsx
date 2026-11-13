
"use client";

import ThemeToggle from "@/components/theme/ThemeToggle";
import styles from "./page.module.css";

export default function ResumePage() {
  const handleDownload = async () => {
    const resumeElement = document.getElementById("resume-document");

    if (!resumeElement) return;

    try {
      const html2pdf = (await import("html2pdf.js")).default;

      await html2pdf()
        .set({
          margin: 0,
          filename: "MD-Masud-Rana-Resume.pdf",

          image: {
            type: "jpeg",
            quality: 0.98,
          },

          html2canvas: {
            scale: 2,
            useCORS: true,
            backgroundColor: "#ffffff",
            windowWidth: 1200,
            scrollY: 0,
          },

          jsPDF: {
            unit: "mm",
            format: "a4",
            orientation: "portrait",
          },

          pagebreak: {
            mode: [],
          },
        })
        .from(resumeElement)
        .save();
    } catch (error) {
      console.error("Resume PDF generation failed:", error);
    }
  };

  return (
    <main className={styles.page}>
      {/* TOPBAR */}
      <header className={styles.topbar}>
        <a href="/" className={styles.brand} aria-label="Back to Home">
          <span className={styles.brandIcon}>&lt;/&gt;</span>
          <span>
            MASUD<span className={styles.brandDot}>.</span>
          </span>
        </a>

        <div className={styles.topbarActions}>
          <ThemeToggle />

          <a href="/" className={styles.backLink}>
            <span aria-hidden="true">←</span>
            Back to Home
          </a>
        </div>
      </header>

      {/* INTRO */}
      <section className={styles.intro}>
        <span className={styles.eyebrow}>PROFESSIONAL PROFILE</span>

        <h1>
          My Resume<span>.</span>
        </h1>

        <p>
          A closer look at my education, technical skills,
          selected projects, and development journey.
        </p>

        <div className={styles.actions}>
          <a href="#resume-document" className={styles.viewButton}>
            <span aria-hidden="true">↘</span>
            View Resume
          </a>

          <button
            type="button"
            onClick={handleDownload}
            className={styles.downloadButton}
          >
            <span aria-hidden="true">↓</span>
            Download Resume
          </button>
        </div>
      </section>

      {/* RESUME DOCUMENT */}
      <article
        id="resume-document"
        className={styles.resumeSheet}
        aria-label="MD Masud Rana Resume"
      >
        {/* DOCUMENT HEADER */}
        <header className={styles.documentHeader}>
          <h2>MD MASUD RANA</h2>

          <p className={styles.designation}>
            FULL STACK WEB ENGINEER
          </p>

          {/* CONTACT INFORMATION */}
          <div className={styles.contactDetails}>
            <p>
              <a href="tel:+8801810430961">
                +880 1810-430961
              </a>
              <span className={styles.separator}> | </span>
              <span>Dhaka, Bangladesh</span>
            </p>

            <p>
              <a href="mailto:mdrakibulislammasud2@gmail.com">
                mdrakibulislammasud2@gmail.com
              </a>
            </p>

            <p className={styles.socialLinks}>
              <a
                href="https://github.com/mdrakibulislammasud"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/md-masud-rana-r/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </p>
          </div>
        </header>

        {/* CAREER OBJECTIVE */}
        <section className={styles.section}>
          <h3>CAREER OBJECTIVE</h3>

          <p>
            Driven by the challenge of turning ideas into meaningful
            software, I focus on developing modern web applications
            that balance functionality, usability, and maintainability.
            My interests span full-stack development, intuitive
            frontend experiences, scalable backend solutions, and
            efficient data integration. Through hands-on projects and
            continuous technical exploration, I aim to build software
            that solves real problems and delivers lasting value.
          </p>
        </section>

        {/* TECHNICAL SKILLS */}
        <section className={styles.section}>
          <h3>TECHNICAL SKILLS</h3>

          <div className={styles.skillList}>
            <p>
              <strong>Frontend:</strong> HTML, CSS, JavaScript,
              React.js, Next.js
            </p>

            <p>
              <strong>Backend:</strong> Node.js, Express.js,
              REST APIs
            </p>

            <p>
              <strong>Database:</strong> MongoDB
            </p>

            <p>
              <strong>Authentication:</strong> Better Auth, JWT
            </p>

            <p>
              <strong>Tools:</strong> Git, GitHub, VS Code, Vercel
            </p>
          </div>
        </section>

        {/* PROJECTS */}
        <section className={styles.section}>
          <h3>PROJECTS</h3>

          <div className={styles.project}>
            <div className={styles.projectHeading}>
              <h4>
                Neighbourly — Social Development Events Platform
              </h4>

              <span>Full Stack Project</span>
            </div>

            <p>
              Developed a community-driven platform that enables
              users to discover, create, join, and manage social
              development events in their local communities.
            </p>

            <ul>
              <li>
                Implemented user authentication and protected API
                access using Better Auth and JWT.
              </li>

              <li>
                Developed event creation, updating, and deletion
                functionality.
              </li>

              <li>
                Added event joining, leaving, and joined-event
                management features.
              </li>

              <li>
                Integrated frontend and backend APIs with MongoDB
                for application data management.
              </li>
            </ul>

            <p className={styles.projectTech}>
              <strong>Technologies:</strong> Next.js, React.js,
              Node.js, Express.js, MongoDB, Better Auth, JWT.
            </p>

            <div className={styles.projectLinks}>
              <a
                href="https://neighbourly-client.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </a>

              <a
                href="https://github.com/mdrakibulislammasud/B14_A_08_Client"
                target="_blank"
                rel="noopener noreferrer"
              >
                Client GitHub
              </a>

              <a
                href="https://github.com/mdrakibulislammasud/B14_A_08_Server"
                target="_blank"
                rel="noopener noreferrer"
              >
                Server GitHub
              </a>
            </div>
          </div>
        </section>

        {/* BUILDING AND LEARNING */}
        <section className={styles.section}>
          <h3>BUILDING &amp; LEARNING</h3>

          <ul>
            <li>
              Building responsive full-stack web applications
              through hands-on projects.
            </li>

            <li>
              Practicing frontend-backend integration, REST APIs,
              authentication, and database workflows.
            </li>

            <li>
              Improving problem-solving, debugging, and clean-code
              practices.
            </li>

            <li>
              Using Git and GitHub for version control and
              development workflows.
            </li>

            <li>
              Continuously learning software engineering principles,
              application architecture, and secure web development.
            </li>
          </ul>
        </section>

        {/* EDUCATION */}
        <section className={styles.section}>
          <h3>EDUCATION</h3>

          <div className={styles.education}>
            <div className={styles.educationHeading}>
              <h4>
                Bachelor of Science in Computer Science &amp;
                Engineering
              </h4>

              <span>2025 – 2029 (Expected)</span>
            </div>

            <p>
              International University of Business Agriculture
              and Technology (IUBAT)
            </p>

            <p>Currently Pursuing</p>
          </div>
        </section>

        {/* LANGUAGES */}
        <section className={styles.section}>
          <h3>LANGUAGES</h3>

          <p>
            <strong>Bengali:</strong> Native
            <span className={styles.languageDivider}> · </span>
            <strong>English:</strong> Working Proficiency
          </p>
        </section>

        {/* DOCUMENT FOOTER */}
        <footer className={styles.documentFooter}>
          MD MASUD RANA
          <span>FULL STACK WEB ENGINEER</span>
        </footer>
      </article>

      {/* PAGE FOOTER */}
      <footer className={styles.pageFooter}>
        <p>Designed with clarity. Built with purpose.</p>

        <a href="/">← Back to Home</a>
      </footer>
    </main>
  );
}
