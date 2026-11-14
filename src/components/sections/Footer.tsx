
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
    <footer className="footer-section">
      <div className="footer-container">
        {/* MAIN FOOTER */}

        <div className="footer-main">
          {/* BRAND */}

          <div className="footer-brand">
            <a href="#home" className="footer-logo" aria-label="Back to home">
              <span className="footer-code-icon">&lt;/&gt;</span>
            </a>

            <div className="footer-brand-content">
              <h2>
                MD MASUD <span>RANA</span>
              </h2>

              <h3>FULL STACK WEB ENGINEER</h3>

              <span className="footer-brand-line" />

              <p>
                Building clean, scalable and impactful digital
                experiences.
              </p>
            </div>
          </div>

          {/* TERMINAL CONTACT PANEL */}

          <div className="footer-terminal">
            <div className="footer-terminal-header">
              <div className="footer-terminal-dots">
                <span />
                <span />
                <span />
              </div>

              <span className="footer-terminal-label">
                CONTACT TERMINAL
              </span>
            </div>

            <div className="footer-terminal-body">
              <p className="footer-terminal-command">
                <span>&gt;</span> initiate_connection()
              </p>

              <p className="footer-terminal-status">
                <span className="footer-status-dot" />
                <span>Status:</span>
                <strong>Available for opportunities</strong>
              </p>

              <div className="footer-terminal-divider" />

              <a
                href={`mailto:${contactEmail}`}
                className="footer-terminal-link"
              >
                <FaEnvelope />
                <span>{contactEmail}</span>
                <span className="footer-link-arrow">↗</span>
              </a>

              <a
                href="https://www.linkedin.com/in/md-masud-rana-r"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-terminal-link"
              >
                <FaLinkedinIn />
                <span>linkedin.com/in/md-masud-rana-r</span>
                <span className="footer-link-arrow">↗</span>
              </a>
            </div>
          </div>
        </div>

        {/* FOOTER BOTTOM */}

        <div className="footer-bottom">
          <nav className="footer-navigation" aria-label="Footer navigation">
            {footerLinks.map((link) => (
              <a key={link.label} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>

          <div className="footer-socials">
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

          <p className="footer-copyright">
            © {currentYear} <span>MD MASUD RANA.</span>
            <br className="footer-copyright-break" />
            All rights reserved.
          </p>
        </div>

        {/* FOOTER DECORATIVE LINE */}

        <div className="footer-decoration">
          <span />
        </div>
      </div>
    </footer>
  );
}
