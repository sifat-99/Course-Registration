import './App.css'
import Courses from './Components/Courses/Courses'
import Cart from './Components/Cart/Cart'
import { useState } from 'react'

function App() {

  const [carts, setCarts] = useState([]);
  const [credit, setCredit] = useState(0);
  const [remainingCreditHour, setRemainingHour] = useState(20);
  const handleAddToCart = course =>
  {
    const isExists = carts.find((lessons)=> lessons.id== course.id);
    if(isExists)
    {
      alert("You already selected this Course");
    }
    else
    {
      const newCart = [...carts, course];
      handleAddTotalCredit(course.credit_Hour)
      handleRemainingCredit(course.credit_Hour);
      setCarts(newCart);
    }
  }
  const handleAddTotalCredit = (credit_Hour) =>
  {
    const newCreditHour = credit+credit_Hour;
    if(newCreditHour>20)
    {
      alert("Maximum Credit Reached")
    }
    else{
      setCredit(newCreditHour);
    }
  }
  const handleRemainingCredit = (credit_Hour) =>
  {
    const newCreditHourRemain = remainingCreditHour - credit_Hour;
    if(newCreditHourRemain<0)
    {
      alert("You can not enroll at any course,You are already filled up your credits")
    }
    else{
      setRemainingHour(newCreditHourRemain)
    }
  }

  return (
    <div className='mx-auto max-w-[1440px] justify-evenly'>
        <header className='flex items-center justify-center'>
          <h1 className=' text-4xl font-bold mt-12 mb-8'>
            Course Registration
          </h1>
          </header>
      <main className=' md:flex'>
      <Courses 
      handleAddToCart={handleAddToCart}
      handleAddTotalCredit={handleAddTotalCredit}
      ></Courses>
      <Cart 
      carts={carts}
      credit = {credit}
      remainingCreditHour = {remainingCreditHour}
      ></Cart>
    </main>
    </div>
  )
}

export default App
