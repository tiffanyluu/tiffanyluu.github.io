import { Button } from "./ui/button";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { MdEmail } from "react-icons/md";
import { motion } from "framer-motion";

const Contact = () => {
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen flex flex-col justify-center items-center px-8 overflow-hidden"
      style={{
        background: "radial-gradient(circle at top left, #e2e8f0 0%, #ffffff 30%)",
      }}
    >
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-bold mb-6 text-center"
      >
        Contact
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="text-2xl text-slate-700 mt-6 mb-12 text-center"
      >
        I'm always happy to connect!<br />Feel free to reach out ~
      </motion.p>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        transition={{ staggerChildren: 0.15 }}
        className="flex flex-wrap gap-6 justify-center"
      >
        {[
          {
            href: "mailto:tiffanyluu555@berkeley.edu",
            label: "Email",
            icon: <MdEmail size={20} />,
            style: "bg-red-500 hover:bg-red-600 text-white",
          },
          {
            href: "https://github.com/tiffanyluu",
            label: "GitHub",
            icon: <SiGithub size={20} />,
            style: "bg-gray-800 hover:bg-gray-900 text-white",
          },
          {
            href: "https://linkedin.com/in/tiffany-t-luu/",
            label: "LinkedIn",
            icon: <SiLinkedin size={20} />,
            style: "bg-[#0A66C2] hover:bg-[#084B8A] text-white",
          },
        ].map((btn) => (
          <motion.div
            key={btn.label}
            variants={itemVariants}
          >
            <Button asChild className={`text-lg flex items-center gap-2 p-4 transition-transform hover:scale-105 ${btn.style}`}>
              <a href={btn.href} target="_blank" rel="noopener noreferrer">
                {btn.icon} {btn.label}
              </a>
            </Button>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Contact;
