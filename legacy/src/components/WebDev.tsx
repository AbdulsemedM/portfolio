import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Skill {
  name: string;
  level: number;
  icon: string;
  description: string;
}

interface SkillCategory {
  category: string;
  icon: string;
  items: Skill[];
}

const skills: SkillCategory[] = [
  {
    category: 'Frontend',
    icon: '🎨',
    items: [
      { 
        name: 'React.js', 
        level: 90,
        icon: '⚛️',
        description: 'Building scalable and performant user interfaces with modern React features.'
      },
      { 
        name: 'Next.js', 
        level: 85,
        icon: '🔄',
        description: 'Server-side rendering and static site generation for optimal performance.'
      },
      { 
        name: 'Tailwind CSS', 
        level: 95,
        icon: '🎯',
        description: 'Crafting beautiful, responsive designs with utility-first CSS.'
      },
      { 
        name: 'TypeScript', 
        level: 88,
        icon: '📝',
        description: 'Writing type-safe code for better maintainability and developer experience.'
      }
    ]
  },
  {
    category: 'Backend',
    icon: '⚙️',
    items: [
      { 
        name: 'Node.js', 
        level: 85,
        icon: '🟢',
        description: 'Building fast and scalable server-side applications.'
      },
      { 
        name: 'Spring Boot', 
        level: 70,
        icon: '🍃',
        description: 'Developing enterprise-grade applications with Java.'
      },
    //   { 
    //     name: 'Express', 
    //     level: 88,
    //     icon: '🚂',
    //     description: 'Creating robust REST APIs and web applications.'
    //   },
      { 
        name: 'GraphQL', 
        level: 65,
        icon: '📊',
        description: 'Implementing flexible and efficient data queries.'
      }
    ]
  },
  {
    category: 'Database',
    icon: '🗄️',
    items: [
      { 
        name: 'MongoDB', 
        level: 75,
        icon: '🍃',
        description: 'Managing NoSQL databases for flexible data storage.'
      },
      { 
        name: 'PostgreSQL', 
        level: 85,
        icon: '🐘',
        description: 'Handling complex relational database operations.'
      },
      { 
        name: 'Firebase', 
        level: 90,
        icon: '🔥',
        description: 'Real-time database and backend services.'
      },
      { 
        name: 'Redis', 
        level: 75,
        icon: '⚡',
        description: 'In-memory data structure store for caching.'
      }
    ]
  }
];

const WebDev = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('Frontend');

  return (
    <section id="web" className="min-h-screen relative bg-primary overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4 flex items-center gap-3">
            Web Development
            <motion.span
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="inline-block"
            >
              🌐
            </motion.span>
          </h2>
          <p className="text-[#dfd9ff] text-lg max-w-3xl">
            Crafting modern, scalable, and performant web applications using
            cutting-edge technologies and industry best practices.
          </p>
        </motion.div>

        <div className="flex flex-col gap-12">
          {/* Category Selection */}
          <div className="flex justify-center gap-4">
            {skills.map((category) => (
              <motion.button
                key={category.category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category.category)}
                className={`px-6 py-3 rounded-full font-medium transition-all
                  ${selectedCategory === category.category
                    ? 'bg-secondary text-primary'
                    : 'bg-tertiary text-white hover:bg-white/10'
                  }`}
              >
                <span className="flex items-center gap-2">
                  {category.icon} {category.category}
                </span>
              </motion.button>
            ))}
          </div>

          {/* Skills Display */}
          <AnimatePresence mode="wait">
            {skills.map((category) => (
              category.category === selectedCategory && (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                  {category.items.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      onHoverStart={() => setHoveredSkill(skill.name)}
                      onHoverEnd={() => setHoveredSkill(null)}
                      className="bg-tertiary rounded-xl p-6 relative overflow-hidden group"
                    >
                      <motion.div
                        className="absolute inset-0 bg-secondary/10"
                        initial={false}
                        animate={{
                          opacity: hoveredSkill === skill.name ? 1 : 0
                        }}
                        transition={{ duration: 0.3 }}
                      />

                      <div className="relative z-10">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-3">
                            <span className="text-2xl">{skill.icon}</span>
                            <h3 className="text-xl font-bold text-white">
                              {skill.name}
                            </h3>
                          </div>
                          <span className="text-secondary font-bold">
                            {skill.level}%
                          </span>
                        </div>

                        <div className="mb-4">
                          <div className="h-2 bg-primary rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              viewport={{ once: true }}
                              transition={{
                                duration: 1,
                                delay: index * 0.1
                              }}
                              className="h-full bg-secondary rounded-full"
                            />
                          </div>
                        </div>

                        <motion.p
                          initial={{ opacity: 0 }}
                          animate={{ opacity: hoveredSkill === skill.name ? 1 : 0.7 }}
                          className="text-[#dfd9ff] text-sm"
                        >
                          {skill.description}
                        </motion.p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              )
            ))}
          </AnimatePresence>

          {/* Architecture Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8"
          >
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              Architecture & Integration
              <span className="text-2xl">🏗️</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-tertiary rounded-xl p-6 transition-all hover:shadow-xl hover:shadow-secondary/20"
              >
                <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <span>🔧</span>
                  Full-Stack Architecture
                </h4>
                <ul className="space-y-3">
                  {[
                    'Microservices Architecture',
                    'RESTful API Design',
                    'GraphQL Implementation',
                    'OAuth & JWT Authentication',
                    'Docker Containerization',
                    'CI/CD Pipeline Setup'
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center space-x-2 text-[#dfd9ff]"
                    >
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ duration: 0.3 }}
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
                          <path d="M5 13l4 4L19 7"></path>
                        </svg>
                      </motion.div>
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-tertiary rounded-xl p-6 transition-all hover:shadow-xl hover:shadow-secondary/20"
              >
                <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <span>🔌</span>
                  API Integrations
                </h4>
                <ul className="space-y-3">
                  {[
                    'Payment Gateways (Stripe, PayPal)',
                    'Social Media APIs',
                    'Cloud Services (AWS, GCP)',
                    'Email Services',
                    'Analytics Integration',
                    'Third-party REST APIs'
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center space-x-2 text-[#dfd9ff]"
                    >
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ duration: 0.3 }}
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
                          <path d="M5 13l4 4L19 7"></path>
                        </svg>
                      </motion.div>
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WebDev; 