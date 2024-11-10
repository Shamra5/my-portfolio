import './App.css';
import { useState } from 'react';

// Component for each section
const AboutMe = () => (
  <div className="section-content">
    <h2><center>About Me</center></h2>
    <p>
      Hello! I'm Shamra Faizal, a second-year Software Engineering student at The Open University of Sri Lanka.
      With a focus on full-stack development and mobile applications, I am passionate about creating efficient,
      user-centered solutions that solve real-world problems.
    </p>

    <h3>My Vision and Goals</h3>
    <p>
      I aspire to make a meaningful impact in the tech world by developing applications that are not only functional
      but also innovative. I'm especially driven to expand my expertise in software architecture and design, aiming
      to contribute to projects that push the boundaries of technology.
    </p>

    <h3>Strengths and Skills</h3>
    <p>
      I'm proficient in a variety of languages and tools, including Python, JavaScript, Java, HTML, CSS, PHP, Vue.js,
      and have hands-on experience with frameworks like React and tools like Git and SQL. I have successfully developed
      a mobile application, further strengthening my skills in building robust and scalable solutions.
    </p>

    <h3>Outside of Coding</h3>
    <p>
      When I'm not working on projects, I enjoy exploring new technology trends, learning about AI advancements,
      and diving into creative hobbies that keep me inspired.
    </p>

    <h3>Always Learning</h3>
    <p>
      Currently, I'm focusing on expanding my knowledge in artificial intelligence, aiming to integrate AI principles
      into my future projects and enhance my technical versatility.
    </p>

    <h3>Open to Opportunities</h3>
    <p>
      I am open to internship opportunities where I can apply my skills, gain hands-on experience, and contribute to
      impactful projects. If you're interested in collaborating or have an opportunity in mind, please feel free to reach out!
    </p>

  </div>
);

