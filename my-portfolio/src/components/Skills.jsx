import { motion } from 'framer-motion';
import { FaCode, FaCss3Alt, FaDatabase, FaGitAlt, FaHtml5, FaJava, FaJs, FaReact } from 'react-icons/fa';
import './Skills.css';

function Skills() {
  const skills = [
    { name: "Java", icon: <FaJava /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "SQL", icon: <FaDatabase /> },
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "CSS", icon: <FaCss3Alt /> },
    { name: "React", icon: <FaReact /> },
    { name: "Tailwind CSS", icon: <FaCode /> },
    { name: "MySQL", icon: <FaDatabase /> },
    { name: "Git", icon: <FaGitAlt /> },
    { name: "GitHub", icon: <FaGitAlt /> },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
        ease: "easeOut"
      }
    },
  };

  return (
    <section className="skills" id="skills">
      <motion.h2
        className="fade-in"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Skills
      </motion.h2>
      <motion.div
        className="skills-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="skill-card"
            variants={itemVariants}
            whileHover={{
              scale: 1.05,
              rotate: 2,
              transition: { duration: 0.2 }
            }}
          >
            <div className="skill-icon">{skill.icon}</div>
            <h3>{skill.name}</h3>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default Skills;
