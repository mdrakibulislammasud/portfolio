import Image from "next/image";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero} id="home" aria-labelledby="hero-title">
      <div className={styles.heroContent}>
        <div className={styles.eyebrow}>
          <span className={styles.statusDot} />
          FULL STACK WEB ENGINEER
        </div>

        <h1 className={styles.heading} id="hero-title">
          MD MASUD
          <br />
          <span>RANA.</span>
        </h1>

        <p className={styles.description}>
          I build thoughtful digital experiences through clean code,
          modern technologies, and a passion for solving real-world
          problems.
        </p>

        <div className={styles.heroActions}>
          <a href="#projects" className={styles.primaryButton}>
            Explore My Work <span aria-hidden="true">↗</span>
          </a>
          <a href="#contact" className={styles.secondaryButton}>
            Let&apos;s Connect
          </a>
          <a href="/resume" className={styles.resumeButton}>
            <span aria-hidden="true">⌘</span>
            View &amp; Download Resume
            <span aria-hidden="true">↗</span>
          </a>
        </div>

        <div className={styles.heroFooter}>
          <span>BASED IN BANGLADESH</span>
          <span>DESIGNING &amp; BUILDING FOR THE WEB</span>
        </div>
      </div>

      <div className={styles.heroVisual} aria-label="Developer portrait">
        <div className={styles.portraitGlow} />
        <div className={styles.portraitArtwork}>
          <div className={styles.portraitOutline} />
          <div className={styles.portraitFrame}>
            <Image
              src="/images/profile.png"
              alt="MD Masud Rana - Full Stack Web Engineer"
              fill
              priority
              sizes="(max-width: 900px) 90vw, 45vw"
              className={styles.portraitImage}
            />
          </div>
          <span className={styles.portraitAccent} />
          <span className={styles.portraitCorner} />
        </div>
      </div>
    </section>
  );
}
