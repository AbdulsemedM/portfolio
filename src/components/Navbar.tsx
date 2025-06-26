import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const navLinks = [
  {
    id: 'flutter',
    title: 'Flutter',
    icon: '💙'
  },
  {
    id: 'web',
    title: 'Web Dev',
    icon: '🌐'
  },
  {
    id: 'uiux',
    title: 'UI/UX',
    icon: '🎨'
  },
  {
    id: 'projects',
    title: 'Projects',
    icon: '🚀'
  },
  {
    id: 'contact',
    title: 'Contact',
    icon: '📬'
  }
];

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`sm:px-16 px-6 w-full flex items-center py-5 fixed top-0 z-20 
      ${scrolled ? 'bg-primary/90 backdrop-blur-md' : 'bg-transparent'}`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0);
          }}
        >
          <motion.div
            whileHover={{ scale: 1.2, rotate: 360 }}
            transition={{ duration: 0.5 }}
            className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-2xl font-bold text-primary"
          >
            A
          </motion.div>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-white text-[18px] font-bold cursor-pointer flex"
          >
            Abdulsemed &nbsp;
            <span className="sm:block hidden">| Portfolio</span>
          </motion.p>
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((nav) => (
            <motion.li
              key={nav.id}
              whileHover={{ scale: 1.1 }}
              className={`${
                active === nav.title ? 'text-secondary' : 'text-white'
              } hover:text-secondary text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`} className="flex items-center gap-2">
                <span className="opacity-70">{nav.icon}</span>
                {nav.title}
              </a>
            </motion.li>
          ))}
        </ul>

        {/* Mobile Menu */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setToggle(!toggle)}
            className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center"
          >
            <div className="w-6 h-6 relative">
              <motion.span
                animate={toggle ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                className="w-full h-0.5 bg-white absolute top-0 left-0"
              />
              <motion.span
                animate={toggle ? { opacity: 0 } : { opacity: 1 }}
                className="w-full h-0.5 bg-white absolute top-2.5 left-0"
              />
              <motion.span
                animate={toggle ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                className="w-full h-0.5 bg-white absolute bottom-0 left-0"
              />
            </div>
          </motion.button>

          <AnimatePresence>
            {toggle && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95, x: 20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.95, x: 20 }}
                className="p-6 bg-gradient-to-b from-tertiary to-primary/90 backdrop-blur-lg absolute 
                  top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl"
              >
                <ul className="list-none flex flex-col gap-4">
                  {navLinks.map((nav) => (
                    <motion.li
                      key={nav.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      whileHover={{ x: 10 }}
                      className={`${
                        active === nav.title ? 'text-secondary' : 'text-white'
                      } font-poppins font-medium cursor-pointer text-[16px]`}
                      onClick={() => {
                        setToggle(!toggle);
                        setActive(nav.title);
                      }}
                    >
                      <a href={`#${nav.id}`} className="flex items-center gap-2">
                        <span className="opacity-70">{nav.icon}</span>
                        {nav.title}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar; 