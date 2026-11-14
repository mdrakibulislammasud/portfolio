import styles from "./Contact.module.css";


const contactEmail = "mdrakibulislammasud2@gmail.com";
const contactPhone = "+8801810430961";

const socialLinks = [
  {
    name: "Phone",
    description: "+880 1810-430961 · Call me",
    href: `tel:${contactPhone}`,
    icon: "☎",
    external: false,
  },
  {
    name: "WhatsApp",
    description: "Message me on WhatsApp",
    href: "https://wa.me/8801810430961",
    icon: "WA",
    external: true,
  },
  {
    name: "GitHub",
    description: "Explore my projects and code",
    href: "https://github.com/mdrakibulislammasud",
    icon: "GH",
    external: true,
  },
  {
    name: "LinkedIn",
    description: "Connect with me professionally",
    href: "https://www.linkedin.com/in/md-masud-rana-r",
    icon: "in",
    external: true,
  },
];

export default function Contact() {
  return (
    <section id="contact" className={styles["contact-section"]}>
      <div className={styles["contact-container"]}>
        <div className={styles["contact-heading"]}>
          <span className={styles["contact-eyebrow"]}>GET IN TOUCH</span>

          <h2>
            Let&apos;s Work Together<span>.</span>
          </h2>

          <p>
            Have a project idea, an opportunity, or just want to
            connect? Feel free to reach out. I&apos;d love to hear from you.
          </p>
        </div>

        <div className={styles["contact-grid"]}>
          <div className={styles["contact-info"]}>
            <h3>Let&apos;s start a conversation.</h3>

            <p>
              I&apos;m always open to discussing new projects,
              creative ideas, and opportunities to grow.
            </p>

            <a
              href={`mailto:${contactEmail}`}
              className={styles["contact-email-card"]}
            >
              <span className={styles["contact-info-icon"]}>@</span>

              <span className={styles["contact-info-content"]}>
                <span>Email Me</span>
                <strong>{contactEmail}</strong>
              </span>

              <span className={styles["contact-arrow"]}>↗</span>
            </a>

            <div className={styles["contact-socials"]}>
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target={social.external ? "_blank" : undefined}
                  rel={social.external ? "noopener noreferrer" : undefined}
                  className={styles["contact-social-card"]}
                >
                  <span className={styles["contact-info-icon"]}>
                    {social.icon}
                  </span>

                  <span className={styles["contact-info-content"]}>
                    <strong>{social.name}</strong>
                    <span>{social.description}</span>
                  </span>

                  <span className={styles["contact-arrow"]}>↗</span>
                </a>
              ))}
            </div>
          </div>

          <div className={styles["contact-cta-card"]}>
            <span className={styles["contact-eyebrow"]}>HAVE A PROJECT IN MIND?</span>
            <h3>Let&apos;s make something useful.</h3>
            <p className={styles["contact-cta-description"]}>
              Tell me a little about your idea, collaboration, or opportunity.
              Your email application will open with my address ready.
            </p>
            <a
              className={styles["contact-cta-button"]}
              href={`mailto:${contactEmail}?subject=${encodeURIComponent("Portfolio enquiry")}`}
            >
              Email Me Directly <span aria-hidden="true">↗</span>
            </a>
            <p className={styles["contact-cta-note"]}>
              Direct email is available now. An on-site message form can be added with a backend integration later.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
