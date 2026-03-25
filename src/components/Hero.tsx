import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import profilePic from '../assets/images/profile_pic.jpg';
import resumePdf from '../assets/file/abdulsemed-mussema-resume.pdf';

const BackgroundCircles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-secondary/10"
          initial={{
            x: Math.random() * 100 - 50 + '%',
            y: Math.random() * 100 - 50 + '%',
            scale: Math.random() * 0.5 + 0.5,
          }}
          animate={{
            x: Math.random() * 100 - 50 + '%',
            y: Math.random() * 100 - 50 + '%',
            scale: Math.random() * 0.5 + 0.5,
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
          }}
          style={{
            width: (i + 1) * 200 + 'px',
            height: (i + 1) * 200 + 'px',
          }}
        />
      ))}
    </div>
  );
};

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto overflow-hidden bg-primary">
      <BackgroundCircles />
      
      <div className="absolute inset-0 bg-gradient-to-b from-primary/50 to-primary pointer-events-none" />

      <div className="absolute inset-0 top-[120px] max-w-7xl mx-auto sm:px-16 px-6 flex flex-col md:flex-row items-center justify-center gap-10">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 flex flex-col items-start justify-center"
        >
          <div className="flex flex-col justify-center items-center md:items-start">
            <div className="w-5 h-5 rounded-full bg-secondary mb-4" />
            <div className="w-1 sm:h-40 h-20 bg-gradient-to-b from-secondary hidden md:block" />
          </div>

          <h1 className="font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2">
            Hi, I'm <span className="text-secondary">Abdulsemed</span>
          </h1>
          <p className="text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] mt-2">
            I build{' '}
            <TypeAnimation
              sequence={[
                'powerful mobile apps',
                2000,
                'modern web experiences',
                2000,
                'Flutter + Firebase apps',
                2000,
                'React + Next.js sites',
                2000,
              ]}
              wrapper="span"
              speed={50}
              className="font-bold gradient-text"
              repeat={Infinity}
            />
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="bg-secondary text-primary px-8 py-3 rounded-full font-bold hover:bg-opacity-90 transition-all"
            >
              Contact Me
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#projects"
              className="border-2 border-secondary text-white px-8 py-3 rounded-full font-bold hover:bg-secondary/10 transition-all"
            >
              See Projects
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href={resumePdf}
              download="Abdulsemed-Mussema-Resume.pdf"
              className="group relative overflow-hidden border border-secondary/60 bg-gradient-to-r from-secondary/20 via-secondary/30 to-cyan-400/20 px-8 py-3 rounded-full font-bold text-white transition-all"
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              <span className="relative z-10 inline-flex items-center gap-2">
                <span>Download Resume</span>
                <span aria-hidden>⬇</span>
              </span>
            </motion.a>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 w-full max-w-xl rounded-2xl border border-secondary/30 bg-gradient-to-br from-tertiary/90 via-primary/70 to-tertiary/90 p-5 backdrop-blur-md"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-secondary/90">Resume Vault</p>
                <h3 className="mt-1 text-xl font-bold text-white">Abdulsemed Mussema - Software Engineer</h3>
                <p className="mt-2 text-sm text-[#dfd9ff]">
                  One-click PDF download with core experience, projects, and technical stack.
                </p>
              </div>
              <motion.span
                animate={{ scale: [1, 1.08, 1] }}
                transition={{ duration: 1.8, repeat: Infinity }}
                className="rounded-full border border-secondary/40 bg-secondary/10 px-3 py-1 text-xs font-semibold text-secondary"
              >
                PDF
              </motion.span>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
              <div className="rounded-xl border border-white/10 bg-primary/40 p-3 text-[#dfd9ff]">
                <p className="text-white font-semibold">Format</p>
                <p>Optimized for ATS + recruiters</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-primary/40 p-3 text-[#dfd9ff]">
                <p className="text-white font-semibold">Delivery</p>
                <p>Instant local browser download</p>
              </div>
            </div>

            <div className="mt-4 flex flex-wrap gap-3">
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href={resumePdf}
                download="Abdulsemed-Mussema-Resume.pdf"
                className="rounded-full bg-secondary px-5 py-2.5 font-bold text-primary"
              >
                Download Resume
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href={resumePdf}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-secondary/50 px-5 py-2.5 font-bold text-white hover:bg-secondary/10"
              >
                Quick Preview
              </motion.a>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 flex justify-center items-center relative"
        >
          <div className="relative w-[300px] h-[300px] lg:w-[400px] lg:h-[400px]">
            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute inset-0 rounded-full border-2 border-secondary/30 border-dashed"
            />
            <motion.div
              animate={{
                rotate: -360,
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute inset-[25px] rounded-full border-2 border-secondary/20 border-dashed"
            />
            <div className="absolute inset-[50px] rounded-full overflow-hidden bg-gradient-to-br from-secondary/20 to-primary">
              <img
                src={profilePic}
                alt="Your profile"
                className="w-full h-full object-cover rounded-full p-2"
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-transparent"
                animate={{
                  x: ['0%', '100%', '0%'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            </div>
          </div>
        </motion.div>
      </div>

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#flutter">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop',
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero; 