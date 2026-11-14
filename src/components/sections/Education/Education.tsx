import styles from "./Education.module.css";


import { FaGraduationCap } from "react-icons/fa";

export default function Education() {
  return (
    <section id="education" className={styles["education-section"]}>
      <div className={styles["education-container"]}>
        <div className={styles["education-heading"]}>
          <span className={styles["education-eyebrow"]}>
            MY ACADEMIC BACKGROUND
          </span>

          <h2>
            Education<span>.</span>
          </h2>

          <p>
            My academic journey in computer science and engineering.
          </p>
        </div>

        <article className={styles["education-card"]}>
          <div className={styles["education-icon"]}>
            <FaGraduationCap />
          </div>

          <div className={styles["education-content"]}>
            <span className={styles["education-period"]}>
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
