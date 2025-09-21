import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import "./Header.css";

// Import profile image
import profileImage from "../assets/profile.jpg";

const interests = [
  "Full Stack Development",
  "Backend Development",
  "Frontend Development",
  "Competitive Programming",
  "Open Source Contributions",
  "Continuous Learning",
];

function Header() {
  const [activeSection, setActiveSection] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "skills", "projects", "contact"];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (
          section &&
          scrollPosition >= section.offsetTop &&
          scrollPosition < section.offsetTop + section.offsetHeight
        ) {
          setActiveSection(sectionId);
          break;
        }
      }
    };

    const handleClickOutside = (event) => {
      if (
        isMenuOpen &&
        !event.target.closest(".navbar") &&
        !event.target.closest(".mobile-nav-links")
      ) {
        setIsMenuOpen(false);
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === "Escape" && isModalOpen) {
        setIsModalOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("click", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("click", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen, isModalOpen]);

  const handleLinkClick = (e, targetId) => {
    e.preventDefault();
    setIsMenuOpen(false);

    // Immediately update active section
    setActiveSection(targetId);

    const section = document.getElementById(targetId);
    if (section) {
      // Force scroll to top first, then to section
      window.scrollTo({ top: 0, behavior: "auto" });

      // Small delay to ensure scroll to top completes
      setTimeout(() => {
        section.scrollIntoView({ behavior: "smooth" });
      }, 50);
    }

    // Update URL hash
    setTimeout(() => {
      window.location.hash = targetId;
    }, 200);
  };

  // Add stopPropagation to hamburger and mobile menu
  const handleHamburgerClick = (e) => {
    e.stopPropagation();
    setIsMenuOpen((prev) => !prev);
  };
  const handleMobileNavClick = (e) => {
    e.stopPropagation();
  };

  const handleProfileClick = (e) => {
    e.stopPropagation();
    setIsModalOpen(true);
  };

  const handleModalClose = (e) => {
    e.stopPropagation();
    setIsModalOpen(false);
  };

  const handleModalBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      setIsModalOpen(false);
    }
  };

  return (
    <>
      <nav className="navbar">
        <div className="profile-section">
          <div className="profile-image-container" onClick={handleProfileClick}>
            <img
              src={profileImage}
              alt="Rohit Singh"
              className="profile-image"
              onError={(e) => {
                e.target.style.display = "none";
                e.target.nextSibling.style.display = "flex";
              }}
            />
            <div className="profile-fallback" style={{ display: "none" }}>
              <span>RS</span>
            </div>
          </div>
          <span className="profile-name">Rohit Singh</span>
        </div>
        <div className="nav-links-container">
          <a
            href="#about"
            onClick={(e) => handleLinkClick(e, "about")}
            className={activeSection === "about" ? "active" : ""}>
            About
          </a>
          <a
            href="#skills"
            onClick={(e) => handleLinkClick(e, "skills")}
            className={activeSection === "skills" ? "active" : ""}>
            Skills
          </a>
          <a
            href="#projects"
            onClick={(e) => handleLinkClick(e, "projects")}
            className={activeSection === "projects" ? "active" : ""}>
            Projects
          </a>
          <a
            href="#contact"
            onClick={(e) => handleLinkClick(e, "contact")}
            className={activeSection === "contact" ? "active" : ""}>
            Contact
          </a>
        </div>
        <div
          className="hamburger"
          onClick={handleHamburgerClick}
          aria-label="Toggle navigation menu">
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </nav>
      <div
        className={`mobile-nav-links ${isMenuOpen ? "open" : ""}`}
        onClick={handleMobileNavClick}>
        <a href="#about" onClick={(e) => handleLinkClick(e, "about")}>
          About
        </a>
        <a href="#skills" onClick={(e) => handleLinkClick(e, "skills")}>
          Skills
        </a>
        <a href="#projects" onClick={(e) => handleLinkClick(e, "projects")}>
          Projects
        </a>
        <a href="#contact" onClick={(e) => handleLinkClick(e, "contact")}>
          Contact
        </a>
      </div>
      <header className="header">
        <div className="header-content">
          <h1 className="fade-in">Hi, I'm Rohit</h1>
          <p className="fade-in delay-1">
            <Typewriter
              words={interests}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </p>
          <a href="#projects" onClick={(e) => handleLinkClick(e, "projects")}>
            <button className="fade-in delay-2" aria-label="View my projects">
              View Projects
            </button>
          </a>
          <a
            href="https://drive.google.com/file/d/1RNixBG7QIgmXzPmK7m90GVKevPBb1GNI/view"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download my resume">
            <button className="fade-in delay-2">Download Resume</button>
          </a>
        </div>
      </header>

      {/* Profile Modal */}
      {isModalOpen && (
        <div
          className="profile-modal-backdrop"
          onClick={handleModalBackdropClick}>
          <div className="profile-modal">
            <button
              className="modal-close-btn"
              onClick={handleModalClose}
              aria-label="Close profile modal">
              <FaTimes />
            </button>
            <div className="modal-content">
              <img
                src={profileImage}
                alt="Rohit Singh - Full Profile"
                className="modal-profile-image"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.nextSibling.style.display = "flex";
                }}
              />
              <div className="modal-fallback" style={{ display: "none" }}>
                <span>RS</span>
              </div>
              <h3 className="modal-name">Rohit Singh</h3>
              <p className="modal-title">Full Stack Developer</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
