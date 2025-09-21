import { AnimatePresence, motion } from 'framer-motion';
import About from './components/About';
import AuroraBackground from './components/AuroraBackground';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Projects from './components/Projects';
import Skills from './components/Skills';
import './index.css';

function App() {
  const pageVariants = {
    initial: {
      opacity: 0,
    },
    in: {
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    out: {
      opacity: 0,
    },
  };

  return (
    <div>
      <AuroraBackground />
      <AnimatePresence>
        <motion.div
          initial="initial"
          animate="in"
          exit="out"
          variants={pageVariants}
        >
          <Header />
          <About />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default App;
