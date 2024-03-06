import React from 'react'
import { useForm } from 'react-hook-form'

function Signuptwo() {
    const form = useForm()
    const {register} = form
   
  return (
    <>
    <div className='allbg  h-lvh flex justify-center'>

       <form action="" className=' px-2 pb-8 bg-green-800 w-3/6 self-center text-white'>
            <h1 className='text-2xl text-wrap font-serif font-semibold uppercase text-center text-red-400 '>my own form</h1>
            <div className='flex flex-col space-y-3 mb-2'>
                <label htmlFor="">FirstName</label>
                <input type="text" id="firstname" {...register('firstname')} className='border border-dashed border-gray-400 w-2/5' />
            </div>
            <div className='flex flex-col space-y-3  mb-2'>
                <label htmlFor="">SecondName</label>
                <input type="text" id="Secondname" {...register('secondname')}  className='border border-dashed border-gray-400 w-2/5' />
            </div>
            <div className='flex flex-col space-y-2  mb-2'>
                <label htmlFor="">Email</label>
                <input type="email" id="Email" {...register('email')} className='border border-dashed border-gray-400 w-2/5' />
            </div>
            <div className='flex flex-col space-y-2  mb-2'>
                <label htmlFor="">PhoneNo</label>
                <input type="tel" id="Email" {...register('email')} className='border border-dashed border-gray-400 w-2/5' />
            </div>
       
       </form>
    </div>
    </>
  )
}

export default Signuptwo