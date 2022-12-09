import React, { useState } from 'react'
import { categories } from './data/data.js'

const Category = () => {
    const[category,setCategory]=useState(categories)
    
   
  return (
    <div className='max-w-[1640px] m-auto px-4 py-12' >
        <h1 className='text-orange-600 font-bold text-4xl text-center'> Top Rate Menu Items</h1>
     <div className='grid grid-cols-2 md:grid-cols-4 gap-6 py-6'>
        {category.map((item)=>{
            return(
                <div className='bg-gray-100 rounded-lg p-4 flex justify-between items-center' key={item.id}>
                    <h2 className='font-bold sm:text-xl '>{item.name}</h2>
                    <img  className="w-20"src={item.image} alt=""/>
                </div>
            )
        })}
     </div>
      
    </div>
  )
}

export default Category
