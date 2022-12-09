import React from 'react'

const HeadlinesCards = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
      <div className='rounded-xl relative'>
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
        <p className='font-bold  text-2xl px-2 pt-4  '> Sun's Out Bogo Out</p>
        <p className='px-2'>Through 9/22</p>
        <button className='border-white bg-white text-black mx-2 absolute bottom-4 rounded-xl p-2'>Order now</button>
      </div>
      <img className=' max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src="https://images.pexels.com/photos/12473090/pexels-photo-12473090.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""/>
    </div>
    <div className='rounded-xl relative'>
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
        <p className='font-bold  text-2xl px-2 pt-4  '> New Restaurent</p>
        <p className='px-2'>Added Daily</p>
        <button className='border-white bg-white text-black mx-2 absolute bottom-4 rounded-xl p-2'>Order now</button>
      
      </div>
      <img className=' max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src="https://images.pexels.com/photos/696218/pexels-photo-696218.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt=""/>
    </div>
    <div className='rounded-xl relative'>
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
        <p className='font-bold  text-2xl px-2 pt-4  '>We delivers Desserts</p>
        <p className='px-2'>Yummy Treats</p>
        <button className='border-white bg-white text-black mx-2 absolute bottom-4 rounded-xl p-2'>Order now</button>
      
      </div>
      <img className=' max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src="https://images.pexels.com/photos/808941/pexels-photo-808941.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""/>
    </div>
    
    </div>
    
  )
}

export default HeadlinesCards
