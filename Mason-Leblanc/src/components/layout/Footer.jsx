import { Link } from "react-router-dom";

import logo from "../../assets/Mason-Leblanc.svg";

const socialLinks = [
  { name: "Youtube", href: "https://www.youtube.com/" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/youssef-taha-819982350/" },
  { name: "Instagram", href: "https://www.instagram.com/" },
  { name: "Facebook", href: "https://www.facebook.com/" },
];

function Footer() {
  return (
    <footer className="bg-linear-to-b from-transparent to-primary/13 via-primary/4 text-text-main pt-15 pb-3">
      <div className="container flex flex-col items-center py-10 md:py-12">

        <Link to="/home">
          <img
            src={logo}
            alt="Mason Leblanc"
            className="w-45 md:w-70"
          />
        </Link>

        <nav className="mt-8 flex items-center gap-5 text-sm md:text-base">
          {socialLinks.map((link , index) => (
            <a
              key={index}
              href={ link.href }
              target="_blanck"
              className="transition-colors text-primary hover:text-primary-hover"
            >
              { link.name }
            </a>
          ))}
        </nav>

        <p className="mt-10 text-center text-sm">
          Copyright &copy; 2026 Fashion Photography Portfolio | Powered by Fashion Photography Portfolio
        </p>

      </div>
    </footer>
  );
}

export default Footer;