import { Route, Routes } from "react-router-dom";
import Header from "./Header";
import Help from "./Help";
import Home from "./Home";
import StudentsList from "./StudentsList";
import StudentsForm from "./StudentsForm";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const storedStudents = localStorage.getItem("students");
    if (!storedStudents) {
      localStorage.setItem("students", JSON.stringify([
        { fullName: "John Doe", studentId: 101 },
        { fullName: "Jane Smith", studentId: 102 },
        { fullName: "Bob Johnson", studentId: 103 },
        { fullName: "Alice Brown", studentId: 104 },
        { fullName: "Charlie Wilson", studentId: 105 },
      ]));
    }
  }, []);

  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/help" element={<Help />} />
        <Route path="/students" element={<StudentsList />} />
        <Route path="/student" element={<StudentsForm />} />
      </Routes>
    </>
  );
}

export default App;
