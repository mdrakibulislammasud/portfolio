
const contactEmail = "mdrakibulislammasud2@gmail.com";

const socialLinks = [
  {
    name: "GitHub",
    description: "Explore my projects and code",
    href: "https://github.com/mdrakibulislammasud",
    icon: "GH",
  },
  {
    name: "LinkedIn",
    description: "Connect with me professionally",
    href: "https://www.linkedin.com/",
    icon: "in",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-heading">
          <span className="contact-eyebrow">GET IN TOUCH</span>

          <h2>
            Let's Work Together<span>.</span>
          </h2>

          <p>
            Have a project idea, an opportunity, or just want to
            connect? Feel free to reach out. I'd love to hear from you.
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-info">
            <h3>Let's start a conversation.</h3>

            <p>
              I'm always open to discussing new projects,
              creative ideas, and opportunities to grow.
            </p>

            <a
              href={`mailto:${contactEmail}`}
              className="contact-email-card"
            >
              <span className="contact-info-icon">@</span>

              <span className="contact-info-content">
                <span>Email Me</span>
                <strong>{contactEmail}</strong>
              </span>

              <span className="contact-arrow">↗</span>
            </a>

            <div className="contact-socials">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-social-card"
                >
                  <span className="contact-info-icon">
                    {social.icon}
                  </span>

                  <span className="contact-info-content">
                    <strong>{social.name}</strong>
                    <span>{social.description}</span>
                  </span>

                  <span className="contact-arrow">↗</span>
                </a>
              ))}
            </div>
          </div>

          <form className="contact-form">
            <h3>Send Me a Message</h3>

            <div className="contact-form-group">
              <label htmlFor="contact-name">Your Name</label>
              <input
                id="contact-name"
                type="text"
                name="name"
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="contact-form-group">
              <label htmlFor="contact-email">Your Email</label>
              <input
                id="contact-email"
                type="email"
                name="email"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="contact-form-group">
              <label htmlFor="contact-subject">Subject</label>
              <input
                id="contact-subject"
                type="text"
                name="subject"
                placeholder="What is this about?"
                required
              />
            </div>

            <div className="contact-form-group">
              <label htmlFor="contact-message">Message</label>
              <textarea
                id="contact-message"
                name="message"
                rows={5}
                placeholder="Write your message..."
                required
              />
            </div>

            <button type="submit" className="contact-submit">
              Send Message <span>↗</span>
            </button>

            <p className="contact-form-note">
              Your message will be sent directly to my inbox.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
