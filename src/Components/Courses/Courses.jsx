import { useEffect } from "react";
import { useState } from "react";
import Course from "../Course/Course";




const Courses = ({handleAddToCart}) => {
    const [courses, setCourses] = useState([]);

    useEffect(()=>{
        fetch('courses.json')
        .then(res => res.json())
        .then(data => setCourses(data));
    },[])


    return (
        
        
        <div className="w-3/4 grid grid-cols-3 justify-between items-center p-6 gap-4">
        {
            courses.map(course => <Course 
                key={course.id}
                course={course}
                handleAddToCart={handleAddToCart}
                ></Course>)
        }
        </div>
    );
};

export default Courses;