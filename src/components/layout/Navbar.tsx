
"use client";

import { useEffect, useState } from "react";
import ThemeToggle from "@/components/theme/ThemeToggle";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    const sections = navLinks
      .map((link) => document.querySelector(link.href))
      .filter((section): section is Element => section !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-25% 0px -65% 0px",
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const renderLinks = () =>
    navLinks.map((link) => (
      <li key={link.href}>
        <a
          href={link.href}
          className={
            activeSection === link.href.slice(1) ? "active" : ""
          }
          aria-current={
            activeSection === link.href.slice(1)
              ? "location"
              : undefined
          }
          onClick={closeMenu}
        >
          {link.label}
        </a>
      </li>
    ));

  const renderCTA = (className: string) => (
    <a
      href="#contact"
      className={`navbar-cta ${className}`}
      onClick={closeMenu}
    >
      <span>Have an Idea?</span>
      <span className="cta-spark" aria-hidden="true">
        ✳
      </span>
    </a>
  );

  return (
    <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <nav className="navbar-container" aria-label="Main navigation">

        {/* LEFT: BRAND */}
        <a
          href="#home"
          className="navbar-logo"
          aria-label="MD Masud Rana - Home"
          onClick={closeMenu}
        >
          <svg
            viewBox="0 0 40 40"
            width="40"
            height="40"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M14 11L6 20L14 29M26 11L34 20L26 29M23 9L17 31"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <span className="navbar-brand-text">
            MASUD<span>.</span>
          </span>
        </a>

        {/* CENTER: DESKTOP NAVIGATION */}
        <div className="navbar-menu">
          <ul className="navbar-links">
            {renderLinks()}
          </ul>
        </div>

        {/* RIGHT: DESKTOP ACTIONS */}
        <div className="navbar-actions">
          <ThemeToggle />
          {renderCTA("navbar-cta-desktop")}
        </div>

        {/* MOBILE: THEME + MENU BUTTON */}
        <div className="navbar-mobile-actions">
          <ThemeToggle />

          <button
            type="button"
            className="menu-toggle"
            aria-label={
              menuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((previous) => !previous)}
          >
            <span />
            <span />
          </button>
        </div>

        {/* MOBILE DROPDOWN */}
        <div
          id="mobile-navigation"
          className={`mobile-navigation ${
            menuOpen ? "menu-open" : ""
          }`}
        >
          <ul className="navbar-links">
            {renderLinks()}
          </ul>

          {renderCTA("navbar-cta-mobile")}
        </div>

      </nav>
    </header>
  );
}
