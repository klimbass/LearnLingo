import { useEffect, useState } from "react";
import FilterList from "../components/FilterList.jsx";
import TeachersList from "../components/TeachersList.jsx";
import { getTeachers } from "../firebase/initialFirebase.js";

export default function TeachersPage() {
  const [teachers, setTeachers] = useState(null);
  useEffect(() => {
    const getAllTeachers = async () => {
      try {
        const response = await getTeachers();
        setTeachers(response);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    };
    getAllTeachers();
  }, []);

  return (
    <div className="bg-greyBackground px-[128px] min-h-[100vh] pt-[20px] pb-[96px] flex flex-col gap-[32px]">
      <FilterList />
      <TeachersList teachers={teachers} />
      <button
        type="button"
        className="px-[48px] py-[16px] bg-accentPrimary inline-block mx-auto rounded-[12px] hover:bg-accentSecondary"
      >
        Load more
      </button>
    </div>
  );
}
