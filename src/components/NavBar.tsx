import { useState } from "react";

const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <nav className='flex items-center justify-between px-4 md:px-8 py-2 sticky top-0 bg-white z-50 shadow'>
        <div className="text-lg md:text-xl font-bold leading-tight">
          <button
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
              history.replaceState(null, "", window.location.pathname + window.location.search);
            }}
            className="hover:text-blue-600 transition-colors"
            aria-label="Scroll to top"
          >
            Tiffany Luu
          </button>
        </div>

        <button
          className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-slate-700 hover:text-blue-600 focus:outline-none"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>

        <div className="hidden md:flex gap-8 items-center">
          <a href='/resume.pdf' target="_blank" className="text-slate-800 hover:text-blue-600 transition-colors">Resume</a>
          <a href='#projects' className="text-slate-800 hover:text-blue-600 transition-colors">Projects</a>
          <a href='#about' className="text-slate-800 hover:text-blue-600 transition-colors">About</a>
          <a href='#contact' className="text-slate-800 hover:text-blue-600 transition-colors">Contact</a>
        </div>

        {menuOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow md:hidden">
            <div className="flex flex-col px-4 py-2 gap-2">
              <a onClick={() => setMenuOpen(false)} href='/resume.pdf' target="_blank" className="py-2 text-slate-800 hover:text-blue-600 transition-colors">Resume</a>
              <a onClick={() => setMenuOpen(false)} href='#projects' className="py-2 text-slate-800 hover:text-blue-600 transition-colors">Projects</a>
              <a onClick={() => setMenuOpen(false)} href='#about' className="py-2 text-slate-800 hover:text-blue-600 transition-colors">About</a>
              <a onClick={() => setMenuOpen(false)} href='#contact' className="py-2 text-slate-800 hover:text-blue-600 transition-colors">Contact</a>
            </div>
          </div>
        )}
      </nav>
    )
}

export default NavBar;
