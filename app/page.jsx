'use client'
import { useEffect,useState } from "react";
import Link from "next/link";
import loadingPage from "./loading";
import Courses from "./components/Courses";
import CourseSearch from "./components/CourseSearch";


export default function Home() {

  const [courses,setCourses] = useState([]);
  const [loading,setLoading] =useState(true);

  useEffect(() =>{
    const fetchCourses = async () => {
      const res = await fetch('/api/courses');
      const data =await res.json();
      setCourses(data);
      setLoading(false);
    }

    fetchCourses();
  },[]);

  if(loading){
    return <loadingPage />
  }

  return (
    <div>
      <h1>Welcome to Kanchana Site</h1>
      <CourseSearch getSearchResults={(result) => setCourses(result)}/>
      <Courses courses={courses} />
    </div>
  );
}
