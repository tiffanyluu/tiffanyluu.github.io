import { Button } from "./components/ui/button"

const App = () => {
  return (
    <>
      <nav className='flex justify-between items-center px-8 py-6'>
        {/* Left side */}
        <div className="text-xl font-bold leading-tight">
          <a href='/'>Tiffany<br />Luu</a>
        </div>
        {/* Right side */}
        <div className="flex gap-8">
          <a href='#about' className="text-slate-800 hover:text-blue-600 transition-colors">About</a>
          <a href='#projects' className="text-slate-800 hover:text-blue-600 transition-colors">Projects</a>
          <a href='#contact' className="text-slate-800 hover:text-blue-600 transition-colors">Contact</a>
        </div>
      </nav>
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-start items-center text-center px-8 pt-32">
        <h1 className="font-bold text-6xl mb-16">Tiffany Luu</h1>
        <div className="space-y-1">
          <h2 className="text-3xl text-slate-700">Full-Stack Software Engineer</h2>
          <p className="text-lg text-muted-foreground pt-2">UC Berkeley Data Science Graduate</p>
        </div>
        <div className="mt-12 flex gap-8">
          <Button asChild className="text-lg p-6 bg-blue-600 hover:bg-blue-700">
            <a href="/resume.pdf" target="_blank">Resume</a>
          </Button>
          <Button asChild variant="outline" className="text-lg p-6">
            <a href="#contact">Contact</a>
          </Button>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-6xl text-muted-foreground hover:text-slate-700">
          ↓
        </div>
      </section>
      {/* Projects Section */}
      <section className="flex justify-evenly">
        <div>
          Project 1
        </div>
        <div>
          Project 2
        </div>
        <div>
          Project 3
        </div>
      </section>
    </>
  )
}

export default App
