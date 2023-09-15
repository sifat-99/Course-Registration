import './App.css';
import Courses from './Components/Courses/Courses';
import Cart from './Components/Cart/Cart';
import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {

  const [carts, setCarts] = useState([]);
  const [credit, setCredit] = useState(0);
  const [remainingCreditHour, setRemainingHour] = useState(20);
  const [cost, setCost] = useState(0);
  const handleAddToCart = course =>
  {
    const isExists = carts.find((lessons)=> lessons.id== course.id);
    if(isExists)
    {
      toast.error('You already selected this course', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }
    else
    {
      const newCart = [...carts, course];
      handleAddTotalCredit(course.credit_Hour,course.course_fee)
      handleRemainingCredit(course.credit_Hour);
      setCarts(newCart);
    }
  }
  const handleAddTotalCredit = (credit_Hour,credit_cost) =>
  {
    const newCreditHour = credit+credit_Hour;
    if(newCreditHour>20)
    {
      toast.error('Maximum Credit Reached', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }
    else{
      setCredit(newCreditHour);
      handelTotalCost(credit_cost)
    }
  }
  const handleRemainingCredit = (credit_Hour) =>
  {
    const newCreditHourRemain = remainingCreditHour - credit_Hour;
    if(newCreditHourRemain<0)
    {
      toast.error('You can not enroll at any course,You are already filled up your credits', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }
    else{
      setRemainingHour(newCreditHourRemain)
    }
  }
  const handelTotalCost = course_fee =>
  {
    const newCost = cost+course_fee;
    setCost(newCost)
  }
  return (
    <div className='mx-auto max-w-[1440px] justify-evenly'>
        <header className='flex items-center justify-center'>
          <h1 className=' text-4xl font-bold mt-12 mb-8'>
            Course Registration
          </h1>
          </header>
      <main className='flex flex-col-reverse md:flex lg:flex-row mx-auto px-10 justify-center items-center lg:items-start'>
      <Courses 
      handleAddToCart={handleAddToCart}
      handleAddTotalCredit={handleAddTotalCredit}
      ></Courses>
      <Cart 
      carts={carts}
      credit = {credit}
      remainingCreditHour = {remainingCreditHour}
      cost={cost}
      ></Cart>
    </main>
    </div>
  )
}

export default App
