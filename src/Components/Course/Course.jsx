import PropTypes from 'prop-types';
import {BiBookOpen} from 'react-icons/bi';
import { ToastContainer } from 'react-toastify';
const Course = ({course,handleAddToCart}) => {
    // console.log(course)
    const {course_title,course_img,credit_Hour,course_fee,course_information} = course;
    return (
        <div className='w-[312px] h-[402px] mx-auto rounded-xl p-4 bg-white relative'>
            <img className='w-72' src={course_img} alt="" />
            <h2 className=' mt-4 text-lg text-[#1C1B1B] font-semibold'>{course_title}</h2>
            <p className=' mt-3 text-sm text-left text-[#1C1B1B99]'>{course_information}</p>
            <div className='absolute bottom-3 left-3 w-full'>
            <div className='mt-5 flex justify-between items-center w-3/4 gap-2 text-[#1C1B1B99]'>
                <p>$ Price: {course_fee}</p>
                <h1>
                    <BiBookOpen />
                </h1>
                <p>Credit: {credit_Hour} hr</p>
            </div>
            <button
            onClick={() => {handleAddToCart(course)}}
            className='w-11/12 items-center bg-blue-600 text-lg font-semibold py-2 rounded-lg text-white mt-6'>
                Select
                </button>
                <ToastContainer></ToastContainer>
            </div>
        </div>
        
    );
};

Course.propTypes = {
    course: PropTypes.object.isRequired,
    handleAddToCart: PropTypes.func,
}
export default Course;