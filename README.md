# 🚀 Rohit Singh - Portfolio Website

A modern, responsive portfolio website built with React and Vite, featuring stunning animations, interactive elements, and a professional design.

![Portfolio Preview](https://img.shields.io/badge/Status-Live-brightgreen) ![React](https://img.shields.io/badge/React-19.1.1-blue) ![Vite](https://img.shields.io/badge/Vite-7.1.6-646CFF) ![License](https://img.shields.io/badge/License-MIT-yellow)

## ✨ Features

### 🎨 **Modern Design**

- **Aurora Background**: Animated space-themed background with floating particles
- **Gradient Text**: Beautiful purple-to-cyan gradient headings
- **Glowing Effects**: Neon-style borders and shadows throughout
- **Responsive Design**: Perfect on desktop, tablet, and mobile devices

### 🖼️ **Interactive Elements**

- **Profile Modal**: Click the navbar profile image to view full-size photo
- **Smooth Scrolling**: Seamless navigation between sections
- **Hover Animations**: Interactive cards and buttons with smooth transitions
- **Mobile Menu**: Hamburger menu for mobile devices

### 📧 **Contact Form**

- **EmailJS Integration**: Working contact form that sends real emails
- **Form Validation**: Real-time validation with error messages
- **Success Feedback**: Animated success message after submission

### 🎭 **Animations**

- **Framer Motion**: Smooth page transitions and scroll animations
- **Typewriter Effect**: Dynamic text animation in hero section
- **Staggered Animations**: Cards animate in sequence for better UX

## 🛠️ Tech Stack

- **Frontend**: React 19.1.1
- **Build Tool**: Vite 7.1.6
- **Styling**: CSS3 with CSS Variables
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Email Service**: EmailJS
- **Deployment**: Vercel

## 📁 Project Structure

```
my-portfolio/
├── public/
│   ├── favicon.svg
│   └── vite.svg
├── src/
│   ├── assets/
│   │   └── profile.jpg
│   ├── components/
│   │   ├── About.jsx & About.css
│   │   ├── AuroraBackground.jsx & AuroraBackground.css
│   │   ├── Contact.jsx & Contact.css
│   │   ├── Footer.jsx & Footer.css
│   │   ├── Header.jsx & Header.css
│   │   ├── Projects.jsx & Projects.css
│   │   └── Skills.jsx & Skills.css
│   ├── contexts/
│   ├── hooks/
│   ├── App.jsx
│   ├── Main.jsx
│   └── index.css
├── vercel.json
└── package.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/my-portfolio.git
   cd my-portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**

   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Click "New Project"
   - Import your repository
   - Click "Deploy"

### Other Deployment Options

- **Netlify**: Drag and drop the `dist` folder
- **GitHub Pages**: Use GitHub Actions for automatic deployment
- **Firebase Hosting**: Use Firebase CLI

## 📧 Contact Form Setup

The contact form uses EmailJS. To set up your own:

1. **Create EmailJS Account**

   - Go to [emailjs.com](https://emailjs.com)
   - Create a free account

2. **Set up Service**

   - Create an email service (Gmail, Outlook, etc.)
   - Create an email template
   - Get your service ID, template ID, and user ID

3. **Configure Environment Variables** (Optional)
   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_USER_ID=your_user_id
   ```

## 🎨 Customization

### Colors

Update the CSS variables in `src/index.css`:

```css
:root {
  --primary-color: #a259ff;
  --secondary-color: #0ef6cc;
  --text-color: #e0e6ff;
  /* ... other variables */
}
```

### Content

- **Profile Image**: Replace `src/assets/profile.jpg`
- **About Section**: Edit `src/components/About.jsx`
- **Projects**: Update `src/components/Projects.jsx`
- **Skills**: Modify `src/components/Skills.jsx`

### Animations

- **Framer Motion**: Adjust animation variants in components
- **CSS Animations**: Modify keyframes in CSS files

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:

- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: 320px - 767px

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Contact

**Rohit Singh**

- **Email**: [your-email@example.com](mailto:your-email@example.com)
- **LinkedIn**: [linkedin.com/in/rohit-singh-b10374189](https://www.linkedin.com/in/rohit-singh-b10374189/)
- **GitHub**: [github.com/realrohitsingh](https://github.com/realrohitsingh)
- **Portfolio**: [my-portfolio-nu-ten-93.vercel.app](https://my-portfolio-nu-ten-93.vercel.app)

## 🙏 Acknowledgments

- **Framer Motion** for smooth animations
- **React Icons** for beautiful icons
- **EmailJS** for contact form functionality
- **Vite** for fast development and building
- **Vercel** for seamless deployment

---

⭐ **Star this repository if you found it helpful!**

![Portfolio Screenshot](https://via.placeholder.com/800x400/1a1a2e/0ef6cc?text=Portfolio+Preview)
_Screenshot of the portfolio website_

---

**Built with ❤️ by Rohit Singh**
