import { Link } from "react-router-dom";

export default function HeroComponent() {
  return (
    <div className="flex gap-[24px] justify-between mb-[24px]">
      <div className=" w-[100%] bg-greyBackground rounded-bigRadius max-w-[720px] py-63 px-[64px]">
        <h1 className="mb-8 max-w-[548px] min-[1440px]:text-[48px]">
          Unlock your potential with the best{" "}
          <span className="highlight">language</span> tutors
        </h1>
        <p className="mb-16 max-w-470">
          Embark on an Exciting Language Journey with Expert Language Tutors:
          Elevate your language proficiency to new heights by connecting with
          highly qualified and experienced tutors.
        </p>
        <Link
          to="/teachers"
          className="button-prima bg-accentPrimary hover:bg-accentSecondary transition duration-300 py-4 px-22 rounded-xl"
        >
          Get Started
        </Link>
      </div>
      <div className="flex rounded-bigRadius bg-accentPrimary w-[100%] max-w-568 bg-hero-pattern-red bg-center-20 bg-no-repeat px-103 pt-auto">
        <div className="w-[100%] bg-hero-pattern-mac mt-auto min-w-[200px] max-w-[360px] h-177 p-0 bg-bottom bg-contain bg-no-repeat"></div>
      </div>
    </div>
  );
}
