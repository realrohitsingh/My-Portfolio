import { motion } from "framer-motion";
import "./Projects.css";

const projects = [
  {
    title: "SmartShop E-Commerce Application | Oct 2025 – Present",
    description: `A full-stack e-commerce web application designed with a modern Web Application design. The application features separate, secure dashboards for user shopping and administrative management.\n\n– Front-End: The user interface was built with React.js, leveraging its component-based architecture for reusability and state management. React Router was employed for client-side routing to create a seamless single-page application (SPA) experience. Styling was handled with Tailwind CSS for a utility-first, responsive design.\n– API & State Management: Asynchronous API calls to the backend were managed using Axios. Client-side state was handled efficiently through React Hooks to manage user sessions, shopping cart data, and product information.\n– Back-End Simulation: To facilitate rapid development and testing, a complete mock backend was constructed using JSON Server. This involved defining a schema for products, users, and admins, and exposing RESTful API endpoints that mimic a production environment, enabling full data persistence and manipulation.`,
    tech: ["React.js", "Tailwind CSS", "Axios", "JSON Server", "React Router"],
    link: "Not yet Deployed but soon whe it is finished.",
    github: "https://github.com/realrohitsingh/shopping-app-react-project.git",
  },
  {
    title: "Intelligent Resume Screening Tool 2024 – 2025",
    description: `An AI-powered resume screening system with a React.js frontend and Node.js, Express, MongoDB, and NLP-based backend.\n\n– Led a 4-member team, managing weekly sprints using agile methodology to ensure timely delivery of features.\n– Developed a fully responsive frontend interface with React.js and Bootstrap to improve user experience.\n– Integrated backend REST APIs and NLP modules to automatically evaluate and rank candidates based on skills and job requirements.\n– Deployed the project with live hosting and maintained documentation for future scalability.`,
    tech: [
      "React.js",
      "Bootstrap",
      "Node.js",
      "Express",
      "MongoDB",
      "NLP",
      "REST API",
      "Agile",
    ],
    link: "https://resume-screening-tool-hz91.vercel.app/",
    github: "https://github.com/realrohitsingh/Resume-Screening-Tool.git",
  },
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
