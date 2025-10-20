import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const About = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768 || /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const textVariants = { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } };

  return (
    <section
      id="about"
      className="relative mt-12 md:mt-16 min-h-screen flex flex-col justify-start items-center px-4 sm:px-6 md:px-8 pt-24 md:pt-32 pb-16 md:pb-20 overflow-hidden"
    >
      <div
        className={`absolute -top-32 -left-32 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl ${isMobile ? 'opacity-10' : 'opacity-20'}`}
      />
      <div
        className={`absolute -bottom-32 -right-32 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl ${isMobile ? 'opacity-10' : 'opacity-20'}`}
      />

      <motion.h2
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: isMobile ? 0 : 0.8 }}
        className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-center"
      >
        About Me
      </motion.h2>

      {isMobile ? (
        <div className="max-w-2xl text-base sm:text-lg md:text-xl text-slate-700 space-y-4 md:space-y-5 text-left px-1">
          <p>
            My journey began with Data Science and Linguistics at UC Berkeley, where I learned that the best solutions come from understanding both technical patterns and human stories.
          </p>
          <p>
            Now, as a Full-Stack Software Engineer at Mazlo, I build features that help nonprofits streamline banking, accounting, and compliance. By simplifying complex workflows, I enable nonprofits to focus on what really matters: their mission.
          </p>
          <p>
            When I step away from the screen, you'll find me in nature with my Belgian Malinois, who's taught me that sometimes the best solutions require taking the long road and never giving up.
          </p>
        </div>
      ) : (
        <motion.div
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl text-base sm:text-lg md:text-xl text-slate-700 space-y-4 md:space-y-5 text-left px-1"
        >
          <p>
            My journey began with Data Science and Linguistics at UC Berkeley, where I learned that the best solutions come from understanding both technical patterns and human stories.
          </p>
          <p>
            Now, as a Full-Stack Software Engineer at Mazlo, I build features that help nonprofits streamline banking, accounting, and compliance. By simplifying complex workflows, I enable nonprofits to focus on what really matters: their mission.
          </p>
          <p>
            When I step away from the screen, you'll find me in nature with my Belgian Malinois, who's taught me that sometimes the best solutions require taking the long road and never giving up.
          </p>
        </motion.div>
      )}

      {isMobile ? (
        <div className="flex flex-col sm:flex-row gap-10 sm:gap-16 md:gap-20 mt-12 md:mt-20 mb-8 justify-center items-center sm:items-end relative">
          <div className="rounded-full">
            <a href="https://linkedin.com/in/tiffany-t-luu/" target="_blank" rel="noopener noreferrer">
              <Avatar className="w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 rounded-full border-4 border-slate-300 shadow-lg z-10">
                <AvatarImage src="/me.jpg" alt="Tiffany" className="object-cover" loading="lazy" decoding="async" />
                <AvatarFallback>T</AvatarFallback>
              </Avatar>
            </a>
          </div>
          <Avatar className="w-40 h-56 sm:w-48 sm:h-64 md:w-56 md:h-72 rounded-2xl border-4 border-slate-300 shadow-lg -mt-4 md:-mt-6 z-0">
            <AvatarImage src="/mydog.jpg" alt="Belgian Malinois" className="object-cover" loading="lazy" decoding="async" />
            <AvatarFallback>BM</AvatarFallback>
          </Avatar>
        </div>
      ) : (
        <motion.div
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-10 sm:gap-16 md:gap-20 mt-12 md:mt-20 mb-8 justify-center items-center sm:items-end relative"
        >
          <motion.div
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 40px 10px rgba(0, 219, 219, 0.9)"
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="rounded-full"
          >
            <a href="https://linkedin.com/in/tiffany-t-luu/" target="_blank" rel="noopener noreferrer">
              <Avatar className="w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 rounded-full border-4 border-slate-300 shadow-lg z-10">
                <AvatarImage src="/me.jpg" alt="Tiffany" className="object-cover" loading="lazy" decoding="async" />
                <AvatarFallback>T</AvatarFallback>
              </Avatar>
            </a>
          </motion.div>
          <Avatar className="w-40 h-56 sm:w-48 sm:h-64 md:w-56 md:h-72 rounded-2xl border-4 border-slate-300 shadow-lg -mt-4 md:-mt-6 z-0">
            <AvatarImage src="/mydog.jpg" alt="Belgian Malinois" className="object-cover" loading="lazy" decoding="async" />
            <AvatarFallback>BM</AvatarFallback>
          </Avatar>
        </motion.div>
      )}
    </section>
  );
};

export default About;