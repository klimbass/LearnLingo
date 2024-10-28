export default function TeachCard({ teach }) {
  return (
    <div className="max-w-[1150px] bg-white rounded-[24px] p-[24px] flex flex-row">
      <div className="w-[120px] h-[120px] rounded-[50%] border-4 border-[#FBE9BA] p-[10px]">
        <img
          src={teach.avatar_url}
          alt={`teacher ${teach.name}`}
          //   width={96}
          className="m-auto overflow-hidden rounded-[50%]"
        />
      </div>
      <div>
        <p>Languages</p>
        <h2>{`${teach.name} ${teach.surname}`}</h2>
        <ul>
          <li className="flex flex-row">
            <p>Speaks:</p>
            <p>{teach.languages.map((l) => l)}</p>
          </li>
          <li className="flex flex-row">
            <p>Lesson Info:</p>
            <p>{teach.lesson_info}</p>
          </li>
          <li className="flex flex-row">
            <p>Conditions:</p>
            <p>{teach.conditions[0]}</p>
          </li>
        </ul>
        <button type="button">Read more</button>
        <ul className="flex flex-row gap-[8px] text-custom-ss ">
          {teach.levels &&
            teach.levels.map((el) => {
              return (
                <li
                  key={el}
                  className="p-[8px] border-2 border-[#cccccc] rounded-[35px] first:bg-accentPrimary first:border-none"
                >
                  #{el}
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
}
