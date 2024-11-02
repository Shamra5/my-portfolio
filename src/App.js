import './App.css';
import { useState } from 'react';

// Component for each section
const AboutMe = () => (
  <div className="section-content">
    <h2>About Me</h2>
    {/* Add your about me content */}
  </div>
);

const Skills = () => (
  <div className="section-content">
    <h2>Skills</h2>
    {/* Add your skills content */}
  </div>
);

const Projects = () => (
  <div className="section-content">
    <h2>Projects</h2>
    {/* Add your projects content */}
  </div>
);

const Experience = () => (
  <div className="section-content">
    <h2>Experience</h2>
    {/* Add your experience content */}
  </div>
);

const Certifications = () => (
  <div className="section-content">
    <h2>Certifications</h2>
    {/* Add your certifications content */}
  </div>
);

// New Contact component
const ContactInfo = () => (
  <div className="contact-info">
    <h3>Contact Details</h3>
    <div className="contact-details">
      <div className="contact-item">
        <i className="fas fa-phone"></i>
        <span>+94 768893909</span>
      </div>
      <div className="contact-item">
        <i className="fas fa-envelope"></i>
        <span>shamrafaizal@gmail.com</span>
      </div>
    </div>
  </div>
);

function App() {
  const [showWorkButtons, setShowWorkButtons] = useState(false);
  const [activeSection, setActiveSection] = useState(null);
  const [showContact, setShowContact] = useState(false);

  const handleViewWork = () => {
    setShowWorkButtons(true);
    setShowContact(false); // Hide contact info when viewing work
  };

  const handleContact = () => {
    setShowContact(!showContact); // Toggle contact info
    setShowWorkButtons(false); // Hide work buttons when showing contact
    setActiveSection(null); // Reset active section
  };

  const handleSectionClick = (section) => {
    setActiveSection(section);
    setShowContact(false); // Hide contact info when a section is selected
  };

  const renderSection = () => {
    switch (activeSection) {
      case 'about':
        return <AboutMe />;
      case 'skills':
        return <Skills />;
      case 'projects':
        return <Projects />;
      case 'experience':
        return <Experience />;
      case 'certifications':
        return <Certifications />;
      default:
        return null;
    }
  };

  return (
    
   

    <div className="portfolio-container">
      <div className="content-section">
        <div className="text-content">
          <h1>Hi, I'm Shamra Faizal</h1>
          <h2>Software Engineer</h2>
          <p>An adept developer blending creative vision with technical precision to build scalable and resilient web applications.</p>
          
          <div className="buttons">
            <button className="primary-btn" onClick={handleViewWork}>
              View Work
            </button>
            <button className="secondary-btn" onClick={handleContact}>
              Contact Me
            </button>
          </div>

          {showContact && <ContactInfo />}

          {showWorkButtons && (
            <div className="work-section-buttons">
              <button 
                className={`section-btn ${activeSection === 'about' ? 'active' : ''}`}
                onClick={() => handleSectionClick('about')}
              >
                About Me
              </button>
              <button 
                className={`section-btn ${activeSection === 'skills' ? 'active' : ''}`}
                onClick={() => handleSectionClick('skills')}
              >
                Skills
              </button>
              <button 
                className={`section-btn ${activeSection === 'projects' ? 'active' : ''}`}
                onClick={() => handleSectionClick('projects')}
              >
                Projects
              </button>
              <button 
                className={`section-btn ${activeSection === 'experience' ? 'active' : ''}`}
                onClick={() => handleSectionClick('experience')}
              >
                Experience
              </button>
              <button 
                className={`section-btn ${activeSection === 'certifications' ? 'active' : ''}`}
                onClick={() => handleSectionClick('certifications')}
              >
                Certifications
              </button>
            </div>
          )}

          {activeSection && (
            <div className="section-content-container">
              {renderSection()}
            </div>
          )}

          <div className="social-links">
            <a href="https://www.linkedin.com/in/shamra-faizal-5a21712a1/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin social-icon"></i>
            </a>
            <a href="https://github.com/Shamra5" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github social-icon"></i>
            </a>
            <a href="https://twitter.com/Shamra_Faizal" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter social-icon"></i>
            </a>
            <a href="https://www.facebook.com/share/7sFh8TDAUYsLTtZf/?mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook social-icon"></i>
            </a>
            <a href="https://instagram.com/shamra__faizal" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram social-icon"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="image-section">
        {/* The image will be added via CSS */}
      </div>
    </div>
  );
}

export default App;