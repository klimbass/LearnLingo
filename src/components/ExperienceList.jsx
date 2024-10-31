export default function ExperienceList() {
  return (
    <div className="custom-border">
      <ul className="px-[16px] py-[16px] md:px-[122px] md:py-[40px] flex justify-between flex-col md:flex-row gap-[24px] md:gap-[0px]">
        <li className="flex items-center gap-[16px]">
          <h3 className="text-custom-xl">32,000 +</h3>
          <p className="text-custom-ss text-textPrimary opacity-[70%] max-w-[96px]">
            Experienced tutors
          </p>
        </li>
        <li className="flex items-center max-w-[270px] gap-[16px]">
          <h3 className="text-custom-xl">300,000 +</h3>
          <p className="text-custom-ss text-textPrimary opacity-[70%] max-w-[96px]">
            5-star tutor reviews
          </p>
        </li>
        <li className="flex items-center max-w-[270px] gap-[16px]">
          <h3 className="text-custom-xl">120 +</h3>
          <p className="text-custom-ss text-textPrimary opacity-[70%] max-w-[96px]">
            Subjects taught
          </p>
        </li>
        <li className="flex items-center max-w-[270px] gap-[16px]">
          <h3 className="text-custom-xl">200 +</h3>
          <p className="text-custom-ss text-textPrimary opacity-[70%] max-w-[96px]">
            Tutor nationalities
          </p>
        </li>
      </ul>
    </div>
  );
}
