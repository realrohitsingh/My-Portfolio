import { motion } from "framer-motion";
import "./Projects.css";

const projects = [
  {
    title: "SmartShop E-Commerce Admin Dashboard | Oct 2025 – Present",
    description: "Developed a feature-rich e-commerce admin dashboard with a modern, responsive UI. The application features separate, secure portals for user shopping and comprehensive store administration.\n\n- Dual Authentication System: Implemented distinct and secure authentication flows for administrators and users (including signup, login, and password recovery), using localStorage for persistent sessions and immediate login after registration.\n- Full-Stack Product Management: Engineered a complete CRUD (Create, Read, Update, Delete) interface for product management. All operations are persisted via a mock REST API, providing a real-time, dynamic experience.\n- Advanced UI/UX: Designed a modern, responsive interface featuring glassmorphism effects, gradient backgrounds, and smooth animations. The user experience is enhanced with toast notifications for all operations and graceful loading/error states.\n- Sophisticated Styling Architecture: Implemented a hybrid styling approach using Tailwind CSS v4. This combined a custom `@theme` and component layers in `App.css` for primary components with utility-based classes for secondary components, demonstrating a scalable and maintainable CSS strategy.\n- Efficient State & API Management: Utilized React Hooks (`useState`, `useEffect`, `useRef`) for robust client-side state management. Asynchronous API communication with the JSON Server backend was handled efficiently using Axios.",
    tech: ["React.js", "Vite", "Tailwind CSS", "React Router", "Axios", "React Toastify", "JSON Server"],
    link: "Not yet Deployed but soon whe it is finished.",
    github: "https://github.com/realrohitsingh/shopping-app-react-project.git"
  },
  {
    title: "AI-Powered Resume Screening & Job Recommendation Platform | 2024 – 2025",
    description: "Engineered a full-stack, AI-driven platform to streamline the hiring process by intelligently screening resumes and matching candidates to job opportunities. The application features dedicated dashboards for both job seekers and HR professionals.\n\n– Led a 4-member team using agile methodologies to manage weekly sprints, ensuring the timely delivery of project milestones.\n– Developed a fully responsive front-end interface with React.js and Material-UI, creating a modern and intuitive user experience with protected, role-based routes for different user types.\n– Built and integrated a Python-based REST API using Flask. The back-end leverages NLP libraries (NLTK, SpaCy) and machine learning (scikit-learn) to parse resumes, evaluate candidates, and provide job recommendations.\n– Deployed the full-stack application for live access and maintained comprehensive documentation for future development and scalability.",
    tech: [
      "React.js",
      "Python",
      "Flask",
      "scikit-learn",
      "NLTK",
      "SpaCy",
      "Material-UI (MUI)",
      "Axios",
      "React Router",
      "Agile"
    ],
    link: "https://resume-screening-tool-hz91.vercel.app/",
    github: "https://github.com/realrohitsingh/Resume-Screening-Tool.git"
  }
];

function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="projects" id="projects">
      <motion.h2
        className="fade-in"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}>
        Projects
      </motion.h2>
      <motion.div
        className="projects-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}>
        {projects.map((project, idx) => (
          <motion.div
            className="project-card"
            key={idx}
            variants={itemVariants}
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.2 },
            }}>
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.tech.map((t, i) => (
                  <span key={i} className="tech-tag">
                    {t}
                  </span>
                ))}
              </div>
              <div className="project-links">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link live-link">
                  Live Demo
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link github-link">
                  GitHub
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default Projects;
