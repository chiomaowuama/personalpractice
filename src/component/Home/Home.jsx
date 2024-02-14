import React, { useState } from 'react'
import  ThemeContext  from '../../context/ThemeContext'
import { useContext } from 'react'


function Home() {
  const { Theme, darktheme, lighttheme} = useContext( ThemeContext)
  const [FirstName, setFirstName]= useState('')
  const [SecondName, setSecondName]= useState('')
  const [Fullname, setFullname ]= useState(' ')

  // console.log(FirstName)
  // console.log(SecondName)
  // console.log(Fullname)

  const Getname = (e) =>{
    e.preventDefault()
     setFullname(FirstName +" " +  SecondName)
     console.log(Fullname);
  }
  return (
    <div className='white'>
      <div className='mt-2 '>
        <h1 className='text-center py-2 font-serif text-3xl'>Testing usestate </h1>
      </div>
      
      <div className=' w-full h-96 flex justify-center items-center'>
        <form onSubmit={Getname} className='w-4/6 h-5/6 p-3  pt-2 block space-y-4 shadow-md lg:w-3/6'>
          
            <label htmlFor="" className='font-medium text-base font-serif'>Firstname</label>
            <div>
            <input
            type="text" 
            placeholder='Firstname'
            className='hover-shadow-sm  w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5'
            onChange={(e) => setFirstName(e.target.value)}
            />
            </div>
            <div>
            <label htmlFor="" className='font-medium text-base font-serif'>Secondname</label>
            </div>
            <div>
            <input type="text" 
            placeholder='Firstname'
            className='w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5'
            onChange={(e) => setSecondName(e.target.value)}
            />
            </div>          
            <button  className='border-2 border- rounded-lg px-5 py-2 shadow-md z-10 duration-300 active:translate-y-1.5 transition-transform ease-in-out  bg-green-600 text-white shrink-0' type="submit">Get Fullname</button>
            <p className='font-medium text-base font-serif'> Fullname:<span className='font-bold text-base font-serif'> {Fullname} </span>  </p>
        </form>
      </div>      
    </div>
  )
}

export default Home