const NavBar = () => {
    return (
        <nav className='flex justify-between items-center px-8 py-2 sticky top-0 bg-white z-50 shadow'>
        {/* Left side */}
        <div className="text-xl font-bold leading-tight">
          <button
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
              // Remove the hash from the URL without reloading
              history.replaceState(null, "", window.location.pathname + window.location.search);
            }}
            className="hover:text-blue-600 transition-colors"
          >
            Tiffany Luu
          </button>
        </div>
        {/* Right side */}
        <div className="flex gap-8">
        <a href='#projects' className="text-slate-800 hover:text-blue-600 transition-colors">Projects</a>
          <a href='#about' className="text-slate-800 hover:text-blue-600 transition-colors">About</a>
          <a href='#contact' className="text-slate-800 hover:text-blue-600 transition-colors">Contact</a>
        </div>
      </nav>
    )
}

export default NavBar;
