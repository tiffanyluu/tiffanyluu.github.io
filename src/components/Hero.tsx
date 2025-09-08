import { Button } from "./ui/button";
import { HiDownload } from "react-icons/hi";
import { motion } from "framer-motion";

const Hero = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-8 overflow-hidden bg-white">
      <div
        className="absolute -top-32 -left-32 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"
        style={{ animationDelay: "0s" }}
      />
      <div
        className="absolute -bottom-32 -right-32 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"
        style={{ animationDelay: "5s" }}
      />
      <div
        className="absolute -top-16 -right-48 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-2xl opacity-25 animate-blob"
        style={{ animationDelay: "10s" }}
      />

      <motion.h1
        className="font-bold text-6xl mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.8 }}
      >
        Tiffany Luu
      </motion.h1>

      <motion.div
        className="space-y-1"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h2 className="text-3xl text-slate-700">Full-Stack Software Engineer</h2>
        <p className="text-lg text-muted-foreground pt-2">UC Berkeley Data Science Graduate</p>
      </motion.div>

      <motion.div
        className="mt-12 flex gap-8"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <Button asChild className="text-lg p-6 bg-blue-600 hover:bg-blue-700 hover:scale-105">
          <a href="/resume.pdf" target="_blank">
            <HiDownload size={20} /> Resume
          </a>
        </Button>
        <Button asChild variant="outline" className="text-lg p-6 hover:scale-105">
          <a href="#contact">Contact</a>
        </Button>
      </motion.div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-6xl text-muted-foreground hover:text-slate-700">
        ↓
      </div>
    </section>
  );
};

export default Hero;
