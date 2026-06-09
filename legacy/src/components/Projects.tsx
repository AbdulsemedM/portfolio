import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import commercepalImg from '../assets/images/commercepal.jpeg';
import hudhudImg from '../assets/images/hudhudExpress.jpeg';
import michuMizanImg from '../assets/images/michu_mizan.png';
import cooperativesImg from '../assets/images/Cooperative_Bank_of_Oromia.png';
import vslaImg from '../assets/images/vsla.png';
import tinaDriverImg from '../assets/images/logo tina driver1.png';
import iseeyImg from '../assets/images/iseey-logo-1.png';


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
    title: 'Merchant Nation',
    description: 'Full-stack project management solution with team collaboration',
    image: '/projects/management.png',
    category: 'web',
    tech: ['TypeScript', 'Next.js'],
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
  },
  {
    title: 'Tina Driver',
    description: 'Official in-house delivery app for Tina Mart drivers to manage assigned orders, routing, and delivery status updates in real time',
    image: tinaDriverImg,
    category: 'flutter',
    tech: ['Flutter', 'Firebase', 'GitHub Actions (CI/CD)'],
    links: {
      demo: 'https://play.google.com/store/apps/details?id=com.tina.driver',
      github: 'https://play.google.com/store/apps/details?id=com.tina.driver'
    }
  },
  {
    title: 'ISEEY',
    description: 'Social discovery app for connecting with people in clubs, bars, and restaurants using location-based check-ins and in-app chat',
    image: iseeyImg,
    category: 'flutter',
    tech: ['Flutter'],
    links: {
      demo: 'https://play.google.com/store/apps/details?id=com.iseey.de',
      github: 'https://iseey.app/'
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
    <section id="projects" className="min-h-screen relative overflow-hidden bg-primary">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-20 h-72 w-72 rounded-full bg-secondary/20 blur-3xl" />
        <div className="absolute top-1/3 -right-24 h-80 w-80 rounded-full bg-[#7f5af0]/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/4 h-64 w-64 rounded-full bg-[#00d4ff]/10 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <span className="inline-flex items-center rounded-full border border-secondary/40 bg-tertiary/60 px-4 py-1 text-xs uppercase tracking-[0.22em] text-secondary">
            Selected Work
          </span>
          <h2 className="mt-5 text-4xl font-bold leading-tight text-white md:text-5xl">
            Projects that blend
            <span className="ml-2 text-secondary">craft and impact</span>
          </h2>
          <p className="mt-4 max-w-3xl text-lg text-[#dfd9ff]">
            A curated set of mobile and web products focused on real users,
            polished interfaces, and measurable outcomes.
          </p>
        </motion.div>

        <div className="mb-12 flex flex-wrap gap-3">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full border px-5 py-2 text-sm font-medium tracking-wide transition-all duration-300
                ${
                  activeFilter === filter
                    ? 'border-secondary bg-secondary text-primary shadow-[0_0_30px_rgba(145,94,255,0.45)]'
                    : 'border-white/10 bg-tertiary/70 text-white hover:-translate-y-0.5 hover:border-secondary/50 hover:text-secondary'
                }
              `}
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </button>
          ))}
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3"
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, y: 30, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.98 }}
                transition={{ duration: 0.35, delay: index * 0.03 }}
                whileHover={{ y: -8 }}
                className={`group overflow-hidden rounded-2xl border border-white/10 bg-tertiary/80 backdrop-blur-sm transition-all duration-300 hover:border-secondary/60 hover:shadow-[0_20px_70px_rgba(0,0,0,0.35)] ${
                  index === 0 ? 'md:col-span-2 xl:col-span-2' : ''
                }`}
              >
                <div className="relative aspect-video overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/35 to-transparent" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute left-4 top-4 rounded-full border border-white/25 bg-black/30 px-3 py-1 text-xs uppercase tracking-[0.18em] text-white/90">
                    {project.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-bold text-white">
                    {project.title}
                  </h3>
                  <p className="mb-5 text-[#dfd9ff]">{project.description}</p>
                  <div className="mb-5 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-secondary/35 bg-primary/70 px-3 py-1 text-sm text-secondary"
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
                      className="flex-1 rounded-lg bg-secondary py-2 text-center font-medium text-primary transition-all hover:brightness-110"
                    >
                      View
                    </a>
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 rounded-lg border border-white/20 bg-primary/70 py-2 text-center font-medium text-white transition-all hover:border-secondary hover:text-secondary"
                    >
                      Source
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