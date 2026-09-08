import { Link } from 'react-router-dom';
import logo from '../../assets/Mason-Leblanc.svg';
import { Navs } from './Navs';
import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';

function Navbar() {
  const [ showNavMenu, setShowNavMenu ] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setShowNavMenu(false);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="relative bg-linear-to-b from-primary/13 via-primary/5 to-transparent md:py-3">
      <div className='flex md:flex-col items-center justify-between container'>
        <div>
          <Link
            to="/home"
          >
            <img src={logo} alt="Mason Leblanc" className='w-50 md:w-60'/>
          </Link>
        </div>
        
        <Navs p_ClassName='hidden md:flex pt-5 gap-10'/>

        <button
          className={`
            bg-primary text-text-inverse cursor-pointer
            rounded-full p-1.5
            transition-all duration-200
            md:hidden
            ${showNavMenu ? "rotate-90" : ""}
          `}
          onClick={() => setShowNavMenu(!showNavMenu)}
        >
          {showNavMenu ? (
            <X size={28}  strokeWidth={2.5} />
          ) : (
            <Menu size={28}  strokeWidth={2.5} />
          )}
        </button>
      </div>

      <div>
        <div
          className={`
            absolute left-0 right-0 top-full
            min-h-screen
            backdrop-blur-md
            ${showNavMenu ? "block" : "hidden"}
          `}
          onClick={() => setShowNavMenu(false)}
        />

        <div
          className={`
            relative z-10
            overflow-hidden transition-all duration-300
            ${showNavMenu ? "max-h-96" : "max-h-0"}
          `}
        >
          <Navs
            p_ClassName="flex-col py-4 bg-primary/5"
            navClassName="
              w-full
              px-4 py-2
              hover:bg-bg-surface
              hover:text-primary
            "
            onClick={() => setShowNavMenu(false)}
          />
        </div>
      </div>
    </header>
  );
}

export default Navbar;