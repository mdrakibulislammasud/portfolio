import styles from "./About.module.css";


const aboutHighlights = [
  {
    number: "01",
    title: "Full Stack Development",
    description:
      "Enjoying end-to-end development: shaping clear user interfaces, connecting APIs, and working with application data.",
  },
  {
    number: "02",
    title: "Continuous Learning",
    description:
      "Continuously exploring developer tools, modern web technologies, and software engineering practices through hands-on work.",
  },
  {
    number: "03",
    title: "Problem Solving",
    description:
      "Breaking complex tasks into manageable steps and turning ideas into practical, maintainable digital solutions.",
  },
];

export default function About() {
  return (
    <section id="about" className={styles["about-section"]}>
      <div className={styles["about-container"]}>
        <div className={styles["about-heading"]}>
          <span className={styles["about-eyebrow"]}>GET TO KNOW ME</span>
          <h2>
            About <span>Me.</span>
          </h2>
        </div>

        <div className={styles["about-content"]}>
          <div className={styles["about-intro"]}>
            <p className={styles["about-lead"]}>
              Hello! I&apos;m <strong>MD Masud Rana</strong>, an aspiring
              Full Stack Web Engineer passionate about building
              meaningful digital experiences.
            </p>

            <h3 className={styles["about-subheading"]}>My Programming Journey</h3>
            <p>
              My programming journey is shaped by my Computer Science
              and Engineering studies and the practical projects I build
              alongside them. I have worked with programming fundamentals
              and continued exploring modern web technologies, from
              frontend interfaces to backend APIs and databases.
            </p>

            <h3 className={styles["about-subheading"]}>What I Enjoy Building</h3>
            <p>
              I especially enjoy full-stack development: turning an idea
              into a usable interface, connecting it to application logic,
              and making sure the complete experience works reliably.
              I value readable code, thoughtful structure, and solving
              problems step by step.
            </p>

            <h3 className={styles["about-subheading"]}>Interests &amp; Working Style</h3>
            <p>
              My interests include exploring developer tools, learning new
              technologies, experimenting with project ideas, and strengthening
              my problem-solving skills. I value curiosity, consistency, and
              learning through practical work, and I try to bring that mindset
              into every project.
            </p>
          </div>

          <div className={styles["about-highlights"]}>
            {aboutHighlights.map((item) => (
              <article className={styles["about-card"]} key={item.number}>
                <span className={styles["about-number"]}>{item.number}</span>

                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
