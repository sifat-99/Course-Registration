import { useEffect } from "react";
import { useState } from "react";
import Course from "../Course/Course";
import PropTypes from 'prop-types';




const Courses = ({handleAddToCart}) => {
    const [courses, setCourses] = useState([]);

    useEffect(()=>{
        fetch('courses.json')
        .then(res => res.json())
        .then(data => setCourses(data));
    },[])


    return (
        
        
        <div className=" w-full mx-auto justify-center 2xl:w-3/4 grid grid-cols-1  md:grid-cols-2 xl:grid-cols-3  items-center p-6 gap-4">
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


Courses.propTypes = {
    handleAddToCart: PropTypes.func,
}
export default Courses;