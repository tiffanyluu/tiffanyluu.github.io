import { SiReact, SiNodedotjs, SiPostgresql, SiTypescript, SiJavascript } from "react-icons/si";
import { Button } from "./ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from "./ui/card";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

const projects = [
  {
    title: "Movie Matcher",
    img: "/moviematcher.jpg",
    description: "A movie recommendation system that uses ML algorithms to suggest movies.",
    tech: [
      { name: "React", icon: <SiReact size={16} />, color: "bg-cyan-200 text-cyan-900" },
      { name: "Node.js", icon: <SiNodedotjs size={16} />, color: "bg-green-200 text-green-900" },
      { name: "PostgreSQL", icon: <SiPostgresql size={16} />, color: "bg-orange-200 text-orange-900" },
      { name: "TypeScript", icon: <SiTypescript size={16} />, color: "bg-indigo-200 text-indigo-900" },
    ],
    demoLink: "https://movie-matcher-tiffany.vercel.app/",
    codeLink: "https://github.com/tiffanyluu/movie-matcher",
  },
  {
    title: "Turnip Trader",
    img: "/turniptrader.jpg",
    description: "AI-powered Animal Crossing turnip price simulator and advisor using RAG and LLMs.",
    tech: [
      { name: "React", icon: <SiReact size={16} />, color: "bg-cyan-200 text-cyan-900" },
      { name: "Node.js", icon: <SiNodedotjs size={16} />, color: "bg-green-200 text-green-900" },
      { name: "PostgreSQL", icon: <SiPostgresql size={16} />, color: "bg-orange-200 text-orange-900" },
      { name: "TypeScript", icon: <SiTypescript size={16} />, color: "bg-indigo-200 text-indigo-900" },
    ],
    demoLink: "https://turnip-trader.vercel.app/",
    codeLink: "https://github.com/tiffanyluu/turnip-trader",
  },
  {
    title: "PetRealm",
    img: "/petrealm.jpg",
    description: "Virtual mythical pet simulation with AWS serverless automation.",
    tech: [
      { name: "React", icon: <SiReact size={16} />, color: "bg-cyan-200 text-cyan-900" },
      { name: "Node.js", icon: <SiNodedotjs size={16} />, color: "bg-green-200 text-green-900" },
      { name: "PostgreSQL", icon: <SiPostgresql size={16} />, color: "bg-orange-200 text-orange-900" },
      { name: "TypeScript", icon: <SiTypescript size={16} />, color: "bg-indigo-200 text-indigo-900" },
    ],
    demoLink: "https://petrealm.vercel.app/",
    codeLink: "https://github.com/tiffanyluu/petrealm",
  },
  {
    title: "Barber Supply",
    img: "/barber.jpg",
    description: "CRUD inventory management app for barber shops.",
    tech: [
      { name: "JavaScript", icon: <SiJavascript size={16} />, color: "bg-yellow-200 text-yellow-900" },
      { name: "PostgreSQL", icon: <SiPostgresql size={16} />, color: "bg-orange-200 text-orange-900" },
    ],
    codeLink: "https://github.com/tiffanyluu/barber-supply",
  },
  {
    title: "Caro",
    img: "/caro.jpg",
    description: "Traditional Vietnamese strategy game.",
    tech: [
      { name: "JavaScript", icon: <SiJavascript size={16} />, color: "bg-yellow-200 text-yellow-900" },
    ],
    demoLink: "https://tiffanyluu.github.io/caro/",
    codeLink: "https://github.com/tiffanyluu/caro",
  },
  {
    title: "Pokemon Memory Game",
    img: "/pokemon.jpg",
    description: "A memory game featuring over 1,000 Pokémon using the PokéAPI.",
    tech: [
      { name: "React", icon: <SiReact size={16} />, color: "bg-cyan-200 text-cyan-900" },
      { name: "JavaScript", icon: <SiJavascript size={16} />, color: "bg-yellow-200 text-yellow-900" },
    ],
    demoLink: "https://tiffany-pokemon-memory-game.vercel.app/",
    codeLink: "https://github.com/tiffanyluu/pokemon-memory-game",
  },
  {
    title: "Sproutly",
    img: "/sproutly.jpg",
    description: "To-Do App: Where every task is a sprout of progress.",
    tech: [
      { name: "JavaScript", icon: <SiJavascript size={16} />, color: "bg-yellow-200 text-yellow-900" },
    ],
    demoLink: "https://tiffanyluu.github.io/sproutly/",
    codeLink: "https://github.com/tiffanyluu/sproutly",
  },
];

const ProjectsSection = () => {
  const prefersReducedMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768 || /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Variants for cards
  const cardVariants = prefersReducedMotion || isMobile
    ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
    : { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } };

  return (
    <section id="projects" className="min-h-screen scroll-mt-24 flex flex-col items-center text-center mt-24 md:mt-32 px-4 sm:px-8 md:px-16">
      {/* Title */}
      <motion.h2
        className="font-bold text-4xl mb-16"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
      >
        Projects
      </motion.h2>

      {/* Cards Grid */}
      <motion.div
  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full max-w-6xl"
>
  {projects.map((project) => (
    <motion.div
      key={project.title}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="flex"
    >
      <Card className="flex flex-col flex-1 min-w-0 bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow h-full">
        <CardHeader className="p-4 md:p-6">
          <img
            src={project.img}
            alt={`${project.title} screenshot`}
            className="w-full h-44 sm:h-48 object-cover"
            loading="lazy"
            decoding="async"
          />
          <CardTitle className="text-lg md:text-xl font-semibold mt-2 truncate">
            {project.title}
          </CardTitle>
        </CardHeader>

        <CardContent className="flex flex-col flex-1 gap-2 p-4 md:p-6">
          <CardDescription className="text-base md:text-[18px]">{project.description}</CardDescription>
          <div className="flex flex-wrap gap-2 mt-4 justify-center">
            {project.tech.map((tech) => (
              <span
                key={tech.name}
                className={`${tech.color} px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1 hover:scale-105 transition-transform`}
              >
                {tech.icon} {tech.name}
              </span>
            ))}
          </div>
          <CardFooter className="flex flex-col sm:flex-row gap-3 sm:gap-0 justify-evenly items-center mt-auto pt-6">
            {project.demoLink && (
              <Button className="bg-red-500 hover:bg-red-600 text-white hover:scale-105 w-full sm:w-auto">
                <a href={project.demoLink} target="_blank" rel="noopener noreferrer">Demo</a>
              </Button>
            )}
            <Button className="border bg-white border-gray-700 text-gray-700 hover:bg-gray-100 hover:scale-105 w-full sm:w-auto">
              <a href={project.codeLink} target="_blank" rel="noopener noreferrer">Code</a>
            </Button>
          </CardFooter>
        </CardContent>
      </Card>
    </motion.div>
  ))}
</motion.div>

    </section>
  );
};


export default ProjectsSection;
