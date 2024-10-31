import { Link, NavLink } from "react-router-dom";
import IconComponent from "../images/svg-sprite/IconComponent.jsx";
import { useContext, useEffect, useState } from "react";
import RegisterPopup from "./RegisterPopup.jsx";
import bodyScrollLockToggle from "../utils/bodyScrollLockToggle.js";
import LoginPopup from "./LoginPopup.jsx";
import { userContext } from "./App.jsx";
import BurgerMenu from "./BurgerMenu.jsx";
import { RxHamburgerMenu } from "react-icons/rx";

export default function AppBar() {
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  bodyScrollLockToggle(isRegisterOpen, isLoginOpen);
  const { currentUser, setCurrentUser } = useContext(userContext);
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  const handleToggleBurger = () => {
    setIsBurgerOpen((isBurgerOpen) => !isBurgerOpen);
  };

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const isUserLogin = currentUser.isUserLogin;
  const handleLogout = () => {
    setCurrentUser({
      ...currentUser,
      userName: "",
      userEmail: "",
      userID: "",
      isUserLogin: false,
    });
  };

  return (
    <div className="flex items-center justify-between text-textPrimary px-[24px] h-12 md:px-[64px] lg:px-[128px] mb-[4px] md:mb-[20px]">
      <Link to="/" className="flex flex-row items-center gap-[8px]">
        <IconComponent name="ukraine" sizeWidth="28px" />
        <p>LearnLingo</p>
      </Link>
      <div
        className={`fixed z-30 top-0 right-0 w-[100%] h-[100%] transition-transform  ${
          isBurgerOpen ? "translate-x-0" : "translate-x-[100%]"
        }`}
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            setIsBurgerOpen(false);
          }
        }}
      >
        <BurgerMenu
          isUserLogin={isUserLogin}
          currentUser={currentUser}
          handleLogout={handleLogout}
          setIsLoginOpen={setIsLoginOpen}
          setIsRegisterOpen={setIsRegisterOpen}
          setIsBurgerOpen={setIsBurgerOpen}
        />
      </div>
      {width > 600 && (
        <>
          <ul className="flex gap-7 ">
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
          <div className="flex gap-4 items-center ">
            {isUserLogin ? (
              <>
                <button>
                  {currentUser.userName.length > 0
                    ? currentUser.userName
                    : currentUser.userEmail.split("@")[0]}
                </button>
                <button
                  type="button"
                  className="flex flex-row items-center gap-[8px] "
                  onClick={handleLogout}
                >
                  <IconComponent
                    name="log-out"
                    sizeWidth="20px"
                    style="default"
                  />
                  Log out
                </button>
              </>
            ) : (
              <>
                <button
                  type="button"
                  className="flex flex-row items-center gap-[8px] "
                  onClick={() => setIsLoginOpen(true)}
                >
                  <IconComponent
                    name="log-in"
                    sizeWidth="20px"
                    style="default"
                  />
                  Log in
                </button>
                <button
                  type="button"
                  className="bg-black px-[39px] py-[14px] text-white font-bold rounded-[12px]"
                  onClick={() => setIsRegisterOpen(true)}
                >
                  Registration
                </button>
              </>
            )}
          </div>
        </>
      )}

      {width < 600 && (
        <button type="button" onClick={handleToggleBurger}>
          <RxHamburgerMenu size={"24px"} />
        </button>
      )}

      {isRegisterOpen && (
        <RegisterPopup setIsRegisterOpen={setIsRegisterOpen} />
      )}
      {isLoginOpen && <LoginPopup setIsLoginOpen={setIsLoginOpen} />}
    </div>
  );
}
