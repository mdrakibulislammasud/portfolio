
const aboutHighlights = [
  {
    number: "01",
    title: "Full Stack Development",
    description:
      "Building modern web applications by connecting intuitive frontend experiences with reliable backend solutions.",
  },
  {
    number: "02",
    title: "Continuous Learning",
    description:
      "Exploring new technologies, improving problem-solving skills, and learning software engineering practices.",
  },
  {
    number: "03",
    title: "Problem Solving",
    description:
      "Enjoying the process of understanding challenges and turning ideas into practical digital solutions.",
  },
];

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-heading">
          <span className="about-eyebrow">GET TO KNOW ME</span>
          <h2>
            About <span>Me.</span>
          </h2>
        </div>

        <div className="about-content">
          <div className="about-intro">
            <p className="about-lead">
              Hello! I'm <strong>MD Masud Rana</strong>, an aspiring
              Full Stack Web Engineer passionate about building
              meaningful digital experiences.
            </p>

            <p>
              I enjoy developing modern web applications, exploring
              new technologies, and understanding how different parts
              of a software system work together.
            </p>

            <p>
              My focus is on writing clean, maintainable code and
              creating applications that are useful, accessible,
              and enjoyable to use. I believe consistent learning
              and hands-on experience are essential to becoming
              a better software engineer.
            </p>
          </div>

          <div className="about-highlights">
            {aboutHighlights.map((item) => (
              <article className="about-card" key={item.number}>
                <span className="about-number">{item.number}</span>

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
