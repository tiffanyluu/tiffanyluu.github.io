import { Button } from "./ui/button";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <section id='contact' className="min-h-screen flex flex-col justify-center items-center px-8">
      <h2 className="text-5xl font-bold mb-6 text-center">Contact</h2>
      <p className="text-xl text-slate-700 mb-12 text-center">
        I'm always happy to connect!<br />Feel free to reach out ~
      </p>
      <div className="flex flex-wrap gap-6 justify-center">
        <Button
          asChild
          className="bg-red-500 hover:bg-red-600 text-white flex items-center gap-2 transition-transform hover:scale-105"
        >
          <a href="mailto:tiffanyluu555@berkeley.edu">
            <MdEmail size={20} /> Email
          </a>
        </Button>

        <Button
          asChild
          className="bg-gray-800 hover:bg-gray-900 text-white flex items-center gap-2 transition-transform hover:scale-105"
        >
          <a href="https://github.com/tiffanyluu" target="_blank">
            <SiGithub size={20} /> GitHub
          </a>
        </Button>

        <Button
          asChild
          className="bg-[#0A66C2] hover:bg-[#084B8A] text-white flex items-center gap-2 transition-transform hover:scale-105"
        >
          <a href="https://linkedin.com/in/tiffany-t-luu/" target="_blank">
            <SiLinkedin size={20} /> LinkedIn
          </a>
        </Button>
      </div>
    </section>
  );
};

export default Contact;
