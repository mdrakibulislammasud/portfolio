
import { FaGraduationCap } from "react-icons/fa";

export default function Education() {
  return (
    <section id="education" className="education-section">
      <div className="education-container">
        <div className="education-heading">
          <span className="education-eyebrow">
            MY ACADEMIC BACKGROUND
          </span>

          <h2>
            Education<span>.</span>
          </h2>

          <p>
            My academic journey in computer science and engineering.
          </p>
        </div>

        <article className="education-card">
          <div className="education-icon">
            <FaGraduationCap />
          </div>

          <div className="education-content">
            <span className="education-period">
              2025 — 2029 (Expected)
            </span>

            <h3>
              Bachelor of Science in Computer Science and Engineering
            </h3>

            <h4>
              IUBAT – International University of Business Agriculture and Technology
            </h4>

            <p>
              Pursuing a degree in Computer Science and Engineering,
              building a foundation in programming, computing concepts,
              and software development.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}
