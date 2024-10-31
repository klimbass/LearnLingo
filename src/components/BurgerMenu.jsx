import { NavLink } from "react-router-dom";
import IconComponent from "../images/svg-sprite/IconComponent.jsx";

export default function BurgerMenu({
  isUserLogin,
  currentUser,
  handleLogout,
  setIsLoginOpen,
  setIsRegisterOpen,
  setIsBurgerOpen,
}) {
  const handleClick = (e) => {
    const listItem = e.target.closest("li");
    if (listItem) {
      setIsBurgerOpen(false);
    }
  };

  return (
    <div className="absolute top-0 right-0 max-w-[50%] bg-white px-5 py-4 rounded-sm">
      <ul className="space-y-4" onClick={handleClick}>
        {isUserLogin && (
          <li>
            <button className="font-semibold">
              {currentUser.userName.length > 0
                ? currentUser.userName
                : currentUser.userEmail.split("@")[0]}
            </button>
          </li>
        )}
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
        <li>
          {isUserLogin ? (
            <button
              type="button"
              className="flex items-center space-x-2"
              onClick={handleLogout}
              aria-label="Log out"
            >
              <IconComponent name="log-out" sizeWidth="20px" style="default" />
              <span>Log out</span>
            </button>
          ) : (
            <button
              type="button"
              className="flex items-center space-x-2"
              onClick={() => setIsLoginOpen(true)}
              aria-label="Log in"
            >
              <IconComponent name="log-in" sizeWidth="20px" style="default" />
              <span>Log in</span>
            </button>
          )}
        </li>
        {!isUserLogin && (
          <li>
            <button
              type="button"
              className="text-textPrimary hover:text-accentSecondary transition-colors"
              onClick={() => setIsRegisterOpen(true)}
              aria-label="Registration"
            >
              Registration
            </button>
          </li>
        )}
      </ul>
    </div>
  );
}
