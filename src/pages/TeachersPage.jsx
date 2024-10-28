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
      } catch (error) {
        console.log(error);
      }
    };
    getAllTeachers();
  }, []);

  return (
    <div className="bg-greyBackground px-[128px] h-[100vh] pt-[20px]">
      <FilterList />
      <TeachersList teachers={teachers} />
    </div>
  );
}
