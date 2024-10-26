import Layout from "./Layout.jsx";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage.jsx";
import TeachersPage from "../pages/TeachersPage.jsx";
import { createContext, useState } from "react";

const userContext = createContext();

function App() {
  const [currentUser, setCurrentUser] = useState({
    userName: "",
    userEmail: "",
    userID: "",
    isUserLogin: false,
  });
  return (
    <userContext.Provider
      value={{
        currentUser,
        setCurrentUser,
      }}
    >
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/teachers" element={<TeachersPage />} />
        </Routes>
      </Layout>
    </userContext.Provider>
  );
}
export { userContext };
export default App;