// Update your Skills component in App.js
const Skills = () => (
  <div className="section-content">
    <h2><center>Skills</center></h2>
    <div className="skills-container">
      <div className="skill-item">
        <div className="skill-icon">
          <i className="fas fa-brain"></i>
        </div>
        <div className="skill-details">
          <h3>Logical Thinking & Problem Solving</h3>
          <div className="skill-progress">
            <div className="progress-bar" style={{ width: '90%' }}></div>
          </div>
        </div>
      </div>

      <div className="skill-item">
        <div className="skill-icon">
          <i className="fas fa-bug"></i>
        </div>
        <div className="skill-details">
          <h3>Software Debugging</h3>
          <div className="skill-progress">
            <div className="progress-bar" style={{ width: '85%' }}></div>
          </div>
        </div>
      </div>

      <div className="skill-item">
        <div className="skill-icon">
          <i className="fas fa-laptop-code"></i>
        </div>
        <div className="skill-details">
          <h3>Computer Programming</h3>
          <div className="skill-progress">
            <div className="progress-bar" style={{ width: '88%' }}></div>
          </div>
        </div>
      </div>

      <div className="skill-item">
        <div className="skill-icon">
          <i className="fas fa-code"></i>
        </div>
        <div className="skill-details">
          <h3>Coding</h3>
          <div className="skill-progress">
            <div className="progress-bar" style={{ width: '92%' }}></div>
          </div>
        </div>
      </div>

      <div className="skill-item">
        <div className="skill-icon">
          <i className="fas fa-handshake"></i>
        </div>
        <div className="skill-details">
          <h3>Conflict Resolution</h3>
          <div className="skill-progress">
            <div className="progress-bar" style={{ width: '80%' }}></div>
          </div>
        </div>
      </div>

      <div className="skill-item">
        <div className="skill-icon">
          <i className="fas fa-comments"></i>
        </div>
        <div className="skill-details">
          <h3>Oral and Written Communication</h3>
          <div className="skill-progress">
            <div className="progress-bar" style={{ width: '87%' }}></div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Projects = () => (
  <div className="section-content">
    <h2><center>Projects</center></h2>
    <div className="projects-container">
      <div className="project-card">
        <h3>GitBravo</h3>
        <div className="project-details">
          <div className="project-section">
            <h4>Description:</h4>
            <p>GitBravo is a social media website designed to provide a seamless and engaging user experience for connecting and sharing content. The platform includes features such as user profiles, friend connections, and content sharing.</p>
          </div>
          
          <div className="project-section">
            <h4>Technologies Used:</h4>
            <p>HTML, CSS, JavaScript, Git, GitHub, Visual Studio.</p>
          </div>
          
          <div className="project-section">
            <h4>Role and Responsibilities:</h4>
            <p>Full-stack developer, responsible for designing the user interface, implementing core social features, and ensuring responsive design across devices.</p>
          </div>
          
          <div className="project-section">
            <h4>Challenges Faced:</h4>
            <p>Addressing scalability and optimizing the performance of real-time features like live updates and notifications. Utilized efficient data handling methods to maintain a smooth user experience.</p>
          </div>
          
          <div className="project-link">
            <a href="https://github.com/Shamra5/GitBravo" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i> GitBravo on GitHub
            </a>
          </div>
        </div>
      </div>

      <div className="project-card">
        <h3>Open Sesame (githubtest)</h3>
        <div className="project-details">
          <div className="project-section">
            <h4>Description:</h4>
            <p>Open Sesame is a university website created to streamline access to resources, announcements, and university updates. The site aims to improve the student experience with easily navigable sections for academic schedules, faculty information, and event news.</p>
          </div>
          
          <div className="project-section">
            <h4>Technologies Used:</h4>
            <p>HTML, CSS, JavaScript, Git, GitHub, Visual Studio.</p>
          </div>
          
          <div className="project-section">
            <h4>Role and Responsibilities:</h4>
            <p>Web developer, focusing on structuring the website layout, enhancing user interface design, and implementing dynamic content for user engagement.</p>
          </div>
          
          <div className="project-section">
            <h4>Challenges Faced:</h4>
            <p>Implementing a user-friendly design with clear navigation and responsive elements to accommodate different devices and screen sizes.</p>
          </div>
          
          <div className="project-link">
            <a href="https://github.com/Shamra5/githubtest" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i> GitHubTest on GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

      

const Experience = () => (
  <div className="section-content">
    <h2><center>Experience</center></h2>
    <div className="experience-item">
      <h3>Teacher</h3>
      <h4>Gatwick International School, Kudugala</h4>
      <p className="date">January 2022 - Present</p>

      <h5>Key Responsibilities:</h5>
      <ul>
        <li>Conducted lectures and tutorials on Information Technology, Maths and English.</li>
        <li>Designed and graded assignments and exams.</li>
        <li>Provided individual and group tutoring to students.</li>
      </ul>

      <h5>Achievements:</h5>
      <ul>
        <li>Improved student engagement and learning outcomes through innovative teaching methods.</li>
        <li>Successfully mentored students to achieve academic success.</li>
      </ul>
    </div>
  </div>
);


const Certifications = () => (
  <div className="section-content">
    <h2><center>Certifications</center></h2>
    
    <div className="certification-item">
      <h3>ACES Coders 2024 - Participation Certificate</h3>
      <h4>Issued By: Association of Computer Engineering Students, Faculty of Engineering, University of Peradeniya</h4>
      <p className="date">Date Obtained: October 6, 2024</p>
      <p>Description: Participated in ACES Coders 2024, a competitive programming event that brought together engineering students to tackle complex coding challenges and improve problem-solving skills. This experience contributed to skills in algorithm design, teamwork, and efficient coding practices.</p>
      
      <div className="certification-link">
        <a href="https://drive.google.com/file/d/16OZYESjrjVj5m9ozkcjb7cQnpqT4omwd/view?usp=sharing" target="_blank" rel="noopener noreferrer">
          <i className="fas fa-download"></i> View Certificate
        </a>
      </div>
    </div>

    <div className="certification-item">
      <h3>Huawei ICT Competition 2023-2024 - National Level Participation Certificate</h3>
      <h4>Issued By: Huawei</h4>
      <p className="date">Date Obtained: July 2024</p>
      <p>Description: Participated in the Huawei ICT Competition 2023-2024, a national-level event focused on ICT skills and knowledge, including networking, cloud computing, and data management. This competition emphasized practical skills, critical thinking, and real-world applications of ICT technologies, providing a comprehensive understanding of current industry standards and emerging trends.</p>

      <div className="certification-link">
        <a href="https://drive.google.com/file/d/1NuEaZkWzbQ7a87oqc2I6G67gI97UHGNk/view?usp=sharing" target="_blank" rel="noopener noreferrer">
          <i className="fas fa-download"></i> View Certificate
        </a>
      </div>
    </div>
  </div>
);

const Education = () => (
  <div className="section-content">
    <h2><center>Education</center></h2>
    <div className="education-item">
      <h3>Software Engineer (UG)</h3>
      <h4>The Open University Of Sri Lanka</h4>
      <p className="date">2022 - Present</p>
      <p>Key Achievements and Focus Areas:</p>
      <ul>
        <li>Developed strong programming skills in Java, Python, Javascript, HTML, CSS and PHP through hands-on projects.</li>
        <li>Applied software engineering principles in designing, testing, and deploying applications.</li>
        <li>Gained hands-on experience with database management, web development, and mobile app development.</li>
        <li>Studied core principles of software engineering, including system design.</li>
      </ul>
    </div>
  </div>
);

// Add this component with your other component definitions
const CV = () => (
  <div className="section-content cv-section">
    <h2><center>Curriculum Vitae (CV)</center></h2>
    <div className="cv-container">
      <iframe
        src="https://drive.google.com/file/d/1Y6Gf-x2gSvuTp70lKBETjQjJ-HQObUC8/preview"
        width="100%"
        height="600px"
        title="CV"
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <div className="cv-actions">
        <a 
          href="https://drive.google.com/file/d/1Y6Gf-x2gSvuTp70lKBETjQjJ-HQObUC8/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="cv-download-btn"
        >
          <i className="fas fa-download"></i> Download CV
        </a>
      </div>
    </div>
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
      case 'education':
        return <Education />;
      default:
        return <CV />;
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
              <button
                className={`section-btn ${activeSection === 'education' ? 'active' : ''}`}
                onClick={() => handleSectionClick('education')}
              >
                Education
              </button>
              <button
                className={`section-btn ${activeSection === 'cv' ? 'active' : ''}`} // Add this line
                onClick={() => handleSectionClick('cv')} // Add this line
              >
                Curriculum Vitae (CV)





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
            <a href="https://twitter.com/shamra_faizal" target="_blank" rel="noopener noreferrer">
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