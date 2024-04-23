
import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './components/CoffeeCard'
import { useState } from 'react'

function App() {
const loadedCoffees= useLoaderData()
const [coffees, setCoffees]= useState(loadedCoffees)
  return (
    <>
      <h2 className='text-5xl font-bold mb-6'>Coffee House</h2>
      <div className='grid grid-cols-2 gap-5'>
      {
        coffees.map(coffee=><CoffeeCard key={coffee._id} coffeeData={coffee} coffees={coffees} setCoffees={setCoffees}></CoffeeCard>)
      }
      </div>
    </>
  )
}

export default App
