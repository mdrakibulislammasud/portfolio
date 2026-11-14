import styles from "./Footer.module.css";


import {
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
} from "react-icons/fa";

const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

const contactEmail = "mdrakibulislammasud2@gmail.com";

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/mdrakibulislammasud",
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/md-masud-rana-r",
    icon: FaLinkedinIn,
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles["footer-section"]}>
      <div className={styles["footer-container"]}>
        {/* MAIN FOOTER */}

        <div className={styles["footer-main"]}>
          {/* BRAND */}

          <div className={styles["footer-brand"]}>
            <a href="#home" className={styles["footer-logo"]} aria-label="Back to home">
              <span className={styles["footer-code-icon"]}>&lt;/&gt;</span>
            </a>

            <div className={styles["footer-brand-content"]}>
              <h2>
                MD MASUD <span>RANA</span>
              </h2>

              <h3>FULL STACK WEB ENGINEER</h3>

              <span className={styles["footer-brand-line"]} />

              <p>
                Building clean, scalable and impactful digital
                experiences.
              </p>
            </div>
          </div>

          {/* TERMINAL CONTACT PANEL */}

          <div className={styles["footer-terminal"]}>
            <div className={styles["footer-terminal-header"]}>
              <div className={styles["footer-terminal-dots"]}>
                <span />
                <span />
                <span />
              </div>

              <span className={styles["footer-terminal-label"]}>
                CONTACT TERMINAL
              </span>
            </div>

            <div className={styles["footer-terminal-body"]}>
              <p className={styles["footer-terminal-command"]}>
                <span>&gt;</span> initiate_connection()
              </p>

              <p className={styles["footer-terminal-status"]}>
                <span className={styles["footer-status-dot"]} />
                <span>Status:</span>
                <strong>Available for opportunities</strong>
              </p>

              <div className={styles["footer-terminal-divider"]} />

              <a
                href={`mailto:${contactEmail}`}
                className={styles["footer-terminal-link"]}
              >
                <FaEnvelope />
                <span>{contactEmail}</span>
                <span className={styles["footer-link-arrow"]}>↗</span>
              </a>

              <a
                href="https://www.linkedin.com/in/md-masud-rana-r"
                target="_blank"
                rel="noopener noreferrer"
                className={styles["footer-terminal-link"]}
              >
                <FaLinkedinIn />
                <span>linkedin.com/in/md-masud-rana-r</span>
                <span className={styles["footer-link-arrow"]}>↗</span>
              </a>
            </div>
          </div>
        </div>

        {/* FOOTER BOTTOM */}

        <div className={styles["footer-bottom"]}>
          <nav className={styles["footer-navigation"]} aria-label="Footer navigation">
            {footerLinks.map((link) => (
              <a key={link.label} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>

          <div className={styles["footer-socials"]}>
            {socialLinks.map((social) => {
              const Icon = social.icon;

              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  title={social.label}
                >
                  <Icon />
                </a>
              );
            })}
          </div>

          <p className={styles["footer-copyright"]}>
            © {currentYear} <span>MD MASUD RANA.</span>
            <br className={styles["footer-copyright-break"]} />
            All rights reserved.
          </p>
        </div>

        {/* FOOTER DECORATIVE LINE */}

        <div className={styles["footer-decoration"]}>
          <span />
        </div>
      </div>
    </footer>
  );
}
