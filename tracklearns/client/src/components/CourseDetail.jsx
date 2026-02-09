import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function CourseDetail() {
  const { id } = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/courses`)
      .then((res) => res.json())
      .then((data) => {
        const selected = data.find((c) => c.id === Number(id));
        setCourse(selected);
      });
  }, [id]);

  if (!course) return <p className="p-6">Loading...</p>;

  const videoId = course.youtube_url?.split("v=")[1];

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <Link to="/" className="text-blue-600 underline">
        ← Back to Courses
      </Link>

      <h1 className="text-3xl font-bold mt-4">{course.title}</h1>
      <p className="text-gray-600 mt-2">{course.description}</p>

      <p className="mt-3">
        <b>Instructor:</b> {course.instructor}
      </p>
      <p className="mt-1">
        <b>Price:</b> ₹{course.price}
      </p>

      {videoId && (
        <div className="aspect-video mt-6">
          <iframe
            className="w-full h-full rounded-lg"
            src={`https://www.youtube.com/embed/${videoId}`}
            title="Course Video"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </div>
  );
}

export default CourseDetail;
