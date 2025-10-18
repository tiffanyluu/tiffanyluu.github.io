import { Button } from "./ui/button";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { MdEmail } from "react-icons/md";
import { motion, useReducedMotion } from "framer-motion";

const Contact = () => {
  const prefersReducedMotion = useReducedMotion();
  const itemVariants = prefersReducedMotion
    ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
    : { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } };

  const email = "tiffanyluu555@berkeley.edu";

  return (
    <section
      id="contact"
      className="relative min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 md:px-8 overflow-hidden"
      style={{
        background: "radial-gradient(circle at top left, #e2e8f0 0%, #ffffff 30%)",
      }}
    >
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 text-center"
      >
        Contact
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        viewport={{ once: true }}
        className="text-lg sm:text-xl md:text-2xl text-slate-700 mt-4 md:mt-6 mb-8 md:mb-12 text-center px-1"
      >
        I'm always happy to connect!<br />Feel free to reach out ~
      </motion.p>

      <motion.div
        initial="hidden"
        whileInView="visible"
        transition={{ staggerChildren: 0.15 }}
        viewport={{ once: true }}
        className="flex flex-wrap gap-4 sm:gap-6 justify-center"
      >
        {[
          {
            href: `mailto:${email}?subject=Hello%20Tiffany&body=Hi%20Tiffany%2C%0D%0A%0D%0A` ,
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
            <Button asChild className={`text-base sm:text-lg flex items-center gap-2 px-4 py-3 sm:px-5 sm:py-4 transition-transform hover:scale-105 w-full sm:w-auto ${btn.style}`}>
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
