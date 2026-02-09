import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Courses() {
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5000/api/courses")
      .then((res) => res.json())
      .then((data) => setCourses(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">📚 TrackLearns Courses</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div
            key={course.id}
            className="border rounded-xl p-4 shadow hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold">{course.title}</h2>

            <p className="text-gray-600 mt-2">
              {course.description}
            </p>

            <p className="mt-2 text-sm">
              <b>Instructor:</b> {course.instructor}
            </p>

            <p className="mt-1 text-sm">
              <b>Price:</b> ₹{course.price}
            </p>

            <button
              onClick={() => navigate(`/course/${course.id}`)}
              className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              View Course
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Courses;
