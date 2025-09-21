import { motion } from 'framer-motion';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';
import profileImage from "../assets/profile.jpg";
import './About.css';

function About() {
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <section className="about" id="about">
      <motion.div
        className="about-content"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.img
          src={profileImage}
          alt="Rohit Singh"
          className="profile-pic"
          variants={itemVariants}
          whileHover={{ scale: 1.05, rotate: 5 }}
        />
        <div className="about-text">
          <motion.h2 variants={itemVariants}>About Me</motion.h2>
          <motion.p variants={itemVariants}>
            Hi, I'm <b>Rohit Kumar Singh</b>, a passionate Full Stack Developer and B.Tech IT student at Bengal College of Engineering and Technology. I love building scalable web applications and solving real-world problems with code. With hands-on experience in Java, React.js, and modern web technologies, I'm always eager to learn and contribute to innovative projects. I believe in clean code, continuous learning, and creating solutions that make a difference.
          </motion.p>

          <motion.h3 variants={itemVariants}>Education & Experience</motion.h3>
          <motion.div className="timeline" variants={containerVariants}>
            <motion.div className="timeline-item" variants={itemVariants}>
              <h4><FaGraduationCap /> Bengal College of Engineering and Technology, West Bengal (2021-2025)</h4>
              <p>Bachelor of Technology in Information Technology - Current Aggregate: 73.15%</p>
            </motion.div>
            <motion.div className="timeline-item" variants={itemVariants}>
              <h4><FaBriefcase /> JSpiders (BTM Layout) - Trainee (Present)</h4>
              <p>Java Full Stack Development with React.js - In-depth training on Core and Advanced Java, SQL, JDBC, Hibernate, Spring, Spring Boot, RESTful APIs, and React.js</p>
            </motion.div>
            <motion.div className="timeline-item" variants={itemVariants}>
              <h4><FaBriefcase /> InternPe - Intern (Aug 2024 – Sept 2024)</h4>
              <p>Java Programming Remote - Designed and implemented Java applications using Object-Oriented Programming, collaborated on debugging and optimizing Java-based projects</p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
export default About;

