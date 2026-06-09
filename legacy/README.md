# Modern Portfolio Website

A highly creative and interactive portfolio website showcasing expertise in Flutter mobile development and full-stack web development. Built with React.js, Vite, and modern web technologies.

## ✨ Features

- 🎬 Animated Hero Section with Typewriter Effect
- 📱 Interactive Flutter Development Showcase
- 🌐 Web Development Skills Visualization
- 💼 Filterable Projects Gallery
- 🎨 Modern UI with Smooth Animations
- 🌗 Dark Mode Design
- 📱 Fully Responsive Layout
- 📬 Contact Form with EmailJS Integration

## 🛠 Tech Stack

- **Frontend Framework:** React.js with TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Routing:** React Router
- **Form Handling:** EmailJS
- **UI Components:** Headless UI
- **Icons:** Heroicons

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory and add your EmailJS credentials:

   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_USER_ID=your_user_id
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Build for production:
   ```bash
   npm run build
   ```

## 📁 Project Structure

```
src/
├── components/         # React components
│   ├── Hero.tsx       # Hero section
│   ├── FlutterDev.tsx # Flutter development section
│   ├── WebDev.tsx     # Web development section
│   ├── Projects.tsx   # Projects gallery
│   ├── Contact.tsx    # Contact form
│   └── Navbar.tsx     # Navigation bar
├── assets/            # Images and static files
├── styles/            # Global styles and Tailwind config
└── App.tsx           # Main application component
```

## 🎨 Customization

1. **Personal Information:**

   - Update your name and tagline in `Hero.tsx`
   - Modify social links in `Contact.tsx`
   - Add your location and contact details

2. **Projects:**

   - Add your projects in `Projects.tsx`
   - Include project images in `public/projects/`

3. **Skills:**

   - Update skill levels in `WebDev.tsx`
   - Modify Flutter expertise in `FlutterDev.tsx`

4. **Styling:**
   - Customize colors in `tailwind.config.js`
   - Modify animations in component files

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/yourusername/portfolio/issues).

## 📧 Contact

Your Name - your.email@example.com

Project Link: [https://github.com/yourusername/portfolio](https://github.com/yourusername/portfolio)
