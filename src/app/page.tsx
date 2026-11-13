

import About from "@/components/sections/About";
import Navbar from "@/components/layout/Navbar";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className={styles.page} id="home">
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <div className={styles.eyebrow}>
              <span className={styles.statusDot} />
              FULL STACK WEB ENGINEER
            </div>

            <h1 className={styles.heading}>
              MD MASUD
              <br />
              <span>RANA.</span>
            </h1>

            <p className={styles.description}>
              I build thoughtful digital experiences through clean code,
              modern technologies, and a passion for solving real-world problems.
            </p>

            <div className={styles.heroActions}>
              <a href="#projects" className={styles.primaryButton}>
                Explore My Work <span aria-hidden="true">↗</span>
              </a>

              <a href="#contact" className={styles.secondaryButton}>
                Let's Connect
              </a>

              <a href="/resume" className={styles.resumeButton}>
                <span aria-hidden="true">⌘</span>
                View Resume
                <span aria-hidden="true">↗</span>
              </a>
            </div>

            <div className={styles.heroFooter}>
              <span>BASED IN BANGLADESH</span>
              <span>DESIGNING & BUILDING FOR THE WEB</span>
            </div>
          </div>

          {/* Developer Code Visual */}
          <div className={styles.heroVisual} aria-hidden="true">
            <div className={styles.visualGlow} />

            <div className={styles.codeCard}>
              <div className={styles.codeHeader}>
                <div className={styles.windowDots}>
                  <i />
                  <i />
                  <i />
                </div>

                <span>developer.ts</span>
                <span className={styles.codeLanguage}>TS</span>
              </div>

              <div className={styles.codeBody}>
                <p><span>01</span> <b>const</b> developer = {"{"}</p>
                <p><span>02</span> &nbsp; name: <em>"Masud Rana"</em>,</p>
                <p><span>03</span> &nbsp; role: <em>"Full Stack Engineer"</em>,</p>
                <p><span>04</span> &nbsp; passion: <em>"Building things"</em>,</p>
                <p><span>05</span> &nbsp; mindset: <em>"Always learning"</em></p>
                <p><span>06</span> {"}"}</p>

                <p className={styles.codeComment}>
                  <span>07</span> // Turning ideas into reality.
                </p>
              </div>

              <div className={styles.codeBottom}>
                <span className={styles.codeIndicator} />
                AVAILABLE FOR GREAT IDEAS
              </div>
            </div>

            <div className={styles.visualCaption}>
              <span>01 / 04</span>
              <span>THE DEVELOPER</span>
            </div>
          </div>
        </section>
        {/* About Section */}
        <About />
      </main>
    </>
  );
}
