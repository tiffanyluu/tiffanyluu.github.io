import { SiReact, SiNodedotjs, SiPostgresql, SiTypescript } from "react-icons/si";
import { Button } from "./ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from "./ui/card";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const projects = [
  {
    title: "Movie Matcher",
    img: "src/assets/moviematcher.png",
    description: "A movie recommendation system that uses ML algorithms to suggest movies.",
    tech: [
      { name: "React", icon: <SiReact size={16} />, color: "bg-blue-200 text-blue-800" },
      { name: "Node.js", icon: <SiNodedotjs size={16} />, color: "bg-green-200 text-green-800" },
      { name: "PostgreSQL", icon: <SiPostgresql size={16} />, color: "bg-yellow-200 text-yellow-800" },
      { name: "TypeScript", icon: <SiTypescript size={16} />, color: "bg-purple-200 text-purple-800" },
    ],
    demoLink: "#",
    codeLink: "#",
  },
  {
    title: "Turnip Trader",
    img: "src/assets/turniptrader.png",
    description: "AI-powered Animal Crossing turnip price simulator and advisor using RAG and LLMs.",
    tech: [
      { name: "React", icon: <SiReact size={16} />, color: "bg-blue-200 text-blue-800" },
      { name: "Node.js", icon: <SiNodedotjs size={16} />, color: "bg-green-200 text-green-800" },
      { name: "PostgreSQL", icon: <SiPostgresql size={16} />, color: "bg-yellow-200 text-yellow-800" },
      { name: "TypeScript", icon: <SiTypescript size={16} />, color: "bg-purple-200 text-purple-800" },
    ],
    demoLink: "#",
    codeLink: "#",
  },
  {
    title: "PetRealm",
    img: "src/assets/petrealm.png",
    description: "Virtual mythical pet simulation with AWS serverless automation.",
    tech: [
      { name: "React", icon: <SiReact size={16} />, color: "bg-blue-200 text-blue-800" },
      { name: "Node.js", icon: <SiNodedotjs size={16} />, color: "bg-green-200 text-green-800" },
      { name: "PostgreSQL", icon: <SiPostgresql size={16} />, color: "bg-yellow-200 text-yellow-800" },
      { name: "TypeScript", icon: <SiTypescript size={16} />, color: "bg-purple-200 text-purple-800" },
    ],
    demoLink: "#",
    codeLink: "#",
  },
];

const ProjectsSection = () => {
  useEffect(() => {
    AOS.init({duration: 900, once: true});
  }, [])
  return (
    <section id='projects' className="min-h-screen scroll-mt-24 flex flex-col items-center text-center mt-32 px-16">
      <h2 className="font-bold text-4xl mb-16">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {projects.map((project) => (
          <Card
            key={project.title}
            className="flex flex-col flex-1 min-w-0 bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
            data-aos="fade-up"
          >
            <CardHeader>
              <img
                src={project.img}
                alt={`${project.title} screenshot`}
                className="w-full h-48 object-cover"
              />
              <CardTitle className="whitespace-nowrap text-xl font-semibold mt-2">
                {project.title}
              </CardTitle>
            </CardHeader>

            <CardContent className="flex flex-col flex-1 gap-2">
              <CardDescription className="text-[18px]">{project.description}</CardDescription>
              <div className="flex flex-wrap gap-2 mt-4 justify-center">
                {project.tech.map((tech) => (
                  <span
                    key={tech.name}
                    className={`${tech.color} px-2 py-1 rounded-full text-sm font-medium flex items-center gap-1 hover:scale-105 transition-transform`}
                  >
                    {tech.icon} {tech.name}
                  </span>
                ))}
              </div>
              <CardFooter className="flex justify-evenly items-center mt-auto pt-6">
                <Button className="bg-red-500 hover:bg-red-600 text-white hover:scale-105">
                  <a href={project.demoLink} target="_blank">Demo</a>
                </Button>
                <Button className="border bg-white border-gray-700 text-gray-700 hover:bg-gray-100 hover:scale-105">
                  <a href={project.codeLink} target="_blank">Code</a>
                </Button>
              </CardFooter>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
