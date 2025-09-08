import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion } from "framer-motion";

const About = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="about"
      className="relative mt-16 min-h-screen flex flex-col justify-start items-center px-8 pt-32 overflow-hidden"
    >
      <div
        className="absolute -top-32 -left-32 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"
        style={{ animationDelay: "0s" }}
      />
      <div
        className="absolute -bottom-32 -right-32 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"
        style={{ animationDelay: "5s" }}
      />
      <div
        className="absolute -top-16 -right-48 w-72 h-72 bg-cyan-300 rounded-full mix-blend-multiply filter blur-2xl opacity-25 animate-blob"
        style={{ animationDelay: "10s" }}
      />

      <motion.h2
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold mb-8 text-center"
      >
        About Me
      </motion.h2>

      <motion.div
        variants={textVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl text-2xl text-slate-700 space-y-6 text-left"
      >
        <p>
          I’m a Full-Stack Software Engineer passionate about creating
          interactive applications and intelligent tools.
        </p>
        <p>
          I combine my Data Science background with React, Node.js,
          TypeScript, and AI technologies to build projects that are both fun
          and functional.
        </p>
        <p>
          Outside of coding, you’ll usually find me exploring nature with my
          Belgian Malinois or diving into creative side projects.
        </p>
      </motion.div>

      <motion.div
        variants={textVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex flex-col sm:flex-row gap-20 mt-20 mb-8 justify-center items-end relative"
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
            <Avatar className="w-72 h-72 rounded-full border-4 border-slate-300 shadow-lg z-10">
              <AvatarImage src="/me.jpg" alt="Tiffany" className="object-cover" />
              <AvatarFallback>T</AvatarFallback>
            </Avatar>
          </a>
        </motion.div>
        <Avatar className="w-56 h-72 rounded-2xl border-4 border-slate-300 shadow-lg -mt-6 z-0">
          <AvatarImage src="/mydog.jpg" alt="Belgian Malinois" className="object-cover" />
          <AvatarFallback>BM</AvatarFallback>
        </Avatar>
      </motion.div>
    </section>
  );
};

export default About;
