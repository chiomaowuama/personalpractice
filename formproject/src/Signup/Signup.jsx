import React from 'react'

function Signup() {
  return (
    <>
    <div>
        <form action="" className='flex flex-col justify-center items-center border-2 border-yellow-900 h-screen '>
            <div className='flex flex-col w-4/6  space-y-2  border-2 border-green-900 shadow-xl shadow-slate-400 p-3' >
                <p>Form Submission</p>
                <label htmlFor=''>Username</label>
                <input type='text' className=' border border-black'/>
                <label htmlFor="password">Password</label>
                <input type="text" name="" id="" className=' border border-black' />
                <label htmlFor="email">Email</label>
                <input type="email" name="" id=""  className=' border border-black'/>
                <label htmlFor="Phone">Phone No</label>
                <input type="tel" name="" min={10} max={11} id="" className=' border border-black'/>
            <button type="submit" className='border-2 border-green-700 w-3/5 self-center'>Submit</button>
            </div>
        </form>
       
    </div>
    
    
    </>
  )
}

export default Signup