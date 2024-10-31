import { useEffect, useState } from "react";
import IconComponent from "../images/svg-sprite/IconComponent.jsx";

export default function TeachCard({ teach }) {
  const [showFullContent, setShowFullContent] = useState(false);
  const [isFavor, setIsFavor] = useState(false);
  const [isTeachOnline, setIsTeachOnline] = useState(true);

  const handleClickReadMore = () => {
    setShowFullContent((showFullContent) => !showFullContent);
  };

  const handleToggleFavor = () => {
    setIsFavor((isFavor) => !isFavor);
  };
  const randomTime = Math.ceil(Math.random() * 10) * 10000;

  const randomOnline = () => {
    setIsTeachOnline((isTeachOnline) => !isTeachOnline);
  };

  useEffect(() => {
    const intervalId = setInterval(randomOnline, randomTime);
    return () => clearInterval(intervalId);
  }, []);
  return (
    <div
      className={`relative max-w-[1150px] bg-white rounded-[24px] p-[24px] flex flex-row gap-[48px] transition-max-height ease-in duration-500  ${
        showFullContent ? "max-h-[1000px]" : "max-h-[350px]"
      } `}
    >
      <div className="relative w-[120px] h-[120px] rounded-[50%] border-4 border-[#FBE9BA] p-[10px] ">
        <img
          src={teach.avatar_url}
          alt={`teacher ${teach.name}`}
          //   width={96}
          className="m-auto overflow-hidden rounded-[50%]"
        />
        <div className="absolute top-[14px] right-[22px]">
          <IconComponent
            name="on-Line"
            sizeWidth="12px"
            fill={isTeachOnline ? "#38cd3e" : "#CBDED3"}
          />
        </div>
      </div>

      <div className="max-w-[80%]">
        <p className="text-custom-p-disc text-textSecondary mb-[8px]">
          Languages
        </p>
        <h2 className="text-custom-teachCardName mb-[32px]">{`${teach.name} ${teach.surname}`}</h2>
        <ul className="text-custom-p-disc flex flex-col gap-[8px] mb-[16px]">
          <li>
            <p className="flex flex-row gap-[4px]">
              <span className="text-textSecondary">Speaks:</span>
              <span className="underline"> {teach.languages.join(", ")}</span>
            </p>
          </li>
          <li className="flex flex-row gap-[4px]">
            <p className="text-textSecondary whitespace-nowrap">Lesson Info:</p>
            <p>{teach.lesson_info}</p>
          </li>
          <li className="flex flex-row">
            <p>
              <span className="text-textSecondary">Conditions: </span>
              {teach.conditions[0]}
            </p>
          </li>
        </ul>

        {showFullContent && (
          <>
            <p className="mb-[32px]">{teach.experience}</p>
            <ul>
              {teach.reviews &&
                teach.reviews.map((rew) => {
                  return (
                    <li
                      key={`${teach.name}-${rew.reviewer_name}`}
                      className="flex flex-col gap-[16px] mb-[32px] text-custom-p-disc"
                    >
                      <div className="flex flex-row gap-[12px]">
                        <div className="bg-accentSecondary flex items-center justify-center rounded-[50%] w-[44px] h-[44px] ">
                          {rew.reviewer_name[0]}
                        </div>
                        <div>
                          <h4 className="text-textSecondary">
                            {rew.reviewer_name}
                          </h4>
                          <div className="flex flex-row items-center gap-[8px]">
                            <IconComponent name="Star-2" sizeWidth="16px" />
                            <p>{rew.reviewer_rating.toFixed(1)}</p>
                          </div>
                        </div>
                      </div>
                      <div>{rew.comment}</div>
                    </li>
                  );
                })}
            </ul>
          </>
        )}
        <button
          type="button"
          onClick={handleClickReadMore}
          className="underline hover:text-accentSecondary mb-[32px]"
        >
          {showFullContent ? "Show less" : "Read more"}
        </button>
        <ul className="flex flex-row gap-[8px] text-custom-ss ">
          {teach.levels &&
            teach.levels.map((el) => {
              return (
                <li
                  key={el}
                  className="p-[8px] border-2 border-[#cccccc] rounded-[35px] first:bg-accentPrimary first:border-none flex items-center"
                >
                  #{el}
                </li>
              );
            })}
        </ul>
        {showFullContent && (
          <button
            type="button"
            className="bg-accentPrimary px-[48px] py-[16px] rounded-[12px] mt-[32px]"
          >
            Book trial lesson
          </button>
        )}
      </div>
      <div className="absolute top-[24px] right-[24px] flex flex-row gap-[64px] font-custom-ps">
        <ul className="flex flex-row gap-[16px]">
          <li
            key="lessons-online"
            className="flex flex-row items-center gap-[8px]"
          >
            <IconComponent
              name="book-open"
              sizeWidth="16px"
              sizeHeight="16px"
              style="no-icon"
              fill="none"
              stroke="#121417"
            />
            <p>Lessons online</p>
          </li>
          <li>
            <p className="text-accentSecondary">|</p>
          </li>
          <li key="lessons-done">
            <p>Lessons done: {teach.lessons_done}</p>
          </li>
          <li>
            <p className="text-accentSecondary">|</p>
          </li>
          <li key="rating" className="flex flex-row items-center gap-[8px]">
            <IconComponent name="Star-2" sizeWidth="16px" style="no-icon" />
            <p>Rating: {teach.rating}</p>
          </li>
          <li>
            <p className="text-accentSecondary">|</p>
          </li>
          <li key="price">
            <p>
              Price / 1 hour:{" "}
              <span className="text-[#38CD3E]">{teach.price_per_hour}$</span>
            </p>
          </li>
        </ul>
        <button type="button" onClick={handleToggleFavor}>
          <IconComponent
            name={isFavor ? "heart-active" : "heart-normal"}
            sizeWidth="23px"
            fill="none"
            stroke={isFavor ? "none" : "#121417"}
          />
        </button>
      </div>
    </div>
  );
}
