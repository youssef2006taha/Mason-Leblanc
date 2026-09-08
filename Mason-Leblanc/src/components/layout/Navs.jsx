import { NavLink } from 'react-router-dom';

const NavItems = [
  { id: 1, title: "Home", path: "/home" },
  { id: 2, title: "About", path: "/about" },
  { id: 3, title: "Portfolio", path: "/portfolio" },
  { id: 4, title: "Services", path: "/Services" },
  { id: 5, title: "Contact", path: "/contact" },
];

export function Navs({ p_ClassName = "", navClassName = "", onClick }) {
  return (
    <div className={`flex ${p_ClassName}`}>
      {NavItems.map((item) => (
        <NavLink
          key={item.id}
          to={item.path}
          end={item.path === "/shop"}
          className={({ isActive }) =>
            `transition-colors whitespace-nowrap ${
              isActive ? "text-primary font-bold" : "text-text-muted hover:text-primary"
            } ${navClassName}`
          }
          onClick={onClick}
        >
          {item.title}
        </NavLink>
      ))}
    </div>
  );
}
