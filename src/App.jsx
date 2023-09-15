import './App.css'
import Courses from './Components/Courses/Courses'
import Cart from './Components/Cart/Cart'
import { useState } from 'react'

function App() {

  const [carts, setCarts] = useState([]);
  const [credit, setCredit] = useState(0);
  const handleAddToCart = course =>
  {
    // console.log(course)
    const newCart = [...carts, course];
    setCarts(newCart);
  }

  const handleAddTotalCredit = credit_Hour =>
  {
    const newCreditHour = credit+credit_Hour;
      setCredit(newCreditHour);
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
      ></Cart>
    </main>
    </div>
  )
}

export default App
