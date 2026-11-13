
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

  // Active section detection
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Always show Home at the very top
      if (window.scrollY <= 5) {
        setActiveSection("home");
        return;
      }

      const navbar = document.querySelector(".navbar");
      const navbarHeight = navbar?.getBoundingClientRect().height ?? 82;

      // Detection point just below the navbar
      const marker = navbarHeight + 12;

      let currentSection = "home";

      navLinks.forEach((link) => {
        const section = document.querySelector<HTMLElement>(link.href);

        if (!section) return;

        const rect = section.getBoundingClientRect();

        if (rect.top <= marker) {
          currentSection = section.id;
        }
      });

      // Activate the last available section at page bottom
      const isAtPageBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2;

      if (isAtPageBottom) {
        const availableSections = navLinks.filter((link) =>
          document.querySelector(link.href)
        );

        const lastSection = availableSections.at(-1);

        if (lastSection) {
          currentSection = lastSection.href.slice(1);
        }
      }

      setActiveSection(currentSection);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  // Close mobile menu with Escape key
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
          <ul className="navbar-links">{renderLinks()}</ul>
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
          <ul className="navbar-links">{renderLinks()}</ul>
          {renderCTA("navbar-cta-mobile")}
        </div>

      </nav>
    </header>
  );
}
