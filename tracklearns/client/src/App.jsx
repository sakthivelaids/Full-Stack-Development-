import { Routes, Route } from "react-router-dom";
import Courses from "./components/Courses";
import CourseDetail from "./components/CourseDetail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Courses />} />
      <Route path="/course/:id" element={<CourseDetail />} />
    </Routes>
  );
}

export default App;
