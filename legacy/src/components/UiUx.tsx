import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// import commercepalImg from '../assets/images/commercepal.jpeg';
// import profileImg from '../assets/images/profile_pic.jpg';

interface CaseStudy {
  id: string;
  title: string;
  category: string;
  description: string;
  challenge: string;
  solution: string;
  impact: string[];
  tools: string[];
  colors: string[];
  image: string;
}

// const caseStudies: CaseStudy[] = [
//   {
//     id: 'fintech-app',
//     title: 'FinTech Mobile App Redesign',
//     category: 'Mobile App',
//     description: 'Reimagining the future of mobile banking with a user-centric approach',
//     challenge: 'Users found the existing app complex and difficult to navigate, leading to high drop-off rates and poor user satisfaction.',
//     solution: 'Implemented a clean, intuitive interface with gesture-based interactions and personalized dashboards.',
//     impact: [
//       '47% increase in daily active users',
//       '82% improvement in task completion rate',
//       '63% reduction in customer support tickets'
//     ],
//     tools: ['Figma', 'Principle', 'Maze'],
//     colors: ['#2D3436', '#0984E3', '#00B894'],
//     image: commercepalImg
//   },
//   {
//     id: 'ecommerce',
//     title: 'E-commerce Platform',
//     category: 'Web Design',
//     description: 'Creating a seamless shopping experience across devices',
//     challenge: 'High cart abandonment rates and poor mobile conversion were affecting business growth.',
//     solution: 'Designed a responsive interface with streamlined checkout and personalized recommendations.',
//     impact: [
//       '58% increase in mobile conversions',
//       '71% reduction in cart abandonment',
//       '43% improvement in average order value'
//     ],
//     tools: ['Adobe XD', 'Shopify', 'Hotjar'],
//     colors: ['#6C5CE7', '#00CEC9', '#FD79A8'],
//     image: profileImg
//   },
//   {
//     id: 'saas-dashboard',
//     title: 'SaaS Dashboard',
//     category: 'Web Application',
//     description: 'Enterprise analytics dashboard with focus on data visualization',
//     challenge: 'Complex data needed to be presented in an accessible way for non-technical users.',
//     solution: 'Created an intuitive dashboard with customizable widgets and clear data hierarchy.',
//     impact: [
//       '89% positive user feedback',
//       '52% faster data analysis',
//       '37% increase in feature adoption'
//     ],
//     tools: ['Figma', 'Framer', 'ProtoPie'],
//     colors: ['#4834D4', '#686DE0', '#30336B'],
//     image: commercepalImg
//   }
// ];

const designPrinciples = [
  {
    title: 'User-Centered',
    icon: '👤',
    description: 'Every design decision starts with user needs'
  },
  {
    title: 'Accessible',
    icon: '♿',
    description: 'Inclusive design that works for everyone'
  },
  {
    title: 'Consistent',
    icon: '🔄',
    description: 'Cohesive experience across all touchpoints'
  },
  {
    title: 'Delightful',
    icon: '✨',
    description: 'Small details that create joy and engagement'
  }
];

const UiUx = () => {
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);
//   const [hoveredColor, setHoveredColor] = useState<string | null>(null);

  return (
    <section id="uiux" className="min-h-screen relative bg-primary overflow-hidden py-24">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-6 mb-20"
      >
        <h2 className="text-5xl font-bold text-white mb-6 flex items-center gap-3">
          UI/UX Design
          <motion.span
            animate={{ rotate: [0, -10, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-block"
          >
            ✨
          </motion.span>
        </h2>
        <p className="text-[#dfd9ff] text-xl max-w-2xl">
          Crafting beautiful, intuitive experiences that solve real problems.
          Each project is an opportunity to create something meaningful and impactful.
        </p>
      </motion.div>

      {/* Design Principles */}
      <div className="max-w-7xl mx-auto px-6 mb-32">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-8"
        >
          {designPrinciples.map((principle, index) => (
            <motion.div
              key={principle.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-tertiary rounded-xl p-6 text-center"
            >
              <motion.span
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-4xl mb-4 inline-block"
              >
                {principle.icon}
              </motion.span>
              <h3 className="text-xl font-bold text-white mb-2">{principle.title}</h3>
              <p className="text-[#dfd9ff]">{principle.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Case Studies */}
      {/* <div className="max-w-7xl mx-auto px-6">
        <h3 className="text-3xl font-bold text-white mb-12">Featured Work</h3>
        <div className="grid grid-cols-1 gap-16">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-tertiary rounded-2xl overflow-hidden"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
                <div className="space-y-6">
                  <div>
                    <span className="text-secondary text-sm font-medium">
                      {study.category}
                    </span>
                    <h4 className="text-2xl font-bold text-white mt-2">
                      {study.title}
                    </h4>
                  </div>
                  
                  <p className="text-[#dfd9ff]">{study.description}</p>
                  
                  <div>
                    <h5 className="text-white font-semibold mb-2">Impact</h5>
                    <ul className="space-y-2">
                      {study.impact.map((item, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.1 * idx }}
                          className="flex items-center gap-2 text-[#dfd9ff]"
                        >
                          <svg
                            className="w-5 h-5 text-secondary flex-shrink-0"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                          </svg>
                          {item}
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h5 className="text-white font-semibold mb-3">Color Palette</h5>
                    <div className="flex gap-3">
                      {study.colors.map((color) => (
                        <motion.div
                          key={color}
                          whileHover={{ scale: 1.2 }}
                          onHoverStart={() => setHoveredColor(color)}
                          onHoverEnd={() => setHoveredColor(null)}
                          className="w-10 h-10 rounded-full cursor-pointer relative"
                          style={{ backgroundColor: color }}
                        >
                          {hoveredColor === color && (
                            <motion.div
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-black px-2 py-1 rounded text-xs text-white whitespace-nowrap"
                            >
                              {color}
                            </motion.div>
                          )}
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {study.tools.map((tool) => (
                      <span
                        key={tool}
                        className="bg-primary px-3 py-1 rounded-full text-sm text-white"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedCase(study)}
                    className="bg-secondary text-primary px-6 py-2 rounded-full font-medium"
                  >
                    View Case Study
                  </motion.button>
                </div>

                <div className="relative group">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="rounded-xl overflow-hidden"
                  >
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div> */}

      {/* Case Study Modal */}
      <AnimatePresence>
        {selectedCase && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCase(null)}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-tertiary rounded-2xl p-8 max-w-4xl w-full"
            >
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-3xl font-bold text-white">
                  {selectedCase.title}
                </h3>
                <button
                  onClick={() => setSelectedCase(null)}
                  className="text-white/60 hover:text-white text-2xl"
                >
                  ×
                </button>
              </div>

              <div className="space-y-8">
                <div>
                  <h4 className="text-xl font-semibold text-white mb-3">The Challenge</h4>
                  <p className="text-[#dfd9ff]">{selectedCase.challenge}</p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-white mb-3">The Solution</h4>
                  <p className="text-[#dfd9ff]">{selectedCase.solution}</p>
                </div>

                <div className="rounded-xl overflow-hidden">
                  <img
                    src={selectedCase.image}
                    alt={selectedCase.title}
                    className="w-full h-auto"
                  />
                </div>

                <div className="flex justify-end">
                  <button
                    onClick={() => setSelectedCase(null)}
                    className="bg-secondary text-primary px-6 py-2 rounded-full font-medium"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default UiUx; 