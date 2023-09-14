import './App.css'
import Courses from './Components/Courses/Courses'
import Cart from './Components/Cart/Cart'
import { useState } from 'react'

function App() {

  const [cart, setCart] = useState([]);
  const handleAddToCart = () =>
  {
    console.log('Adding to Cart')
  }

  return (
    <div className='mx-auto max-w-[1440px] justify-evenly'>
        <header className='flex items-center justify-center'>
          <h1 className=' text-4xl font-bold mt-12 mb-8'>
            Course Registration
          </h1>
          </header>
      <main className=' md:flex'>
      <Courses handleAddToCart={handleAddToCart}></Courses>
      <Cart></Cart>
    </main>
    </div>
  )
}

export default App
