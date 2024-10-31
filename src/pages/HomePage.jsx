import ExperienceList from "../components/ExperienceList.jsx";
import HeroComponent from "../components/HeroComponent.jsx";

export default function HomePage() {
  return (
    <div className="px-[24px] sm:px-[40px] lg:px-[64px]">
      <HeroComponent />
      <ExperienceList />
    </div>
  );
}
