import TeachCard from "./TeachCard.jsx";

export default function TeachersList({ teachers }) {
  return (
    <ul className="flex flex-col gap-[20px]">
      {teachers &&
        teachers.map((teach) => {
          return (
            <li key={`${teach.name}_${teach.surname}`}>
              <TeachCard teach={teach} />
            </li>
          );
        })}
    </ul>
  );
}
