import React from 'react'

function Signuptwo() {
  return (
    <>
    <div className='border-2 border-green-400 h-lvh flex justify-center'>

       <form action="" className='w-3/5  border-2  self-center '>
            <h1 className='text-2xl text-wrap font-serif font-semibold uppercase text-center text-red-400 '>my own form</h1>
            <div className='flex flex-col space-y-2 border-2'>
                <label htmlFor="">FirstName</label>
                <input type="text" className='border border-dashed border-gray-400 w-2/5' />
            </div>
            <div className='flex flex-col space-y-2 border-2'>
                <label htmlFor="">SecondName</label>
                <input type="text" className='border border-dashed border-gray-400 w-2/5' />
            </div>
            <div className='flex flex-col space-y-2 border-2'>
                <label htmlFor="">Email</label>
                <input type="email" className='border border-dashed border-gray-400 w-2/5' />
            </div>
            <div className='flex flex-col space-y-2 border-2'>
                <label htmlFor="">PhoneNo</label>
                <input type="tel" className='border border-dashed border-gray-400 w-2/5' />
            </div>
       
       </form>
    </div>
    </>
  )
}

export default Signuptwo