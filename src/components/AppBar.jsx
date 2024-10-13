import { Link, NavLink } from "react-router-dom";
import IconComponent from "../images/svg-sprite/IconComponent.jsx";

export default function AppBar() {
  return (
    <div className="flex items-center justify-between text-textPrimary h-12 px-[64px] mb-[20px]">
      <Link to="/" className="flex flex-row items-center gap-[8px]">
        <IconComponent name="ukraine" sizeWidth="28px" />
        <p>LearnLingo</p>
      </Link>

      <ul className="flex gap-7">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-accentPrimary"
                : "text-textPrimary transition-colors hover:text-accentSecondary"
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/teachers"
            className={({ isActive }) =>
              isActive
                ? "text-accentPrimary"
                : "text-textPrimary transition-colors hover:text-accentSecondary"
            }
          >
            Teachers
          </NavLink>
        </li>
      </ul>
      <div className="flex gap-4">
        <button type="button" className="flex flex-row items-center gap-[8px]">
          <IconComponent name="log-in" sizeWidth="20px" />
          Log in
        </button>
        <button
          type="button"
          className="bg-black px-[39px] py-[14px] text-white font-bold rounded-[12px]"
        >
          Registration
        </button>
      </div>
    </div>
  );
}
