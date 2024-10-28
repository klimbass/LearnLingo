import { useForm } from "react-hook-form";
import IconComponent from "../images/svg-sprite/IconComponent.jsx";
import { useContext, useState } from "react";
import { loginUser } from "../firebase/initialFirebase.js";
import { userContext } from "./App.jsx";

export default function LoginPopup({ setIsLoginOpen }) {
  const [isVisiblePassword, setIsVisiblePassword] = useState(false);
  const { currentUser, setCurrentUser } = useContext(userContext);

  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const email = data.email;
    const pass = data.password;
    const user = await loginUser(email, pass);
    if (user) {
      alert("Successfully Login");
      setIsLoginOpen(false);
      console.log(user);
      setCurrentUser({
        ...currentUser,
        userEmail: user.email,
        userID: user.uid,
        isUserLogin: true,
      });
    }
  };
  // console.log(watch("name"));

  const handleClose = (e) => {
    if (e.target.id === "popup-bg") {
      setIsLoginOpen(false);
    }
  };
  return (
    <div
      className="absolute top-0 left-0 bg-popupBackground  w-[100%] h-[100vh] z-20 overflow-hidden"
      onClick={handleClose}
      id="popup-bg"
    >
      <div
        id="popup"
        className="absolute flex flex-col gap-[20px] sm:gap-[40px] max-w-[566px] min-w-[320px] top-[50%] left-[50%] bg-[#fff] rounded-smallRadius sm:rounded-bigRadius opacity-100 translate-y-[-50%] translate-x-[-50%] z-50 py-[16px] px-[14px] sm:p-[32px] lg:p-[64px]"
      >
        <button
          type="button"
          className="absolute top-[20px] right-[20px] cursor-pointer w-[18px] h-[18px] sm:w-[32px] sm:h-[32px]"
          onClick={() => setIsLoginOpen(false)}
        >
          <IconComponent name="x" stroke={"#121417"} />
        </button>
        <div>
          <h2 className="text-custom-xl sm:text-custom-xxl text-textPrimary mb-[10px] sm:mb-[20px]">
            Log In
          </h2>
          <p className="text-custom-ps opacity-80">
            Welcome back! Please enter your credentials to access your account
            and continue your search for an teacher.
          </p>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-[18px]"
        >
          <div className="relative block">
            <input
              className="input-popup"
              {...register("email", { required: true })}
              placeholder="Email"
            />
            {errors.email && <span className="error-popup">Required</span>}
          </div>

          <div className="relative block">
            <input
              type={isVisiblePassword ? "text" : "password"}
              className="input-popup"
              {...register("password", { required: true })}
              placeholder="Password"
            />
            {errors.password && <span className="error-popup">Required</span>}
            <button
              type="button"
              className="absolute top-[50%] translate-y-[-50%] right-[10%] md:right-[18px] w-[14px] h-[14px] md:w-[20px] md:h-[20px]"
              onClick={() => setIsVisiblePassword(!isVisiblePassword)}
            >
              <IconComponent
                name="eye-off"
                // sizeWidth="20"
                fill="transparent"
                stroke={
                  isVisiblePassword
                    ? "var(--textSecondary)"
                    : "var(--textPrimary)"
                }
              />
            </button>
          </div>

          <button type="submit" className="button-popup">
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}
