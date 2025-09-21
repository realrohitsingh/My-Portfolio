import emailjs from 'emailjs-com';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    if (!formData.message) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMsg('');
    if (validate()) {
      emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_cu2htwo',
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_lrmfutk',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_USER_ID || 'Pxl45pIUX0tZmpwa1'
      )
        .then(() => {
          setIsSubmitted(true);
          setFormData({ name: '', email: '', message: '' });
          setErrors({});
          setTimeout(() => setIsSubmitted(false), 3000);
        })
        .catch((err) => {
          console.error('Error sending email:', err);
          setErrorMsg('Failed to send message. Please try again later.');
        });
    }
  };

  const formVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    shake: { x: [0, -10, 10, -10, 10, 0], transition: { duration: 0.4 } },
  };

  const successVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <section className="contact" id="contact" style={{ position: 'relative', overflow: 'hidden' }}>
      <motion.h2 initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>Contact Me</motion.h2>
      <motion.form
        className="contact-form"
        variants={formVariants}
        initial="hidden"
        whileInView="visible"
        animate={Object.keys(errors).length > 0 ? 'shake' : ''}
        viewport={{ once: true }}
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className={errors.name ? 'input-error' : ''}
        />
        {errors.name && <motion.p className="error-message" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>{errors.name}</motion.p>}
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className={errors.email ? 'input-error' : ''}
        />
        {errors.email && <motion.p className="error-message" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>{errors.email}</motion.p>}
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          className={errors.message ? 'input-error' : ''}
        ></textarea>
        {errors.message && <motion.p className="error-message" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>{errors.message}</motion.p>}
        <button type="submit">Send Message</button>
        {errorMsg && <motion.p className="error-message" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>{errorMsg}</motion.p>}
      </motion.form>
      <AnimatePresence>
        {isSubmitted && (
          <motion.div className="success-message"
            variants={successVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <FaCheckCircle /> Message Sent!
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Contact;
