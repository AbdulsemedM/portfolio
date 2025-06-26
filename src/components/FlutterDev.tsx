import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Tab } from '@headlessui/react';

interface TabContent {
  title: string;
  description: string;
  features: string[];
  techStack: string[];
}

interface TabItem {
  name: string;
  icon: string;
  content: TabContent;
}

const tabs: TabItem[] = [
  {
    name: 'Android',
    icon: '📱',
    content: {
      title: 'Android Development',
      description: 'Expert in building high-performance Android apps with Flutter',
      features: [
        'Material Design 3 implementation',
        'Native Android integration',
        'Google Play Store deployment',
        'Android-specific optimizations'
      ],
      techStack: ['Flutter', 'Android SDK', 'Firebase', 'Google Play Console']
    }
  },
  {
    name: 'iOS',
    icon: '🍎',
    content: {
      title: 'iOS Development',
      description: "Creating beautiful iOS apps following Apple's guidelines",
      features: [
        'Cupertino design patterns',
        'App Store compliance',
        'iOS-specific features',
        'TestFlight distribution'
      ],
      techStack: ['Flutter', 'iOS SDK', 'Xcode', 'App Store Connect']
    }
  },
  {
    name: 'Firebase',
    icon: '🔥',
    content: {
      title: 'Firebase Integration',
      description: 'Seamless backend integration with Firebase services',
      features: [
        'Authentication & Security',
        'Cloud Firestore',
        'Real-time Database',
        'Cloud Functions'
      ],
      techStack: ['Firebase Auth', 'Push Notifications', 'Cloud Functions', 'Firebase Analytics']
    }
  },
  {
    name: 'Payments',
    icon: '💳',
    content: {
      title: 'Payment Integration',
      description: 'Secure payment processing with multiple providers',
      features: [
        'Stripe integration',
        'PayPal implementation',
        'In-app purchases',
        'Subscription management'
      ],
      techStack: ['Stripe SDK', 'PayPal SDK', 'Chapa', 'Telebirr']
    }
  }
];

const FlutterDev = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  return (
    <section id="flutter" className="min-h-screen relative bg-primary overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-4 flex items-center gap-3">
            Flutter Development
            <motion.span
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-4xl"
            >
              💙
            </motion.span>
          </h2>
          <p className="text-[#dfd9ff] text-lg max-w-3xl">
            Crafting exceptional mobile experiences with Flutter's powerful framework.
            From concept to deployment, I build cross-platform applications that feel
            native on both Android and iOS.
          </p>
        </motion.div>

        <Tab.Group selectedIndex={selectedTab} onChange={setSelectedTab}>
          <Tab.List className="flex space-x-2 rounded-xl bg-tertiary p-2 max-w-2xl mb-8">
            {tabs.map((tab) => (
              <Tab
                key={tab.name}
                className={({ selected }: { selected: boolean }) =>
                  `w-full rounded-lg py-3 text-sm font-medium leading-5 transition-all duration-200
                  ${
                    selected
                      ? 'bg-secondary text-primary shadow'
                      : 'text-white hover:bg-white/[0.12]'
                  }
                  `
                }
              >
                <span className="flex items-center justify-center gap-2">
                  <span className="text-xl">{tab.icon}</span>
                  {tab.name}
                </span>
              </Tab>
            ))}
          </Tab.List>

          <div className="relative">
            <Tab.Panels>
              <AnimatePresence mode="wait">
                {tabs.map((tab, idx) => (
                  <Tab.Panel
                    key={idx}
                    className={`rounded-xl bg-tertiary p-8 absolute top-0 left-0 w-full
                      ${selectedTab === idx ? 'block' : 'hidden'}
                      ring-white/60 ring-offset-2 ring-offset-primary focus:outline-none focus:ring-2`}
                    static
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-8"
                    >
                      <div>
                        <h3 className="text-3xl font-bold text-white mb-3 flex items-center gap-3">
                          {tab.content.title}
                          <span className="text-3xl">{tab.icon}</span>
                        </h3>
                        <p className="text-[#dfd9ff] text-lg">{tab.content.description}</p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                          <h4 className="text-xl font-semibold text-white mb-4">Key Features</h4>
                          <ul className="space-y-3">
                            {tab.content.features.map((feature, index) => (
                              <motion.li
                                key={feature}
                                onHoverStart={() => setHoveredFeature(index)}
                                onHoverEnd={() => setHoveredFeature(null)}
                                className="flex items-start space-x-3 text-white"
                              >
                                <motion.div
                                  animate={{
                                    scale: hoveredFeature === index ? 1.2 : 1,
                                    rotate: hoveredFeature === index ? 360 : 0,
                                  }}
                                  transition={{ duration: 0.3 }}
                                  className="mt-1"
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
                                <span>{feature}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-xl font-semibold text-white mb-4">Tech Stack</h4>
                          <div className="grid grid-cols-2 gap-3">
                            {tab.content.techStack.map((tech, index) => (
                              <motion.div
                                key={tech}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ scale: 1.05 }}
                                className="bg-primary p-3 rounded-lg text-white text-center"
                              >
                                {tech}
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </Tab.Panel>
                ))}
              </AnimatePresence>
            </Tab.Panels>
          </div>
        </Tab.Group>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-[400px] md:mt-[300px]"
        >
          <h3 className="text-2xl font-bold text-white mb-6">Development Flow</h3>
          <div className="relative flex items-center justify-center py-10">
            <div className="absolute inset-0 bg-tertiary opacity-50 rounded-lg"></div>
            <div className="relative grid grid-cols-1 md:grid-cols-6 gap-4 items-center">
              {[
                { text: 'Flutter', icon: '💙' },
                { text: '→', icon: '' },
                { text: 'Firebase', icon: '🔥' },
                { text: '→', icon: '' },
                { text: 'Testing', icon: '🧪' },
                { text: 'Launch', icon: '🚀' }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex items-center justify-center p-4 ${
                    item.text === '→'
                      ? 'text-secondary text-2xl'
                      : 'bg-primary rounded-lg shadow-lg'
                  }`}
                >
                  <span className="text-white font-medium flex items-center gap-2">
                    {item.text}
                    {item.icon && (
                      <motion.span
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        {item.icon}
                      </motion.span>
                    )}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FlutterDev; 