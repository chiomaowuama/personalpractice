import React from 'react'
import { useForm } from 'react-hook-form'
import { DevTool } from '@hookform/devtools'
// import { Devtool } from '@hookform/devtools'

function Signup() {
    const Form = useForm()
    const { register, control,handleSubmit,formState} = Form
    const{ error } = formState

     const allSubmit = (data) =>{
        
        console.log("working")
     }
  return (
    <>
    <div>
        <form action="" onSubmit={handleSubmit(allSubmit)} noValidate className='flex flex-col justify-center items-center border-2 border-yellow-900 h-screen '>
            <div className='flex flex-col w-4/6 lg:w-2/6 space-y-2  border-2 border-green-900 shadow-xl shadow-slate-400 p-3' >
                <p>Form Submission</p>
                <label htmlFor=''>Username</label>
                <input type='text' id='text' {...register("username", {message:"invalid username format", required:"field required"})} className=' border border-black'/>
                <label htmlFor="password">Password</label>
                <input type="text" name="" id="password" {...register("password", {required:"field required"})}  className=' border border-black' />
                <label htmlFor="email">Email</label>
                <input type="email" name="" id="email" {...register("email", {required:"field required"})}   className=' border border-black'/>
                <label htmlFor="Phone">Phone No</label>
                <input type="tel" name="" min={10} max={11} id="phone" {...register("phone", {required:"field required"})}  className=' border border-black'/>
            <button type="submit" className='border-2 border-green-700 w-3/5 self-center'>Submit</button>
            </div>
            <DevTool control={control}/>
        </form>
       
    </div>
    
    
    </>
  )
}

export default Signup