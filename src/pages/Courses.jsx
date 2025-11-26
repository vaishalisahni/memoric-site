import React, { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const API_URL = import.meta.env.VITE_COURSE_API_URL;
const API_TOKEN = import.meta.env.VITE_COURSE_API_TOKEN;

export default function Courses() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await fetch(API_URL, {
          headers: {
            Authorization: `token ${API_TOKEN}`,
          },
        });
        const data = await res.json();
        setCourses(data.data);
      } catch (err) {
        console.error("Error fetching courses:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchCourses();
  }, []);

  if (loading)
    return (
      <div className="text-center py-10 text-slate-500">
        Loading courses...
      </div>
    );

  return (
    <div className="container mx-auto max-w-6xl py-12">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-slate-900">
        Our Courses
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course) => (
          <Card
            key={course.name}
            className="p-6 flex flex-col justify-between shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div>
              <h3 className="text-2xl font-semibold mb-2 text-slate-900">
                {course.title}
              </h3>
              <p className="text-sm text-slate-600 mb-4">
                {course.short_introduction}
              </p>
              {course.category && (
                <Badge className="bg-sky-100 text-sky-800 mb-4">
                  {course.category}
                </Badge>
              )}
            </div>
            <Button className="mt-4 w-full bg-sky-600 hover:bg-sky-700">
              {course.paid_course
                ? `Enroll ($${course.course_price})`
                : "Enroll Now"}
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
}
