import React from 'react'

const Hero = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4'>
        <div className='max-h-[500px] relative'>
            <div  className='absolute w-full h-full  max-h-[500px] bg-black/40 text-bold text-white flex flex-col justify-center'>
                <h1  className=' px-4 text-3xl md:text-4xl sm:text-3xl lg:text-5xl font-bold'>The <span className='font-bold text-orange-500'>Best</span></h1>
                <h1 className=' px-4 text-3xl md:text-4xl sm:text-3xl lg:text-5xl font-bold'>Food <span className='font-bold text-orange-500' >Delivered</span></h1>
            </div>
            <img className='w-full max-h-[500px] object-cover' src="https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=600"alt=""/>
        </div>
      
    </div>
  )
}

export default Hero
