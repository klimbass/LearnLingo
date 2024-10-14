import { useForm } from "react-hook-form";

export default function RegisterPopup({ setIsRegisterOpen }) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(watch("example"));
  return (
    <div
      className="absolute top-0 left-0 bg-popupBackground  w-[100%] h-[100vh] z-20"
      onClick={() => setIsRegisterOpen(false)}
    >
      <div className="absolute flex flex-col gap-[40px] max-w-[566px] top-[50%] left-[50%] bg-[#fff] rounded-bigRadius opacity-100 translate-y-[-50%] translate-x-[-50%] z-50 p-[64px]">
        <div>
          <h2 className="text-custom-xxl text-textPrimary mb-[20px]">
            Registration
          </h2>
          <p className="text-custom-ps opacity-80">
            Thank you for your interest in our platform! In order to register,
            we need some information. Please provide us with the following
            information
          </p>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-[18px]"
        >
          {/* register your input into the hook by invoking the "register" function */}
          <input
            className="input-popup"
            {...register("name")}
            placeholder="Name"
          />

          {/* include validation with required or other standard HTML validation rules */}
          <input
            className="input-popup"
            {...register("email", { required: true })}
            placeholder="Email"
          />
          {errors.email && <span>This field is required</span>}
          <input
            className="input-popup"
            {...register("password", { required: true })}
            placeholder="Password"
          />
          {errors.password && <span>This field is required</span>}

          <button type="submit" className="button-popup">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}
