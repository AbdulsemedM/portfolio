import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import commercepalImg from '../assets/images/commercepal.jpeg';
import hudhudImg from '../assets/images/hudhudExpress.jpeg';
import michuMizanImg from '../assets/images/michu_mizan.png';
import cooperativesImg from '../assets/images/Cooperative_Bank_of_Oromia.png';
import vslaImg from '../assets/images/vsla.png';


const projects = [
  {
    title: 'Commercepal',
    description: 'A full-featured e-commerce app built with Flutter and Firebase',
    image: commercepalImg,
    category: 'flutter',
    tech: ['Flutter', 'Firebase', 'Stripe', 'Bloc'],
    links: {
      demo: 'https://play.google.com/store/apps/details?id=com.commercepal.commercepal&hl=en',
      github: 'https://github.com/AbdulsemedM/Com-Cus'
    }
  },
  {
    title: 'Cooperatives Management System',
    description: 'Web platform for local cooperatives to manage members, finances, loans, and communication - all in one secure place',
    image: cooperativesImg,
    category: 'web',
    tech: ['React', 'Next.js', 'TailwindCSS', 'Firebase'],
    links: {
      demo: 'https://dxvalley.com/innovationhub',
      github: 'https://github.com/AbdulsemedM/Cooperatives-Management-system'
    }
  },
  {
    title: 'HudHud Express',
        description: 'Efficiently manage shipments, track deliveries, scan barcodes, and update order statuses in real time',
        image: hudhudImg,
    category: 'flutter',
    tech: ['Flutter', 'Firebase', 'Socket.io', 'Stripe'],
    links: {
      demo: 'https://play.google.com/store/apps/details?id=com.hudhud.courier&hl=en',
      github: 'https://github.com/AbdulsemedM/Courier-App'
    }
  },
  {
    title: 'Michu-Mizan',
        description: 'mobile app that provides interest-free, Sharia-compliant financing solutions for Micro, Small, and Medium Enterprises (MSMEs) to support their growth.',
        image: michuMizanImg,
    category: 'flutter',
    tech: ['Flutter', 'Firebase', 'Stripe'],
    links: {
      demo: 'http://michumizan.com/en',
      github: 'https://github.com/AbdulsemedM/Is-Fin'
    }
  },
  {
    title: 'Project Management Tool',
    description: 'Full-stack project management solution with team collaboration',
    image: '/projects/management.png',
    category: 'web',
    tech: ['React', 'Spring Boot', 'PostgreSQL', 'WebSocket'],
    links: {
      demo: 'https://demo.com',
      github: 'https://github.com'
    }
  },
  {
    title: 'VSLA',
    description: 'Empowers rural communities by providing a structured way to save, access loans, and improve financial literacy',
    image: vslaImg,
    category: 'design',
    tech: ['Flutter', 'Firebase', 'Spring Boot', 'React'],
    links: {
      demo: 'https://dxvalley.com/innovationhub',
      github: 'https://github.com/AbdulsemedM/Saving-Agency'
    }
  }
];

const filters = ['all', 'flutter', 'web', 'design'] as const;
type FilterType = typeof filters[number];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');

  const filteredProjects = projects.filter(
    project => activeFilter === 'all' || project.category === activeFilter
  );

  return (
    <section id="projects" className="min-h-screen relative bg-primary">
      <div className="max-w-7xl mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-[#dfd9ff] text-lg max-w-3xl">
            A showcase of my best work in mobile and web development,
            demonstrating my expertise in building modern applications.
          </p>
        </motion.div>

        <div className="flex flex-wrap gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all
                ${
                  activeFilter === filter
                    ? 'bg-secondary text-primary'
                    : 'bg-tertiary text-white hover:bg-opacity-80'
                }
              `}
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </button>
          ))}
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                className="bg-tertiary rounded-xl overflow-hidden"
              >
                <div className="relative aspect-video">
                  <div className="absolute inset-0 bg-black bg-opacity-50" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-[#dfd9ff] mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm bg-primary rounded-full text-secondary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center py-2 rounded-lg bg-secondary text-primary font-medium hover:bg-opacity-90 transition-all"
                    >
                      Live Demo
                    </a>
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center py-2 rounded-lg bg-primary text-white font-medium hover:bg-opacity-80 transition-all"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 