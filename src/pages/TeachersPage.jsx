import FilterList from "../components/FilterList.jsx";
import TeachersList from "../components/TeachersList.jsx";

export default function TeachersPage() {
  return (
    <div className="bg-greyBackground px-[128px] h-[100vh] pt-[20px]">
      <FilterList />
      <TeachersList />
    </div>
  );
}
