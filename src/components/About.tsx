import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-start items-center px-8 pt-32"
    >
      <h2 className="text-4xl font-bold mb-8 text-center">About Me</h2>
      <div className="max-w-2xl text-2xl text-slate-700 space-y-6 text-left">
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
      </div>

      <div className="flex flex-col sm:flex-row gap-12 mt-12 justify-center items-end relative">
        <Avatar className="w-72 h-72 rounded-full border-4 border-slate-300 shadow-lg z-10">
          <AvatarImage
            src="src/assets/me.jpg"
            alt="Tiffany"
            className="object-cover"
          />
          <AvatarFallback>T</AvatarFallback>
        </Avatar>

        <Avatar className="w-56 h-72 rounded-2xl border-4 border-slate-300 shadow-lg -mt-6 z-0">
          <AvatarImage
            src="src/assets/mydog.jpg"
            alt="Belgian Malinois"
            className="object-cover"
          />
          <AvatarFallback>BM</AvatarFallback>
        </Avatar>
      </div>
    </section>
  );
};

export default About;
